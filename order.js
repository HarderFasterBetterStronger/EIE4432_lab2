function calculatePrice(){
    var price = 0
    let drink = document.getElementById("drink")
    var output = document.getElementById("price")
    let small=document.getElementById("small")
    let medium=document.getElementById("medium")
    let large=document.getElementById("large")

    if (drink.value!="none"){
        if (drink.value=="Bubble Milktea"){
                if (small.checked == true){
                    price = 30
                }
                else if (medium.checked == true){
                    price = 35
                }
                else if (large.checked == true){
                    price = 40
                }
            }
            else if (drink.value=="Iced Latte"){
                if (small.checked == true){
                    price = 42
                }
                else if (medium.checked == true){
                    price = 47
                }
                else if (large.checked == true){
                    price = 52
                }
            }
        output.innerHTML = price
        
    } 
    else {
        alert("Please select the drink.")
        small.checked = false;
        medium.checked = false;
        large.checked = false;
    }
}

function validateForm(){
    let name = String(document.getElementById("name").value).trim()
    
    let drink = document.getElementById("drink")

    let small=document.getElementById("small").checked
    let medium=document.getElementById("medium").checked
    let large=document.getElementById("large").checked

    let normal = document.getElementById("Normal").checked
    let less = document.getElementById("Less").checked
    let withoutice = document.getElementById("Without Ice").checked


    let hundred = document.getElementById("100").checked
    let fifty = document.getElementById("50").checked
    let zero = document.getElementById("0").checked

    

    if (name == "") {
        alert("Please enter your name")
        return false
    }

    if (drink.value == "none") {
        alert(" Please select a drink first.")
        return false
    }
    if (!(small || medium || large)) {
        alert("Please select a size.")
        return false
    }
    if (!(normal || less || withoutice)) {
        alert("Please select an ice preference.")
        return false
    }
    if (!(hundred || fifty || zero)) {
        alert("Please select a sweetness level.")
        return false
    }
    return true
}

function placeOrder(event){
    event.preventDefault()
    
    if (validateForm()){
        let name = String(document.getElementById("name")).trim()
        let drink = document.forms["form"]["drink"].value
        let size = document.forms["form"]["size"].value
        let ice = document.forms["form"]["Ice"].value
        let sweetness = document.forms["form"]["Sweetness"].value
        let orderData = [name,drink,size,ice,sweetness]
        localStorage.setItem("orders",orderData)
        alert("Order placed successfully! Thank you for your order.")
        document.getElementById("form").reset() 
        var output = document.getElementById("price")
        output.innerHTML = 0
        
        



    }
    
}

function reset1(){
    var output = document.getElementById("price")
    output.innerHTML = 0
}