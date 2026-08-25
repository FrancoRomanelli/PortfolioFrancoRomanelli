// ---------- language toggle ----------
const translations = {
  nav_about:   { es: 'Sobre Mi', en: 'About Me' },
  nav_skills:  { es: 'Skills', en: 'Skills' },
  nav_certs:   { es: 'Certificaciones', en: 'Certifications' },
  nav_contact: { es: 'Contacto', en: 'Contact' },
  cv_btn:      { es: 'Mira mi CV', en: 'View my CV' },
  hero_role:   { es: 'Full Stack — Estudiante de Ciberseguridad', en: 'Full Stack — Cybersecurity Student' },
  hero_desc:   {
    es: 'Soy Franco Romanelli, estudiante del área tecnológica, interesado en seguir aprendiendo, desarrollar nuevas habilidades y crecer profesionalmente dentro del mundo de la tecnología, te invito a mirar mi perfil y proyectos.',
    en: "I'm Franco Romanelli, a technology student interested in continuous learning, developing new skills, and growing professionally in the tech world. Feel free to check out my profile and projects."
  },
  about_title: { es: 'Sobre mí', en: 'About me' },
  about_p1: {
    es: 'Soy Franco Romanelli, egresado de Bachillerato Tecnológico en Informática y actualmente estudiante de la Tecnicatura en Analista de Ciberseguridad en la Universidad de la Empresa (UDE). Cuento con conocimientos básicos en tecnologías como HTML, CSS, Java, JavaScript, MySQL, Git y Bash. Actualmente estoy enfocado en seguir ampliando mis conocimientos en el área tecnológica, con especial interés en la ciberseguridad. Me considero una persona comprometida, disciplinada y con una actitud orientada al aprendizaje constante. Busco continuar adquiriendo experiencia, enfrentar nuevos desafíos y desarrollar progresivamente mis habilidades para construir mi perfil profesional dentro del área tecnológica.',
    en: "I'm Franco Romanelli, a graduate of the Technical Baccalaureate in Computer Science and currently a student in the Cybersecurity Analyst program at Universidad de la Empresa (UDE). I have working knowledge of technologies such as HTML, CSS, Java, JavaScript, MySQL, Git and Bash. I'm currently focused on expanding my knowledge in tech, with a particular interest in cybersecurity. I consider myself committed, disciplined, and driven by a constant desire to learn. I'm looking to keep gaining experience, take on new challenges, and progressively build my professional profile in the tech field."
  },
  about_p2: {
    es: 'Te invito a conocer las actividades que realizo en mi GitHub y unirte si quieres colaborar en algún proyecto.',
    en: "Feel free to check out what I build on my GitHub, and join in if you'd like to collaborate on a project."
  },
  certs_title: { es: 'Certificaciones Académicas', en: 'Academic Certifications' },
  cert1_sub: { es: 'Instituto de tecnología en Montevideo', en: 'Technology institute in Montevideo' },
  cert1_desc: {
    es: 'Instituto de formación en informática y tecnología ubicado en Montevideo. Ofrece cursos y carreras técnicas en programación, redes, diseño web y soporte, con un enfoque práctico y orientado al mercado laboral.',
    en: 'A technical education institute based in Montevideo. It offers courses and technical programs in programming, networking, web design and IT support, with a practical, job-market-oriented approach.'
  },
  cert2_sub: { es: 'institución de educación superior privada de Uruguay', en: 'private higher-education institution in Uruguay' },
  cert2_desc: {
    es: 'Carrera terciaria orientada a formar profesionales en el área de la ciberseguridad, con una formación teórico-práctica en protección de sistemas, análisis de vulnerabilidades, pentesting, criptografía, informática forense y gestión de la seguridad de la información. Prepara para identificar y analizar amenazas, evaluar riesgos y aplicar medidas de seguridad en entornos tecnológicos.',
    en: 'A degree program focused on training cybersecurity professionals, combining theory and practice in systems protection, vulnerability analysis, pentesting, cryptography, digital forensics and information security management. It prepares students to identify and analyze threats, assess risk, and apply security measures in technological environments.'
  },
  cert2_tag2: { es: 'Seguridad Informática', en: 'Information Security' },
  contact_title: { es: '¿Charlamos?', en: "Let's talk?" },
  contact_desc: {
    es: 'Abierto a oportunidades de práctica, colaboración en proyectos o simplemente hablar de seguridad y código.',
    en: 'Open to internship opportunities, project collaborations, or just talking about security and code.'
  },
  contact_btn: { es: 'Enviar un email', en: 'Send an email' },
  footer_copy: { es: '© 2026 Cybersecurity & Full Stack Portfolio.', en: '© 2026 Cybersecurity & Full Stack Portfolio.' },
  footer_email: { es: 'Email', en: 'Email' },
  footer_top: { es: 'Volver arriba ↑', en: 'Back to top ↑' },
};

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) el.textContent = entry[lang];
  });
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.langBtn === lang);
  });
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es';
    applyLanguage(current === 'es' ? 'en' : 'es');
  });
}
let savedLang = 'es';
try { savedLang = localStorage.getItem('site-lang') || 'es'; } catch (e) {}
applyLanguage(savedLang);

// ---------- mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const panel = document.getElementById('mobilePanel');
menuBtn.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));

// ---------- CV download dropdown ----------
const cvBtn = document.getElementById('cvDropdownBtn');
const cvDropdown = document.getElementById('cvDropdown');
const cvChevron = document.getElementById('cvChevron');
const cvWrap = document.getElementById('cvDropdownWrap');

function closeCvDropdown() {
  cvDropdown.classList.remove('open');
  cvBtn.setAttribute('aria-expanded', 'false');
  cvChevron.style.transform = 'rotate(0deg)';
}
function toggleCvDropdown() {
  const isOpen = cvDropdown.classList.toggle('open');
  cvBtn.setAttribute('aria-expanded', String(isOpen));
  cvChevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}
cvBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleCvDropdown();
});
document.addEventListener('click', (e) => {
  if (!cvWrap.contains(e.target)) closeCvDropdown();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCvDropdown();
});
// each CV link opens in its own new tab; close the menu right after
cvDropdown.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeCvDropdown()));

// ---------- scroll reveal ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if (!reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// ---------- skill bars ----------
const skillEls = document.querySelectorAll('.skill');
const skillIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const pct = e.target.dataset.pct;
      const bar = e.target.querySelector('.bar-fill');
      requestAnimationFrame(() => { bar.style.width = pct + '%'; });
      skillIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
skillEls.forEach(el => skillIO.observe(el));

// ---------- decrypt text effect ----------
const decryptEl = document.getElementById('decrypt-text');
const finalText = decryptEl.textContent;
const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&_';
if (!reduceMotion) {
  let frame = 0;
  const totalFrames = finalText.length * 3;
  function tick() {
    let out = '';
    for (let i = 0; i < finalText.length; i++) {
      const revealAt = i * 3;
      if (frame >= revealAt + 6) out += finalText[i];
      else if (frame >= revealAt) out += glyphs[Math.floor(Math.random() * glyphs.length)];
      else out += '\u00A0';
    }
    decryptEl.textContent = out;
    frame++;
    if (frame <= totalFrames + 6) requestAnimationFrame(tick);
    else decryptEl.textContent = finalText;
  }
  requestAnimationFrame(tick);
}

// ---------- magnetic buttons ----------
if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.magnet').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });
}

// ---------- cursor halo ----------
const halo = document.getElementById('cursor-halo');
if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    halo.style.left = e.clientX + 'px';
    halo.style.top = e.clientY + 'px';
  });
}

// ---------- nav active link on scroll ----------
const sections = ['about', 'stack', 'certs', 'contact'].map(id => document.getElementById(id));
const navLinks = document.querySelectorAll('.nav-link');
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const match = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => s && navIO.observe(s));

// ---------- photo 3D tilt on hover ----------
const photoTilt = document.getElementById('photoTilt');
if (photoTilt && !reduceMotion && matchMedia('(pointer:fine)').matches) {
  photoTilt.addEventListener('mousemove', (e) => {
    const r = photoTilt.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    photoTilt.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  });
  photoTilt.addEventListener('mouseleave', () => {
    photoTilt.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// ---------- network canvas background ----------
const canvas = document.getElementById('netCanvas');
const ctx = canvas.getContext('2d');
let w, h, nodes = [];
const NODE_COUNT = 46;
const COLORS = ['#0ea5e9', '#10b981', '#de8712'];

function resize() {
  const hero = canvas.parentElement;
  w = canvas.width = hero.offsetWidth;
  h = canvas.height = hero.offsetHeight;
}
function initNodes() {
  nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}
function drawNet() {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;
    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j];
      const d = Math.hypot(n.x - m.x, n.y - m.y);
      if (d < 130) {
        ctx.strokeStyle = `rgba(148,163,184,${0.14 * (1 - d / 130)})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
      }
    }
  }
  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
    ctx.fillStyle = n.c + 'cc';
    ctx.fill();
  }
  if (!reduceMotion) requestAnimationFrame(drawNet);
}
resize(); initNodes(); drawNet();
window.addEventListener('resize', () => { resize(); initNodes(); });