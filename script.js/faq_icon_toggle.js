document.addEventListener("DOMContentLoaded", function () {
        const faqs = document.querySelectorAll(".faq-question");

        faqs.forEach((faq) => {
          const icon = faq.querySelector("i");
          const target = document.querySelector(faq.dataset.bsTarget);

          // On show event
          target.addEventListener("show.bs.collapse", () => {
            icon.classList.remove("bi-plus-lg");
            icon.classList.add("bi-dash-lg");
          });

          // On hide event
          target.addEventListener("hide.bs.collapse", () => {
            icon.classList.remove("bi-dash-lg");
            icon.classList.add("bi-plus-lg");
          });
        });
      });