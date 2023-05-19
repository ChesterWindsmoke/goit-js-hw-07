import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const cardsMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', cardsMarkup);


function createGalleryItems(galleryItems) {

    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {

        return `
            <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`

    }).join('');

    return galleryMarkup;
}




// console.log(galleryItems);
