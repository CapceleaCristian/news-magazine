import { INews, INewsWithPagination } from "../models/news";

export function getFormatedDate(date: number): string {
  return new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

export function splitNewsWithPagination(
  news: INews[] = [],
  search: string = ""
): {
  totalNews: number;
  news: INewsWithPagination[];
  latestNews: INews;
} {
  const _news = news.filter(
    (news) =>
      news.headline.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      news.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const newsWithPagination = [];
  let page = 1;
  for (let i = 0; i < news.length; i += 6) {
    newsWithPagination.push({ page, news: _news.slice(i, i + 6) });
    page++;
  }
  return {
    totalNews: _news.length,
    news: newsWithPagination,
    latestNews: news[10],
  };
}
