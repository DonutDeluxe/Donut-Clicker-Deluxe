// Variables d'état
let score = parseInt(localStorage.getItem('score')) || 0;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let autoClickRate = parseInt(localStorage.getItem('autoClickRate')) || 0;

let cursorCost = parseInt(localStorage.getItem('cursorCost')) || 10;
let grandmaCost = parseInt(localStorage.getItem('grandmaCost')) || 50;

// Éléments DOM
const scoreDisplay = document.getElementById('score');
const perSecDisplay = document.getElementById('per-second');
const donutBtn = document.getElementById('donut-button');

// Mise à jour de l'affichage
function updateDisplay() {
    scoreDisplay.innerText = Math.floor(score);
    perSecDisplay.innerText = autoClickRate;
    document.getElementById('cursor-cost').innerText = cursorCost;
    document.getElementById('grandma-cost').innerText = grandmaCost;
    
    // Sauvegarde locale
    localStorage.setItem('score', score);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('autoClickRate', autoClickRate);
    localStorage.setItem('cursorCost', cursorCost);
    localStorage.setItem('grandmaCost', grandmaCost);
}

// Clic sur le Donut
donutBtn.addEventListener('click', () => {
    score += clickValue;
    updateDisplay();
});

// Achat Curseur (+ puissance de clic)
document.getElementById('buy-cursor').addEventListener('click', () => {
    if (score >= cursorCost) {
        score -= cursorCost;
        clickValue += 1;
        cursorCost = Math.floor(cursorCost * 1.5);
        updateDisplay();
    }
});

// Achat Grand-mère (+ automatique)
document.getElementById('buy-grandma').addEventListener('click', () => {
    if (score >= grandmaCost) {
        score -= grandmaCost;
        autoClickRate += 1;
        grandmaCost = Math.floor(grandmaCost * 1.5);
        updateDisplay();
    }
});

// Boucle de clic automatique (toutes les secondes)
setInterval(() => {
    score += autoClickRate;
    updateDisplay();
}, 1000);

// Initialisation au chargement
updateDisplay();
