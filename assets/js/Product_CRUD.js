
function createProduct (product_object) {
    let newCard = JSON.parse(localStorage.getItem("card"));
    // console.log(newCard);

    newCard.push(product_object);
    // console.log(newCard);

    localStorage.setItem("card", JSON.stringify(newCard));

    alert ("Success")

}