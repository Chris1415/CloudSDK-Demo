export interface SearchResultElement extends StandardSearchResultElement {
  description: string;
  image_url: string;
  name: string;
  source_id: string;
  title: string;
  url: string;
}

export interface StandardSearchResultElement {
  id: string;
  type: string;
}

export interface SearchResult<T> {
  rfk_id: string;
  type: string;
  used_in: string;
  entity: string;
  suggestion: {
    [key: string]: Array<{
      text: string;
      freq: number;
    }>;
  };
  content: T[];
}
