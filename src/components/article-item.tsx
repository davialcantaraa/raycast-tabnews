import { Icon, List } from "@raycast/api";
import { Article } from "../types";
import { getIcon } from "../utils";
import { ArticleActions } from "./article-actions";

interface Props {
  article: Article;
  index: number;
}

export const ArticleItem = ({ article, index }: Props) => {
  return (
    <List.Item
      title={article.title}
      icon={getIcon(index + 1)}
      actions={<ArticleActions article={article} />}
      accessories={[
        {
          text: article.tabcoins.toString(),
          icon: Icon.Coins,
          tooltip: "Tabcoins",
        },
        {
          date: new Date(article.published_at),
        },
      ]}
    />
  );
};
