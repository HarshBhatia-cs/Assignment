/* ============================
   Sunrise Crust Bakery Script
   ============================ */

// Contact Form Validation
function validateForm() {
  const email = document.getElementById("email");
  const name = document.querySelector("input[type='text']");
  const message = document.querySelector("textarea");

  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (!email.value.includes("@")) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return false;
  }

  alert("Thank you! Your message has been sent.");
  return true;
}

// Mobile Navigation Toggle (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggleBtn = document.createElement("button");

  toggleBtn.innerText = "☰";
  toggleBtn.classList.add("menu-toggle");

  document.querySelector("header").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Smooth Scroll (small polish)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
