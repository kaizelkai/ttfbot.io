document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const pageContenu = document.getElementById("pageContenu");
    const fill = document.querySelector(".fill");
  
    // Écouter la fin de l'animation de remplissage
    fill.addEventListener("animationend", () => {
      // Faire disparaître le loader
      loader.style.transition = "opacity 0.5s ease";
      loader.style.opacity = "0";
  
      setTimeout(() => {
        loader.style.display = "none"; // Cacher le loader
        pageContenu.style.display = "block"; // Afficher le contenu principal
      }, 0); // Attendre la fin de la transition d'opacité
    });
  });
  