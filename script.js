(() => {
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-drawer");
  const siteConfig = window.GRACE_CONNECTIONS_CONFIG || {};
  const formEndpoints = siteConfig.formEndpoints || {};

  function setMenu(open) {
    if (!menuButton || !mobileMenu) return;

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  function getFormMessage(form, className, role) {
    let message = form.querySelector(`.${className}`);

    if (!message) {
      message = document.createElement("div");
      message.className = className;
      message.setAttribute("role", role);
      form.appendChild(message);
    }

    return message;
  }

  function serializeForm(form) {
    const values = Object.fromEntries(new FormData(form).entries());

    return {
      ...values,
      formType: form.dataset.form,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };
  }

  async function submitToEndpoint(endpoint, payload) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed with status ${response.status}`);
    }
  }

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitButton = form.querySelector('[type="submit"]');
      const success = getFormMessage(form, "form-success", "status");
      const error = getFormMessage(form, "form-error", "alert");
      const formType = form.dataset.form;
      const endpoint = form.getAttribute("data-endpoint") || formEndpoints[formType];
      const payload = serializeForm(form);

      success.classList.remove("is-visible");
      error.classList.remove("is-visible");

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }

      try {
        if (endpoint) {
          await submitToEndpoint(endpoint, payload);
        } else {
          console.info("Grace Connections form captured locally. Add an endpoint in site.config.js to send it to a backend or CRM.", payload);
        }

        success.classList.add("is-visible");
        form.reset();
      } catch (submissionError) {
        console.error(submissionError);
        error.textContent = "We could not send this request yet. Please call (630) 882-0803 or email graceconnectionshomecare@gmail.com.";
        error.classList.add("is-visible");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
        }
      }
    });
  });
})();
