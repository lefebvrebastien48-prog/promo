// Récupère toutes les images de la page (ou des sections spécifiques)
const images = document.querySelectorAll('main img, .gallery-item img'); 
// Ici : toutes les images des sections + galerie

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

// Ouvrir le popup au clic
images.forEach(img => {
    img.style.cursor = "pointer"; // facultatif, montre que c'est cliquable
    img.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImg.src = img.src; // on utilise la même image
    });
});

// Fermer popup avec la croix
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fermer popup en cliquant sur le fond
popup.addEventListener('click', (e) => {
    if(e.target === popup) popup.style.display = 'none';
});
