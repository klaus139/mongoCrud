import {Request, Response} from "express"
import Todo from "../model/todoModel"

export const getTodo = async(req:Request, res:Response) => {
    try{
        const todo = await Todo.find()
         res.status(200).json({todo})
    }catch(err){
        return res.status(500).json({
            message: "internal server error",
            route:"/todo/get"
        })
    }
}



export const createTodo = async(req:Request, res:Response) => {
    try{
       
        const {description, status} = req.body
    
        const todo = await Todo.find()
        if(todo) {
           const todos = await Todo.create({
            description,
            status
           })
           return res.status(201).json({
            status:"successfully created",
            data: todos
           })
        }
        return res.status(400).json({
            todo
        })

    }catch(error) {
        return res.status(500).json({
            Error:"internal Server Error",
            route: "/todo/create"
        })
    }
}

export const updateTodo = async (req:Request, res:Response) => {
    try{
        const {description, status} = req.body
        const todo = await Todo.findOne(status)

        if(todo) {
            const todo = await Todo.updateOne({status}, {description, status})
            res.status(200).json({
                message:"updated successfully"
            })
        }

    }catch(error){
        return res.status(500).json({
            Error: "internal server error",
            route: "/todo/updateTodo"
        })
    }
}

export const deleteTodo = async (req:Request, res:Response) => {
    try{
        const {status} = req.body
        const todo = await Todo.findOne({status})
        if(todo) {
            const todo = await Todo.deleteOne({status})
            return res.status(200).json({
                message:"deleted successfully"
            })
        }
        return res.status(400).json({
            message:"todo not found"
        })
        
    } catch (err) {
        return res.status(500).json({
            Error:"internal server error",
            route:"/todo/deleteTodo"
        })
    }
}