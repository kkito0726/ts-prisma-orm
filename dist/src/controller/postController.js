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
exports.deletePost = exports.putPost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 全ポスト取得
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma.post.findMany();
    res.json(posts);
});
exports.getPosts = getPosts;
// ポスト取得
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const post = yield prisma.post.findUnique({
        where: {
            id,
        },
    });
    res.json(post);
});
exports.getPost = getPost;
// ポスト投稿
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqPost = req.body;
    const post = yield prisma.post.create({
        data: {
            title: reqPost.title,
            message: reqPost.message,
            authorId: reqPost.authorId,
        },
    });
    res.json(post);
});
exports.createPost = createPost;
// ポスト修正
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    const post = yield prisma.post.update({
        where: {
            id: newPost.id,
        },
        data: {
            title: newPost.title,
            message: newPost.message,
        },
    });
    res.json(post);
});
exports.putPost = putPost;
// ポスト削除
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedPost = yield prisma.post.delete({
        where: {
            id,
        },
    });
    res.json(deletedPost);
});
exports.deletePost = deletePost;
