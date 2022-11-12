let login = localStorage.getItem('loginq')
console.log(login);
if (login != 'true') {
    alert('login qiling')
    window.location.href = '../login.html'
}
else {
    alert('true')
}

const appleProducts = [
    {
        img: "",
        title: 'Iphone 11 Pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 1000

    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Airpods 2 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 999
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Macbook 13 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 800
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Macbook 14 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 850
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Mac safe',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 1190
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Mac air 13',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 2000
    },
    {
        img: "",
        title: 'Iphone 14 pro max',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 3400
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Magic mouse 2',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 930
    },
    {
        img: "https://pic.clubic.com/v1/images/1809850/raw",
        title: 'Apple tv',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 990

    },
    {
        img: "https://upscalelivingmag.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/06/macbook-pro-and-iphone-apple-products.jpg",
        title: 'Macbook 16 pro',
        text: 'Very expensive but best of the best, camera is great and cinematic mode',
        price: 3000
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
                <p class="price">$ ${apple.price}</p>
                <button onclick="deleteFunc(${index})" class="btn btn-primary">Delete</button>
            </div>
        </div>
        `
    })
}

apples(appleProducts)

function deleteFunc(index) {
    askDelFunc()
    appleProducts.splice(index, 1)
    let copyProducts = [...appleProducts]
    copyProducts.slice(index, 1)
    apples(copyProducts)
}

function askDelFunc() {
    const askCancel = document.querySelector('#askCancel')
    const askDelete = document.querySelector('#askDelete')

    askDelete.addEventListener('click', () => {
        const askDiv = document.querySelector('.askDiv').style.display = 'block'
        deleteFunc(index)
    })

    askCancel.addEventListener('click', () => {
        const askDiv = document.querySelector('.askDiv').style.display = 'none'
    })
}


search.addEventListener('input', (e) => {
    e.preventDefault()
    let copyProducts = [...appleProducts]
    let newFilter = copyProducts.filter((apple, idx) => idx + 1 == e.target.value || apple.title.toLowerCase().includes(e.target.value));
    apples(newFilter)
})


const select = document.querySelector('#select')
select.addEventListener('change', ({ target }) => {
    if (target.value === 'az') {
        appleProducts.sort((a, b) => {
            return a.price - b.price
        })
        apples(appleProducts)
    }
    else if (target.value === 'za') {
        appleProducts.sort((a, b) => {
            return b.price - a.price
        })
        apples(appleProducts)
    }
})
