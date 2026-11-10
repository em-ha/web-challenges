console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url);
    //console.log(response);
    const people = await response.json();
    console.log(people.results[2].eye_color);
}

fetchData();
