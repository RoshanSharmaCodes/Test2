function handleData(event){
event.preventDefault();
const data = new FormData(event.target);
const formJSON = Object.fromEntries(data.entries());
const results = document.querySelector(".result pre");
results.innerText = JSON.stringify(formJSON,null,1);
console.log(results.innerText);
}

const form = document.querySelector('.form1');

form.addEventListener('submit', handleData);
