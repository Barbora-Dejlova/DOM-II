// Your code goes here

// 1. mouseover
const nav = document.querySelectorAll(".nav-link")

nav.forEach((element) => {
    element.addEventListener("mouseover", (event)=> [
        event.target.style.color = "pink"
    ]) 
});


// 2. keydown
const body = document.querySelector("body")

body.addEventListener("keydown", function checkKeyPress(key) {
    if (key.keyCode === 65){
        alert("The 'a' key has been pressed!")
    }
}, false);


// const windowEvent = document.querySelector('body');
//windowEvent.addEventListener('keydown', () =>{
    //alert('How about you press some keys?');
//}) 

// 3. wheel

document.querySelectorAll("div")[1]
.addEventListener("wheel", event => {
	event.preventDefault();
	let scale = 1;
	scale += event.deltaY * -0.01;

	// Restrict scale
	scale = Math.min(Math.max(.125, scale), 4);
	
	// Apply scale transform
	event.target.style.transform = `scale(${scale})`;
});

// 4. drag / drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// 5. load

window.addEventListener('load', () =>{
    alert('Welcome to Fun Bus! ');
})

// 6. focus

const focusEvent = document.querySelector(".form")
    
focusEvent.addEventListener("focus", () => {
    focusEvent.style.backgroundColor = "red";
}, true);

// 7. resize +  8. scroll

const bottomContent = document.querySelector(".content-section inverse-content");

window.addEventListener("resize", () => {
    bottomContent.style.color = "blue";
  })

  window.addEventListener("scroll", () => {
    bottomContent.style.color = "red";
  })



// 9. select

subscribeEmail.addEventListener('select', event => {
    subscribeEmail.style.webkitHighlightColor = 'black';
    subscribeEmail.style.color = 'white';
})

// 10. dblclick

const dblclickEvent = document.querySelector(".content-destination")
dblclickEvent.addEventListener("dblclick", ()=> {
    dblclickEvent.style.backgroundColor = "purple"
})


