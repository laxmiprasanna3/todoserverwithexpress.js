const express=require("express");

const app=express();

app.use(express.json());
const port=8081;

const todolist=["Hey","Hello","how","are","you!!"];

app.get("/todos",(req,res)=>{
    res.status(200).send(todolist)
})

app.post("/todos",(req,res)=>{
    let newItem =req.body.item;
    todolist.push(newItem);
    res.status(201).send({
        message: "The task was added successfully"
    })
})

app.delete("/todos",(req,res)=>{
    var itemdel =req.body.item;

    todolist.find((elem,index)=>{
        if(elem===itemdel){
            todolist.splice(index,1);
        }
    });
    res.status(204).send({
        message: `Deleted item ${req.body.item}`
    })
})

app.all("/todos",(req,res)=>{
    res.status(501).send({
        message:"Not yet Implemented"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        message:"Default url"
    })
})

app.listen(port,()=>{
    console.log(`Nodejs with express started running successfully on port ${port}`)
})