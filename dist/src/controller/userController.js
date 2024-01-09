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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// ユーザーを全員取得
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
});
exports.getUsers = getUsers;
// ユーザー取得
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const user = yield prisma.user.findUnique({
        where: {
            id,
        },
    });
    res.json(user);
});
exports.getUser = getUser;
// ユーザー登録
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqUser = req.body;
    const user = yield prisma.user.create({
        data: {
            name: reqUser.name,
        },
    });
    res.json(user);
});
exports.createUser = createUser;
// ユーザー更新
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    const updatedUser = yield prisma.user.update({
        where: {
            id: newUser.id,
        },
        data: {
            name: newUser.name,
        },
    });
    res.json(updatedUser);
});
exports.updateUser = updateUser;
// ユーザー削除
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const deletedUser = yield prisma.user.delete({
        where: {
            id,
        },
    });
    res.json(deletedUser);
});
exports.deleteUser = deleteUser;
