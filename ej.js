const botonBorrar = document.getElementById('borrar')

const paises = [{Argentina: ['lightskyblue', 'white', 'lightskyblue']},
                {Italia: ['green', 'white', 'red']},
                {Alemania: ['black', 'red', 'yellow']},
                {Francia: ['blue', 'white', 'red']}, 
                {Honduras: ['blue', 'white', 'blue']}, 
                {Holanda: ['red', 'white', 'blue']}, 
                {Colombia: ['yellow', 'blue', 'red']},
                {Peru: ['red', 'white', 'red']},
                {Camerun: ['green', 'red', 'yellow']}];


const mostrarPais = document.getElementById('pais')
let colores = paisAleatorio()
console.log(colores)

function paisAleatorio(){   
      
    const paisRandom = Math.floor (Math.random() *paises.length)               
    mostrarPais.textContent = Object.keys(paises[paisRandom])    
    return Object.values(paises[paisRandom]);
}
  
document.querySelector('#cambiar').addEventListener('click', event =>{
    location.reload()
    paisAleatorio()})

const convinacion= []
function tomarConvinacion(){
    $select1 = document.getElementById('select1').value
    $select2 = document.getElementById('select2').value
    $select3 = document.getElementById('select3').value
    convinacion.push($select1, $select2, $select3)
    
}

enter.addEventListener('click', event =>{
    
    const enter = document.getElementById('enter')
    const $franja1 = document.getElementById('franja1')
    const $select1 = document.getElementById('select1').value
    const $franja2 = document.getElementById('franja2')
    const $select2 = document.getElementById('select2').value
    const $franja3 = document.getElementById('franja3')
    const $select3 = document.getElementById('select3').value

    $franja1.style.backgroundColor = $select1
    $franja2.style.backgroundColor = $select2
    $franja3.style.backgroundColor = $select3  
    tomarConvinacion()
    comprobar()
    event.preventDefault();
})

let $respuesta = document.getElementById('respuesta')
function comprobar(){
    
    if(colores[0].toString() === convinacion.toString()){
        $respuesta.textContent = 'CORRECTO'
    }
    else{
        $respuesta.textContent = 'INCORRECTO'
    }}





