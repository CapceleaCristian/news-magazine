import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { SyntheticEvent } from "react";
import { Icon } from "../../App.styles";
import { BookmarkFullfiled, BookmarkOutlined, RightArrow } from "../../icons";
import { INews } from "../../models/news";
import { getFormatedDate } from "../../shared/helpers";
import {
  LatestBookmarkOutlinedWrapper,
  LatestDate,
  LatestFooter,
  LatestHeadline,
  LatestRelated,
  LatestResearch,
  LatestResearchCardWrapper,
  LatestSource,
  LatestSummary,
  ReadTheResearchText,
} from "./latest-research-card.styles";

interface Props {
  news: INews;
  onBookmark: (e: SyntheticEvent) => void;
  isInBookmark: boolean;
}

export function LatestResearchCard({ news, onBookmark, isInBookmark }: Props) {
  const { xs } = useBreakpoint();
  const latestDate = getFormatedDate(news?.datetime);
  const openLink = () => window.open(news?.url, "_blank");
  return (
    <LatestResearchCardWrapper
      {...(news?.image && { backgroundImage: `url(${news.image})` })}
    >
      <LatestRelated>{news?.related}</LatestRelated>
      <LatestResearch>Latest Research</LatestResearch>
      <LatestHeadline>{news?.headline}</LatestHeadline>
      <LatestSummary>{news?.summary}</LatestSummary>
      <LatestFooter>
        <RightArrow onClick={openLink} />
        {!xs ? (
          <ReadTheResearchText onClick={openLink}>
            Read the research
          </ReadTheResearchText>
        ) : null}
        <LatestSource>{news?.source}</LatestSource>
        <LatestDate>{latestDate}</LatestDate>
        <LatestBookmarkOutlinedWrapper>
          <Icon onClick={onBookmark}>
            {isInBookmark ? <BookmarkFullfiled /> : <BookmarkOutlined />}
          </Icon>
        </LatestBookmarkOutlinedWrapper>
      </LatestFooter>
    </LatestResearchCardWrapper>
  );
}
