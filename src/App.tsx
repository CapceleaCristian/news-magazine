import { useEffect, useState } from "react";
import {
  addNewsToBookMark,
  getAllNewsRequest,
} from "./redux-toolkit/slices/news.slice";
import { useAppDispatch, useAppSelector } from "./redux-toolkit/store";
import { Col, Row } from "antd";
import { NewsCard } from "./components/news-card/news-card";
import { LatestResearchCard } from "./components/latest-research-card/latest-research-cart";
import { Pagination } from "./components/pagination/pagination";
import { splitNewsWithPagination } from "./shared/helpers";
import {
  AppWrapper,
  Header,
  Input,
  InputWrapper,
  LoadingText,
  NoBookmarsText,
  PageSwitcherLink,
  PageSwitcherWrapper,
} from "./App.styles";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

export function App() {
  const dispatch = useAppDispatch();
  const { loading, data, bookmark } = useAppSelector((s) => s.news);
  const { xs } = useBreakpoint();

  const [currentPage, setCurrentPage] = useState<"news" | "bookmarks">("news");
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const n = splitNewsWithPagination(data, search);
  const b = splitNewsWithPagination(bookmark, search);

  useEffect(() => {
    if (currentPage === "bookmarks" && bookmark.length && !b.news[page - 1]) {
      setPage((prev) => prev - 1);
    }
  }, [b.news, bookmark, currentPage, page]);

  useEffect(() => {
    dispatch(getAllNewsRequest());
  }, [dispatch]);

  return (
    <AppWrapper>
      {loading === "pending" ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <Header {...(xs && { flexDirection: "column" })}>
            <PageSwitcherWrapper>
              <PageSwitcherLink
                {...((currentPage as "bookmarks") === "bookmarks" && {
                  opacity: 0.5,
                })}
                onClick={() => {
                  setCurrentPage("news");
                  setPage(1);
                  setSearch("");
                }}
              >
                News
              </PageSwitcherLink>
              <PageSwitcherLink
                {...((currentPage as "news") === "news" && { opacity: 0.5 })}
                onClick={() => {
                  setCurrentPage("bookmarks");
                  setPage(1);
                  setSearch("");
                }}
              >
                Bookmarks
              </PageSwitcherLink>
            </PageSwitcherWrapper>
            <InputWrapper {...(xs && { marginBottom: "25px" })}>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setSearch(value);
                }}
                value={search}
                {...(xs && { width: "100%" })}
              />
            </InputWrapper>
          </Header>
          <div>
            <Row gutter={[24, 24]}>
              <Col span={24} md={12} lg={9}>
                <LatestResearchCard
                  isInBookmark={
                    !!bookmark.find((bm) => bm.id === n.latestNews.id)
                  }
                  onBookmark={(e) => {
                    e.stopPropagation();
                    dispatch(addNewsToBookMark(n.latestNews));
                  }}
                  news={n.latestNews}
                />
              </Col>
              {currentPage === "news" ? (
                <Col span={24} md={12} lg={15}>
                  <Row gutter={[18, 18]}>
                    {(n.news.length ? n.news[page - 1].news : []).map(
                      (news) => (
                        <NewsCard
                          isInBookmark={
                            !!bookmark.find((bm) => bm.id === news.id)
                          }
                          onBookmark={(e) => {
                            e.stopPropagation();
                            dispatch(addNewsToBookMark(news));
                          }}
                          key={news.id}
                          news={news}
                        />
                      )
                    )}
                  </Row>
                  <Row>
                    <Col span={24}>
                      {console.log()}
                      <Pagination
                        isDisabledPrevious={page <= 1}
                        isDisabledNext={page >= n.news.length}
                        onPrev={() => setPage((p) => p - 1)}
                        onNext={() => setPage((p) => p + 1)}
                        interval={`${n.totalNews ? page * 6 - 5 : 0} - ${
                          page * 6 + n?.news?.[page - 1]?.news?.length - 6
                        }`}
                        totalNews={n.totalNews}
                      />
                    </Col>
                  </Row>
                </Col>
              ) : (
                <Col span={24} md={12} lg={15}>
                  {b.news.length && b.news[page - 1] ? (
                    <>
                      <Row gutter={[18, 18]}>
                        {b.news[page - 1].news.map((news) => (
                          <NewsCard
                            isInBookmark={
                              !!bookmark.find((bm) => bm.id === news.id)
                            }
                            onBookmark={(e) => {
                              e.stopPropagation();
                              dispatch(addNewsToBookMark(news));
                            }}
                            key={news.id}
                            news={news}
                          />
                        ))}
                      </Row>
                      <Row>
                        <Col span={24}>
                          <Pagination
                            isDisabledPrevious={page <= 1}
                            isDisabledNext={page >= b.news.length}
                            onPrev={() => setPage((p) => p - 1)}
                            onNext={() => setPage((p) => p + 1)}
                            interval={`${page * 6 - 5} - ${page * 6}`}
                            totalNews={b.totalNews}
                          />
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <NoBookmarsText>No bookmarks...</NoBookmarsText>
                  )}
                </Col>
              )}
            </Row>
          </div>
        </>
      )}
    </AppWrapper>
  );
}
