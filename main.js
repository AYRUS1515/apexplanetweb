const products=[
{id:1,name:"Neon Headset",price:2999,category:"tech",img:"https://via.placeholder.com/300"},
{id:2,name:"Cyber Sneakers",price:3999,category:"fashion",img:"https://via.placeholder.com/300"},
{id:3,name:"Smart Glasses",price:5999,category:"tech",img:"https://via.placeholder.com/300"},
{id:4,name:"Glow Jacket",price:4999,category:"fashion",img:"https://via.placeholder.com/300"}
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const grid=document.getElementById("products");

function renderProducts(list){
if(!grid) return;
grid.innerHTML="";
list.forEach(p=>{
grid.innerHTML+=`
<div class="card">
<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>`;
});
}

function addToCart(id){
const product=products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
showToast();
}

function updateCart(){
const items=document.getElementById("cartItems");
if(!items) return;

items.innerHTML="";
let total=0;
cart.forEach(p=>{
total+=p.price;
items.innerHTML+=`<p>${p.name} - ₹${p.price}</p>`;
});

document.getElementById("totalPrice").textContent=total;
document.getElementById("cartCount").textContent=cart.length;
}

function goCheckout(){
const user=localStorage.getItem("loggedInUser");
if(!user){
alert("Login first!");
window.location.href="login.html";
}else{
window.location.href="checkout.html";
}
}

document.getElementById("cartBtn")?.addEventListener("click",()=>{
document.getElementById("cartSidebar").classList.toggle("active");
});

document.getElementById("searchInput")?.addEventListener("input",(e)=>{
const val=e.target.value.toLowerCase();
renderProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
});

function showToast(){
const toast=document.getElementById("toast");
toast.classList.add("show");
setTimeout(()=>toast.classList.remove("show"),2000);
}

window.addEventListener("scroll",()=>{
const btn=document.getElementById("topBtn");
if(btn) btn.style.display=window.scrollY>300?"block":"none";
});

document.getElementById("topBtn")?.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});

window.addEventListener("load",()=>{
document.getElementById("loader")?.remove();
updateCart();
renderProducts(products);
loadCheckout();
showUser();
});

function signup(){
const u=document.getElementById("username").value;
const p=document.getElementById("password").value;
localStorage.setItem("user_"+u,p);
document.getElementById("authMsg").textContent="Signup Successful!";
}

function login(){
const u=document.getElementById("username").value;
const p=document.getElementById("password").value;
if(localStorage.getItem("user_"+u)===p){
localStorage.setItem("loggedInUser",u);
window.location.href="index.html";
}else{
document.getElementById("authMsg").textContent="Invalid Credentials";
}
}

function showUser(){
const user=localStorage.getItem("loggedInUser");
const link=document.getElementById("authLink");
if(user && link){
link.textContent="Logout ("+user+")";
link.href="#";
link.onclick=()=>{
localStorage.removeItem("loggedInUser");
location.reload();
};
}
}

function loadCheckout(){
const container=document.getElementById("orderItems");
if(!container) return;

let total=0;
cart.forEach(p=>{
total+=p.price;
container.innerHTML+=`<p>${p.name} - ₹${p.price}</p>`;
});
document.getElementById("orderTotal").textContent=total;
}

function placeOrder(){
localStorage.removeItem("cart");
document.getElementById("orderMsg").textContent="🎉 Order Placed Successfully!";
setTimeout(()=>window.location.href="index.html",2000);
}