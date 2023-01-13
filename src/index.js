const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breedsList;

document.addEventListener('DOMContentLoaded', function () {
    fetch(imgUrl)
        .then(res => res.json())
        .then((dogImageUrl) => {
            dogImageUrl.message.forEach(dogImageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = dogImageUrl;
                document.body.appendChild(imgElement);
            });
        });
},


    fetch(breedUrl)
        .then((resp) => resp.json())
        .then((results) => {
            breeds = Object.keys(results.message);
            renderBreeds(breeds);
            document
                .getElementById('breed-dropdown')
                .addEventListener('change', (e) => {
                    console.log(breeds);
                    renderBreeds(
                        breeds.filter((breed) => breed.startsWith(e.target.value))
                    );
                });
        }));




const clearBreeds = (element) => {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    };
};

const renderBreeds = (breeds) => {
    let ul = document.getElementById('dog-breeds');
    clearBreeds(ul);
    breeds.forEach((breed) => {
        let li =
            document.createElement('li');
        li.textContent = breed;
        li.addEventListener('click', (e) => {

            e.target.style.color = 'blue';
        });
        ul.appendChild(li);
    });
};




