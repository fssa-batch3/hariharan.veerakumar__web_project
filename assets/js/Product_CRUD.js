
function createProduct (product_object) {
    let newCard = JSON.parse(localStorage.getItem("card"));
    // console.log(newCard);

    newCard.push(product_object);
    // console.log(newCard);

    localStorage.setItem("card", JSON.stringify(newCard));

    alert ("Successfully added")
    window.location.href = "../pages/Sales.html";

}




let card = [
    // index = 0
    {
      image: "./../assets/images/dumbbells.jpg",
      name: "Dumb Bells",
      alt: "dumbbells image",
      dis_price: "Rs.1000",
      price: "          Rs.999",

    },
    // index = 1
    {
      image: "./../assets/images/barbells_image.jpg",
      name: "Bar Bells",
      alt: "Bar Bells image",
      dis_price: "Rs.1500",
      price: "          Rs.1299",

    },
    // index = 2
    {
      image: "./../assets/images/INCLINE_BENCH_PRESS.jpg",
      name: "Incline Bench Press",
      alt: "incline bench press image",
      dis_price: "Rs.16000",
      price: "          Rs.12999",

    },
    // index = 3
    {
      image: ".././assets/images/CABLES-AND-PULLEYS.png",
      name: "Cables and Pulleys",
      alt: "cables and pulleys image",
      dis_price: "Rs.16000",
      price: "          Rs.12999",

    },
    // index = 4
    {
      image: ".././assets/images/PULLUP-BAR.png",
      name: "Pull Up Bar",
      alt: "pull up bar image",
      dis_price: "Rs.5000",
      price: "          Rs.3999",

    },
    // index = 5
    {
      image: ".././assets/images/LEG-EXTENSION-MACHINE.png",
      name: "Leg  Machine",
      alt: "leg machine image",
      dis_price: "Rs.10000",
      price: "          Rs.8999",

    },

  ]




  // card
  let card_div;
  let image;
  let eq_name;
  let rupees;
  let dis_money;
  let buy_a;
  let cart_a;

  let create_card = JSON.parse(localStorage.getItem("card"));
  // console.log(create_card);
  card = create_card;

  // const card_length = card.length

  for (let i = 0; i < card.length; i++) {

    const user = card[i]


    card_div = document.createElement("div")
    card_div.setAttribute("class", "sale-box")

    image = document.createElement("img")
    image.setAttribute("src", card[i]["image"])
    image.setAttribute("alt", card[i]["alt"])
    card_div.append(image)

    eq_name = document.createElement("p")
    eq_name.setAttribute("class", "name")
    eq_name.innerText = card[i]["name"]
    card_div.append(eq_name)

    rupees = document.createElement("pre")
    rupees.setAttribute("class", "price")
    rupees.innerText = card[i]["price"];
    card_div.append(rupees)

    dis_money = document.createElement("del")
    dis_money.setAttribute("class", "price")
    dis_money.innerText = card[i]["dis_price"];
    rupees.prepend(dis_money)

    buy_a = document.createElement("a")
    buy_a.setAttribute("href", "./../pages/details.html?name=" + user["name"]);
    buy_a.setAttribute("class", "btn-1")
    buy_a.innerText = "Buy now"
    card_div.append(buy_a)


    cart_a = document.createElement("a")
    cart_a.setAttribute("href", "../pages/my_cart.html")
    cart_a.setAttribute("class", "btn-2")
    cart_a.innerText = "Add to cart"
    card_div.append(cart_a)


    document.querySelector(".whole-div.container-fluid").append(card_div);
  }