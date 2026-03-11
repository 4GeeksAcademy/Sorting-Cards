import { Button } from "bootstrap";
import "./style.css";



window.onload = function() {

  let array_cartas = []

  const draw_button = document.querySelector("#button_draw")
  const sort_button = document.querySelector("#button_sort")

  const randomCards = (number) => {    

    array_cartas = []

    let mano_cartas = document.querySelector(".manoCartas");

    mano_cartas.innerHTML = ""

    for (let i=0; i<number; i++){

      let palo = ["♥", "♣", "♦", "♠"]
      let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      let valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

      let palo_carta = palo[Math.floor(Math.random() * palo.length)]

      let indiceRandom = Math.floor(Math.random() * numeros.length)

      let numero_carta = numeros[indiceRandom]
      let valor_carta = valor[indiceRandom]

      let cartaObjeto = {
        numero: numero_carta, 
        palo: palo_carta, 
        valor: valor_carta
      } 

      let nuevaCarta = document.createElement("div");

      nuevaCarta.classList.add("carta")
      nuevaCarta.innerHTML = `
        <p class="valor-superior">${cartaObjeto.numero}</p>
        <p class="baraja">${cartaObjeto.palo}</p>
        <p class="valor-inferior">${cartaObjeto.numero}</p>
      `

      mano_cartas.appendChild(nuevaCarta)

      array_cartas.push(cartaObjeto)
      
      if( cartaObjeto.palo === "♥" || cartaObjeto.palo === "♦"){
          nuevaCarta.classList.remove("carta")
          nuevaCarta.classList.add("carta-roja")
      }  
    }

    console.log(array_cartas)
  };

  draw_button.addEventListener("click", ()=>{
        const q_num = numberInput.value;
        randomCards(q_num)
  })

// la siguien funsion me copia el array, pero tengo qeu ordenarlo

  const sortCards = (array_cartas) => {
  
    let orden_cartas = document.querySelector(".ordenCartas");

    orden_cartas.innerHTML = ""
    

    for(let i=1; i<array_cartas.length; i++){
      
      let isSorted = false
      
      let menor =  i

      for(let j=0; j<array_cartas.length - 1;j++){
        
        if(array_cartas[j].valor > array_cartas[j +1].valor){
          menor = j
          let temp = array_cartas[j]
          array_cartas[j] = array_cartas[j+1]
          array_cartas[j+1] = temp

          isSorted = true
        }
        
      }

      if(!isSorted){
        break;
      }
      

      let fila = document.createElement("div")
      fila.classList.add("fila")
      orden_cartas.appendChild(fila)

      let vuelta = document.createElement("div")
      vuelta.classList.add("contador")
      vuelta.innerHTML = `<p>${i}</p>`
      fila.appendChild(vuelta)
    
      
      for (let k=0; k<array_cartas.length; k++){

        let nuevaCarta = document.createElement("div");

        nuevaCarta.classList.add("carta")
        nuevaCarta.innerHTML = `
         <p class="valor-superior">${array_cartas[k].numero}</p>
          <p class="baraja">${array_cartas[k].palo}</p>
          <p class="valor-inferior">${array_cartas[k].numero}</p>
        `

        fila.appendChild(nuevaCarta)

        if( array_cartas[k].palo === "♥" || array_cartas[k].palo === "♦"){
          nuevaCarta.classList.remove("carta")
          nuevaCarta.classList.add("carta-roja")
        } 

      }
      
    }

         
   };

  sort_button.addEventListener("click", ()=>{

        sortCards(array_cartas)
  })
}
