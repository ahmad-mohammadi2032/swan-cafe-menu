document.addEventListener("DOMContentLoaded", () => {
  // Header Animation Reveal
  const logo = document.querySelector(".welcome-text");
  const welcomeText = document.querySelector(".header-logo-img");

  logo.classList.add("show");
  welcomeText.classList.add("show");

  const categoryItems = document.querySelectorAll(".category-item");
  const menuSections = document.querySelectorAll(".menu-items-wrapper");
  const menuItemsContainer = document.getElementById("menu-items-container");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove 'active' class from all categories
      categoryItems.forEach((el) => el.classList.remove("active"));
      // Add 'active' class to the clicked category
      item.classList.add("active");

      const selectedCategory = item.getAttribute("data-category");

      // Show the selected menu section and hide others
      menuSections.forEach((section) => {
        if (section.id === selectedCategory) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });

      // Scroll in top of Menu Items
      const yOffset = -20;
      const y =
        menuItemsContainer.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});

// Go Top When Click Button
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 520 ||
    document.documentElement.scrollTop > 520
  ) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
};

// Scroll to top on click
goTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
