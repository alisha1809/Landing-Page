// =====================================
// NovaUI - Premium SaaS Landing Page
// =====================================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(5,8,22,.80)";
        header.style.boxShadow = "none";

    }

});

// Scroll Reveal

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// FAQ Accordion

document.querySelectorAll(".faq-item").forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        const open = answer.style.display === "block";

        document.querySelectorAll(".faq-item p").forEach(p => {

            p.style.display = "none";

        });

        if (!open) {

            answer.style.display = "block";

        }

    });

});

// Animated Statistics

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (window.scrollY > stats.offsetTop - 500 && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");

            let count = 0;

            const speed = Math.max(1, Math.floor(number / 80));

            const interval = setInterval(() => {

                count += speed;

                if (count >= number) {

                    counter.innerText = number + suffix;

                    clearInterval(interval);

                }

                else {

                    counter.innerText = count + suffix;

                }

            }, 20);

        });

    }

});