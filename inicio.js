const inputText= document.querySelector("input");
const boton= document.getElementById("boton");
const listaRestaurant= document.getElementById("listaRestaurant");


boton.addEventListener("click", event=>{
  let search= document.getElementById("busqueda").value;
  inputText.value="";
  fetch(`https://developers.zomato.com/api/v2.1/search?q=${search}`, {
  headers: {
    Accept: "application/json",
    "User-Key": "c1c62613c6db5eae3f490085877dda8c"
  }
})
  .then(response => response.json())
  .then(datos =>{
   console.log(datos); 
   renderInfo(datos); 
  })
})


const renderInfo = datos => {
  listaRestaurant.innerHTML = "";
  datos.restaurants.forEach((restaurant) => {
    listaRestaurant.innerHTML += `<div class="restaurant">
    <p>Nombre: ${restaurant.restaurant.name}</p>
    <p>Dirección: ${restaurant.restaurant.location.address}</p>
    <a href="${restaurant.restaurant.events_url}">Visita la página</a>      
    </div>`    
  })
} 
 


