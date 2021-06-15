# 🤓APLICANDO LÓGICA🤓
🦺 TODO 🦺
## TEORÍA
🦺 TODO 🦺
### Operadores aritméticos
🦺 TODO 🦺
### Operadores de asignación
🦺 TODO 🦺
### Operadores comparativos
🦺 TODO 🦺
### Operadores lógicos
🦺 TODO 🦺
### Funciones
🦺 TODO 🦺
### Parámetros de funciones
🦺 TODO 🦺
### Scope de variables
🦺 TODO 🦺

## EJERCICIOS HACKERRANK

### [Solve me first](https://www.hackerrank.com/challenges/solve-me-first/problem)
    function solveMeFirst(a, b) {
        return a+b
    }

### [Compare the triplets](https://www.hackerrank.com/challenges/compare-the-triplets/problem)
    function compareTriplets(a, b) {
        const puntuacionesAlice = a
        const puntuacionesBob = b
        const cantidadDeNotas = a.length 

        let contadorAlice = 0
        let contadorBob = 0
        
        //LA LOGICA
        for(let i = 0; i<cantidadDeNotas; i++){
            if(puntuacionesAlice[i]!==puntuacionesBob[i]){
                if(puntuacionesAlice[i]>puntuacionesBob[i]){
                    contadorAlice = contadorAlice + 1 // o contadorAlice++
                } else {
                    contadorBob = contadorBob + 1 // o contadorBob++
                }
            }
        }

        return [contadorAlice, contadorBob]
    }
### [Staircase](https://www.hackerrank.com/challenges/staircase/problem)
    function staircase(n) {
        const cantidadRenglones = n
        for (let i = 0; i<cantidadRenglones; i++){
            // Cantidad de espacios es igual a n - el piso
            const piso = i + 1
            const espacios = cantidadRenglones - piso

            console.log(" ".repeat(espacios)+"#".repeat(piso))
        }
    }

### [Mini-max sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)
    function miniMaxSum(arr) {
        //CALCULO MINIMO Y MAXIMO
        const min = Math.min(...arr)
        const max = Math.max(...arr)

        //SUMO TODOS
        const total = arr.reduce((a, b) => a + b, 0);

        //Mas chico y mas grande
        const sumaMasChica = total - max 
        const sumaMasGrande = total - min 

        //Imprimo
        console.log(sumaMasChica+" "+sumaMasGrande)
    }

[**⏪ANTERIOR⏪**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-00.md) ||
[**⏩SIGUIENTE⏩**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-02.md) ||
[**⏮VOLVER AL ÍNDICE⏮**](https://github.com/lucasdellasala/intro-desarrollo-web)
# 🚧🚧 SECCIÓN EN CONSTRUCCIÓN 🚧🚧