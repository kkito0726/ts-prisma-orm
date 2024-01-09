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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPost = exports.getPosts = exports.createPost = void 0;
const client_1 = require("@prisma/client");
const server_1 = require("../server");
const prisma = new client_1.PrismaClient();
// ポスト投稿
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqPost = req.body;
    (0, server_1.main)();
    const post = yield prisma.post.create({
        data: {
            title: reqPost.title,
            message: reqPost.message,
            authorId: reqPost.authorId,
        },
    });
    res.send(JSON.stringify(post));
});
exports.createPost = createPost;
// 全ポスト取得
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, server_1.main)();
    const posts = yield prisma.post.findMany();
    res.send(JSON.stringify(posts));
});
exports.getPosts = getPosts;
// ポスト修正
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, server_1.main)();
    const reqPost = req.body;
    const post = yield prisma.post.update({
        where: {
            id: reqPost.id,
        },
        data: {
            title: reqPost.title,
            message: reqPost.message,
        },
    });
    res.send(JSON.stringify(post));
});
exports.putPost = putPost;
