import express from "express";
import { PrismaClient } from "@prisma/client";
import { createUser, getUsers } from "./controller/userController";
import { createPost, getPosts, putPost } from "./controller/postController";

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

// ユーザーを全員取得
app.get("/users", getUsers);

// ユーザー登録
app.post("/user", createUser);

// ポスト投稿
app.post("/post", createPost);

// 全ポスト取得
app.get("/posts", getPosts);

// ポスト修正
app.put("/post", putPost);
