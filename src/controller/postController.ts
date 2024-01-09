import express from "express";
import { PrismaClient } from "@prisma/client";
import { Post } from "../types/types";

const prisma = new PrismaClient();

// 全ポスト取得
export const getPosts = async (req: express.Request, res: express.Response) => {
  const posts: Post[] = await prisma.post.findMany();
  res.json(posts);
};

// ポスト取得
export const getPost = async (req: express.Request, res: express.Response) => {
  const { id } = req.body;
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  res.json(post);
};

// ポスト投稿
export const createPost = async (
  req: express.Request,
  res: express.Response
) => {
  const reqPost: Post = req.body;

  const post = await prisma.post.create({
    data: {
      title: reqPost.title,
      message: reqPost.message,
      authorId: reqPost.authorId,
    },
  });

  res.json(post);
};

// ポスト修正
export const putPost = async (req: express.Request, res: express.Response) => {
  const newPost: Post = req.body;
  const post = await prisma.post.update({
    where: {
      id: newPost.id,
    },
    data: {
      title: newPost.title,
      message: newPost.message,
    },
  });
  res.json(post);
};

// ポスト削除
export const deletePost = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.body;
  const deletedPost = await prisma.post.delete({
    where: {
      id,
    },
  });
  res.json(deletedPost);
};
