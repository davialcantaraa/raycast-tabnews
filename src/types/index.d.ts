export interface Article {
  id: string;
  owner_id: string;
  parent_id: null;
  slug: string;
  title: string;
  status: string;
  source_url: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: null;
  tabcoins: number;
  owner_username: string;
  children_deep_count: number;
}

export interface ArticleData extends Article {
  body: string;
  title: string;
}
