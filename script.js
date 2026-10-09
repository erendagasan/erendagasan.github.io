document.querySelectorAll("main img[alt]").forEach(function (img) {
    if (!img.alt) return;
    var caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = img.alt;
    img.after(caption);
});
