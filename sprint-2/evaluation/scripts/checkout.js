let submit = document.getElementById("form");

submit.addEventListener("submit",placeOrder);

function placeOrder(e){
    e.preventDefault();

    let user = document.getElementById("user").value;
    let address = document.getElementById("address").value;

    if(user == "" || address == ""){
        alert("Fill Details");
    }else{
        let accepted = setTimeout(function(){
            alert("Your order is accepted");
        },0);

        let cooked = setTimeout(function(){
            alert("Your order is being cooked");
        },3000);

        let ready = setTimeout(function(){
            alert("Your order is ready");
        },8000);

        let delivery = setTimeout(function(){
            alert("Order out for delivery");
        },10000);

        let done1 = setTimeout(function(){
            alert("Order delivered");
        },12000);
        
    }
}