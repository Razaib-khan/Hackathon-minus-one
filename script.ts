document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const skillsSection = document.getElementById("skill");
  
    if (button && skillsSection) {
      button.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
          skillsSection.style.display = "block";
          button.textContent = "Hide Skill";
        } else {
          skillsSection.style.display = "none";
          button.textContent = "Show Skill";
        }
      });
    }
  });