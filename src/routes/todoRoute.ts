import express from "express"
import { createTodo, getTodo, updateTodo, deleteTodo } from "../controller/todoController"
const userRouter = express.Router()

userRouter.post("/create", createTodo)
userRouter.get("/get", getTodo)
userRouter.patch("/updatTodo", updateTodo)
userRouter.delete("/deleteTodo", deleteTodo)

export default userRouter