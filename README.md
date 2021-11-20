# Mis notas del curso

## __Node.js:__
> Es un entorno de ejecución que nos permite ejecutar javascript por fuera de un navegador. 

> Node.js esta construido bajo el motor V8 de Google Chrome esto lo converte en un entorno de ejecución para javascript y logra que el lenguaje deje de depender del navegador para poderse ejecutar.

> Los motores de javascript en los diferentes navegadores:

| Navegador | Motor        |
| :-------- | :----------- |
| IExplorer | Chakra       |
| Mozilla   | SpiderMonkey |
| Chrome    | V8           |



___Instalación:___
> Descargar node.js nodejs.org/es al instalar el programa se va a instalar el gestor de paquetes **npm**. 

> Para verificar la instalación escribir **node - version **

    console.log('¡Probando JS!);

    node prueba.js

## Módulo
Es un bloque de código reutilizable, cuya existencia o no, no altera el coportamiento de otros bloques de código. A partir de eso, Node.js propone fragmentar nuestro código en pequeños módulos, en donde cada uno tendrá una funcionalidad específica para alcanzar un objetivo definido.

**Módulos nativos**
 : Ya vienen instalados cuando creamos un proyecto de Node.js.

**Módulos de terceros**
 : Podemos instalarlos usando **npm**.

 **Módulos creados**
  : Aquellos que escribimos nosotros.

___Ejemplo:___
    
    let series = ['Friends','Mr. Robot','Breaking Bad']; 

    module.export = series;

En la parte *let series* definimos un array de series en donde en cada posición hay una serie.

En la parte *module.export* hacemos uso del objeto **module** y su propiedad **export** y le asignamos la variable que queremos exportar. **Tener en cuenta que siempre que queremos exportar módulos de un script, tenemos que escribir esta linea al final del mismo.** 

Una vez que exportamos el módulo, vamos al archivo en donde lo queremos importar y usamos la función **require()**.

***Como buena práctica, se suelen almacenar los módulos que creamos dentro de una carpeta __con el mismo nombre del módulo que estamos por crear.__

![modulos](Modulo2/img/Modulo1.JPG)

___Para requerir un modulo:___

Nos situamos dentro del archivo en el que queremos incorporarlo y hacer uso de la función nativa de Node.js:**require()**  .

Esta recibe como parametro un string que será el nombre del módulo.

Esta función devuelve un objeto literal, por lo tanto, es importante guardar la ejecución en una variable para poder acceder, a través de dot notation, a todas las propiedades y funciones del módulo. 

Para poder ver todo lo que trae consigo un módulo podemos hacer un **console.log()** de lal variable en la que almacenamos.

## ¿Como Inicializar un proyecto con Node.js?

1. Creamos una carpeta donde va a estar el proyecto.
2. Abrir Vs Code.
3. En la terminal de Vs Code, corremos el comando **npm init**.
    * Esto crea un archivo **packege.json**
4. Se ejecuta el comando **npm install**.
    * Los paquetes nativos viven en la instalación de Node.js.

Se crean los siguientes elementos:

!['Estructura'](Modulo2/img/estructura.JPG);

5. Se crea el archivo **app.js**.

!['Archivo app.js'](Modulo2/img/app.JPG)

Este sirve para tomar notas:

    <!--Ejemplo -->

___Enlaces para leer:___
1. Enlace 1
    + descripción.

#### Un poco de historia.
* Primera pagina web : Fue en agosto de 1991 y fue creada por Tim Berners-Lee. Junto con: Lenguaje HTML,Protocolo HTTP, El primer navegador (cliente),el primer servidor web.

* Primer version de Javascript: Fue creado en 1995 por Brendan Eich para Netscape. Y lo creo en solo 10 días, es un lenguaje basado en objetos y es interpretado.

* Primer version Node.js: Fue creado en agosto del 2009 por Ryan Dahl. Y permite ejecutar javascript del lado del servidor, y esta pensado para trabajar de manera asincrona.

#### ¿Por que nacio Node.js? ¿Para que sirve?
Respuesta: Es una aplicación que permite ejecutar javascript del lado del servidor..

Enlaces para leer: 

1. [Acerca de Node.js](https://nodejs.org/es/about/)
2. [Para que sirve](https://openwebinars.net/blog/que-es-nodejs/)
3. [Breve Historia](https://medium.com/sue%C3%B1os-graficos/una-breve-historia-de-nodejs-931fc0e9cc6b)

#### ¿Qué es un módulo en el ambiente de Node.js?
Respuesta: Es un bloque de codigo reutilizable y su existencia no altera el funcionamiento de otros modulos.

Enlaces a leer:

1. [Módulos](https://alvaroperdiz.com/javascript/node-js/sistema-modulos/)
2. [Concepto de Módulos](https://programmerclick.com/article/6863326179/)

#### ¿Dentro del entorno client/Server,¿Que diferencia a un cliente de un servidro?
Respuesta: 
* Cliente: Es el que hace las peticiones.
* Servidor: Es quien las recibe y regresa una respuesta.

Enlaces para leer:

1. [Concepto](https://definicion.de/cliente-servidor/)
2. [Cliente-Servidor](https://es.wikipedia.org/wiki/Cliente-servidor)


## Las variables en JavaScript
Las variable son espacios de memoria donde podemos almacenar diferentes tipos de datos.

* var
* let 
* const

Para declara la variable:

    var nombre;
    let contador;
    const url;

> Una buena practica es usar el formato **camelCase** por ejemplo : variableEjemplo.

Javascript es un lenguaje que hace diferencia entre MAYÚSCULAS y minúsculas por eso es bueno seguir un estandar al momento de escribir nombres.

Para asignar:

    var miApodo = 'Hackerman';

La diferencia entre **var** y **let** solo es que **let** solo será accesible en el bloque de código en el que fue declarado.

Los bloques de codigo son normalmente determinados por las \{ \} .

Ejemplo de var:

    if (true){
        var nombre = "Juan";
    }
    
    console.log(nombre); // Ok, muestra Juan.

Ejemplo de let:

    if(true){
        let nombre = "Juan";
    }
    
    console.log(nombre); // Error, nombre no existe

Declaración con **const**

    const emal = "mi.email@hotmail.com"

Las variables declaradas con **const** funcionan igual que las variables **let**, estarán disponibles solo en el bloque de código en el que se hayan declarado.

Al contrario de let, una vez que les asignemos un valor, no podremos cambiarlo.

    email = "mi.otro.email@hotmail.com" 
    //Error de asignación, no se puede cambiar
    //el valor de const

Declaración con **let** o **const** son accesibles dentro del bloque donde son declaradas.

Por esta razón solo podemos declararlas una vez. Si volvemos a declararlas JavaScript nos devolvera un error.

    let contador = 0;
    let contador = 1;
    //Error de re-declaración de la variable 

    const email = "mi.email@hotmail.com";
    const email = "mi.nuevo.email@hotmail.com"; 
    //Error de re-declaración de la variable.

___Buenas practicas de programación___

> Una buena práctica es el uso de comentarios. Esto nos permite generar un pequeño relato del porque estamos generando dicho bloque de código.

> Un comentario es una particularidad del lenguaje de programación destinada a insertar anotaciones descriptivas respecto al codigo escrito y destinada a cualquier persona que se vaya a relacionar con dicho codigo.

> Estas anotaciones son ignoradas por el compilador e intérpretes de codigo y son exclusivamente pensadas para los seres humanos. Su proposito es hacer que el código sea mas facil de entender.


## Tipos de datos.
Los tipos de datos le permiten a JavaScript conocer las caracteristicas y funcionalidades que estarán disponibles para ese dato.

__Númericos (number):__

    let edad = 35; // Número entero
    let precio = 150.65 // decimales

__Cadenas de caracteres (String):__

    let nombre = 'Mama Luchetti'; // Comillas simples.
    let ocupacion = "Master of the sopas"; // Comillas dobles tienen el mismo resultado.

__Lógicos o booleanos (bloolean):__

    let laCharlaEstaReCopada = true;
    let hayAsadoAlFinal = false;

__Objetos (Object):__
Los objetos son **colecciones** de datos y en su interior pueden existir todos los anteriores. Se pueden reconocer porque se declaran con llaves \{ \}.

    let persona = {
        persona: 'Javier', // String
        edad: 34,          // number
        soltero: true      // boolean
    }

__Array:__

Los array son colecciones de datos. Los podemos reconocer por que se declaran con corchetes \[ \].

Los arrays son un tipo especial de objetos, por eso no los consideramos como un tipo de datos mas.

    let comidasFavoritas = ['Milanesa napolitana','Ravioles con bolognesa','Pizza calabresa'];

    let numerosSorteados = [12,45,56,324,452];


### Tipos de datos especiales.
Le permiten a javaScript determinar estados especiales que pueden tener los datos.

__NaN (Not a Number):__

Indica que el valor no puede ser parseado como un número .

    let malaDivision = "35" / 2; // NaN no es numero.

__Null (valor nulo):__

Lo asignamos nosotros para indicar un valor vacío o desconocido.

    let temperatura = null; // No llegó un dato, algo falló.

__Undefined (Valor sin definir)__

Indica la ausencia de valor.
Las variables tienen un valor indefinido hasta que les asignamos uno.

    let saludo; // undefined, no tiene valor.
    saludo = "¡Hola!"; // Ahora si tiene valor.


## Operadores:
Los operadores nos permite manipular el valor de las variables. realizar operaciones y comparar valores.

__Asigna__ el valor de la derecha a la izquierda 

    let edad = 35; // Asigna el numero 35 a edad.

__Aritmeticos__, nos permiten hacer operaciones matematicas, devuelven el resultado de la operación.

    10 + 15 // Suma -> 25
    10 - 15 // Resta -> -5
    10 * 15 // Multiplicación  -> 150 
    15 / 10 // División -> 1.5

__Aritmeticos (Continuación):__ Nos permiten hacer operaciones matemáticas, devuelven el resultado de la operación.

    15++; // Incremento, es igual a 15 + 1 -> 16
    15--; // Decremento, es igual a 15 - 1 -> 14

    15 % 5 ; // Modulo, el resto de dividir 15 entre 5  -> 0
    15 % 2 ; // Modulo, el resto de dividir 15 entre 2 -> 1

__Comparación simple:__

Compara dos valores, devuelve verdadero o falso.

    10 == 15  // Igualdad -> false
    10 != 15  // Desigualdad -> true

__Comparación estricta:__

Comparan el valor y el tipo de dato también.

    10 === "10"  // Igualdad estricta -> false
    10 !== 15    // Desigualdad estricta -> true

__Comparación (continuación)__

Compara dos valores devuelve verdadero ó falso.

    15 > 15  // Mayor que   -> False
    15 >= 15  // Mayor o igual que -> true
    10 < 15   // Menor que  -> true
    10 <= 15  //Menor o igual -> true

Los operadores de comparación siempre devolveran un booleano **true** o **false**.

Para los valores booleanos existen:

* AND "\&\&"      (que es "y")
* OR "\|\|"       ( que es el "o" que es or)
* NOT "\!"       (Que es la negación) 


_Los operadores logicos siempre devuelven valores booleanos._

**Concatenacion:**

    let nombre = 'Teodoro';
    let apellido = 'García';
    let nombreCompleto = nombre + ' ' + apellido;

Si mezclamos otros tipos de datos estos se convierten en cadena.

    let fila = 'M';
    let asiento = 7;
    let ubicacion = fila + asiento; //M7 como string.

## Funciones

Una función es un bloque de código que nos permite agrupar funcionalidad para usarla todas las veces que las necesitemos.
Normalmente realizan una tarea especifica y retorna un valor.

    function sumar (a,b){
        return a + b;
    }

Parabra reservada **function** para indicarle a javascript que vamos a escribir una función.

*Los parametros:*
Dentro de los parentesis se ponen los parametros de la función, si hay mas de uno lo separamos con comas. Si la función no lleva parametros igual ponemos los parentisis \( \).

Se puede trabajar con los parametros como si fueran variables, solo basta con escribir el nombre de las variables y con eso podremos trabajar con ellas.

*Cuerpo:*

Escribimos el cuerpo de la función entre las llaves de apertura \{ y la llave de cierre \} por ejemplo ***return a + b;***

    function sumar (a, b){
        return a + b;
    }

*Retorno:*
Es muy común que al termar la ejcución de la función queramos que nos devuelva un resultado y esto lo hacemos con la palabra **return**.

## Funciones Declaras.

Son aquellas que se declaran usando la estructura básica, pueden recibir un nombre seguido de la palabra **function** a través del cual podemos invocarlas.

Las funciones con nombres también se les llama
**fuciones nombradas**.

## Funciones expresadas.

Estas funciones se conocen como **funciones anonimas** y son aquellas a las que se les asigna como valor a una variable. Y para invocarlas se les invoca desde la variable.

    let hacerSushi= function (cantidad){
        return 'burger'.repeat(cantandad);
    }

### Invocación:

Podemos imaginarlas como si fueran maquinas en las cuales durane la declaración nos ocupamos en construir la maquina y durante la invocación las ponemos a funcionar.

Primero declaramos la funcion:

    function hacerHelado(){
        return 'helado';
    }

y para invocarla:

    hacerHelado(); // Retornara 'Helado'


Si las funciones tienen parametros se puede hacer uso de los parametros invocandolos en el mismo orden en el que fueron puestos.

    function saludar (nombre, apellido){
        return 'Hola ' + nombre + ' ' + apellido
    }

Para invocarla es :

    saludar ('Roberto','Rodriguez'); // Retornará 'Hola Roberto Rodriguez'

Es importante tener en cuenta que cuando una funcion tiene parametros estos deben ponerse durante la invocación ya que de lo contrario mandará **undefined**

También podemos pasarle a los parametros un valor por default por ejemplo:

    function saludar (nombre = 'visitante', apellido = 'anónimo'){
        return 'Hola ' + nombre + ' ' + apellido;
    }

Y la invocamos así:

    saludar(); // Retornara 'Hola visitante anónimo'

Podemos guardar la información que mande una función por ejemplo:

    function hacerHelados(cantidad){
        return 'helado'.repeat(cantidad);
    }

Y de esta forma guardamos la salida de la función:

    let misHelados = hacerHelados(3);
    console.log(misHelados); //Mostrara en consola 'helado helado helado'

**parametros:**
 Son las variable que escribimos cuando definimos una función.

 **argumentos:**
 Son los valores que enviamos cuando invocamos una función.

 **scope o ambito:**
El scope es el alcance que tiene una variable, es decir desde donde podemos acceder a ella, los scope esta definidos por las funciones.

Cuando una variable es definida dentro de una función su alcance el local por lo cual no podrémos acceder a ella desde fuera de la función.

    function hola (){
        let saludo = 'Hola ¿que tal?
        return saludo
    }

    console.log(saludo); // Uncaught ReferenceError: saludo is not defined

Cuando declaramos la variable fuera esta tendra una alcance global es decir todos podrán acceder a ella.

    let saludo = 'Hola Mundo';;

    function hola(){
        return saludo;
    }

    console.log(saludo); // esta mostrará el valor que tenga.

## Componentes de un IF

Nos permite evaluar condiciones y obtener diferentes resultados segun sus evaluaciones.

*Condición simple:*

    if (condicion){
        // Código a ejecutar si la condición es vereadera.
    }

*Condición con bloque else

La condición **Else** se ejecuta cuando la condición del if es falsa. Es importante comentar que el **Else** es opcional.

    if (condición){
        // Código a ejecutar si la condición es verdadera.
    }else{
        // Código a ejecutar si la condición es falsa.
    }

La cóndición **else if** es una validación que se realiza si la primera es falsa. Se puede tener tantos **else if** como se quiera pero solo uno puede ser verdadero, si ninguno es verdadero entrara a la condición del **else**.

    if (condición){
        // código a ejecutar si la condición es verdadera.
    }else if (otra condición){
        // Código a ejecutar si la otra codición es verdadera 
    }else{
        // Código a ejecutar si todas las condiciones son falsas.
    }

Es una buena practica poner un valor de default a las variables antes de ser usadas ya que de esta manera se identifica que tipo de datos va a manejar.

    let texto = ''; //un texto vacio
    let numero = 0; // un número vacío.

 
## Los Arrays

Los arrays nos permite generar colecciones de datos.

Utilizamos corchetes para indicar inicio \[ y fin \] , dentro de los corchetes podemos utilizar cualquier tipo de dato. ES decir, podemos tener en un mismo array tipos de datos string, number, boolean y demás.

    let miArray = ['start wars',true, 23];

Cada array ocupa una posición numerada concida como índice. La primera posición del array es siempre 0.

    let pelisFavoritas = ['Star Wars','Kill Bill','Alien];

Para acceder a los elementos del array nombramos al array y dentro de los corchetes indicamos el indice al que queremos acceder.

    pelisFavoritas[2];  // accedemos a la pelicula de Alien. el índice 2 del array.

**Longitud del array:¨**

Esta propiedad nos dice cuantos elementos hay dentro del array. Primero nombramos el array seguido de un punto ponemos la palabra **length**.

    pelisFavoritas.length;  // Devuelve 3, el número de elementos del array.

## Métodos de Array.

En javascript los arrays son un tipo especial de datos, y es por eso que disponen de métodos muy utiles a la hora de trabjar con la información que hay adentro.

Cuando una función le pertenece a un objeto, en este caso nuestro array, la llamamos **método**.

**.push()** - Agrega uno o varios elementos al final del array.
* __Recibe__ Uno o mas elementos como parámetros.
* __retorna__ La nueva logitud del array.

let colores = ['Rojo','Naranja','Azul'];    
    
    colores.push('Violeta');

    console.log(colores); //['Rojo','Naranja','Azul','Violeta']

    colores.push('Gris','Oro');
    
    console.log(colores); // ['Rojo','Naranja','Azul','Violeta','Gris','Oro']

**.pop()** -Elemina el ultimo elemento del array.

* __No recibe__ parametros.
* __Devuelve__ el parametro eliminado.

Ejemplo:

    let series = ['Mad Men','Breaking Bad','The Sopranos'];


//Creamos una variable para guardar los que devuelve .pop();
    
    let ultimaSerie = series.pop();

    console.log(series); //[Mad Men','Breaking Bad']
    console.log(ultimaSerie); // ['The Sopranos']


**.shift()**
Elimina el primer elemento de un array.
* __No recibe__ parametros.
* __Devuelve__ el elemento eliminado.

Ejemplo:

    let nombres = ['Frida','Diego','Sofia'];

    // Creamos una variable para guardar lo que devuelve .shift()
    let primerNombre = nombres.shift();

    console.log(nombres); // ['Diego','Sofia'];
    console.log(primerNombre); // ['Frida']

**.unshift()**
Agrega uno o varios elementos al principio de un array.

* __Recibe__ uno o más elementos como parámetros.
* __Retorna__ la nueva longitud del array.

Ejemplo: 

    let marcas = ['Audi'];

    marcas.unshift('Ford');
    console.log(marcas); // ['Ford','Audi']

    Marcas.unshift('Ferrari','BMW');
    console.log(marcas); // ['Ferrari','BMW','Ford','Audi']


**.join()**
Une los elementos de un array utilizando el separador que le indiquemos en caso de que no se le especifique *se utilizan las comas por defauld*

* __Recibe__ un separador (string), es opcional.
* __Retorna__ un string con los elementos unidos.

Ejemplo: 

    let dias = ['Lunes','Martes','Jueves'];

    let separadosPorComas = dias.join();
    console.log(separadosPorComas); //'Lunes,Martes,Jueves'

    Let separadosPorGuin = dias.join('-');
    console.log(separadosPorGuion); // 'Lunes- Martes - Jueves '

**.idexOf()**

Busca en el array elemento que recibe como parametro.

* __Recibe__ un elemento a buscar en el array.
* __Retorna__ el primer índice donde encontró lo que buscábamos. Si no le encuentra, ***retorna un -1***.

Ejemplo:

    let frutas = ['Manzana','Pera','Frutilla'];
    
    frutas.indexOf('Frutilla');  // Encontró lo que buscaba, devuelve 2 , el indice del elemento.

    frutas.indexOf('Banana'); // No se encontro lo que buscaba. Devuelve -1


**.lastIndexOf()**

Es similar al IndexOF() con la diferencia que empieza a buscar de atras hacia adelante.

En caso de haber elementos repetidos, devuelve la posición del primer elemento que encuentre osea el ultimo si miramos de izquierda a derecha.

Ejemplo:

    let clubes = ['Racing','Boca','Lanús','Boca'];

    clubes.lastIndexOf('Boca'); //Encontró lo que buscaba. Devuelve 3

    clubes.lastIndexOf('River'); //No encontro lo que buscaba. Devuelve -1

**.includes()**

También es similar al indexOf() con la diferencia que devuelve un booleano.

* __Recibe__ un elemento a buscar en el array.
* __Retorna__ true si encontró lo que buscábamos, false en caso contrario.

Ejemplo:

    let frutas = ['Manzana','Pera','Frutilla'];

    fruta.includes('Frutilla'); // Encontró lo que buscaba. Devuelve true.

    fruta.includes('Banana'); // No encontró lo que buscaba. Devuelve False.







Citas:

[CheatSheet](https://htmlcheatsheet.com/js/)  .- Son ejemplos de notas para los temas para hacerlo con los temas que voy revisando.



