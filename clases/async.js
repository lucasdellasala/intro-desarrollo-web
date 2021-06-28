//Ej 1
const url = `https://jsonplaceholder.typicode.com/todos/1`

fetch(url)
    .then(res=> {
        return res.json()
    })
    .then( data => {
        console.log(data)
    })
    .catch( err => {
        console.error(err)
    })

//Ej 2
const loadData = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}

loadData()

//Ej 3
const loadData2 = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos/1`
        const res = await fetch(url)
        console.log(res.status) //
        console.log(res.ok) // Un 404 puede no ser un error para el try catch, pero si para nuestra logica
        const data = await res.json()
        console.log(data)
        return data
    } catch(err){
        console.error(err)
    }
}

const data2 = loadData2().then(data => console.log(data)) //loadData2() devuelve una promesa.

//Ej 4 - TOP LEVEL

const loadData3 = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos/1`
        const res = await fetch(url)
        console.log(res.status) //
        console.log(res.ok) // Un 404 puede no ser un error para el try catch, pero si para nuestra logica
        const data = await res.json()
        console.log(data)
        return data
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = loadData3()
    console.log(data)
})() //A veces no hace falta hacer la funcion (()=>{})()


//Ej 5 - Multiples

const loadData4 = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/todos/1`
        const url2 = `https://jsonplaceholder.typicode.com/todos/2`
        const url3 = `https://jsonplaceholder.typicode.com/todos/3`
        
        const res1 = await fetch(url1)
        const data1 = await res1.json()

        const res2 = await fetch(url2)
        const data2 = await res2.json()

        const res3 = await fetch(url3)
        const data3 = await res3.json()

        return [data1, data2, data3]
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = await loadData4()
    console.log(data)
})() //A veces no hace falta hacer la funcion (()=>{})()


//Ej 6 - Multiples con PROMISE ALL

const loadData4 = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/todos/1`
        const url2 = `https://jsonplaceholder.typicode.com/todos/2`
        const url3 = `https://jsonplaceholder.typicode.com/todos/3`
        
        const results = await Promise.all([
            fetch(url1), 
            fetch(url2), 
            fetch(url3)
        ])

        const dataPromises = results.map(result => result.json())

        const finalData = await Promise.all(dataPromises)

        return finalData
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = await loadData4()
    console.log(data)
})() //A veces no hace falta hacer la funcion (()=>{})()



// ASYNC: Explicación

/*
// EJ 1
const url = "https://jsonplaceholder.typicode.com/todosx/1"

fetch(url)
    .then((response)=>{
        if(response.ok){
            return response
        } else {
            throw new Error("La respuesta de la API no fue satisfactoria. Status Code: "+ response.status)
        }
    })
    .catch((error)=>console.log(error))
*/

/*
//EJ 2
async function loadData() {
    const url = `https://jsonplaceholder.typicode.com/todos/1`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}

loadData()
*/
/*
//EJ 3
async function loadData() {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos/1`
        const res = await fetch(url)
        if(!res.ok){
            throw new Error("La respuesta de la API no fue satisfactoria. Status Code: "+ res.status)
        }
        const data = await res.json()
        return data
    } catch(err){
        console.error(err)
    }
}

loadData().then(data => console.log(data))
*/

/*
//EJ 4
const loadData = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/todos/1`
        const res = await fetch(url)  
        if(!res.ok){
            throw new Error("La respuesta de la API no fue satisfactoria. Status Code: "+ res.status)
        }
        const data = await res.json()  
        return data
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = await loadData()
    console.log(data)
    console.log(data.title)
})() //A veces no hace falta hacer la funcion (()=>{})()
*/

/*
//EJ 5 - MULTIPLES FETCH

const loadData = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/todos/1`
        const url2 = `https://jsonplaceholder.typicode.com/todos/2`
        const url3 = `https://jsonplaceholder.typicode.com/todos/3`
        
        const res1 = await fetch(url1)
        const data1 = await res1.json()

        const res2 = await fetch(url2)
        const data2 = await res2.json()

        const res3 = await fetch(url3)
        const data3 = await res3.json()

        return [data1, data2, data3]
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = await loadData()
    data.map(todo => console.log(todo.title))
})() 
*/
/*
//EJ 6 - Promise all
const loadData = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/todos/1`
        const url2 = `https://jsonplaceholder.typicode.com/todos/2`
        const url3 = `https://jsonplaceholder.typicode.com/todos/3`
        
        const results = await Promise.all([
            fetch(url1), 
            fetch(url2), 
            fetch(url3)
        ])

        const dataPromises = results.map(result => result.json())

        const finalData = await Promise.all(dataPromises)

        return finalData
    } catch(err){
        console.error(err)
    }
}

(async()=> {
    const data = await loadData()
    console.log(data)
})()
*/