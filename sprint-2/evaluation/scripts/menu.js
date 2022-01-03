function getrandomPrice(max){
    return Math.floor(Math.random()*max)+100;
}


let price1;
let carttotal = 0;
let cartItems = JSON.parse(localStorage.getItem("foodCart")) || [];

async function showItems(){
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

    let res = await fetch(url);

    let main = await res.json();

    let data = main.meals;

    return(data);

}

async function displayItems(){
    let data = await showItems();
    console.log(data);

    if(data===undefined){
        return false;
    }

    data.forEach(function(el){

        let div1 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.strMealThumb;

        let name = document.createElement("p");
        name.textContent = el.strMeal;

        let price = document.createElement("p");
        price1 = getrandomPrice(400);
        price.textContent = `₹ ${price1}`;

        let addtoCart = document.createElement("button");

        addtoCart.onclick = function(){
            let obj1 = {
                image: el.strMealThumb,
                name: el.strMeal,
                price: price1,

            };

            let x = 0;
            cartItems.forEach(function(el){
                if(el.name==obj1.name){
                    x++;
                }
            });

            if(x==0){
                cartItems.push(obj1);
                localStorage.setItem("foodCart",JSON.stringify(cartItems));
                carttotal++;
            }else{
                alert("Item is Already Present in the cart");
            }

            document.getElementById("carttotal").innerHTML = `Cart Items : ${carttotal}`;
        }

        addtoCart.textContent = "Add to Cart";

        let container = document.getElementById("container");

        div1.append(image,name,price,addtoCart);
        container.append(div1);


    })


}

displayItems()