import express from "express";
import { PrismaClient } from "@prisma/client";
import { main } from "../server";
import { Post } from "../types/types";

const prisma = new PrismaClient();

// ポスト投稿
export const createPost = async (
  req: express.Request,
  res: express.Response
) => {
  const reqPost: Post = req.body;

  main();
  const post = await prisma.post.create({
    data: {
      title: reqPost.title,
      message: reqPost.message,
      authorId: reqPost.authorId,
    },
  });

  res.send(JSON.stringify(post));
};

// 全ポスト取得
export const getPosts = async (req: express.Request, res: express.Response) => {
  main();
  const posts: Post[] = await prisma.post.findMany();
  res.send(JSON.stringify(posts));
};

// ポスト修正
export const putPost = async (req: express.Request, res: express.Response) => {
  main();
  const reqPost: Post = req.body;
  const post = await prisma.post.update({
    where: {
      id: reqPost.id,
    },
    data: {
      title: reqPost.title,
      message: reqPost.message,
    },
  });
  res.send(JSON.stringify(post));
};
