const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const cardsets = document.querySelectorAll('.card_container');

const changePositions = (e, cardset) => {
    const clickedCard = e.currentTarget
    if(clickedCard.classList.contains('activeCard')) return;
    const activeCard = cardset.querySelector('.cards.activeCard')
    // const classesFrom = e.currentTarget.className
    // const classesTo = activeCard.className

    // clickedCard.className = classesTo
    clickedCard.classList.remove("right");
    clickedCard.classList.add("activeCard");
    // activeCard.className = classesFrom
    activeCard.classList.remove("activeCard");
    activeCard.classList.add("right");
}

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return
    const cards = cardset.querySelectorAll('.cards')
    const classes = ['activeCard', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))

})

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return
    const cards = cardset.querySelectorAll('.cards')
    cards.forEach((card) => {
        ["click", "keypress"].forEach(ev=>{
            card.addEventListener(ev, function (ev) {
                changePositions(ev, cardset);
            })
        })
    })
})