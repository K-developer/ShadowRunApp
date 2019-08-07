let cards = document.getElementsByClassName("link_target");
for(var i = 0; i<cards.length; i++){    
    cards[i].addEventListener("click", (event)=>{
        clickedCard = event.target.getAttribute("data-sheet") || event.target.parentNode.getAttribute("data-sheet");
        window.location.href = `pages/${clickedCard}.html`;
    })   
}   

function ID_Generator(){
    return Math.floor(Math.random() * 10000).toString();
}