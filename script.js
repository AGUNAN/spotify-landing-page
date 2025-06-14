  
      // Simple JavaScript for interactive elements
      document.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth",
            });
          });
        });

        // CTA button animation
        const ctaButton = document.querySelector(".cta-button");
        ctaButton.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.05)";
        });
        ctaButton.addEventListener("mouseleave", function () {
          this.style.transform = "scale(1)";
        });

        // Card hover effects
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px)";
          });
          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
          });
        });

        // Navbar background change on scroll
        window.addEventListener("scroll", function () {
          const nav = document.querySelector("nav");
          if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
          } else {
            nav.style.backgroundColor = "var(--black)";
          }
        });
      });
    