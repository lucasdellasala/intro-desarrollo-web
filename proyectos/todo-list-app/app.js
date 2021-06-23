//OBJETOS
//Tarea
function Tarea(nombre, responsable, deadline, urgencia) {
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

        if(tarea.urgencia==="high"){
            color = "danger"
        } else if(tarea.urgencia==="medium"){
            color = "warning"
        } else {
            color = "success"
        }

        let colorBoton = "success";

        if(tipo==="Eliminar"){
            colorBoton = "danger"
        }

        elementoTarea.innerHTML = `
            <div class="card mb-3">
                <div class="card-header">           
                    <h3>${tarea.nombre}</h3>
                    <div class="btn-${color}" style="border-radius: 50%; width:10px; height:10px;"></div>
                </div>
                <div class="card-body">
                    <p>Responsable ${tarea.responsable}</p>
                    <p>Fecha límite: ${tarea.deadline}</p>
                    <button name="finalize" class="btn btn-${colorBoton} btn-block">${tipo}</button>
                </div>
            </div>`

        objetivo.prepend(elementoTarea)
    };
    this.finalizarTarea = function (botonObjetivo) {
        const cardHeader = botonObjetivo.parentElement.parentElement.getElementsByClassName("card-header")[0]
        const titulo = cardHeader.getElementsByTagName("h3")[0].innerText
        let classCirculo = cardHeader.getElementsByTagName("div")[0].className

        const cardBody = botonObjetivo.parentElement.parentElement.getElementsByClassName("card-body")[0]
        let responsable = cardBody.getElementsByTagName("p")[0].innerText
        let deadline = cardBody.getElementsByTagName("p")[1].innerText

        classCirculo = classCirculo.split("-")[1]
        responsable = responsable.split(" ")[1]
        deadline = deadline.split(" ")[2]

        if(classCirculo==="danger"){
            classCirculo = "high"
        } else if(classCirculo==="warning"){
            classCirculo = "medium"
        } else {
            classCirculo = "low"
        }

        const tarea = new Tarea(titulo, responsable, deadline, classCirculo)

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

                ui.agregarTarea(tarea, listaDeTareas, "Finalizar")
                ui.resetForm()
            }
        })

document.getElementById("task-card-list")
        .addEventListener("click", function(event){
            if(event.target.name==="finalize"){
                const ui = new UI()
                const objetivo = event.target
                ui.finalizarTarea(objetivo)
                ui.eliminarTarea(objetivo)
            }
        })

document.getElementById("task-card-list-done")
        .addEventListener("click", function(event){
            if(event.target.name==="delete"){
                const ui = new UI()
                const objetivo = event.target
                ui.eliminarTarea(objetivo)
            }
        })
