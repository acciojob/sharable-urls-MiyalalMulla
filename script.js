// your code here
let nameInput = document.getElementById("name");
let yearInput = document.getElementById("year");
let button = document.getElementById("button");
let urlElement = document.getElementById("url");

button.addEventListener("click",(e)=>{
	e.preventDefault();
	let baseUrl = "https://localhost:8080/";
	let para = [];
	if(nameInput.value.trim()){
		para.push("name=" + encodeURIComponent(nameInput.value.trim()));
	}
	if(yearInput.value.trim()){
		para.push("year" + encodeURIComponent(yearInput.value.trim()));
	}
	if (para.length > 0) {
		baseUrl += "?" + para.join("&");
	}
	urlElement.textContent = baseUrl;
});
 

