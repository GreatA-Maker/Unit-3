let price;

let cart = JSON.parse(localStorage.getItem("foodCart"));

let totalPrice = 0;

showItems()

function showItems(){
     cart.forEach(function(el, index){

        let tr = document.createElement("tr");

        let image1 =  document.createElement("img");
        image1.src = el.image;

        let name1 = document.createElement("p");
        name1.textContent = `${el.name}`;

        let price2 = document.createElement("p");
        price2.textContent = `₹ ${el.price}`;

        let delete1 = document.createElement("button");
        delete1.innerHTML = "Remove";
        delete1.onclick = function(){
            remove(el);
        }

        tr.append(image1,name1,price2,delete1);

        var tbody = document.getElementById("tbody");
        tbody.append(tr);

        total = cart.length*el.price;
     });
}

function remove(el){
    cart.forEach(function(item,index){
        if(el.name == item.name){
            cart.splice(index, 1);
        }

    });
    localStorage.setItem("foodCart",JSON.stringify(cart));
    alert("Item has been Removed");
    window.location.reload();
}

document.getElementById("items").innerHTML = `Total Items : ${cart.length}`;
document.getElementById("totprice").innerHTML = `Total Price : ${total}`;


