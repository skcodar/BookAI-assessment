const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const card = document.querySelectorAll('.card');
const nav1 = document.querySelectorAll('.hi');
var sow = document.getElementById('shownav');
var dis=0;

function hideshow(){
    if(dis==1){
        sow.style.display='block';
        dis=0;
    }else{
        sow.style.display='none';
        dis=1;
    }
}

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        header.style.color = 'black';
        header.style.background = 'white';
        header.style.transition = '2s';
        for(let i=0;i<card.length;i++){
            card[i].style.color = 'black';
            card[i].style.background = 'white';
            card[i].style.transition = '2s';
        }
        for(let i=0;i<nav1.length;i++){
        nav1[i].style.color = 'black';
        nav1[i].style.background = 'white';
        nav1[i].style.transition = '2s';
        }
      
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        header.style.color = 'white';
        header.style.background = 'black';
        header.style.transition = '2s';

        for(let i=0;i<card.length;i++){
            card[i].style.color = 'white';
            card[i].style.background = 'black';
            card[i].style.transition = '2s';  
        }
        for(let i=0;i<nav1.length;i++){
        nav1[i].style.color = 'white';
        nav1[i].style.background = 'black';
        nav1[i].style.transition = '2s';
        }
    }
});