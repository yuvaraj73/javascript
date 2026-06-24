// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ===== Dark Mode Toggle =====
const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }
});

// ===== Image Slider =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// ===== Modal Popup =====
const modal = document.getElementById("modal");

document.getElementById("open-modal").addEventListener("click", () => {
    modal.style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ===== Accordion FAQ =====
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// ===== Form Validation =====
const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Form Submitted Successfully!");
        form.reset();
    }
});

// ===== Animated Counters =====
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    function updateCounter() {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});

// ===== Tabbed Content =====
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        tabBtns.forEach(button =>
            button.classList.remove("active")
        );

        tabContents.forEach(content =>
            content.classList.remove("active")
        );

        btn.classList.add("active");

        document
            .getElementById(btn.dataset.tab)
            .classList.add("active");
    });

});

// ===== Scroll Progress Bar =====
window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
});

// ===== Back To Top Button =====
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== Drag and Drop List =====
const listItems = document.querySelectorAll("#drag-list li");

let draggedItem = null;

listItems.forEach(item => {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
    });

    item.addEventListener("dragover", e => {
        e.preventDefault();
    });

    item.addEventListener("drop", () => {

        const parent = item.parentNode;

        parent.insertBefore(draggedItem, item);

    });

});

// ===== Tooltips =====
// Implemented with CSS only

// ===== requestAnimationFrame Example =====
function animateTitle() {
    requestAnimationFrame(animateTitle);
}
animateTitle();

// ===== setTimeout Example =====
setTimeout(() => {
    console.log("Welcome to JS Components!");
}, 1000);

// ===== setInterval Example =====
setInterval(() => {
    console.log("Running...");
}, 10000);