export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number; };
  views: number;
  userId: number;
}

export interface TypePost {
  posts: Post[];
  total: number
  skip: number
  limit: number
}
