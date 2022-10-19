function addProduct() {

    document.querySelector('#submit').addEventListener('click', () => {

        const productNameValue = document.querySelector('#name__value').value
        const priceValue = document.querySelector('#price__value').value
        const saleValue = document.querySelector('#sale__value').value
        const pictureValue = document.querySelector('#picture__value').value

        const productName = document.querySelector('.product__name').innerHTML = productNameValue
        const productPrice = document.querySelector('.product__price').innerHTML = priceValue
        const productSale = document.querySelector('.product__sale').innerHTML = saleValue
        const productPicture = document.getElementsByTagName('img').innerHTML = pictureValue
    })
}
addProduct()


function showItems() {

    const main = document.querySelector('.main').innerHTML =

        `
    <div class="card" style="width: 18rem;">
                <p class="product__picture">
                    <img src="" class="card-img-top" alt="">
                </p>

            <div class="product__body">
                <h5 class="product__name">Product name</h5>
                <p class="product__price">22$</p>
                <p class="product__sale">5%</p>
                <a href="#" class="btn btn-primary">delete</a>
            </div>
    </div>
    `
}
showItems()
