const gallery = Array.from(document.querySelectorAll('.gallery-photo'));
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let currentIndex = gallery.findIndex(item => item.classList.contains('gallery-photo-active'));

const getNextIndex = () => currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
const getPrevIndex = () => currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;

const toggleNextCase = () => {
  const currentCase = gallery[currentIndex];
    
  const nextIndex = getNextIndex();
  const nextCase = gallery[nextIndex];
    
//   currentCase.classList.remove('gallery-photo-active');
  currentCase.classList.add('hide');
  currentCase.classList.remove('show');


//   nextCase.classList.add('gallery-photo-active');
  nextCase.classList.remove('hide');
  nextCase.classList.add('show');
    
  currentIndex = nextIndex;
  
//   scheduleCase(nextIndex);
}

const togglePrevCase = () => {
  const currentCase = gallery[currentIndex];
    
  const prevIndex = getPrevIndex();
  const prevCase = gallery[prevIndex];

//   currentCase.classList.remove('gallery-photo-active');
  currentCase.classList.add('hide');
  currentCase.classList.remove('show');


//   prevCase.classList.add('gallery-photo-active');
  prevCase.classList.remove('hide');
  prevCase.classList.add('show');

  currentIndex = prevIndex;

//   scheduleCase(prevIndex)
}

// setTimeout(toggleNextCase, 1000);
  
// const scheduleCase = index => {
//   const item = gallery[index];
    
//   setTimeout(toggleNextCase, 7000);
// }
  
// scheduleCase(getNextIndex());

prevBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleNextCase();
})

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  togglePrevCase();
})

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