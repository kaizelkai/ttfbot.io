document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".bvvg10"); // Sélectionnez l'élément à animer
  
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
            entry.target.classList.add("visible-animation");
            entry.target.classList.remove("hidden-animation");
          } else {
            // Retire l'animation lorsque l'élément sort de l'écran
            entry.target.classList.add("hidden-animation");
            entry.target.classList.remove("visible-animation");
          }
        });
      },
      { threshold: 0.1 } // Le seuil de visibilité (10% visible pour déclencher)
    );
  
    // Observer la cible
    observer.observe(target);
  });
  