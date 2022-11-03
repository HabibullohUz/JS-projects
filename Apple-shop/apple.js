const apple_products = [
     {
          img: "./assets/products/Image.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-1.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-2.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-3.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-4.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-5.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-6.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-5.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-4.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-2.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
     {
          img: "./assets/products/Image-3.jpg",
          title: "Apple Watch",
          type: "Series 5 SE",
          price: 529.99,
     },
]


// const contentFrame = document.querySelector('.content_frame')


function showAppleProducts() {
     const content_frame = document.querySelector('.content_frame')

     apple_products.forEach((product, index, arr) => {

          content_frame.innerHTML += `
               <div class="card">
                 <img src="${product.img}" alt="">
                 <div class="card-body">
                   <h5 class="product_title">${product.title}</h5>
                   <p class="product_type">${product.type}</p>
                   <p class="product_price">${product.price}</p>
                   <a href="#" class="btn btn-dark"><img src="./assets/add-bag.svg" alt=""></a>
                 </div>
               </div>
          `
     })
}
showAppleProducts()