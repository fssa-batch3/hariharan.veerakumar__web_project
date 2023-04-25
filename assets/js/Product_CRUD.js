let array = JSON.parse(localStorage.getItem("card"));
const admin_email = JSON.parse(localStorage.getItem("details")); 

if(admin_email == "hari@gmail.com"){
// card
let card_div;
let image;
let eq_name;
let rupees;
let dis_money;
let buy_a;
let cart_a;
let crud_div;
let update_a;

//  array
for (let i = 0; i < array.length; i++) {
  card_div = document.createElement("div")
  card_div.setAttribute("class", "sale-box")

  image = document.createElement("img")
  image.setAttribute("src", array[i]["image"])
  image.setAttribute("alt", array[i]["alt"])
  card_div.append(image)

  eq_name = document.createElement("p")
  eq_name.setAttribute("class", "name")
  eq_name.innerText = array[i]["name"]
  card_div.append(eq_name)

  rupees = document.createElement("pre")
  rupees.setAttribute("class", "price")
  rupees.innerText = array[i]["price"];
  card_div.append(rupees)

  dis_money = document.createElement("del")
  dis_money.setAttribute("class", "price")
  dis_money.innerText = array[i]["dis_price"];
  rupees.prepend(dis_money)

  buy_a = document.createElement("a")
  buy_a.setAttribute("href", "./../pages/details.html?id=" + array[i]["id"]);
  buy_a.setAttribute("class", "btn-1")
  buy_a.innerText = "Buy now"
  card_div.append(buy_a)

  cart_a = document.createElement("a")
  cart_a.setAttribute("href", "../pages/my_cart.html?id="+ array[i]["id"]);
  cart_a.setAttribute("class", "btn-2")
  cart_a.setAttribute("id", "cart")
  cart_a.setAttribute("type","click")
  cart_a.innerText = "Add to cart"
  card_div.append(cart_a)

  crud_div = document.createElement("div")
  crud_div.setAttribute("class" , "crud_features")
  card_div.append(crud_div)

  update_a = document.createElement("a")
  update_a.setAttribute("href","../pages/upload_page.html?id="+ array[i]["id"])
  update_a.setAttribute("id" , "update")
  update_a.innerText = "Edit"
  crud_div.append(update_a)

  document.querySelector(".whole-div.container-fluid").append(card_div);
}
  // create button
  let create_a = document.createElement("a");
  create_a.setAttribute("href", "../pages/create_product.html");

  let create_btn = document.createElement("button");
  create_btn.setAttribute("class", "cr_btn btn btn-success");
  create_btn.innerText= "+ Add product";
  create_a.append(create_btn);

  document.querySelector(".sec-1").append(create_a);
}
// for user
else{
  // card
let card_div;
let image;
let eq_name;
let rupees;
let dis_money;
let buy_a;
let cart_a;
let crud_div;
let update_a;

//  array
for (let i = 0; i < array.length; i++) {
  card_div = document.createElement("div")
  card_div.setAttribute("class", "sale-box")

  image = document.createElement("img")
  image.setAttribute("src", array[i]["image"])
  image.setAttribute("alt", array[i]["alt"])
  card_div.append(image)

  eq_name = document.createElement("p")
  eq_name.setAttribute("class", "name")
  eq_name.innerText = array[i]["name"]
  card_div.append(eq_name)

  rupees = document.createElement("pre")
  rupees.setAttribute("class", "price")
  rupees.innerText = array[i]["price"];
  card_div.append(rupees)

  dis_money = document.createElement("del")
  dis_money.setAttribute("class", "price")
  dis_money.innerText = array[i]["dis_price"];
  rupees.prepend(dis_money)

  buy_a = document.createElement("a")
  buy_a.setAttribute("href", "./../pages/details.html?id=" + array[i]["id"]);
  buy_a.setAttribute("class", "btn-1")
  buy_a.innerText = "Buy now"
  card_div.append(buy_a)

  cart_a = document.createElement("a")
  cart_a.setAttribute("href", "../pages/my_cart.html?id="+ array[i]["id"]);
  cart_a.setAttribute("class", "btn-2")
  cart_a.setAttribute("id", "cart")
  cart_a.setAttribute("type","click")
  cart_a.innerText = "Add to cart"
  card_div.append(cart_a)

  crud_div = document.createElement("div")
  crud_div.setAttribute("class" , "crud_features")
  card_div.append(crud_div)

  document.querySelector(".whole-div.container-fluid").append(card_div);
}

}


// set the array in local storage
localStorage.setItem("card", JSON.stringify(array)); 






