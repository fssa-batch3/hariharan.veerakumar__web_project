let array = [];

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


let create_card = JSON.parse(localStorage.getItem("card"));


// new array
for(let i = 0; i < create_card.length; i++){
  array.push(create_card[i]);

}
// Old array
for (let i = 0; i < array.length; i++) {

  let user = array[i];

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
  cart_a.setAttribute("href", "../pages/my_cart.html")
  cart_a.setAttribute("class", "btn-2")
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

localStorage.setItem("card", JSON.stringify(array)); 





