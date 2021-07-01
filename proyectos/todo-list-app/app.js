//OBJETOS
//Tarea
function Tarea(id, nombre, responsable, deadline, urgencia) {
    this.id = id;
    this.nombre = nombre;
    this.responsable = responsable;
    this.deadline = deadline;
    this.urgencia = urgencia;
}
//User Interface
function UI() {
    this.agregarTarea = function (tarea, objetivo, tipo) {
        const elementoTarea = document.createElement("div")
        let color;

        if (tarea.urgencia === "high") {
            color = "danger"
        } else if (tarea.urgencia === "medium") {
            color = "warning"
        } else {
            color = "success"
        }

        let colorBoton = "success"
        let nameBoton = "finalize"
        if (tipo === "Eliminar") {
            colorBoton = "danger"
            nameBoton = "delete"
        }

        elementoTarea.innerHTML = `
            <div class="card mb-3">
                <div class="card-header">           
                    <h3>${tarea.nombre}</h3>
                    <div class="btn-${color}" style="border-radius: 50%; width:10px; height:10px;"></div>
                    <p style="display: none">Id: ${tarea.id}</p>
                </div>
                <div class="card-body">
                    <p>Responsable ${tarea.responsable}</p>
                    <p>Fecha límite: ${tarea.deadline}</p>
                    <button name="${nameBoton}" class="btn btn-${colorBoton} btn-block">${tipo}</button>
                </div>
            </div>`

        objetivo.prepend(elementoTarea)
    };
    this.finalizarTarea = function (botonObjetivo, id) {
        const cardHeader = botonObjetivo.parentElement.parentElement.getElementsByClassName("card-header")[0]
        const titulo = cardHeader.getElementsByTagName("h3")[0].innerText
        let classCirculo = cardHeader.getElementsByTagName("div")[0].className

        const cardBody = botonObjetivo.parentElement.parentElement.getElementsByClassName("card-body")[0]
        let responsable = cardBody.getElementsByTagName("p")[0].innerText
        let deadline = cardBody.getElementsByTagName("p")[1].innerText

        classCirculo = classCirculo.split("-")[1]
        responsable = responsable.split(" ")[1]
        deadline = deadline.split(" ")[2]

        if (classCirculo === "danger") {
            classCirculo = "high"
        } else if (classCirculo === "warning") {
            classCirculo = "medium"
        } else {
            classCirculo = "low"
        }

        const tarea = new Tarea(id, titulo, responsable, deadline, classCirculo)

        console.log(tarea)
        const objetivo = document.getElementById("task-card-list-done")
        this.agregarTarea(tarea, objetivo, "Eliminar")
    };
    this.eliminarTarea = function (botonObjetivo) {
        //HACE ALGO
        botonObjetivo.parentElement.parentElement.remove()
    }
    this.resetForm = function () {
        document.getElementById("task-form").reset()
    }
}

//DOM EVENTS => Document Object Model Events
document.getElementById("task-card-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        //Crear la tarea
        const nombre = document.getElementById("name").value
        const responsable = document.getElementById("responsable").value
        const deadline = document.getElementById("deadline").value
        const urgencia = document.getElementById("urgency").value

        if (nombre === "" || responsable === "" || deadline === "") {
            alert("Debes completar todos los campos")
        } else {
            const tarea = new Tarea(nombre, responsable, deadline, urgencia)

            const ui = new UI()
            const listaDeTareas = document.getElementById("task-card-list")
            /*const body = {
                title: tarea.nombre,
                responsable: tarea.responsable,
                deadline: tarea.deadline,
                urgency: tarea.urgencia
            }*/
            //HACER UN POST EN LA API (http://localhost:5000/add) + body
           // postTodo(url, body).then((res)=>{
            //    console.log(res.status)
            //    if(res.status<400){
                    ui.agregarTarea(tarea, listaDeTareas, "Finalizar")
                    ui.resetForm()
            //    } else {
            //        alert("Ha ocurrido un error :(")
            //    }
            //})

        }
    })

document.getElementById("task-card-list")
    .addEventListener("click", function (event) {
        //console.log(event.target)
        if (event.target.name === "finalize") {
            const ui = new UI()
            const objetivo = event.target
            const cardHeader = objetivo.parentElement.parentElement.getElementsByClassName("card-header")[0]
            const id = cardHeader.getElementsByTagName("p")[0].innerText.split(" ")[1]

            ui.finalizarTarea(objetivo, id)
            ui.eliminarTarea(objetivo)


            const urlUpdate = url + "update/" + id
            console.log(urlUpdate)
            updateTask(urlUpdate)
        }
    })

document.getElementById("task-card-list-done")
    .addEventListener("click", function (event) {
        if (event.target.name === "delete") {
            const ui = new UI()
            const objetivo = event.target
            const cardHeader = objetivo.parentElement.parentElement.getElementsByClassName("card-header")[0]
            const id = cardHeader.getElementsByTagName("p")[0].innerText.split(" ")[1]

            ui.eliminarTarea(objetivo)

            const urlDelete = url + id
            console.log(urlDelete)
            deleteTask(urlDelete)
        }
    })

function drawTask(task) {
    const ui = new UI()

    const tarea = new Tarea(task.id, task.title, task.responsable, task.deadline, task.urgency)
    if (task.completed) {
        const objetivo = document.getElementById("task-card-list-done")
        ui.agregarTarea(tarea, objetivo, "Eliminar")
        //DIBUJAR UN DONE
    } else {
        const objetivo = document.getElementById("task-card-list")
        ui.agregarTarea(tarea, objetivo, "Finalizar")
        //DIBUJAR UN TODO
    }
}
/*
async function postTodo(urlBase, body) {
    const strBody = JSON.stringify(body)
    console.log(strBody)
    const url = urlBase + 'add'
    const createTodoResponse = await Promise.resolve(fetch(url, 
                                                    {
                                                        method: "POST", 
                                                        body: strBody,
                                                        headers:{
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json'
                                                        },
                                                        mode: 'no-cors'
                                                    }))
    const createTodoResponseObj = await Promise.resolve(createTodoResponse.json())
    return createTodoResponseObj
}*/

async function deleteTask(url) {
    const deleteTodoResponse = await Promise.resolve(fetch(url, {method: "DELETE"}))
    const ok = await Promise.resolve(deleteTodoResponse.json())
    return ok
}

async function updateTask(url) {
    const updateTodoResponse = await Promise.resolve(fetch(url, {method: "PUT"}))
    const ok = await Promise.resolve(updateTodoResponse.json())
    return ok
}

async function getTodo(url) {
    const todoResponse = await Promise.resolve(fetch(url))
    const todoObj = await Promise.resolve(todoResponse.json())
    return todoObj
}

async function getSomeTodos(urlBase, start, end) {
    const objetivo = document.getElementById("container")
    const loadingElement = document.createElement("div")
    loadingElement.innerHTML = `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
    loadingElement.id = "loading"
    objetivo.prepend(loadingElement)

    for (let i = start; i <= end; i++) {
        const todo = await getTodo(urlBase + i)
        if(todo.statusCode>399){
            //console.log("No hacer nada " + i)
            continue
        }
        drawTask(todo)
    }
    document.getElementById("loading").remove()

}

const url = "http://localhost:5000/"
getSomeTodos(url, 1, 20)