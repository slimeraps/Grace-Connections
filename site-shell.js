(() => {
  const phone = "(630) 882-0803";
  const phoneHref = "tel:+16308820803";
  const email = "graceconnectionshomecare@gmail.com";
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navItems = [
    ["index.html", "Home"],
    ["services.html", "Services"],
    ["service-areas.html", "Service Areas"],
    ["resources.html", "Resources"],
    ["join-team.html", "Careers"],
    ["contact.html", "Contact"],
  ];

  const iconDefs = `
    <svg aria-hidden="true" width="0" height="0" style="position:absolute">
      <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></symbol>
    </svg>
  `;

  const navHtml = navItems.map(([href, label]) => {
    const active = href === currentPage ? ' aria-current="page"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");

  const header = `
    ${iconDefs}
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header" aria-label="Primary">
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="Grace Connections HomeCare home">
          <img class="brand-logo" src="assets/grace-connections-main-logo.svg" alt="Grace Connections Non-Medical Home Care" />
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">${navHtml}</nav>
        <div class="nav-actions">
          <a class="btn btn-primary" href="contact.html"><svg class="icon" aria-hidden="true"><use href="#icon-calendar"></use></svg>Schedule</a>
          <a class="btn btn-secondary" href="${phoneHref}"><svg class="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>${phone}</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
            <svg class="icon" aria-hidden="true"><use href="#icon-menu"></use></svg>
          </button>
        </div>
      </div>
      <div class="mobile-drawer" id="mobile-menu">
        <nav aria-label="Mobile navigation">
          <a class="mobile-menu-brand" href="index.html" aria-label="Grace Connections HomeCare home">
            <img class="mobile-menu-icon" src="assets/grace-connections-icon.svg" alt="" />
            <span>Grace Connections</span>
          </a>
          ${navHtml}
          <a href="${phoneHref}">Call ${phone}</a>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand footer-logo" href="index.html" aria-label="Grace Connections HomeCare home">
              <img class="brand-logo" src="assets/grace-connections-main-logo.svg" alt="Grace Connections Non-Medical Home Care" />
            </a>
            <p>Faith-based, non-medical 24/7 private-duty care for families across Illinois.</p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="senior-care.html">Senior care</a></li>
              <li><a href="disability-support.html">Disability support</a></li>
              <li><a href="adults-care.html">Adults 21+ care</a></li>
              <li><a href="children-family-support.html">Children &amp; family support</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="about.html">About Grace Connections</a></li>
              <li><a href="join-team.html">Join our team</a></li>
              <li><a href="resources.html">Resources</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href="${phoneHref}">${phone}</a></li>
              <li><a href="mailto:${email}">${email}</a></li>
              <li>DuPage County, Metro Chicago, and Illinois communities</li>
              <li><a href="terms-disclaimer.html">Terms &amp; Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 Grace Connections HomeCare. Strength &amp; Grace.</span>
          <span>Private-duty, non-medical home care. Emergency medical needs should be directed to 911.</span>
        </div>
      </div>
    </footer>
    <div class="mobile-cta" aria-label="Quick contact actions">
      <a class="btn btn-primary" href="${phoneHref}"><svg class="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>Call</a>
      <a class="btn btn-secondary" href="contact.html"><svg class="icon" aria-hidden="true"><use href="#icon-calendar"></use></svg>Schedule</a>
    </div>
  `;

  document.querySelectorAll("[data-site-header]").forEach((target) => {
    target.innerHTML = header;
  });

  document.querySelectorAll("[data-site-footer]").forEach((target) => {
    target.innerHTML = footer;
  });
})();
