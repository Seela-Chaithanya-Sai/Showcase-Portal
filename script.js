// ===============================
// Toggle Learn More Information
// ===============================

function toggleInfo(id) {

    let info = document.getElementById(id);

    if (info.style.display === "block") {

        info.style.display = "none";

    } else {

        // Close all opened information boxes
        let allInfo = document.querySelectorAll(".info");

        allInfo.forEach(function(item) {
            item.style.display = "none";
        });

        // Open selected information
        info.style.display = "block";
    }
}


// ===============================
// Highlight Active Navigation Link
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ===============================
// Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.4s";

    });

});


// ===============================
// Fade-in Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all 0.8s ease";

    observer.observe(card);

});


// ===============================
// Welcome Message (Optional)
// ===============================

window.onload = function () {

    console.log("Welcome to MicroInfoWeb Technologies Page");

};