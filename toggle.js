let menutoggle = document.querySelector("#hidden-menubar");
let sidebar1 = document.querySelector(".nav");


menutoggle.addEventListener("click", () => {
  sidebar.classList.toggle("navx");
});




window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 50) { 
      
      sidebar1.classList.add("navy")
      
      

      
  } if(window.pageYOffset < 50) {
      sidebar1.classList.remove("navy")
      
  }
});

  
  
  

  