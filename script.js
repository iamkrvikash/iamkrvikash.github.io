const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;
}
};

updateCounter();

});

particlesJS("particles-js",{

particles:{

number:{
value:100
},

color:{
value:"#38bdf8"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3
},

move:{
enable:true,
speed:1
},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.3
}
}

});

const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

toggle.innerHTML=
document.body.classList.contains("light")
? "☀️"
: "🌙";

});