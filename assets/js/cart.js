const cart_array = JSON.parse(localStorage.getItem("cart"))

let cart_sec;
let left_div;
let image;
let right_div;
let r_name;
let r_desc;
let item_no;
let quantity;
let price;
let buy_a;

for(let i =0; i< cart_array.length; i++){

    cart_sec = document.createElement("div");
    cart_sec.setAttribute("class", "sec-1");
    
    left_div = document.createElement("div");
    left_div.setAttribute("class", "left");
    cart_sec.append(left_div);
    
    image = document.createElement("img");
    image.setAttribute("src", cart_array[i]["image"]);
    image.setAttribute("alt",cart_array[i]["alt"]);
    left_div.append(image);
    
    right_div = document.createElement("div")
    right_div.setAttribute("class","right");
    cart_sec.append(right_div)
    
    r_name = document.createElement("p")
    r_name.setAttribute("class", "para")
    r_name.innerText = cart_array[i]["name"];
    right_div.append(r_name)
    
    r_desc = document.createElement("p")
    r_desc.setAttribute("class","fir-para");
    r_desc.innerText = cart_array[i]["about"];
    right_div.append(r_desc)
    
    item_no = document.createElement("p")
    item_no.setAttribute("class","sec-para");
    item_no.innerText = cart_array[i]["id"];
    right_div.append(item_no)
    
    quantity = document.createElement("p")
    quantity.setAttribute("class","thi-para");
    quantity.innerText = "Quantity - 1";
    right_div.append(quantity)
    
    price = document.createElement("p")
    price.setAttribute("class","price");
    price.innerText = cart_array[i]["price"];
    right_div.append(price)
    
    buy_a = document.createElement("a")
    buy_a.setAttribute("href", "../pages/buy_now.html")
    buy_a.setAttribute("class", "buy-btn btn btn-light")
    buy_a.innerText = "Buy Now";
    cart_sec.append(buy_a)
    
    document.querySelector("section").append(cart_sec)
}



let array = JSON.parse(localStorage.getItem("card"))

// getting the id in the url
const url = window.location.search;
const url_params = new URLSearchParams(url);
const get_id = url_params.get("id");
// console.log(get_id);

// Getting the corresponding object through id
let cart_obj = array.find(function (product) {
    let check_id = product["id"]
    if (get_id == check_id) {
        return true;
    }

})
cart_array.push(cart_obj)
localStorage.setItem("cart",JSON.stringify(cart_array))
