const url="https://anugraph.com/files/WPSilfen/wp-json/wp/v2/product?per_page=100"

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });
function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}

 function showProduct( product){
     console.log(product);
     const template = document.querySelector("#smallProductTemplate").content;

     const copy = template.cloneNode(true);
     copy.querySelector(".productName").textContent=product.productname;
     copy.querySelector( "img"  ).src =product.image ;
     copy.querySelector(".price").textContent = `${product.price}`;
copy.querySelector("a").href +=product.id;
// copy.querySelector(".description").textContent=product.description
       const parent = document.querySelector("main");
       parent.appendChild(copy);

 }