import { List, Toast, showToast } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import crypto from "node:crypto";
import { useState } from "react";
import { ArticleItem } from "./components/article-item";
import { CategoryDropdown } from "./components/category-dropdown";
import { BASE_API_URL, CATEGORIES, DEFAULT_CATEGORY } from "./config";
import { Article } from "./types";

export default function Command() {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  const { isLoading, data: articles } = useFetch<Article[]>(`${BASE_API_URL}/${category}`, {
    onError: (error) => {
      showToast({
        title: "Something went wrong",
        style: Toast.Style.Failure,
        message: error.message,
      });
    },
  });

  return (
    <List
      navigationTitle="Search for articles..."
      searchBarPlaceholder="Search for some article"
      isLoading={isLoading}
      searchBarAccessory={<CategoryDropdown categories={CATEGORIES} onCategoryChange={setCategory} />}
    >
      {articles?.map((article, index) => (
        <ArticleItem key={crypto.randomUUID()} article={article} index={index} />
      ))}
    </List>
  );
}
