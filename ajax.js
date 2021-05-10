const ajaxBtn = document.querySelector(".btn-ajax");
const textFile = document.querySelector(".text-file");
const removedBtn = document.querySelector(".btn-removed");
const loadingAnimation = document.querySelector(".loader");

ajaxBtn.addEventListener("click", () => {
   loadingAnimation.style.display = "block";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         loadingAnimation.style.display = "none";
         var fileData = JSON.parse(this.responseText);
         fileData.forEach((element) => {
            textFile.innerHTML += `<div class="post-container">
   		<h2 class="post-number">POST #${element.id}</h2>
   		<p><span class="title">TITLE:</span> ${element.title}</p>
   		<p><span class="post">POST:</span> ${element.body}</p>
   		</div>`;
         });
      }
   };
   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
   xhttp.send();
});

removedBtn.addEventListener("click", (event) => {
   textFile.innerHTML = "";
});
