 const form = document.getElementById("form")
 form.addEventListener("submit", function (event) {
     event.preventDefault();

     let id = Date.now();
     let image = document.getElementById("photo").value;
     let alt = document.getElementById("alter").value;
     let p_name = document.getElementById("name").value;
     let p_offer = document.getElementById("offer").value;
     let p_price = document.getElementById("price").value;
     let p_about = document.getElementById("about").value;

     

     let product_object = {
         "id": id,
         "image": image,
         "alt": alt,
         "name": p_name,
         "dis_price": p_offer,
         "price": p_price,
         "about" : p_about,
     }
     let top_array = JSON.parse(localStorage.getItem("top_card"));
     console.log(top_array);

       //  checking array is null or not
        if (localStorage.getItem("top_card") != null){
            top_array = JSON.parse(localStorage.getItem("top_card"))
            top_array.push(product_object); 
       }
       localStorage.setItem("top_card", JSON.stringify(top_array));
       console.log(top_array);

       alert ("Successfully added")
       window.location.href = "../pages/outfit.html";
    })