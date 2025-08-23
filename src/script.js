import './styles.css';
const title = document.querySelector(".personal__names");
title.textContent = ''

function decompose(string) {
    let delay = 0;
    for (let i = 0; i < string.length; i++) {
        setTimeout(() => {
            title.textContent += string[i];
        }, delay);
        delay += 250; // Aumenta el delay para cada letra
    }
}
decompose("Cacawate.com");
