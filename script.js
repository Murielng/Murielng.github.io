
window.onload = function() {
  alert("Bienvenue sur mon portfolio !");
};



document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".typewriter");

    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = ""; // Vide le texte pour l'affichage progressif

        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50); // vitesse de l'effet (50ms par caractère)
            }
        }

        type();
    });
});
const voirBtn = document.getElementById("voirBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

voirBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// fermer en cliquant sur le fond
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");

    // Création d'un paragraphe pour afficher le message
    const result = document.createElement("p");
    result.id = "result";
    form.after(result); // le place juste après le formulaire

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi réel du formulaire

        const prenom = document.getElementById("prenom").value.trim();
        const nom = document.getElementById("nom").value.trim();
        const sujet = document.getElementById("sujet").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!prenom || !nom || !sujet || !message) {
            result.style.color = "red";
            result.textContent = "Tous les champs doivent être remplis !";
        } else {
            result.style.color = "green";
            result.textContent = `Merci ${prenom} ${nom}, votre message a été envoyé !`;

            form.reset(); // vide le formulaire
        }
    });
});
