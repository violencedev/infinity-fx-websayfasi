const subProjects = document.querySelectorAll('div.sub-project'),
popUp = document.querySelector('div#pop-up'),
iFrame = popUp.querySelector('iframe');

let canBeClosed = false;

subProjects.forEach(subProject => {
    subProject.addEventListener('click', (_e) => {
        iFrame.setAttribute('src', `https://player.vimeo.com/video/${subProject.getAttribute('reference')}`)
        popUp.classList.add('visible')
        document.querySelector('html').style.overflow = 'hidden'
    });
    subProject.classList.add('reveal')
    subProject.classList.add('fade-bottom')
});

document.body.addEventListener('click', (event) => {
    if (popUp.classList.contains('visible') && !(iFrame.contains(event.target)) && canBeClosed) {
        popUp.classList.remove('visible')
        canBeClosed = false;
        document.querySelector('html').style.overflow = 'visible'
        iFrame.setAttribute('src', '')
    } else if(popUp.classList.contains('visible') && !(iFrame.contains(event.target))){
        canBeClosed = true;
    }
});
