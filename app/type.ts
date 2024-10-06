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

export interface TypeComment {
  id: number;
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string
  }
}

export interface TypeComments {
  comments: TypeComment[];
  skip: number;
  total: number;
  limit: number
}
