import express from "express";
import { PrismaClient } from "@prisma/client";
import { main } from "../server";
import { User } from "../types/types";

const prisma = new PrismaClient();

export const getUsers = async (req: express.Request, res: express.Response) => {
  main();
  const users = await prisma.user.findMany();
  res.send(JSON.stringify(users));
};

export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  const reqUser: User = req.body;

  main();
  const user: User = await prisma.user.create({
    data: {
      name: reqUser.name,
    },
  });
  res.send(JSON.stringify(user));
};
