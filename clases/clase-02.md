# 馃幉 Programaci贸n Orientada a Objetos 馃幉
La **Programaci贸n Orientada a Objetos** (**POO**, en espa帽ol y **OOP**, en ingl茅s) es un [paradigma de programaci贸n](https://es.wikipedia.org/wiki/Paradigma_de_programaci%C3%B3n "Paradigma de programaci贸n") que viene a innovar la forma de obtener resultados. Los objetos se utilizan como met谩fora para emular las entidades reales del negocio a modelar.

Los objetos son entidades que tienen un determinado "estado", "comportamiento (m茅todo)" e "identidad":

-   La identidad es una propiedad de un objeto que lo diferencia del resto; dicho con otras palabras, es su identificador (concepto an谩logo al de identificador de una  [variable](https://es.wikipedia.org/wiki/Variable_(programaci%C3%B3n) "Variable (programaci贸n)")  o una  [constante](https://es.wikipedia.org/wiki/Constante_(programaci%C3%B3n) "Constante (programaci贸n)")).

-   Los m茅todos (comportamiento) y atributos (estado) est谩n estrechamente relacionados por la propiedad de conjunto. Esta propiedad destaca que una clase requiere de m茅todos para poder tratar los atributos con los que cuenta. El  [programador](https://es.wikipedia.org/wiki/Programador "Programador")  debe pensar indistintamente en ambos conceptos, sin separar ni darle mayor importancia a alguno de ellos. Hacerlo podr铆a producir el h谩bito err贸neo de crear clases contenedoras de informaci贸n por un lado y clases con m茅todos que manejen a las primeras por el otro. De esta manera se estar铆a realizando una "[programaci贸n estructurada](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada "Programaci贸n estructurada")  camuflada" en un lenguaje de POO.

La programaci贸n orientada a objetos difiere de la  [programaci贸n estructurada](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada "Programaci贸n estructurada")  tradicional, en la que los datos y los procedimientos est谩n separados y sin relaci贸n, ya que lo 煤nico que se busca es el procesamiento de unos datos de entrada para obtener otros de salida. La programaci贸n estructurada anima al programador a pensar sobre todo en t茅rminos de procedimientos o funciones, y en segundo lugar en las estructuras de datos que esos procedimientos manejan. En la programaci贸n estructurada solo se escriben funciones que procesan datos. Los programadores que emplean POO, en cambio, primero definen objetos para luego enviarles mensajes solicit谩ndoles que realicen sus m茅todos por s铆 mismos.


### Declaraci贸n literal de un objeto

No es la mejor manera si queremos m谩s de un objeto, porque debemos repetir c贸digo cada vez que necesitamos instanciar el objeto, si encontramos un error en alg煤n m茅todo, hay que modificar el m茅todo en todos los objetos. No podemos utilizar la ventaja de la herencia, que es evitar tener que modificar el mismo m茅todo en cada objeto.

	const auto = {
		modelo : "Ferrari",
		tocarBocina : function () {
			console.log("PIP PIP")
		}
	}
	console.log(auto.modelo)
	auto.tocarBocina()

### Declaraci贸n de un objeto con la funci贸n constructor

Con el constructor podemos usar la herencia y la encapsulaci贸n, propiedades de la POO que nos dan una mayor versatilidad y utilidad al utilizar este paradigma.

	function Auto(modelo){
		this.modelo = modelo // Propiedad
		this.tocarBocina = function () { //M茅todo
			console.log("PIP PIP")
		}
	}
	
	// Instanciamos los objetos utilizando la palabra reservada "new"
	let autoRojo = new Auto("Ferrari")
	let autoNegro = new Auto("Lamborghini")
	
	// Consulto los modelos
	console.log(autoRojo.modelo)
	console.log(autoNegro.modelo)
	
	// Ejecuto sus m茅todos
	autoRojo.tocarBocina()
	autoNegro.tocarBocina()

### Declaraci贸n de un objeto con herencia de uno anterior

Si queremos crear un objeto que herede propiedades y m茅todos de otro podemos hacerlo f谩cilmente. Esto nos sirve para evitar repetir c贸digo y hacer que exista un v铆nculo entre los objetos que creamos.

    function Auto(modelo){
        this.modelo = modelo
        this.tocarBocina = function () {
            console.log("PIP PIP")
        }
    }

    function Uber(modelo, chofer){
        this.base = Auto
        this.base(modelo)
        this.chofer = chofer
        this.cobrar = function () {
            console.log("Viaje cobrado")
        }
    }

    let uberBoraBienPlanchado = new Uber("Bora", "Lucas")

    // Tiene las props y m茅todos de auto
    console.log(uberBoraBienPlanchado.modelo)
    uberBoraBienPlanchado.tocarBocina()

    // Y tambi茅n las props y m茅todos de Uber
    console.log(uberBoraBienPlanchado.chofer)
    uberBoraBienPlanchado.cobrar()


### Getters y setters

Si queremos crear propiedades que puedan ser consultadas pero no modificadas debemos usar el concepto de getters y si queremos poder modificarlas podemos utilizar setters. De esta manera restringimos la interacci贸n que podemos tener con un objeto.

馃 TODO 馃


AGRADECIMIENTOS A  [@magalidefelippe](https://github.com/magalidefelippe) POR LOS EJEMPLOS.

[**鈴狝NTERIOR鈴?**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-01.md) ||
[**鈴㏒IGUIENTE鈴?**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-03.md) ||
[**鈴甐OLVER AL 脥NDICE鈴?**](https://github.com/lucasdellasala/intro-desarrollo-web)
# 馃毀馃毀 SECCI脫N EN CONSTRUCCI脫N 馃毀馃毀