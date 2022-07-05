const app = document.getElementById("root");
//Creat IMG with SRC as logo.png
const logo = document.createElement("img");
logo.src = "logo.png";
//Append the new logo to the file
//Create div with class of container
const container = document.createElement("div");
container.setAttribute("class", "container");
//append both logo and empty container do app(root)
app.appendChild(logo);
app.appendChild(container);

//basic http req using XMLHttpRequest

// //Open connection using GET request on the URL endpoint
const request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  //JSON data acess here
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300); //limit text content to up to 300chars
      p.textContent = `${movie.description}...`;
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Error, not working`;
    app.appendChild(errorMessage);
  }
};

request.send();
//DOM MANIP
