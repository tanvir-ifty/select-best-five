
function getPlayerNameById(element1 , element2){
    const playerName = document.getElementById(element1).innerText;

    const selectedPlayer = document.getElementById(element2);

    if(selectedPlayer.childElementCount < 5){
        const li = document.createElement('li');
        li.innerText = playerName;
    
        selectedPlayer.appendChild(li);
    }

    else{
        alert('You have selected more than 5 player');
    }
  
}

function btnDiabled(elementid){
    const button = document.getElementById(elementid);
    button.disabled = true;
    button.style.backgroundColor = 'lightblue';
}


document.getElementById('btn-shakib').addEventListener('click', function(){
   getPlayerNameById('player-1' ,'position');
   btnDiabled('btn-shakib');
})


document.getElementById('btn-tamim').addEventListener('click', function(){
   getPlayerNameById('player-2' , 'position');
   btnDiabled('btn-tamim');   
})



document.getElementById('btn-kholi').addEventListener('click', function(){
   getPlayerNameById('player-3' , 'position'); 
   btnDiabled('btn-kholi');  
})



document.getElementById('btn-babar').addEventListener('click', function(){
   getPlayerNameById('player-4' , 'position'); 
   btnDiabled('btn-babar');  
})



document.getElementById('btn-kane').addEventListener('click', function(){
   getPlayerNameById('player-5' , 'position');
   btnDiabled('btn-kane');   
})



document.getElementById('btn-kock').addEventListener('click', function(){
   getPlayerNameById('player-6' , 'position'); 
   btnDiabled('btn-kock');  
})



document.getElementById('btn-warner').addEventListener('click', function(){
   getPlayerNameById('player-7' , 'position');
   btnDiabled('btn-warner');   
})



document.getElementById('btn-steve').addEventListener('click', function(){
   getPlayerNameById('player-8' , 'position');
   btnDiabled('btn-steve');   
})



document.getElementById('btn-stokes').addEventListener('click', function(){
   getPlayerNameById('player-9' , 'position');
   btnDiabled('btn-stokes');   
})

