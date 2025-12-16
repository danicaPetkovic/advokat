window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".animate");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200); // izlaze jedna za drugom iz centra
    });
});

document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault(); // sprečava reload stranice

  // Pokupi podatke iz forme
  const to = "adv.miodrag_petkovic@outlook.com";
  const subject = encodeURIComponent(document.getElementById("email-subject").value);
  const name = encodeURIComponent(document.getElementById("email-name").value);
  const surname = encodeURIComponent(document.getElementById("email-surname").value);
  const phone = encodeURIComponent(document.getElementById("email-phone").value);
  const text = encodeURIComponent(document.getElementById("email-body").value);

  const body = `Ime i prezime: ${name} ${surname}%0ABroj telefona: ${phone}%0AOpis slucaja: ${text}`

  // Kreira mailto link
  const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;

  // Otvara email klijent
  window.location.href = mailtoLink;

  document.getElementById('emailForm').reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 120); // blago kašnjenje po kartici
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    cards.forEach(card => observer.observe(card));
});