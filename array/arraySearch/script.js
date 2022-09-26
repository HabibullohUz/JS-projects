const carArr1 = ['Audi', ' Jiguli', ' Spark', ' Malibu', ' Tico', ' Damas', ' Opel', ' Toyota', ' Matiz', ' Nexia'];

const search = document.querySelector('#search')

function cars(carArr) {
    const cards = document.querySelector('.cards')

    cards.innerHTML = ''
    carArr.forEach((car, index) => {
        cards.innerHTML += `<div class="card col-3">
            <img src="https://media.disneylandparis.com/d4th/en-usd/images/n005941_2028jul10_world_cars-attraction-scenery_16-9_tcm1861-226416.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${index + 1}: ${car}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <button onclick="deleteFunc(${index})" class="btn btn-primary">Delete</button>
            </div>
        </div>`
    })
}

cars(carArr1)

function deleteFunc(index) {
    carArr1.splice(index, 1)
    cars()
}

search.addEventListener('input', (e) => {e.preventDefault()
    let newCopy = [...carArr1]
    let newFilter = newCopy.filter((item, idx) => idx + 1 == e.target.value || item.toLocaleLowerCase().includes(e.target.value));
    cars(newFilter)
})
