const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://anugraph.com/files/WPSilfen/wp-json/wp/v2/product/" + id;

console.log(url);
// const options={
//     headers:{
//         "x-apikey":"6152e0afdfa7346e2f9690f0"
//     },
// };

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    productlist(data);
  });
  
function productlist(product) {
  console.log(product);
  // document.querySelector("a").href = "productpage.html?id=" + product.id;
  document.querySelector(".productName").textContent=product.productname;

  document.querySelector(".productimage").src = product.image;
document.querySelector(".price").textContent = `${product.price}`;
document.querySelector(".smallimg1").src=product.image_left;
document.querySelector(".smallimg2").src=product.image_inside;

  document.querySelector(".description").textContent = product.description;


}
var poke1 = document.getElementById('poke1');
    var cmp = document.getElementById('counter');
    poke1.addEventListener('click', myfonction1)
    function myfonction1() {
      cmp.innerHTML = parseInt(cmp.innerHTML) -1;}

      var poke2 = document.getElementById('poke2');
    var cmp = document.getElementById('counter');
    poke2.addEventListener('click', myfonction)
    function myfonction() {
      cmp.innerHTML = parseInt(cmp.innerHTML) +1;}