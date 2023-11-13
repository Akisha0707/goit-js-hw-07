import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", getClick(galleryItems));
galleryList.addEventListener("click", getImages);

function getClick(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) => `
    
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      /></a>
</li>
 `
    )
    .join("");
}

function getImages(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  } else {
    var lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionsPosition: "bottom",
      captionDelay: 250,
    });
  }
}

console.log(galleryItems);
