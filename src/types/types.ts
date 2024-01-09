export type User = {
  id: number;
  name: string;
  createdAt: Date;
};

export type Post = {
  id: number;
  title: string;
  message: string;
  authorId: number;
  createdAt: Date;
};
