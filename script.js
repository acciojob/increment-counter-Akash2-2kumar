//your JS code here. If required.
let a=document.querySelector("#app");
a.innerHTML="<p id="counter">0</p>";
a.innerHTML+="<button id="incrementBtn">Increment</button>";
let b=document.getElementById(incrementBtn);
let c=counter.textContent;
incrementBtn.addEventListener("click",()=>{
	alert(counter.textContent);
	counter.textContent=Number(c)+1;
})