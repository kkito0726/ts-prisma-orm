import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./controller/userController";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  putPost,
} from "./controller/postController";

const prisma = new PrismaClient();
const app: express.Express = express();
const PORT: number = 8081;
app.listen(PORT, () => {
  console.log("サーバーが起動中・・・🚀");
});

app.use(express.json());

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("DB接続に失敗しました");
  }
};

app.get("/", (req: express.Request, res: express.Response) => {
  main();
  res.send(
    JSON.stringify({
      status: 200,
      message: "Hello ts-express server!!",
    })
  );
});

// ユーザー
app.get("/users", getUsers);
app.get("/user", getUser);
app.post("/user", createUser);
app.put("/user", updateUser);
app.delete("/user", deleteUser);

// ポスト
app.get("/posts", getPosts);
app.get("/post", getPost);
app.post("/post", createPost);
app.put("/post", putPost);
app.delete("/post", deletePost);
