let fadeInInterval, fadeOutInterval;
    
const fadeIn = (elem) => {
    
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    elem.fadeIn = function(timing) {
    let newValue = 0;

    elem.style.display = 'block';
    elem.style.opacity = 0;

    fadeInInterval = setInterval(function(){ 

    if (newValue < 1) {
    newValue += 0.01;
    } else if (newValue === 1) {
    clearInterval(fadeInInterval);   
    }

    elem.style.opacity = newValue;

    }, timing);

    }

    elem.fadeIn(2);
};



const fadeOut = (elem) => {
    
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    elem.fadeOut = function(timing) {
    let newValue = 1;
    elem.style.opacity = 1;

    fadeOutInterval = setInterval(function(){ 

    if (newValue > 0) {
    newValue -= 0.01;
    } else if (newValue < 0) {
    elem.style.opacity = 0;
    elem.style.display = 'none';
    clearInterval(fadeOutInterval);
    }

    elem.style.opacity = newValue;

    }, timing);

    }

    elem.fadeOut(2);
};

document.body.onload = () => {
    fadeOut(document.querySelector('.loader-wrapper'))
    document.querySelector('.loader-wrapper').remove()
    fadeIn(document.querySelector('main'))
}