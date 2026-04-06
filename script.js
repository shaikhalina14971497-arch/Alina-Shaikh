// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(e){
if(this.hash !== ""){
e.preventDefault();
document.querySelector(this.hash)?.scrollIntoView({
behavior: "smooth"
});
}
});
});

// Form Validation
const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || message === ""){
document.getElementById("formMessage").innerText = "Please fill all fields!";
document.getElementById("formMessage").style.color = "red";
return;
}

document.getElementById("formMessage").innerText = "Message sent successfully!";
document.getElementById("formMessage").style.color = "green";

form.reset();
});
}
