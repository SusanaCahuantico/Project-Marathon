const personajes = document.getElementById('personajes');

const cardJSON = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(datos => {
        list(datos);
      });
  };
  cardJSON();


  const list = (datos) => { 
    let mostrar = "";
    datos.forEach((element) => {
      console.log(element.name)
      console.log(element.username)
      console.log(element.email)
      console.log(element.address.city)
      console.log(element.website)
      console.log(element.company.name)
      mostrar += `
      <section id="" class="col-md-4 col-xs-2" >`;
      mostrar += `
      <div class="caracteristicas"> 
       <div class="imglogo">
       <img id="imagenlogo" href="" src="https://dummyimage.com/200x200/024983/ffffff&text=website"/>
       <div>
       <ol class="center">
       <li>${element.username}</li>
       </ol>
       </div>

       <p>Name: ${element.name}</p>
          <p class="tittle">Email: ${element.email} </p> 
          <p> Especie: Company: ${ element.company.name} </p>
          <p> City:: ${element.address.city} </p>
         `;
         mostrar += `  
         </div>
        </div>
      </section>`;
         
    });
    personajes.innerHTML = mostrar;
  };