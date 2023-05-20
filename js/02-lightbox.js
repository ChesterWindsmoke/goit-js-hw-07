import { galleryItems } from './gallery-items.js';

// Контейнер зображень (список)
const galleryList = document.querySelector('.gallery');

const cardsMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', cardsMarkup);

function createGalleryItems(items) {
  const galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');

  return galleryMarkup;

  
}

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault(); // Забороняємо дію за замовчуванням, тобто завантаження зображення

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

   const originalSource = event.target.getAttribute('src');
  const description = event.target.getAttribute('alt');
  // Використовуємо бібліотеку та її параметри
  const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom',
    animationSpeed: 250
  });
  // Відкриваємо модалку
  lightbox.open();
};
