
// /////accordion ///

// const accordionAction =document.querySelectorAll("[data-accordion-action]");
// const tonggleAccordion = function(){this.classList.toggle("activec");}
// addEventOnElem(accordionAction,"click",tonggleAccordion);

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
// console.log(imgPosition)
const imgContainer = document.querySelector('.aspect-ratio-169');
const dotItem = document.querySelectorAll(".dot");
let imgNummber = imgPosition.length
let index = 0
imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        slider(index)
    })
})
function imgSlide(){
    index++;
    if(index>=imgNummber){index=0} 
    slider(index)
}
function slider(index){
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,5000)




const itemssliderbar = document.querySelectorAll(".cartegory-left-li");
itemssliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})



////// product ///
const bigImg =document.querySelector(".product-content-left-big-img img");
const smalImg = document.querySelectorAll(".product-content-left-small-img img");
    smalImg.forEach(function(imgItem,x){
        imgItem.addEventListener("click",function(){
            bigImg.src = imgItem.src
        })
    })
///// js đocut trang chủ 

var product = [
]
var pro = [];

function saveproduct() {
sessionStorage.setItem('shopping', JSON.stringify(pro));
}
// đẩy mảng product vào local
function Save() {
localStorage.setItem('listProduct', JSON.stringify(product))
}

//lấy sản phẩm 
function load() {
product = JSON.parse(localStorage.getItem('listProduct'));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
load();
}
if (localStorage.getItem("listProduct") == null) {
Save();
}
var listLocal = function () {
var listproduct1 = "";
for (var i in product) {
    var data = JSON.parse(JSON.stringify(product[i]))
        var 
        listproduct1 = '<div class="cart">';
        listproduct1 += '<a ><img  class="anh1" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" src="img/' + data.img + '" alt="..."></a>';
        listproduct1 += '<div class="card-title" ><a href="'+data.link+'"  class="proo" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '">' + data.name + '</a></div>';
        listproduct1 += '<div class="price">' + data.price + '₫</div>';
        listproduct1 +='<span style="--clr: rgb(255, 89, 0)" class="pricea">' + data.pricea +'<sup>%</sup></span>'
        listproduct1 += '<span class="add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listproduct1 += '<a>';
        listproduct1 += '<i class="bx bx-shopping-bag"></i>';
        listproduct1 += '</a>';
        listproduct1 += '</span>';
        listproduct1 += '</div>';
        listproduct1 += '</div>';
        document.getElementById("banchay").innerHTML += listproduct1;
}
Save();
                    
}
listLocal();



