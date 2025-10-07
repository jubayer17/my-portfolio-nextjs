"use client";

import { useEffect } from 'react';

export default function ClientScript() {
  useEffect(() => {
    // Enhanced Mobile Navigation Toggle with animations
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    if (mobileMenu && navMenu) {
      mobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        navMenu.classList.toggle("active");

        // Animate hamburger menu
        mobileMenu.style.transform = mobileMenu.classList.contains("active")
          ? "rotate(90deg)"
          : "rotate(0deg)";

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains("active")) {
          document.body.style.overflow = "hidden";
          // Animate menu items
          const navLinks = navMenu.querySelectorAll(".nav-link");
          navLinks.forEach((link, index) => {
            (link as HTMLElement).style.animation = `slideInLeft 0.4s ease-out ${
              index * 0.1
            }s forwards`;
          });
        } else {
          document.body.style.overflow = "";
        }
      });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (mobileMenu && navMenu) {
          mobileMenu.classList.remove("active");
          navMenu.classList.remove("active");
          mobileMenu.style.transform = "rotate(0deg)";
          document.body.style.overflow = "";
        }
      });
    });

    // Enhanced Button hover effects
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", function (this: HTMLElement) {
        this.style.transform = "translateY(-2px) scale(1.02)";
        this.style.boxShadow = "0 10px 25px rgba(37, 99, 235, 0.3)";
      });

      btn.addEventListener("mouseleave", function (this: HTMLElement) {
        this.style.transform = "translateY(0) scale(1)";
        this.style.boxShadow = "";
      });

      btn.addEventListener("mousedown", function (this: HTMLElement) {
        this.style.transform = "translateY(0) scale(0.98)";
      });

      btn.addEventListener("mouseup", function (this: HTMLElement) {
        this.style.transform = "translateY(-2px) scale(1.02)";
      });
    });

    // Enhanced Skill items animation
    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach((item, index) => {
      (item as HTMLElement).style.animationDelay = `${index * 0.1}s`;

      item.addEventListener("mouseenter", function (this: HTMLElement) {
        this.style.transform = "translateY(-5px) scale(1.05) rotate(2deg)";
        this.style.zIndex = "10";
      });

      item.addEventListener("mouseleave", function (this: HTMLElement) {
        this.style.transform = "translateY(0) scale(1) rotate(0deg)";
        this.style.zIndex = "1";
      });
    });

    // Enhanced Project cards with magnetic effect
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mousemove", function (this: HTMLElement, e: MouseEvent) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      card.addEventListener("mouseleave", function (this: HTMLElement) {
        this.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });

    // Enhanced Contact form with animations
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const formInputs = contactForm.querySelectorAll("input, textarea");

      formInputs.forEach((input) => {
        input.addEventListener("focus", function (this: HTMLInputElement | HTMLTextAreaElement) {
          if (this.parentElement) {
            (this.parentElement as HTMLElement).style.transform = "translateY(-2px)";
          }
          this.style.borderColor = "var(--primary-color)";
          this.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
        });

        input.addEventListener("blur", function (this: HTMLInputElement | HTMLTextAreaElement) {
          if (this.parentElement) {
            (this.parentElement as HTMLElement).style.transform = "translateY(0)";
          }
          this.style.borderColor = "";
          this.style.boxShadow = "";
        });
      });

      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = this.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (submitButton) {
          const originalText = submitButton.textContent;

          // Animate button
          submitButton.style.transform = "scale(0.95)";
          submitButton.textContent = "Sending...";
          submitButton.disabled = true;

          // Simulate form submission
          setTimeout(() => {
            submitButton.textContent = "Message Sent!";
            submitButton.style.backgroundColor = "#10b981";
            submitButton.style.transform = "scale(1)";

            setTimeout(() => {
              if (originalText) submitButton.textContent = originalText;
              submitButton.style.backgroundColor = "";
              submitButton.disabled = false;
              (contactForm as HTMLFormElement).reset();
            }, 2000);
          }, 1500);
        }
      });
    }

    // Enhanced social links with individual animations
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach((link, index) => {
      (link as HTMLElement).style.animationDelay = `${1.2 + index * 0.1}s`;

      link.addEventListener("mouseenter", function () {
        (this as HTMLElement).style.transform = "translateY(-8px) scale(1.15) rotate(5deg)";
        (this as HTMLElement).style.boxShadow = "0 15px 30px rgba(37, 99, 235, 0.3)";
      });

      link.addEventListener("mouseleave", function () {
        (this as HTMLElement).style.transform = "translateY(0) scale(1) rotate(0deg)";
        (this as HTMLElement).style.boxShadow = "";
      });
    });

    // Add ripple effect to clickable elements
    function addRippleEffect(element: Element) {
      element.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = (e as MouseEvent).clientX - rect.left - size / 2;
        const y = (e as MouseEvent).clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple-effect");

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    }

    // Apply ripple effect to buttons and links
    buttons.forEach(addRippleEffect);
    socialLinks.forEach(addRippleEffect);
    navLinks.forEach(addRippleEffect);

    // Smooth scroll to top functionality
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.classList.add("scroll-to-top");
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      opacity: 0;
      transform: translateY(100px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    `;

    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const handleScrollForButton = () => {
      if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.transform = "translateY(0)";
      } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.transform = "translateY(100px)";
      }
    };

    window.addEventListener("scroll", handleScrollForButton);

    // Keyboard shortcuts
    document.addEventListener("keydown", function (e) {
      // Close mobile menu with 'Escape' key
      if (e.key === "Escape") {
        if (navMenu && navMenu.classList.contains("active")) {
          mobileMenu?.click();
        }
      }
    });

    console.log("🚀 Enhanced portfolio website loaded successfully!");
    console.log('💡 Pro tip: Press "Escape" to close menus!');

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScrollForButton);
      scrollToTopBtn.remove();
    };
  }, []);

  return null;
}