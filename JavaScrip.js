var flipTimeout;

function flipCard(card) {
  clearTimeout(flipTimeout); 
  card.querySelector('.flip-card-inner').style.transform = 'rotateY(-180deg)';
}

function unflipCard(card) {
  clearTimeout(flipTimeout); 
  flipTimeout = setTimeout(function() {
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
  }, 200);
}