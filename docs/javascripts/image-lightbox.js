(() => {
  const imageSelector = ".md-content img:not([data-no-lightbox])";

  const createLightbox = () => {
    const dialog = document.createElement("dialog");
    dialog.className = "siq-lightbox";
    dialog.setAttribute("aria-label", "Image preview");
    dialog.innerHTML = `
      <div class="siq-lightbox__frame">
        <img class="siq-lightbox__image" alt="">
        <div class="siq-lightbox__footer">
          <p class="siq-lightbox__caption"></p>
          <div class="siq-lightbox__actions">
            <a class="siq-lightbox__link" target="_blank" rel="noopener">Open original</a>
            <button class="siq-lightbox__close" type="button">Close</button>
          </div>
        </div>
      </div>
    `;

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    document.body.append(dialog);
    return dialog;
  };

  const lightbox = createLightbox();
  const previewImage = lightbox.querySelector(".siq-lightbox__image");
  const caption = lightbox.querySelector(".siq-lightbox__caption");
  const originalLink = lightbox.querySelector(".siq-lightbox__link");

  const openImage = (image) => {
    const source = image.currentSrc || image.src;
    const description = image.alt || "Documentation image";

    previewImage.src = source;
    previewImage.alt = description;
    caption.textContent = description;
    originalLink.href = source;
    lightbox.showModal();
  };

  const enhanceImages = () => {
    document.querySelectorAll(imageSelector).forEach((image) => {
      if (image.dataset.lightboxReady === "true") {
        return;
      }

      image.dataset.lightboxReady = "true";
      image.classList.add("siq-zoomable");
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute("aria-label", `Enlarge image: ${image.alt || "documentation image"}`);

    });
  };

  document.addEventListener("click", (event) => {
    const image = event.target.closest(imageSelector);

    if (image) {
      openImage(image);
      return;
    }

    if (event.target.closest(".siq-lightbox__close")) {
      lightbox.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      event.preventDefault();
      lightbox.close();
      return;
    }

    const image = event.target.closest(imageSelector);
    if (image && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openImage(image);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceImages, { once: true });
  } else {
    enhanceImages();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(enhanceImages);
  }
})();
