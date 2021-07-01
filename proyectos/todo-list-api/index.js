import Express from 'express'
import Bd from './bd.js'
import cors from 'cors'

//Settings
const PORT = 5000
const app = Express()

app.use(cors())
app.use(Express.json())

app.get("/", (request, response)=>{
    if(request.query.completed == "false"){
        const bdFalse = Bd.filter((todo)=> todo.completed == false)
        response.send(bdFalse)
    } else if(request.query.completed == "true"){
        const bdTrue = Bd.filter((todo)=> todo.completed == true)
        response.send(bdTrue)
    } else {
        response.send(Bd)
    }
})

app.get("/:id",(request, response)=>{
    const idSolicitado = parseInt(request.params.id)

    const todoSolicitado = Bd.find((todo)=>todo.id == idSolicitado)
    if(!todoSolicitado){
        response.status(404).json({
            "statusCode": 404,
            "message": "El id solicitado no existe"
        })
    }
    response.send(todoSolicitado)
})

app.post("/add", (request, response)=>{
    //Validamos campos obligatorios
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    console.log(request.body)

    if(isEmpty(request.body)){
        response.status(400).json({"message":"Debes enviar un body."})
    }
    if(request.body.title == "" || request.body.responsable == ""){
        response.status(400).json({"message":"Debes ingresar obligatoriamente title y responsable."})
    }

    let minIdPossible = 0
    for(let i = 0; i< Bd.length; i++){
        const comparator = i+1
        if(comparator==Bd.length){
            minIdPossible = Bd.length+1
        }
        if(comparator!=Bd[i].id){
            minIdPossible = comparator
            break
        }
    }
    const title = request.body.title
    const responsable = request.body.responsable
    
    let deadline = request.body.deadline

    if (!deadline) {
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if (month < 10) {
            deadline = `${day}-0${month}-${year}`
        } else {
            deadline = `${day}-${month}-${year}`
        }
    }

    const urgency = !request.body.urgency ? "low" : request.body.urgency
    const completed = false


    Bd.push({
        "id": minIdPossible,
        "title": title, 
        "responsable": responsable,
        "deadline": deadline, 
        "urgency": urgency, 
        "completed": completed
    })

    response.status(201).json({"message":"La tarea fue creada satisfactoriamente."})
})

app.put("/update/:id",(request, response)=>{
    const idSolicitado = parseInt(request.params.id)
    
    const todoSolicitado = Bd.find((todo)=>todo.id == idSolicitado)

    if(!todoSolicitado){
        response.status(404).json({
            "statusCode": 404,
            "message": "El id solicitado no existe"
        })
    }

    todoSolicitado.completed = true

    console.log({todoSolicitado})

    const indexTodoSolicitado = Bd.indexOf(todoSolicitado)
    Bd.splice(indexTodoSolicitado, 1, todoSolicitado)

    response.status(202).json({"message":"La tarea ha sido finalizada."})
})

app.delete("/:id",(request, response)=>{
    const idSolicitado = parseInt(request.params.id)
    
    const todoSolicitado = Bd.find((todo)=>todo.id == idSolicitado)

    if(!todoSolicitado){
        response.status(404).json({
            "statusCode": 404,
            "message": "El id solicitado no existe"
        })
    }

    console.log({todoSolicitado})

    const indexTodoSolicitado = Bd.indexOf(todoSolicitado)
    Bd.splice(indexTodoSolicitado, 1)

    response.status(202).json({"message":"La tarea ha sido eliminada."})
})

app.listen(PORT,()=>console.log("ESCUCHANDO EL PUERTO "+PORT))
