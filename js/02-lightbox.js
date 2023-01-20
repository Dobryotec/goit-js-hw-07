import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onGalleryClick);

gallery.innerHTML = createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li>
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
}
