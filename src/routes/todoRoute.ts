import express from "express"
import { createTodo, getTodo, updateTodo } from "../controller/todoController"
const userRouter = express.Router()

userRouter.post("/create", createTodo)
userRouter.get("/get", getTodo)
userRouter.patch("/updatTodo", updateTodo)

export default userRouter