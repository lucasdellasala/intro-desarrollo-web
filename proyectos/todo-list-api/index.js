// PROTOCOLO HTTP
// http://localhost:5000/

// IMPORTS
import Express from 'express'
import morgan from 'morgan'
import Bd from './bd.js'
import expressValidator from 'express-validator'
const { query, validationResult } = expressValidator


// SETTINGS
const PORT = 5000
const app = Express()
app.use(morgan('tiny'))

// ENDPOINTS
app.get('/', (req, res) => {
    console.table(Bd)
    res.send(Bd)
})

app.get('/:id', (req, res) => {
    const idSolicitado = parseInt(req.params.id) // o parseInt(req.params.id)

    if (isNaN(idSolicitado)) {
        return res.status(400).json('El id solicitado debe ser un número')
    }

    const tareaSolicitada = Bd.find((persona) => persona.id === idSolicitado)

    if (tareaSolicitada == undefined) {
        return res.status(404).json('El id solicitado no existe')
    }

    console.table(Bd)
    res.status(200).send(tareaSolicitada)
})

app.post('/add',
    query('title').isAlphanumeric(),
    query('responsable').isAlphanumeric(),
    (req, res) => {
        //TODO: id y nombre obligatorios X
        // id tiene que ser un numero X
        // nombre tiene que ser alphanumerico X
        // nombre length > 2
        // id unico X

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const title = req.query.title
        const responsable = req.query.responsable
        let deadline = req.query.responsable
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
        const urgency = !req.query.urgency ? "low" : req.query.urgency
        const completed = false

        const titleLenght = title.split('').length
        if (titleLenght < 3) {
            return res.status(400).json(`El título ${title} es demasiado corto`)
        }
        const responsableLenght = responsable.split('').length
        if (responsableLenght < 2) {
            return res.status(400).json(`El nombre del responsable ${responsable} es demasiado corto`)
        }
        
        let minIdPossible = 0
        for(let i = 0; i< Bd.length; i++){
            const comparator = i+1
            console.log("Comparador", comparator)
            console.log("Id", Bd[i].id)
            if(comparaor==Bd.length){
                minIdPossible = Bd.length+1
            }
            if(comparator!=Bd[i].id){
                minIdPossible = comparator
                break
            }
        }
        console.log(minIdPossible)

        Bd.push({
            "id": minIdPossible,
            "title": title,
            "responsable": responsable,
            "deadline": deadline,
            "urgency": urgency,
            "completed": completed
        })

        console.table(Bd)
        res.status(201).send(`La tarea ${title} ha sido agregada a la base de datos. Con el id ${minIdPossible}`)
    })
/*
app.delete('/:id', (req, res) => {
    //TODO: tiene q existir el id
    const idSolicitado = +req.params.id // o parseInt(req.params.id)

    const personaSolicitada = Bd.find((persona) => persona.id === idSolicitado)

    if (personaSolicitada == undefined) {
        return res.status(404).json('El id solicitado no existe')
    }

    const indexPersonaSolicitada = Bd.indexOf(personaSolicitada)
    Bd.splice(indexPersonaSolicitada, 1)

    console.table(Bd)
    res.status(200).send(`La persona ${personaSolicitada.nombre} ha sido eliminada de la base de datos. Con el id ${personaSolicitada.id}`)
})

app.put('/update/', query('id').isNumeric(), query('nombre').isAlphanumeric(), (req, res) => {
    //TODO: id y nombre obligatorios x
    // id tiene que ser un numero x
    // nombre tiene que ser alphanumerico x
    // nombre length > 2
    // id unico 
    // id tiene que existir X

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const idSolicitado = parseInt(req.query.id)
    const nuevoNombre = req.query.nombre
    const largoNombre = nuevoNombre.split('').length

    if (largoNombre < 3) {
        return res.status(400).json(`El nombre ${nuevoNombre} es demasiado corto`)
    }

    const nuevaPersona = {
        "id": idSolicitado,
        "nombre": nuevoNombre
    }

    const personaUpdate = Bd.find((persona) => persona.id === idSolicitado)

    if (personaUpdate == undefined) {
        return res.status(403).json('No existe una persona con ese id')
    }

    if (personaUpdate == undefined) {
        return res.status(404).json('El id solicitado no existe')
    }

    const indexPersonaUpdate = Bd.indexOf(personaUpdate)
    Bd.splice(indexPersonaUpdate, 1, nuevaPersona)

    console.table(Bd)
    res.status(200).send(`Se hizo update de la persona ${personaUpdate.nombre} por ${nuevaPersona.nombre} con id ${nuevaPersona.id}`)
})
*/

// LISTEN
app.listen(PORT, () => console.log('Escuchando el puerto ' + PORT))