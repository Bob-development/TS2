import './style.css'

const dataHTML = document.querySelector(".data") as HTMLElement;

//URLS FROM SWAPI
const peopleURL = "https://swapi.dev/api/people/";
const starshipsURL = "https://swapi.dev/api/starships/";
const vehiclesURL = "https://swapi.dev/api/vehicles/";
const planetsURL = "https://swapi.dev/api/planets/";

//GET HTML ELEMENTS
const people = document.querySelector("#people") as HTMLButtonElement;
const starships = document.querySelector("#starships") as HTMLButtonElement;
const vehicles = document.querySelector("#vehicles") as HTMLButtonElement;
const planets = document.querySelector("#planets") as HTMLButtonElement;

//GET DATA ABOUT PEOPLE
setEventsToButton(people, peopleURL);

//GET DATA ABOUT STARSHIPS
setEventsToButton(starships, starshipsURL);

//GET DATA ABOUT VEHICLES
setEventsToButton(vehicles, vehiclesURL);

//GET DATA ABOUT PLANETS
setEventsToButton(planets, planetsURL);




async function getData(url: string) {
  const arr: [] = [];

  const data = await fetch(url);
  const parseData = await data.json();

  await parseData.results.forEach(element => {    
    arr.push(element.name);
  });

  console.log(arr);

  arr.forEach((el)=>{
    const item = document.createElement('div');
    item.textContent = `Name: ${el}`;    

    render(dataHTML, item);
  })
}


function render(node: HTMLElement, elementHTML: HTMLElement) {
  return node.append(elementHTML);
}


function setEventsToButton(btn: HTMLButtonElement, url: string) {
  return btn.addEventListener("click", ()=>{
    [...dataHTML.children].forEach(child => child.remove());
    getData(url);
  })
}