import { Action, ActionPanel, useNavigation } from "@raycast/api";
import { BASE_URL } from "../config";
import { Article } from "../types";
import { ArticleDetail } from "./article-detail";

interface Props {
  article: Article;
}

export const ArticleActions = ({ article }: Props) => {
  const { push } = useNavigation();

  const articleUrl = `${BASE_URL}/${article.owner_username}/${article.slug}`;

  return (
    <ActionPanel>
      <ActionPanel.Section>
        <Action title="Read Article" onAction={() => push(<ArticleDetail article={article} />)} />
        <Action.OpenInBrowser url={articleUrl} />
        <Action.CopyToClipboard content={articleUrl} title="Copy Article URL" />
      </ActionPanel.Section>
    </ActionPanel>
  );
};
