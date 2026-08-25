let a = document.querySelector("#app");

a.innerHTML='<p id="counter">0</p>';
a.innerHTML+='<button id="incrementBtn">Increment</button>';

let b = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

b.addEventListener("click", () => {
    alert(counter.textContent);
    counter.textContent = Number(counter.textContent) + 1;
});