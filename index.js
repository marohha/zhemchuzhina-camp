const offerBg = document.querySelector('.offer');
const images = ['offer5.jpg', 'offer8.png', 'offer9.jpg', 'offer10.png']

let i = 0;
setTimeout(() => {
    if (i === 5){
        i = 0;
    }
    offerBg.style.background = `url('img/${images[i]}')`;
    i++;
}, 5000)
setTimeout(() => {
    if (i === 5){
        i = 0;
    }
    offerBg.style.background = `url('img/${images[2]}')`;
    i++;
}, 12000)

function openPopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
}
function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

function openMoreSwim() {
    let moreSwim = document.querySelector('.moreSwim');
    moreSwim.style.display = 'block';
    
}
function closeMoreSwim() {
    let moreSwim = document.querySelector('.moreSwim');
    moreSwim.style.display = 'none';
    
}

function openMoreTerritoria() {
    let moreSwim = document.querySelector('.moreTerritoria');
    moreSwim.style.display = 'block';
    
}
function closeMoreTerritoria() {
    let moreSwim = document.querySelector('.moreTerritoria');
    moreSwim.style.display = 'none';
    
}

function openPushedForm() {
    var popup = document.querySelector('.pushedFormPopup');
    popup.style.display = 'block';
}

function closePushedForm() {
    var popup = document.querySelector('.pushedFormPopup');
    popup.style.display = 'none';
}