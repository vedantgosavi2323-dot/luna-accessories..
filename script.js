
// LUNA ACCESSORIES - Website animations

document.addEventListener("DOMContentLoaded", function () {

    // Reveal elements smoothly when scrolling
    const animatedElements = document.querySelectorAll(
        ".category-card, .welcome"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });

    // Load category images only when needed
    document.querySelectorAll(".category-card img").forEach((image) => {
        image.loading = "lazy";
    });

});
