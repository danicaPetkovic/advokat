window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".animate");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 200); // izlaze jedna za drugom iz centra
    });
});

document.getElementById("emailForm")?.addEventListener("submit", function(e) {
  e.preventDefault(); // sprečava reload stranice

  // Pokupi podatke iz forme
  const to = "adv.miodrag_petkovic@outlook.com";
  const subject = encodeURIComponent(document.getElementById("email-subject").value);
  const name = encodeURIComponent(document.getElementById("email-name").value);
  const phone = encodeURIComponent(document.getElementById("email-phone").value);
  const text = encodeURIComponent(document.getElementById("email-body").value);

  const body = `Ime i prezime: ${name}%0ABroj telefona: ${phone}%0AOpis slucaja: ${text}`

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

document.addEventListener("DOMContentLoaded", function () {

    const dropdown = document.querySelector(".nav-item.dropdown");

    function isMobile() {
        return window.matchMedia("(max-width: 991px)").matches;
    }

    const btn = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const menuItems = dropdown.querySelectorAll(".dropdown-item");

    // KLIK (mobilni + desktop dugme)
    btn.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();

        if(!isMobile()){
            menu.classList.toggle("show");
        } else {
            if (menu.style.display === "contents") {
                menu.style.display = "none";
            } else {
                menu.style.display = "contents";
                
                menuItems.forEach((entry, index) => {
                    entry.style.fontSize = "12px";
                });
            }
        }

        // HOVER samo za desktop
        dropdown.addEventListener("mouseenter", function(){
            if(!isMobile()){
                menu.classList.add("show");
            } else {
                if (menu.style.display === "contents") {
                    menu.style.display = "none";
                } else {
                    menu.style.display = "contents";
                    menuItems.forEach((entry, index) => {
                        entry.style.fontSize = "12px";
                    });                
                }
            }
        });

        dropdown.addEventListener("mouseleave", function(){
            if(!isMobile()){
                menu.classList.remove("show");
            } else {
                if (menu.style.display === "contents") {
                    menu.style.display = "none";
                } else {
                    menu.style.display = "contents";
                    menuItems.forEach((entry, index) => {
                        entry.style.fontSize = "12px";
                    });
                }
            }
        });

    });

    // klik van menija zatvara
    document.addEventListener("click", function(){
        document.querySelectorAll(".dropdown-menu.show")
            .forEach(menu => menu.classList.remove("show"));
    });
});