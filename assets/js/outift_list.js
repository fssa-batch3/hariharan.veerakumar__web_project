
  let top_outfit = JSON.parse(localStorage.getItem("top_card"));

  // new array
  // for (let i = 0; i < create_card.length; i++) {
  //   top_outfit.push(create_card[i]);
  // }

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

  productList(top_outfit, ".whole-div-1");
  
  localStorage.setItem("top_card", JSON.stringify(top_outfit));

 
 

  // bottom card
  let bottom_card_div;
  let bottom_name;
  let bottom_outfit = JSON.parse(localStorage.getItem("bottom_card"));

  // new array
  // for (let i = 0; i < create_card_1.length; i++) {
  //   bottom_outfit.push(create_card_1[i]);
  // }
  productList(bottom_outfit,".whole-div-2");

  localStorage.setItem("bottom_card", JSON.stringify(bottom_outfit));

  // for (let i = 0; i < bottom_outfit.length; i++) {
  //   bottom_card_div = document.createElement("div")
  //   bottom_card_div.setAttribute("class", "sale-box")

  //   image = document.createElement("img")
  //   image.setAttribute("src", bottom_outfit[i]["image"])
  //   image.setAttribute("alt", bottom_outfit[i]["alt"])
  //   bottom_card_div.append(image)

  //   top_name = document.createElement("p")
  //   top_name.setAttribute("class", "name")
  //   top_name.innerText = bottom_outfit[i]["name"]
  //   bottom_card_div.append(top_name)

  //   rupees = document.createElement("pre")
  //   rupees.setAttribute("class", "price")
  //   rupees.innerText = bottom_outfit[i]["price"];
  //   bottom_card_div.append(rupees)

  //   dis_money = document.createElement("del")
  //   dis_money.setAttribute("class", "price")
  //   dis_money.innerText = bottom_outfit[i]["dis_price"];
  //   rupees.prepend(dis_money)

  //   buy_a = document.createElement("a")
  //   buy_a.setAttribute("href", "../pages/buy_now.html")
  //   buy_a.setAttribute("class", "btn-1")
  //   buy_a.innerText = "Buy now"
  //   bottom_card_div.append(buy_a)


  //   cart_a = document.createElement("a")
  //   cart_a.setAttribute("href", "../pages/my_cart.html")
  //   cart_a.setAttribute("class", "btn-2")
  //   cart_a.innerText = "Add to cart"
  //   bottom_card_div.append(cart_a)

  //   crud_div = document.createElement("div")
  //   crud_div.setAttribute("class" , "crud_features")
  //   bottom_card_div.append(crud_div)
  
  //   update_a = document.createElement("a")
  //   update_a.setAttribute("href","../pages/outfit_top_upload.html?id=" + bottom_outfit[i]["id"])
  //   update_a.setAttribute("id" , "update")
  //   update_a.innerText = "Edit"
  //   crud_div.append(update_a)

  //   document.querySelector(".whole-div-2").append(bottom_card_div);
  // }

  // shoes card
  let shoe_card_div;
  let shoe_name;
  let shoes = JSON.parse(localStorage.getItem("shoe_card"));
  
  productList(shoes,".whole-div-3");

  localStorage.setItem("shoe_card", JSON.stringify(shoes));

  // for (let i = 0; i < shoes.length; i++) {
  //   shoe_card_div = document.createElement("div")
  //   shoe_card_div.setAttribute("class", "sale-box")

  //   image = document.createElement("img")
  //   image.setAttribute("src", shoes[i]["image"])
  //   image.setAttribute("alt", shoes[i]["alt"])
  //   shoe_card_div.append(image)

  //   shoe_name = document.createElement("p")
  //   shoe_name.setAttribute("class", "name")
  //   shoe_name.innerText = shoes[i]["name"]
  //   shoe_card_div.append(shoe_name)

  //   rupees = document.createElement("pre")
  //   rupees.setAttribute("class", "price")
  //   rupees.innerText = shoes[i]["price"];
  //   shoe_card_div.append(rupees)

  //   dis_money = document.createElement("del")
  //   dis_money.setAttribute("class", "price")
  //   dis_money.innerText = shoes[i]["dis_price"];
  //   rupees.prepend(dis_money)

  //   buy_a = document.createElement("a")
  //   buy_a.setAttribute("href", "../pages/buy_now.html")
  //   buy_a.setAttribute("class", "btn-1")
  //   buy_a.innerText = "Buy now"
  //   shoe_card_div.append(buy_a)


  //   cart_a = document.createElement("a")
  //   cart_a.setAttribute("href", "../pages/my_cart.html")
  //   cart_a.setAttribute("class", "btn-2")
  //   cart_a.innerText = "Add to cart"
  //   shoe_card_div.append(cart_a)


  //   document.querySelector(".whole-div-3").append(shoe_card_div);
  // }
  localStorage.setItem("shoe_card",JSON.stringify(shoes))