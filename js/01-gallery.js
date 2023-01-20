import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onCardClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`
    )
    .join("");
}

gallery.innerHTML = createGalleryMarkup(galleryItems);

function onCardClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `
     <img
      class="gallery__image"
      src="${event.target.dataset.source}"
    />`,
    {
      onShow: (instance) => {
        gallery.addEventListener("keydown", onEscapeClick);
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onEscapeClick);
      },
    }
  );
  instance.show();
  function onEscapeClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
