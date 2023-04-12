const top_outfit = JSON.parse(localStorage.getItem("top_card"));



  function productList(ar, selector) {
    let top_card_div;
    let image;
    let top_name;
    let rupees;
    let dis_money;
    let buy_a;
    let cart_a;
    let crud_div;
    let update_a;


    // old array
    for (let i = 0; i < ar.length; i++) {
      top_card_div = document.createElement("div")
      top_card_div.setAttribute("class", "sale-box")

      image = document.createElement("img")
      image.setAttribute("src", ar[i]["image"])
      image.setAttribute("alt", ar[i]["alt"])
      top_card_div.append(image)

      top_name = document.createElement("p")
      top_name.setAttribute("class", "name")
      top_name.innerText = ar[i]["name"]
      top_card_div.append(top_name)

      rupees = document.createElement("pre")
      rupees.setAttribute("class", "price")
      rupees.innerText = ar[i]["price"];
      top_card_div.append(rupees)

      dis_money = document.createElement("del")
      dis_money.setAttribute("class", "price")
      dis_money.innerText = ar[i]["dis_price"];
      rupees.prepend(dis_money)

      buy_a = document.createElement("a")
      buy_a.setAttribute("href",  "../pages/details_outfit.html?id=" + ar[i]["id"])
      buy_a.setAttribute("class", "btn-1")
      buy_a.innerText = "Buy now"
      top_card_div.append(buy_a)

      cart_a = document.createElement("a")
      cart_a.setAttribute("href", "../pages/my_cart.html?id=" + ar[i]["id"])
      cart_a.setAttribute("class", "btn-2")
      cart_a.innerText = "Add to cart"
      top_card_div.append(cart_a)

      crud_div = document.createElement("div")
      crud_div.setAttribute("class" , "crud_features")
      top_card_div.append(crud_div)
    
      update_a = document.createElement("a")
      update_a.setAttribute("href","../pages/outfit_top_upload.html?id=" + ar[i]["id"])
      update_a.setAttribute("id" , "update")
      update_a.innerText = "Edit"
      crud_div.append(update_a)
    
      document.querySelector(selector).append(top_card_div);
    }

   
  }

  const create_top_card = [];
  function productAppend(type) {
    const productsection = top_outfit.filter((h) => h.section == type);
    return productsection;
  }
  for (let i = 0; i < productAppend("top").length; i++) {
    create_top_card.push(productAppend("top")[i]);
    // console.log(create_top_card);
  }
  productList(create_top_card, ".whole-div-1");
  


 
 

  // bottom card
  let bottom_card_div;
  let bottom_name;

const create_bottom_card = [];
for(let i = 0; i < productAppend("bottom").length;i++){
 create_bottom_card.push(productAppend("bottom")[i]);
}
  productList(create_bottom_card,".whole-div-2");

  

  // shoes card
  let shoe_card_div;
  let shoe_name;

    const create_shoe_card = [];

  for(let i = 0; i < productAppend("shoe").length;i++){
  create_shoe_card.push(productAppend("shoe")[i]);
  }
  
  productList(create_shoe_card,".whole-div-3");
