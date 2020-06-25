const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.food');
const foodInfos = document.querySelector('.food-infos');

for (let card of cards) {
  card.addEventListener("click", function(){
    const imgId = card.id
    const foodName = card.querySelector('h1').textContent
    const criadoPor = card.querySelector('p').textContent
    modalOverlay.classList.add("active");

    const modalImg = foodInfos.querySelector('img');
    modalImg.src = `/assets/${imgId}.png`

    foodInfos.querySelector('h1').textContent = foodName
    foodInfos.querySelector('p').textContent = criadoPor
    
  })
}

document.querySelector(".closeModal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
})


