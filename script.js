document.addEventListener("DOMContentLoaded", function () {
  // Element references
  const drawer = document.getElementById("nav-drawer");
  const hamburger = document.getElementById("hamburger");
  const drawerClose = document.getElementById("drawer-close");
  const toggleButton = document.getElementById("theme-toggle");
  const toggleButtonsec = document.getElementById("drawer-theme-toggle");

  // Debug: Log all elements to verify they are found
  console.log("Drawer:", drawer);
  console.log("Hamburger:", hamburger);
  console.log("Drawer Close:", drawerClose);
  console.log("Navbar Theme Toggle:", toggleButton);
  console.log("Drawer Theme Toggle:", toggleButtonsec);

  // Function to update theme toggle button labels
  function updateThemeLabels() {
    const isDark = document.body.classList.contains("dark-mode");
    const label = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
    if (toggleButton) toggleButton.textContent = label;
    if (toggleButtonsec) toggleButtonsec.textContent = label;
  }

  // Initialize theme labels
  updateThemeLabels();

  // Hamburger menu toggle
  if (hamburger && drawer) {
    hamburger.addEventListener("click", function () {
      const wasActive = drawer.classList.contains("active");
      drawer.classList.toggle("active");
      console.log("Hamburger clicked, was active:", wasActive, "now active:", drawer.classList.contains("active"));
      drawer.style.display = drawer.style.display; // Trigger reflow
    });
  } else {
    console.error("Hamburger or drawer element not found");
  }

  // Drawer close button
  if (drawerClose && drawer) {
    drawerClose.addEventListener("click", function () {
      drawer.classList.remove("active");
      console.log("Drawer close clicked, active:", drawer.classList.contains("active"));
    });
  } else {
    console.error("Drawer close button or drawer element not found");
  }

  // Theme toggle for header button
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      updateThemeLabels();
      console.log("Navbar theme toggle clicked, dark mode:", document.body.classList.contains("dark-mode"));
    });
  } else {
    console.error("Header theme toggle button not found");
  }

  // Theme toggle for drawer button
  if (toggleButtonsec) {
    toggleButtonsec.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      updateThemeLabels();
      console.log("Drawer theme toggle clicked, dark mode:", document.body.classList.contains("dark-mode"));
    });
  } else {
    console.error("Drawer theme toggle button not found");
  }

  // Handle form submission
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out! I will get back to you shortly.");
      this.reset();
    });
  } else {
    console.error("Contact form not found");
  }

  // Smooth scrolling for navbar links
  const navLinks = document.querySelectorAll(".nav-links a, .side-drawer a, .btn");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor jump
      const targetId = this.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        // Close drawer if open (for mobile)
        if (drawer && drawer.classList.contains("active")) {
          drawer.classList.remove("active");
        }
      }
    });
  });
});