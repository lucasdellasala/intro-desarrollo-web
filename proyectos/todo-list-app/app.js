//OBJETOS
//Tarea
function Tarea(nombre, responsable, deadline, urgencia) {
    this.nombre = nombre;
    this.responsable = responsable;
    this.deadline = deadline;
    this.urgencia = urgencia;
}

//User Interface
function UI(){
    this.agregarTarea = function(tarea){
        const listaDeTareas = document.getElementById("task-card-list")
        const elementoTarea = document.createElement("div")
        let color;
        switch(tarea.urgencia){
            case "high":
                color = "danger"
                break
            case "medium":
                color = "warning"
                break
            default:
                color = "success"
        }

        elementoTarea.innerHTML = `<div class="card mb-3">
            <div class="card-header">           
                <h4>${tarea.nombre}</h4>
                <div class="btn-${color}" style="border-radius: 50%; width:10px; height:10px;"></div>
            </div>
            <div class="card-body">
                <p>Responsable ${tarea.responsable}</p>
                <p>Fecha límite: ${tarea.deadline}</p>
                <button class="btn btn-success btn-block">Finalizar</button>
            </div>
        </div>`
        
        listaDeTareas.prepend(elementoTarea)
    };
    this.eliminarTarea = function(element){
        if (element.name === "delete"){
            element.parentElement.parentElement.remove()
        }
    };
    this.resetForm = function(){
        document.getElementById("task-form").reset()
    };
}

//DOM EVENTS => Document Object Model Events
document.getElementById("task-card-form")
        .addEventListener("submit", function(e){
            //Evita que se recargue la página cuando damos submit
            e.preventDefault()

            //Creamos ui
            const ui = new UI()

            //Obtener los valores de la tarea
            const nombre = document.getElementById("name").value
            const responsable = document.getElementById("responsable").value
            const deadline = document.getElementById("deadline").value
            const urgencia = document.getElementById("urgency").value

            if(nombre  === "" || responsable === "" || deadline === "") {
                alert("Debes completar todos los campos")
            } else {
                //Instanciamos la clase Tarea
                const tarea = new Tarea(nombre,responsable,deadline, urgencia)
                //Agregamos la tarea a la UI
                ui.agregarTarea(tarea)
                //Reseteamos el formulario
                ui.resetForm()
            }
        })

document.getElementById("task-card-list-done")
        .addEventListener("click", function(e){
            console.log("CLICK")
            const ui = new UI()
            ui.eliminarTarea(e.target)
        })