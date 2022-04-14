const cards = document.querySelectorAll('.card');
// const cards = document.getElementsByClassName('card');

cards.forEach(card => {
    card.addEventListener('click', () =>{
        removeAllActiveClasses();
        card.classList.add('active');
    })
});

function removeAllActiveClasses(){
    cards.forEach(card => {
        card.classList.remove('active');
    })
}

const panels = document.querySelectorAll('.panel')
