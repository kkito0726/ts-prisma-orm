"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const userController_1 = require("./controller/userController");
const postController_1 = require("./controller/postController");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = 8081;
app.listen(PORT, () => {
    console.log("サーバーが起動中・・・🚀");
});
app.use(express_1.default.json());
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$connect();
    }
    catch (err) {
        return Error("DB接続に失敗しました");
    }
});
exports.main = main;
app.get("/", (req, res) => {
    (0, exports.main)();
    res.send(JSON.stringify({
        status: 200,
        message: "Hello ts-express server!!",
    }));
});
// ユーザー
app.get("/users", userController_1.getUsers);
app.get("/user", userController_1.getUser);
app.post("/user", userController_1.createUser);
app.put("/user", userController_1.updateUser);
app.delete("/user", userController_1.deleteUser);
// ポスト
app.get("/posts", postController_1.getPosts);
app.get("/post", postController_1.getPost);
app.post("/post", postController_1.createPost);
app.put("/post", postController_1.putPost);
app.delete("/post", postController_1.deletePost);
