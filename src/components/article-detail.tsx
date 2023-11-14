import { Action, ActionPanel, Detail } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import * as bytemd from "bytemd";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { useMemo } from "react";
import { BASE_API_URL, BASE_URL, MARKDOWN_PLUGINS } from "../config";
import { Article, ArticleData } from "../types";
import { sanitizeMarkdown } from "../utils";

interface Props {
  article: Article;
}

export const ArticleDetail = ({ article }: Props) => {
  const { isLoading, data: detail } = useFetch<ArticleData>(
    `${BASE_API_URL}/contents/${article.owner_username}/${article.slug}`
  );

  const markdown = useMemo(() => {
    try {
      const unifiedMarkdown = bytemd
        .getProcessor({ sanitize: sanitizeMarkdown, plugins: MARKDOWN_PLUGINS })
        .processSync(detail?.body);
      return NodeHtmlMarkdown.translate(`<h1>${article.title}</h1> ${unifiedMarkdown.toString()}`);
    } catch (err) {
      console.error(err);
    }
  }, [detail?.body, sanitizeMarkdown, MARKDOWN_PLUGINS]);

  const articleUrl = `${BASE_URL}/${article.owner_username}/${article.slug}`;

  return (
    <Detail
      navigationTitle={article.title}
      markdown={`# ${article.title} ${markdown}`}
      isLoading={isLoading}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy Article URL" content={articleUrl} />
          <Action.OpenInBrowser url={articleUrl} />
        </ActionPanel>
      }
    />
  );
};
