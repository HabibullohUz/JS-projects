const appleProducts = [
    {
        title: 'Iphone 11 Pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: ""

    },
    {
        title: 'Airpods 2 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Macbook 13 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Macbook 14 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Mac safe',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Mac air 13',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Iphone 14 pro max',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: ""
    },
    {
        title: 'Magic mouse 2',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"
    },
    {
        title: 'Apple tv',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://pic.clubic.com/v1/images/1809850/raw"

    },
    {
        title: 'Macbook 16 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        img: "https://upscalelivingmag.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/06/macbook-pro-and-iphone-apple-products.jpg"
    },
];

const search = document.querySelector('#search')
const imgDefault = "https://upscalelivingmag.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/06/macbook-pro-and-iphone-apple-products.jpg"

function apples(apple) {
    const cards = document.querySelector('.cards')

    cards.innerHTML = ''
    apple.forEach((apple, index) => {
        cards.innerHTML +=
            `
        <div class="cart">
            <img src="${apple.img ? apple.img : imgDefault}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${index + 1}: ${apple.title}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <button onclick="deleteFunc(${index})" class="btn btn-primary">Delete</button>
            </div>
        </div>
        `
    })
}

apples(appleProducts)

function deleteFunc(index) {
    appleProducts.splice(index, 1)
    let copy = [...appleProducts]
    copy.slice(index, 1)
    apples(copy)
}

search.addEventListener('input', (e) => {
    e.preventDefault()
    let newCopy = [...appleProducts]
    let newFilter = newCopy.filter((apple, idx) => idx + 1 == e.target.value || apple.title.toLowerCase().includes(e.target.value));
    apples(newFilter)
})
