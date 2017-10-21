 'use strict';

console.log ("warsztaty");

 document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
     
     var menuList = document.querySelectorAll(".nav-list > li"); //wyszukaj tylko dzieci bezp.
     console.log(menuList);//tutaj mamy tablice!
     
     for(var i = 0; i< menuList.length; i++) {
         menuList[i].addEventListener( "mouseover", function() {
             console.log("hurra!");
             // "this" to taka zmienna, która jest tym, na co najechał użytkownik na stronie www
             var dropdown = this.querySelector(".dropdown")
             console.log("dropdown");
             if (dropdown != null){
                 dropdown.style.display = "block"
             } 
             
         })
     }
     
    for(var i = 0; i< menuList.length; i++) {
         menuList[i].addEventListener( "mouseout", function() {
             console.log("hurra!");
             // "this" to taka zmienna, która jest tym, na co najechał użytkownik na stronie www
             var dropdown = this.querySelector(".dropdown")
             console.log("dropdown");
             if (dropdown != null){
                 dropdown.style.display = "none"
             } 
             
         })
     }
     
     
     //Zadanie 2
     
   
     
     function showHide() {

         var textArea = this.previousElementSibling;
         console.log(buttons[0].previousElementSibling); 
         if (textArea.style.display === 'none' || textArea.style.display === '') {
              textArea.style.display = 'block';
              this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
         } else {
              textArea.style.display = 'none';
              this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
      
  }
         
  var buttons= document.querySelectorAll('.read-more');
  console.log("buttons");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
     
     
     
     
     
     
     
     
     
})