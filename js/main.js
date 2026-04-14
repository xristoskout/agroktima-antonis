document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const mobilePanel = document.getElementById("mobilePanel");

  if (toggle && mobilePanel) {
    toggle.addEventListener("click", () => {
      mobilePanel.classList.toggle("open");
    });

    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("open");
      });
    });

    document.addEventListener("click", (e) => {
      const isInsidePanel = mobilePanel.contains(e.target);
      const isToggle = toggle.contains(e.target);
      if (!isInsidePanel && !isToggle) {
        mobilePanel.classList.remove("open");
      }
    });
  }

  // Seasonal Tabs Logic
  const seasonTabs = document.querySelectorAll(".season-pill");
  const seasonLists = document.querySelectorAll(".season-list");

  if (seasonTabs.length > 0) {
    seasonTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-season");

        // Update Tabs
        seasonTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Update Lists
        seasonLists.forEach((list) => {
          list.classList.remove("active");
          if (list.id === target) {
            list.classList.add("active");
          }
        });
      });
    });
  }
});
