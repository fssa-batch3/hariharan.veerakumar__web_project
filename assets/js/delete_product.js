let check = true;
let prod_delete = document.getElementById("delete")
prod_delete.addEventListener("click" , function(event){
event.preventDefault();


let Index = array.indexOf(prod_obj)

let msg = confirm("Are you sure want to delete this product")
if (msg !== true) {
    return
}
else {
    array.splice(Index, 1)
    // console.log(array);
    localStorage.setItem("card", JSON.stringify(array))

}
})

