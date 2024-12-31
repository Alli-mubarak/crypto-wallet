const auth = document.querySelector(".auth");
const inner = document.querySelector(".inner");
const code = document.querySelector(".code");
const input = document.querySelector("input");
const btn = document.querySelectorAll("button");
let passkey = "1891";
code.innerHTML = passkey;

btn[0].onclick = () => {
input.value.length < 4?input.value = input.value + btn[0].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
     input.style.color = "green";
     setTimeout(()=>{auth.style.zIndex = "1";
     inner.style.zIndex = "2";},2000);
    }
    else if( input.value !== passkey && input.value.length === 4){
     input.style.color = "red";
    }
     else{
         input.style.color = "black";
     }
    
}
btn[1].onclick = () => {
input.value.length < 4?input.value = input.value + btn[1].value:input.value="";
if( input.value === passkey && input.value.length === 4){
    input.style.color = "green";
    setTimeout(()=>{auth.style.zIndex = "1";
        inner.style.zIndex = "2";},2000);
   }
   else if( input.value !== passkey && input.value.length === 4){
    input.style.color = "red";
   }
    else{
        input.style.color = "black";
    }
}
btn[2].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[2].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
}
btn[3].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[3].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
}
btn[4].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[4].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
}
btn[5].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[5].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
 }
 btn[6].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[6].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
 }
 btn[7].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[7].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
 }
 btn[8].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[8].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
 }
 btn[9].onclick = () => {
    input.value = '';
    input.style.color = "black";
 }
 btn[10].onclick = () => {
    input.value.length < 4?input.value = input.value + btn[10].value:input.value="";
    if( input.value === passkey && input.value.length === 4){
        input.style.color = "green";
        setTimeout(()=>{auth.style.zIndex = "1";
            inner.style.zIndex = "2";},2000);
       }
       else if( input.value !== passkey && input.value.length === 4){
        input.style.color = "red";
       }
        else{
            input.style.color = "black";
        }
 }

 
 //coinBox.style.background = "green";
 //const bb = document.getElementsByName("bbb");
 //bb[0].style.background = "pink";

 function btc(){
    const coinBox = document.querySelector(".coin-box");
 const coin = document.createElement("div");
 const heading = document.createElement("h2");
    const coinName = document.createTextNode("BTC");
    const coinPrice = document.createElement("h6");
    const price = document.createTextNode("$67000");
    const coinAmount = document.createElement("h4");
    const amount = document.createTextNode(0.0005);
    const coinValue = document.createTextNode("$33.5");
    coinBox.appendChild(coin);
    coin.appendChild(heading);
    heading.appendChild(coinName);
    coin.appendChild(coinPrice);
    coinPrice.appendChild(price);
    coin.appendChild(coinAmount);
    coinAmount.appendChild(amount);
    coin.onmouseover = () =>{
        coin.style.background = "pink";
        coin.removeChild(coinPrice);
        coinPrice.removeChild(price);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(coinValue);
    
    }
    coin.onmouseleave = () =>{
        coin.style.background = "transparent";
        coinPrice.removeChild(coinValue);
        coin.removeChild(coinAmount);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(price);
        coin.appendChild(coinAmount);
        
    
    }
 }
 setTimeout(btc,500);

 function eth(){
    const coinBox = document.querySelector(".coin-box");
 const coin = document.createElement("div");
 const heading = document.createElement("h2");
    const coinName = document.createTextNode("ETH");
    const coinPrice = document.createElement("h6");
    const price = document.createTextNode("$3400");
    const coinAmount = document.createElement("h4");
    const amount = document.createTextNode(0.01);
    const coinValue = document.createTextNode("$34");
    coinBox.appendChild(coin);
    coin.appendChild(heading);
    heading.appendChild(coinName);
    coin.appendChild(coinPrice);
    coinPrice.appendChild(price);
    coin.appendChild(coinAmount);
    coinAmount.appendChild(amount);
    coin.setAttribute("name","coin");
    coin.onmouseover = () =>{
        coin.style.background = "pink";
        coin.removeChild(coinPrice);
        coinPrice.removeChild(price);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(coinValue);
    
    }
    coin.onmouseleave = () =>{
        coin.style.background = "transparent";
        coinPrice.removeChild(coinValue);
        coin.removeChild(coinAmount);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(price);
        coin.appendChild(coinAmount);
        
    
    }
 }
 setTimeout(eth,700);
 function usdt(){
    const coinBox = document.querySelector(".coin-box");
 const coin = document.createElement("div");
 const heading = document.createElement("h2");
    const coinName = document.createTextNode("USDT");
    const coinPrice = document.createElement("h6");
    const price = document.createTextNode("$0.998");
    const coinAmount = document.createElement("h4");
    const amount = document.createTextNode(32.66);
    const coinValue = document.createTextNode("$32.59");
    coinBox.appendChild(coin);
    coin.appendChild(heading);
    heading.appendChild(coinName);
    coin.appendChild(coinPrice);
    coinPrice.appendChild(price);
    coin.appendChild(coinAmount);
    coinAmount.appendChild(amount);
    coin.onmouseover = () =>{
        coin.style.background = "pink";
        coin.removeChild(coinPrice);
        coinPrice.removeChild(price);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(coinValue);
    
    }
    coin.onmouseleave = () =>{
        coin.style.background = "transparent";
        coinPrice.removeChild(coinValue);
        coin.removeChild(coinAmount);
        coin.appendChild(coinPrice);
        coinPrice.appendChild(price);
        coin.appendChild(coinAmount);
        
    
    }
 }
 setTimeout(usdt,900);
