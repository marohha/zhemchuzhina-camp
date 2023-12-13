// const offerBg = document.querySelector('.offer');
// const images = ['offer5.jpg', 'offer8.png', 'offer9.jpg', 'offer10.png']

// let i = 0;
// setTimeout(() => {
//     if (i === 5){
//         i = 0;
//     }
//     offerBg.style.background = `url('img/${images[i]}')`;
//     i++;
// }, 5000)
// setTimeout(() => {
//     if (i === 5){
//         i = 0;
//     }
//     offerBg.style.background = `url('img/${images[2]}')`;
//     i++;
// }, 12000)

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




const TOKEN = '6824368195:AAFjZ9VT4yI8EXoZ_wBNIu4OgEOxMm-_ACw';
const CHATID = '-1001805914566';
const URLAPI = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта Жемчужина</b>\n`;
    message += `<b>Имя отправителя: </b> ${ this.name.value }\n`;
    message += `<b>Имя ребенка: </b> ${ this.child_name.value }\n`;
    message += `<b>Из города: </b> ${ this.city.value }\n`;
    message += `<b>Телефон: </b> ${ this.phone.value }\n`;
    message += `<b>Желаемая смена: </b> ${ this.camp_season.value }\n`;
    message += `<b>Комментарий: </b> ${ this.comment.value }\n`;

    axios.post(URLAPI, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.child_name.value = '';
        this.city.value = '';
        this.phone.value = '';
        this.camp_season.value = '';
        this.comment.value = '';
        openPushedForm();
    })
})

document.getElementById('callback').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка на обратный звонок</b>\n`;
    message += `<b>Имя отправителя: </b> ${ this.name.value }\n`;
    message += `<b>Телефон: </b> ${ this.phone.value }\n`;
    message += `<b>Вопрос: </b> ${ this.comment.value }\n`;

    axios.post(URLAPI, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.phone.value = '';
        this.comment.value = '';
        closePopup();
    })
})