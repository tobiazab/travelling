function amebtn() {
    hideAllCards();
    document.querySelectorAll('.america').forEach(card => {
        card.style.display = 'block';
    });
}

function eurobtn() {
    hideAllCards();
    document.querySelectorAll('.europa').forEach(card => {
        card.style.display = 'block';
    });
}

function asiabtn() {
    hideAllCards();
    document.querySelectorAll('.asia').forEach(card => {
        card.style.display = 'block';
    });
}

function todosbtn() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'block';
    });
}

function oceabtn() {
    hideAllCards();
    document.querySelectorAll('.oceania').forEach(card => {
        card.style.display = 'block';
    });
}

function hideAllCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });
}
