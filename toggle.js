let menutoggle = document.querySelector("#hidden-menubar");
let sidebar = document.querySelector(".nav");
console.log(menutoggle);

menutoggle.addEventListener("click", () => {
  sidebar.classList.toggle("navx");
});