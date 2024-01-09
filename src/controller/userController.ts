import express from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "../types/types";

const prisma = new PrismaClient();

// ユーザーを全員取得
export const getUsers = async (req: express.Request, res: express.Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// ユーザー取得
export const getUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  res.json(user);
};

// ユーザー登録
export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  const reqUser: User = req.body;

  const user: User = await prisma.user.create({
    data: {
      name: reqUser.name,
    },
  });
  res.json(user);
};

// ユーザー更新
export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  const newUser: User = req.body;
  const updatedUser: User = await prisma.user.update({
    where: {
      id: newUser.id,
    },
    data: {
      name: newUser.name,
    },
  });
  res.json(updatedUser);
};

// ユーザー削除
export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.body;
  const deletedUser = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.json(deletedUser);
};
