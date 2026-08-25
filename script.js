//your JS code here. If required.
let a=document.querySelector("#app");
a.innerHTML="<p id="counter">0</p>";
a.innerHTML+="<button id="increment">Increment</button>";
let b=document.getElementById(increment);
increment.addEventListener("click",()=>{
	alert(counter.textContent);
	counter.textContent=Number(counter.textContent)+1;
})