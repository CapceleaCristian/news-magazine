import { Col } from "antd";
import { SyntheticEvent } from "react";
import { Icon } from "../../App.styles";
import { BookmarkFullfiled, BookmarkOutlined } from "../../icons";
import { INews } from "../../models/news";
import { getFormatedDate } from "../../shared/helpers";
import {
  CardWrapper,
  NewsBookmarkWrapper,
  NewsDate,
  NewsFooter,
  NewsHeadline,
  NewsRelated,
  NewsSource,
  NewsSummary,
} from "./news-card.styles";

export interface Props {
  news: INews;
  onBookmark: (e: SyntheticEvent) => void;
  isInBookmark: boolean;
}

export function NewsCard({ news, onBookmark, isInBookmark }: Props) {
  const newsDate = getFormatedDate(news.datetime);
  return (
    <Col
      onClick={(e) => {
        window.open(news?.url, "_blank");
      }}
      key={news.id}
      span={24}
      lg={12}
      xl={8}
    >
      <CardWrapper backgroundImage={`url(${news.image})`}>
        <NewsRelated>{news.related}</NewsRelated>
        <NewsHeadline>{news.headline}</NewsHeadline>
        <NewsSummary>{news.summary}</NewsSummary>
        <NewsFooter>
          <NewsSource>{news.source}</NewsSource>
          <NewsDate>{newsDate}</NewsDate>
          <NewsBookmarkWrapper>
            <Icon onClick={onBookmark}>
              {isInBookmark ? <BookmarkFullfiled /> : <BookmarkOutlined />}
            </Icon>
          </NewsBookmarkWrapper>
        </NewsFooter>
      </CardWrapper>
    </Col>
  );
}
