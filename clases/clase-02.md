# 🎲 Programación Orientada a Objetos 🎲
La **Programación Orientada a Objetos** (**POO**, en español y **OOP**, en inglés) es un [paradigma de programación](https://es.wikipedia.org/wiki/Paradigma_de_programaci%C3%B3n "Paradigma de programación") que viene a innovar la forma de obtener resultados. Los objetos se utilizan como metáfora para emular las entidades reales del negocio a modelar.

Los objetos son entidades que tienen un determinado "estado", "comportamiento (método)" e "identidad":

-   La identidad es una propiedad de un objeto que lo diferencia del resto; dicho con otras palabras, es su identificador (concepto análogo al de identificador de una  [variable](https://es.wikipedia.org/wiki/Variable_(programaci%C3%B3n) "Variable (programación)")  o una  [constante](https://es.wikipedia.org/wiki/Constante_(programaci%C3%B3n) "Constante (programación)")).

-   Los métodos (comportamiento) y atributos (estado) están estrechamente relacionados por la propiedad de conjunto. Esta propiedad destaca que una clase requiere de métodos para poder tratar los atributos con los que cuenta. El  [programador](https://es.wikipedia.org/wiki/Programador "Programador")  debe pensar indistintamente en ambos conceptos, sin separar ni darle mayor importancia a alguno de ellos. Hacerlo podría producir el hábito erróneo de crear clases contenedoras de información por un lado y clases con métodos que manejen a las primeras por el otro. De esta manera se estaría realizando una "[programación estructurada](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada "Programación estructurada")  camuflada" en un lenguaje de POO.

La programación orientada a objetos difiere de la  [programación estructurada](https://es.wikipedia.org/wiki/Programaci%C3%B3n_estructurada "Programación estructurada")  tradicional, en la que los datos y los procedimientos están separados y sin relación, ya que lo único que se busca es el procesamiento de unos datos de entrada para obtener otros de salida. La programación estructurada anima al programador a pensar sobre todo en términos de procedimientos o funciones, y en segundo lugar en las estructuras de datos que esos procedimientos manejan. En la programación estructurada solo se escriben funciones que procesan datos. Los programadores que emplean POO, en cambio, primero definen objetos para luego enviarles mensajes solicitándoles que realicen sus métodos por sí mismos.


### Declaración literal de un objeto

No es la mejor manera si queremos más de un objeto, porque debemos repetir código cada vez que necesitamos instanciar el objeto, si encontramos un error en algún método, hay que modificar el método en todos los objetos. No podemos utilizar la ventaja de la herencia, que es evitar tener que modificar el mismo método en cada objeto.

	const auto = {
		modelo : "Ferrari",
		tocarBocina : function () {
			console.log("PIP PIP")
		}
	}
	console.log(auto.modelo)
	auto.tocarBocina()

### Declaración de un objeto con la función constructor

Con el constructor podemos usar la herencia y la encapsulación, propiedades de la POO que nos dan una mayor versatilidad y utilidad al utilizar este paradigma.

	function Auto(modelo){
		this.modelo = modelo // Propiedad
		this.tocarBocina = function () { //Método
			console.log("PIP PIP")
		}
	}
	
	// Instanciamos los objetos utilizando la palabra reservada "new"
	let autoRojo = new Auto("Ferrari")
	let autoNegro = new Auto("Lamborghini")
	
	// Consulto los modelos
	console.log(autoRojo.modelo)
	console.log(autoNegro.modelo)
	
	// Ejecuto sus métodos
	autoRojo.tocarBocina()
	autoNegro.tocarBocina()

### Declaración de un objeto con herencia de uno anterior

Si queremos crear un objeto que herede propiedades y métodos de otro podemos hacerlo fácilmente. Esto nos sirve para evitar repetir código y hacer que exista un vínculo entre los objetos que creamos.

    function Auto(modelo){
        this.modelo = modelo
        this.tocarBocina = function () {
            console.log("PIP PIP")
        }
    }

    function Uber(modelo, chofer){
        this.base = new Auto(modelo)
        this.chofer = chofer
        this.cobrar = function () {
            console.log("Viaje cobrado")
        }
    }

    let uberBoraBienPlanchado = new Uber("Bora", "Lucas")

    // Tiene las props y métodos de auto
    console.log(uberBoraBienPlanchado.modelo)
    uberBoraBienPlanchado.tocarBocina()

    // Y también las props y métodos de Uber
    console.log(uberBoraBienPlanchado.chofer)
    uberBoraBienPlanchado.cobrar()


### Getters y setters

Si queremos crear propiedades que puedan ser consultadas pero no modificadas debemos usar el concepto de getters y si queremos poder modificarlas podemos utilizar setters. De esta manera restringimos la interacción que podemos tener con un objeto.

🦺 TODO 🦺


AGRADECIMIENTOS A  [@magalidefelippe](https://github.com/magalidefelippe) POR LOS EJEMPLOS.

[**⏪ANTERIOR⏪**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-01.md) ||
[**⏩SIGUIENTE⏩**](https://github.com/lucasdellasala/intro-desarrollo-web/blob/main/clases/clase-03.md) ||
[**⏮VOLVER AL ÍNDICE⏮**](https://github.com/lucasdellasala/intro-desarrollo-web)
# 🚧🚧 SECCIÓN EN CONSTRUCCIÓN 🚧🚧