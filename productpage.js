const urlParams = new URLSearchParams(window.location.search);
const id= urlParams.get("id");
const url="https://anugraph.com/files/WPSilfen/wp-json/wp/v2/product/"+id;



fetch( url)
.then (function(res){
    return res.json();
})
.then(function(data){
    productlist(data);
});
function productlist(product){
    console.log(product);
    document.querySelector(".productimage").src=product.image;
    copy.querySelector(".price").textContent = `${product.price}`;

     copy.querySelector(".description").textContent=product.description
}