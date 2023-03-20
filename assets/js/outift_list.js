let top_outfit = [
    // index = 0
    // {
    //   image: "../assets/images/top_outfit.jpg",
    //   name: "T-shirt",
    //   alt: "top outfit image",
    //   dis_price: "Rs.1000",
    //   price: "          Rs.599",

    // },
    // index = 1
    // {
    //   image: "./../assets/images/white_t-shirt.jpg",
    //   name: "White T-shirt",
    //   alt: "top outfit white t-shirt image",
    //   dis_price: "Rs.1000",
    //   price: "          Rs.499",

    // },
    // index = 2

    // index = 3
    // {
    //   image: "./../assets/images/Sleeve_less.jpg",
    //   name: "Sleeve less T-shirt",
    //   alt: "top outfit sleeve less t-shirt image",
    //   dis_price: "Rs.1000",
    //   price: "          Rs.399",

    // },
    // index = 4
    // {
    //   image: "./../assets/images/blue_t-shirt.jpg",
    //   name: "T-shirt",
    //   alt: "top outfit blue t-shirt image",
    //   dis_price: "Rs.1000",
    //   price: "          Rs.499",

    // },
    // index = 5
    // {
    //   image: "./../assets/images/blue_sleeve_less.jpg ",
    //   name: "Blue Sleeveless",
    //   alt: "top outfit blue sleeveless image",
    //   dis_price: "Rs.1000",
    //   price: "          Rs.399",
    // },



  ];


    let top_card_div;
    let image;
    let top_name;
    let rupees;
    let dis_money;
    let buy_a;
    let cart_a;
    let crud_div;
   let update_a;

    let create_card = JSON.parse(localStorage.getItem("top_card"));

    // new array
    for (let i = 0; i < create_card.length; i++) {
        top_outfit.push(create_card[i]);
    }


// old array
      for (let i = 0; i < top_outfit.length; i++) {
        top_card_div = document.createElement("div")
        top_card_div.setAttribute("class", "sale-box")

        image = document.createElement("img")
        image.setAttribute("src", top_outfit[i]["image"])
        image.setAttribute("alt", top_outfit[i]["alt"])
        top_card_div.append(image)

        top_name = document.createElement("p")
        top_name.setAttribute("class", "name")
        top_name.innerText = top_outfit[i]["name"]
        top_card_div.append(top_name)

        rupees = document.createElement("pre")
        rupees.setAttribute("class", "price")
        rupees.innerText = top_outfit[i]["price"];
        top_card_div.append(rupees)

        dis_money = document.createElement("del")
        dis_money.setAttribute("class", "price")
        dis_money.innerText = top_outfit[i]["dis_price"];
        rupees.prepend(dis_money)

        buy_a = document.createElement("a")
        buy_a.setAttribute("href",  "../pages/details_outfit.html?id=" + top_outfit[i]["id"])
        buy_a.setAttribute("class", "btn-1")
        buy_a.innerText = "Buy now"
        top_card_div.append(buy_a)


        cart_a = document.createElement("a")
        cart_a.setAttribute("href", "../pages/my_cart.html")
        cart_a.setAttribute("class", "btn-2")
        cart_a.innerText = "Add to cart"
        top_card_div.append(cart_a)

        crud_div = document.createElement("div")
        crud_div.setAttribute("class" , "crud_features")
        top_card_div.append(crud_div)
      
        update_a = document.createElement("a")
        update_a.setAttribute("href","../pages/outfit_top_upload.html?id="+ top_outfit[i]["id"])
        update_a.setAttribute("id" , "update")
        update_a.innerText = "Edit"
        crud_div.append(update_a)
      
        document.querySelector(".whole-div-1").append(top_card_div);
      }
      localStorage.setItem("top_card", JSON.stringify(top_outfit));
 
    
    
 

  // bottom


  let bottom_outfit = [
    // index = 0
    {
      image: "../assets/images/bottom_outfit.jpg",
      name: "Track Pant",
      alt: "bottom outfit image",
      dis_price: "Rs.1000",
      price: "          Rs.799",

    },
    // index = 1
    {
      image: "./../assets/images/grey_pant.jpg",
      name: "Grey Track Pant",
      alt: "bottom outfit gray pant image",
      dis_price: "Rs.1000",
      price: "          Rs.899",

    },
    // index = 2
    {
      image: "./../assets/images/Grey_formal_lower.jpg",
      name: "Gray normal Pant",
      alt: "bottom outfit grey normal image",
      dis_price: "Rs.1000",
      price: "          Rs.899",

    },
    // index = 3
    {
      image: "./../assets/images/black_shorts.jpg",
      name: "Black Boxer Shorts",
      alt: "bottom outfit image",
      dis_price: "Rs.1000",
      price: "          Rs.599",

    },
    // index = 4
    {
      image: "./../assets/images/stylish_pant.jpg",
      name: "Stylish Pant",
      alt: "bottom outfit stylish pant image",
      dis_price: "Rs.1500",
      price: "          Rs.1399",

    },
    // index = 5
    {
      image: "./../assets/images/normal_black_pant.jpg",
      name: "Normal Track Pant",
      alt: "bottom outfit black pant image",
      dis_price: "Rs.1200",
      price: "          Rs.999",

    },

  ];

  // card
  let bottom_card_div;
  let bottom_name;

  for (let i = 0; i < bottom_outfit.length; i++) {
    bottom_card_div = document.createElement("div")
    bottom_card_div.setAttribute("class", "sale-box")

    image = document.createElement("img")
    image.setAttribute("src", bottom_outfit[i]["image"])
    image.setAttribute("alt", bottom_outfit[i]["alt"])
    bottom_card_div.append(image)

    top_name = document.createElement("p")
    top_name.setAttribute("class", "name")
    top_name.innerText = bottom_outfit[i]["name"]
    bottom_card_div.append(top_name)

    rupees = document.createElement("pre")
    rupees.setAttribute("class", "price")
    rupees.innerText = bottom_outfit[i]["price"];
    bottom_card_div.append(rupees)

    dis_money = document.createElement("del")
    dis_money.setAttribute("class", "price")
    dis_money.innerText = bottom_outfit[i]["dis_price"];
    rupees.prepend(dis_money)

    buy_a = document.createElement("a")
    buy_a.setAttribute("href", "../pages/buy_now.html")
    buy_a.setAttribute("class", "btn-1")
    buy_a.innerText = "Buy now"
    bottom_card_div.append(buy_a)


    cart_a = document.createElement("a")
    cart_a.setAttribute("href", "../pages/my_cart.html")
    cart_a.setAttribute("class", "btn-2")
    cart_a.innerText = "Add to cart"
    bottom_card_div.append(cart_a)


    document.querySelector(".whole-div-2").append(bottom_card_div);
  }

  // shoes
  let shoes = [
    // index = 0
    {
      image: "../assets/images/shoe_image.jpg",
      name: "Sports Shoes",
      alt: "shoe  image",
      dis_price: "Rs.1000",
      price: "          Rs.899",

    },
    // index = 1
    {
      image: "./../assets/images/white_woakers.jpg",
      name: "White Woakers",
      alt: "white woakers image",
      dis_price: "Rs.2000",
      price: "          Rs.1599",

    },
    // index = 2
    {
      image: "./../assets/images/black_shoes.jpg",
      name: "Black Woakers",
      alt: " black shoe  image",
      dis_price: "Rs.1000",
      price: "          Rs.799",

    },
    // index = 3
    {
      image: "./../assets/images/grey_shoes.jpg",
      name: "Grey Sports Shoes",
      alt: "shoe  image",
      dis_price: "Rs.1200",
      price: "          Rs.899",

    },
    // index = 4
    {
      image: "./../assets/images/blue_running_shoes.jpg",
      name: "Running Shoes",
      alt: " running shoe image",
      dis_price: "Rs.1000",
      price: "          Rs.799",

    },
    // index = 5
    {
      image: "./../assets/images/orange_running_shoes.jpg",
      name: "Casual Shoes",
      alt: "casual shoe image",
      dis_price: "Rs.1000",
      price: "          Rs.699",

    },

  ]

  // card
  let shoe_card_div;
  let shoe_name;

  for (let i = 0; i < shoes.length; i++) {
    shoe_card_div = document.createElement("div")
    shoe_card_div.setAttribute("class", "sale-box")

    image = document.createElement("img")
    image.setAttribute("src", shoes[i]["image"])
    image.setAttribute("alt", shoes[i]["alt"])
    shoe_card_div.append(image)

    shoe_name = document.createElement("p")
    shoe_name.setAttribute("class", "name")
    shoe_name.innerText = shoes[i]["name"]
    shoe_card_div.append(shoe_name)

    rupees = document.createElement("pre")
    rupees.setAttribute("class", "price")
    rupees.innerText = shoes[i]["price"];
    shoe_card_div.append(rupees)

    dis_money = document.createElement("del")
    dis_money.setAttribute("class", "price")
    dis_money.innerText = shoes[i]["dis_price"];
    rupees.prepend(dis_money)

    buy_a = document.createElement("a")
    buy_a.setAttribute("href", "../pages/buy_now.html")
    buy_a.setAttribute("class", "btn-1")
    buy_a.innerText = "Buy now"
    shoe_card_div.append(buy_a)


    cart_a = document.createElement("a")
    cart_a.setAttribute("href", "../pages/my_cart.html")
    cart_a.setAttribute("class", "btn-2")
    cart_a.innerText = "Add to cart"
    shoe_card_div.append(cart_a)


    document.querySelector(".whole-div-3").append(shoe_card_div);
  }
