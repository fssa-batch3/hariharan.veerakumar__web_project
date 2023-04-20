let cart_array = JSON.parse(localStorage.getItem("cart"));
let array = JSON.parse(localStorage.getItem("card"));
let match = false;

// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");


// Getting the corresponding object through id
let cart_obj = array.find(function (product) {
    let check_id = product["id"]
    if (get_id == check_id) {
        return true;
    }
})
console.log(cart_obj);


if(match){
    alert("This product is already in your cart");
    window.location.href = "../pages/Sales.html";
}
else{
    cart_array.push(cart_obj)
}


// let cart_sec;
// let can_btn;
// let left_div;
// let image;
// let right_div;
// let r_name;
// let r_desc;
// let item_no;
// let quantity;
// let price;
// let buy_a;

// for(let i =0; i< cart_array.length; i++){

//     cart_sec = document.createElement("div");
//     cart_sec.setAttribute("class", "sec-1");
    
//     can_btn = document.createElement("i")
//     can_btn.setAttribute("id", "cancel")
//     can_btn.setAttribute("class", "fa fa-times-circle")
//     can_btn.setAttribute("type", "click")
//     cart_sec.append(can_btn)

//     left_div = document.createElement("div");
//     left_div.setAttribute("class", "left");
//     cart_sec.append(left_div);
    
//     image = document.createElement("img");
//     image.setAttribute("class", "img")
//     image.setAttribute("src", cart_array[i]["image"]);
//     image.setAttribute("alt",cart_array[i]["alt"]);
//     left_div.append(image);
    
//     right_div = document.createElement("div")
//     right_div.setAttribute("class","right");
//     cart_sec.append(right_div)
    
//     r_name = document.createElement("p")
//     r_name.setAttribute("class", "para")
//     r_name.innerText = cart_array[i]["name"];
//     right_div.append(r_name)
    
//     r_desc = document.createElement("p")
//     r_desc.setAttribute("class","fir-para");
//     r_desc.innerText = cart_array[i]["about"];
//     right_div.append(r_desc)
    
//     item_no = document.createElement("p")
//     item_no.setAttribute("class","sec-para");
//     item_no.innerText = cart_array[i]["id"];
//     right_div.append(item_no)
    
//     quantity = document.createElement("p")
//     quantity.setAttribute("class","thi-para");
//     quantity.innerText = "Quantity - 1";
//     right_div.append(quantity)
    
//     price = document.createElement("p")
//     price.setAttribute("class","price");
//     price.innerText = cart_array[i]["price"];
//     right_div.append(price)
    
//     buy_a = document.createElement("a")
//     buy_a.setAttribute("href", "../pages/buy_now.html")
//     buy_a.setAttribute("class", "buy-btn btn btn-light")
//     buy_a.innerText = "Buy Now";
//     cart_sec.append(buy_a)
    
//     document.querySelector("section").append(cart_sec)
// }



localStorage.setItem("cart",JSON.stringify(cart_array))

const cancel = document.getElementById("cancel");
cancel.addEventListener("click", function(event){
    event.preventDefault();

    let Index = cart_array.indexOf(cart_obj)
    let msg = confirm("Are you sure want to remove this product from your cart")
    if (msg !== true) {
    return
    }
else {
    cart_array.splice(Index, 1)
    localStorage.setItem("cart", JSON.stringify(cart_array))
  
}
})
