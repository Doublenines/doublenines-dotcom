/*
 * Double Nines — Vanilla JS Component Library
 *
 * Usage (root page like index.html, services.html):
 *   <script src="js/components.js"></script>
 *   <script>DN.mount()</script>
 *
 * Usage (subpage like blog/post.html, case-study/x.html):
 *   <script src="../js/components.js"></script>
 *   <script>DN.mount({ prefix: '../' })</script>
 *
 * Required placeholders in HTML:
 *   <div id="site-nav"></div>
 *   <div id="site-footer"></div>
 *
 * Page head should include:
 *   DN.injectHead({ title, description, prefix })
 *   — or just hardcode the <head> and include the stylesheet + fonts manually.
 */

var DN = (function () {
  var NAV_LINKS = [
    { label: 'Services', href: 'services.html' },
    { label: 'Roles', href: 'roles.html' },
    { label: 'Work', href: 'work.html' },
    { label: 'Blog', href: 'blog/' },
    { label: 'Careers', href: 'https://app.fuerza.work/companies/4', external: true }
  ];

  var PRODUCTS = [
    { name: 'Fuerza Talent', desc: 'AI-ready talent for product teams', href: 'https://fuerza.work', external: true },
    { name: 'Fuerza Agents', desc: 'Intelligent agents for your stack', href: 'products/fuerza-agents.html', beta: true },
    { name: 'Fuerza Chat', desc: 'Multi-POV AI chat with experts', href: 'products/fuerza-chat.html', beta: true },
    { name: 'Fuerza Analysis', desc: 'Video quality control and scoring', href: 'products/fuerza-analysis.html', beta: true }
  ];

  var FOOTER_COMPANY = [
    { label: 'Home', href: 'index.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Roles', href: 'roles.html' },
    { label: 'Work', href: 'work.html' },
    { label: 'Blog', href: 'blog/' }
  ];

  var FOOTER_CONTACT = [
    { label: 'hi@doublenines.co', href: 'mailto:hi@doublenines.co' },
    { label: '301-359-1431', href: 'tel:3013591431' },
    { label: 'Careers', href: 'https://app.fuerza.work/companies/4', external: true }
  ];

  function resolve(href, prefix) {
    if (!prefix || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return href;
    return prefix + href;
  }

  function betaPill() {
    return ' <span class="beta-pill">Beta</span>';
  }

  function productDropdown(prefix) {
    var items = PRODUCTS.map(function (p) {
      var target = p.external ? ' target="_blank"' : '';
      var beta = p.beta ? betaPill() : '';
      return '<a href="' + resolve(p.href, prefix) + '"' + target + ' class="nav-dropdown-item">' +
        '<div class="nav-dropdown-item-name">' + p.name + beta + '</div>' +
        '<div class="nav-dropdown-item-desc">' + p.desc + '</div>' +
        '</a>';
    }).join('');
    return '<div class="nav-dropdown">' +
      '<a href="#" class="nav-dropdown-trigger">Products</a>' +
      '<div class="nav-dropdown-menu">' + items + '</div>' +
      '</div>';
  }

  function nav(prefix) {
    prefix = prefix || '';
    var links = NAV_LINKS.map(function (l) {
      var target = l.external ? ' target="_blank"' : '';
      return '<a href="' + resolve(l.href, prefix) + '"' + target + '>' + l.label + '</a>';
    }).join('');

    return '<nav class="nav idx-nav">' +
      '<div class="nav-inner">' +
        '<a href="' + resolve('index.html', prefix) + '" class="nav-logo"><img src="' + resolve('images/wordmark-notm.svg', prefix) + '" alt="Double Nines"></a>' +
        '<div class="idx-nav-center">' +
          productDropdown(prefix) +
          links +
        '</div>' +
        '<div class="idx-nav-right">' +
          '<a href="mailto:hi@doublenines.co" class="idx-nav-cta">Hire talent</a>' +
        '</div>' +
        '<button class="nav-hamburger" aria-label="Open menu" onclick="document.querySelector(\'.mobile-menu\').classList.toggle(\'open\')">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>';
  }

  function mobileMenu(prefix) {
    prefix = prefix || '';
    var productItems = PRODUCTS.map(function (p) {
      var target = p.external ? ' target="_blank"' : ' onclick="this.parentElement.classList.remove(\'open\')"';
      var beta = p.beta ? betaPill() : '';
      return '<a href="' + resolve(p.href, prefix) + '"' + target + ' class="mobile-menu-sub">' + p.name + beta + '</a>';
    }).join('');

    var navItems = NAV_LINKS.map(function (l) {
      var target = l.external ? ' target="_blank"' : ' onclick="this.parentElement.classList.remove(\'open\')"';
      return '<a href="' + resolve(l.href, prefix) + '"' + target + '>' + l.label + '</a>';
    }).join('');

    return '<div class="mobile-menu">' +
      '<a href="' + resolve('index.html', prefix) + '" onclick="this.parentElement.classList.remove(\'open\')">Home</a>' +
      '<div class="mobile-menu-label">Products</div>' +
      productItems +
      navItems +
      '<a href="mailto:hi@doublenines.co">Contact</a>' +
    '</div>';
  }

  function footer(prefix) {
    prefix = prefix || '';

    var productLinks = PRODUCTS.map(function (p) {
      var target = p.external ? ' target="_blank"' : '';
      var beta = p.beta ? betaPill() : '';
      return '<a href="' + resolve(p.href, prefix) + '"' + target + '>' + p.name + beta + '</a>';
    }).join('');

    var companyLinks = FOOTER_COMPANY.map(function (l) {
      return '<a href="' + resolve(l.href, prefix) + '">' + l.label + '</a>';
    }).join('');

    var contactLinks = FOOTER_CONTACT.map(function (l) {
      var target = l.external ? ' target="_blank"' : '';
      return '<a href="' + resolve(l.href, prefix) + '"' + target + '>' + l.label + '</a>';
    }).join('');

    return '<footer class="footer">' +
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-callout">Hire senior<br>AI talent</div>' +
          '<div>' +
            '<div class="footer-heading">Talent Platform</div>' +
            '<div class="footer-links">' + productLinks + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="footer-heading">Company</div>' +
            '<div class="footer-links">' + companyLinks + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="footer-heading">Contact</div>' +
            '<div class="footer-links">' + contactLinks + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>&copy; 2026 All rights reserved</span>' +
          '<a href="' + resolve('privacy-policy.html', prefix) + '">Privacy Policy</a>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  function pageHead(opts) {
    opts = opts || {};
    var prefix = opts.prefix || '';
    var title = opts.title || 'Double Nines';
    var description = opts.description || 'Double Nines designs, builds, and scales intelligent digital products for ambitious companies.';
    return '<meta charset="utf-8">' +
      '<title>' + title + '</title>' +
      '<meta name="description" content="' + description + '">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<meta property="og:title" content="' + title + '">' +
      '<meta property="og:description" content="' + description + '">' +
      '<meta property="og:type" content="website">' +
      '<meta name="twitter:card" content="summary_large_image">' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">' +
      '<link href="' + resolve('css/style.css?v=7', prefix) + '" rel="stylesheet">' +
      '<link href="' + resolve('images/favicon.svg', prefix) + '" rel="shortcut icon" type="image/x-icon">';
  }

  function pageHero(opts) {
    opts = opts || {};
    var heading = opts.heading || '';
    var subtitle = opts.subtitle || '';
    var cta = opts.cta || '';
    var mesh = opts.mesh !== false;

    var meshHtml = '';
    if (mesh) {
      meshHtml = '<div class="hero-visual">' +
        '<div class="abstract-mesh abstract-mesh--hero">' +
          '<div class="mesh-orb mesh-orb-1"></div>' +
          '<div class="mesh-orb mesh-orb-2"></div>' +
          '<div class="mesh-orb mesh-orb-3"></div>' +
          '<div class="mesh-orb mesh-orb-4"></div>' +
          '<div class="mesh-orb mesh-orb-5"></div>' +
          '<div class="mesh-orb mesh-orb-6"></div>' +
          '<div class="mesh-ring mesh-ring-1"></div>' +
          '<div class="mesh-ring mesh-ring-2"></div>' +
          '<div class="mesh-ring mesh-ring-3"></div>' +
          '<div class="mesh-ring mesh-ring-4"></div>' +
        '</div>' +
      '</div>';
    }

    return '<section class="idx-page-hero">' +
      '<div class="idx-page-hero-inner container">' +
        '<div class="idx-page-hero-text">' +
          '<h1 class="idx-page-hero-heading">' + heading + '</h1>' +
          (subtitle ? '<p class="idx-page-hero-sub">' + subtitle + '</p>' : '') +
          (cta ? '<div class="idx-page-hero-actions">' + cta + '</div>' : '') +
        '</div>' +
        meshHtml +
      '</div>' +
    '</section>';
  }

  function featureGrid(items) {
    var cards = items.map(function (item) {
      return '<div class="idx-feature-card">' +
        (item.icon ? '<div class="idx-feature-icon">' + item.icon + '</div>' : '') +
        '<h3 class="idx-feature-title">' + item.title + '</h3>' +
        '<p class="idx-feature-desc">' + item.desc + '</p>' +
      '</div>';
    }).join('');

    return '<section class="idx-features">' +
      '<div class="idx-features-grid container">' + cards + '</div>' +
    '</section>';
  }

  function faqSection(heading, items) {
    var faqItems = items.map(function (item) {
      return '<div class="idx-faq-item">' +
        '<button class="idx-faq-question" onclick="this.parentElement.classList.toggle(\'open\')">' +
          '<span>' + item.q + '</span>' +
          '<span class="idx-faq-icon">+</span>' +
        '</button>' +
        '<div class="idx-faq-answer"><p>' + item.a + '</p></div>' +
      '</div>';
    }).join('');

    return '<section class="idx-faq">' +
      '<div class="container">' +
        '<h2 class="idx-faq-heading">' + heading + '</h2>' +
        '<div class="idx-faq-list">' + faqItems + '</div>' +
      '</div>' +
    '</section>';
  }

  function splitSection(opts) {
    opts = opts || {};
    return '<section class="idx-split">' +
      '<div class="idx-split-inner container">' +
        '<div class="idx-split-left">' +
          '<h2 class="idx-split-heading">' + (opts.heading || '') + '</h2>' +
          (opts.paragraphs || []).map(function (p) { return '<p class="idx-split-desc">' + p + '</p>'; }).join('') +
          (opts.cta || '') +
        '</div>' +
        '<div class="idx-split-right">' + (opts.rightContent || '') + '</div>' +
      '</div>' +
    '</section>';
  }

  function mount(opts) {
    opts = opts || {};
    var prefix = opts.prefix || '';

    var navEl = document.getElementById('site-nav');
    if (navEl) {
      navEl.outerHTML = nav(prefix) + mobileMenu(prefix);
    }

    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.outerHTML = footer(prefix);
    }
  }

  return {
    nav: nav,
    mobileMenu: mobileMenu,
    footer: footer,
    pageHead: pageHead,
    pageHero: pageHero,
    featureGrid: featureGrid,
    faqSection: faqSection,
    splitSection: splitSection,
    mount: mount,
    resolve: resolve
  };
})();
