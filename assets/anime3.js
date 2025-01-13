document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".bvvg3"); // Sélectionnez l'élément à animer
  
    if (!target) {
      console.error("Element with class 'bvvg' not found!");
      return;
    }
  
    // Créez un observateur pour surveiller l'élément
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajoute l'animation lorsque l'élément est visible
            entry.target.classList.add("visible-animation3");
            entry.target.classList.remove("hidden-animation3");
          } else {
            // Retire l'animation lorsque l'élément sort de l'écran
            entry.target.classList.add("hidden-animation3");
            entry.target.classList.remove("visible-animation3");
          }
        });
      },
      { threshold: 0.1 } // Le seuil de visibilité (10% visible pour déclencher)
    );
  
    // Observer la cible
    observer.observe(target);
  });
  