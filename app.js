const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach(preview => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //dynamic change of image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./full-image/${originalSrc}`;
  });
});

modal.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
