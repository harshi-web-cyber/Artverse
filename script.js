// ================================================
//  ADD YOUR DRAWINGS HERE
//  1. Put the image file inside the "images" folder
//  2. Add a new line below with the file name and a title
// ================================================
const drawings = [
  { file: "1.jpeg", title: "Drawing 1" },
  { file: "2.jpeg", title: "Drawing 2" },
  { file: "3.jpeg", title: "Drawing 3" },
  { file: "4.jpeg", title: "Drawing 4" },
  { file: "5.jpeg", title: "Drawing 5" },
  { file: "6.jpeg", title: "Drawing 6" },
  { file: "7.jpeg", title: "Drawing 7" },
  { file: "8.jpeg", title: "Drawing 8" },
  { file: "9.jpeg", title: "Drawing 9" },
];

// ------------------------------------------------
//  Code below builds the gallery. No need to edit.
// ------------------------------------------------
const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// slide-in animation when a card scrolls into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

drawings.forEach((d) => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = "images/" + d.file;
  img.alt = d.title;
  img.loading = "lazy";

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.innerHTML = "<span></span><span class='heart'>💖</span>";
  caption.firstChild.textContent = d.title;

  card.appendChild(img);
  card.appendChild(caption);

  card.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = d.title;
    lightbox.classList.add("on");
  });

  grid.appendChild(card);
  observer.observe(card);
});

// close the full-size view
function closeLightbox() { lightbox.classList.remove("on"); }
document.getElementById("close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
