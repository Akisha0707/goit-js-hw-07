import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", getClick(galleryItems));

function getClick(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="${(original, preview)}"
      alt="Image description"
      width 20px
  /></a>
</li>
 `
    )
    .join("");
}

galleryList.addEventListener("click", getImages);

function getImages(event) {
  console.log(event);
}

console.log(galleryItems);
