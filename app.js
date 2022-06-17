display = document.querySelector(".display");

// document.querySelector("body").addEventListener("click", (event) => {
//   if (event.target.classList.contains("button")) {
//     generateRandomAnimal();
//   }
// });

const generateRandomAnimal = async () => {
  try {
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    let res = await fetch(url);
    if (!res.ok) {
      alert(`Something went wrong:${res.status}`);
      throw new Error();
    }
    let data = await res.json();
    renderAnimalData(data);
  } catch (error) {
    alert(error);
  }
};

const renderAnimalData = (data) => {
  const { name, animal_type, geo_range, habitat, image_link, latin_name } =
    data;

  display.innerHTML = `<ul>
    <li><img src="${image_link}" alt="img" width="50%"/></li>
    <li>Name: ${name}</li>
    <li>Type: ${animal_type}</li>
    <li>Geo Range: ${geo_range}</li>
    <li>Habitat: ${habitat}</li>
    <li>Latin Name: ${latin_name}</li>
  </ul>`;
};

setInterval(generateRandomAnimal, 5000);
