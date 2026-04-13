/* ─────────────────────────────────────────────────
   DADOS — edite aqui para personalizar o portfólio
───────────────────────────────────────────────── */
const dados = {
  nome: "Mauricio da Silva Pereira",
  subtitulo: "Se aventurando na programação",
  tecnologias: ["JavaScript", "Node.js"],
  sobre: [
    "Programador junior, ainda me aventurando neste mundo da programação, que é bem desafiador por sinal. Tenho 23 anos e trabalho dois períodos — e quando sobra tempo estou estudando e focando no curso.",
    "Gosto muito dessa área da tecnologia e espero de verdade conseguir aprender e trabalhar com isso futuramente. Cada dia é um passo a mais nessa jornada!"
  ],
  skills: ["JavaScript", "Node.js"],
  projetos: [
    {
      icone: "🌐",
      nome: "Portfólio Pessoal",
      descricao: "Portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript. Layout responsivo com Flexbox e Grid, projetos renderizados dinamicamente via array de objetos.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      icone: "⚛️",
      nome: "Portfólio React",
      descricao: "Migração do portfólio para React com Vite. Componentização completa com CSS Modules, dados centralizados e publicado na Vercel.",
      tags: ["React", "Vite", "CSS Modules"],
      github: "#",
      demo: "#"
    },
    {
      icone: "💡",
      nome: "Em breve...",
      descricao: "Muitas ideias na cabeça — em breve transformarei em código!",
      tags: ["JavaScript", "Node.js"],
      github: "#",
      demo: "#"
    }
  ],
  contato: {
    github: { label: "GitHub", url: "https://github.com/seu-usuario" },
    linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/seu-usuario" },
    email: { label: "E-mail", url: "mailto:seuemail@email.com" }
  }
};

/* ─────────────────────────────────────────────────
   RENDER
───────────────────────────────────────────────── */
document.getElementById("heroName").textContent = dados.nome;
document.getElementById("heroSubtitle").textContent = dados.subtitulo;
// document.getElementById("avatarInitials").textContent = dados.iniciais; // Removed text content assignment
document.getElementById("sobreTexto1").textContent = dados.sobre[0];
document.getElementById("sobreTexto2").textContent = dados.sobre[1];

// Badges do hero
const badgesEl = document.getElementById("heroBadges");
dados.tecnologias.forEach(t => {
  const b = document.createElement("span");
  b.className = "badge";
  b.textContent = t;
  badgesEl.appendChild(b);
});

// Skills
const skillsEl = document.getElementById("skillsList");
dados.skills.forEach(s => {
  const tag = document.createElement("span");
  tag.className = "skill-tag";
  tag.textContent = s;
  skillsEl.appendChild(tag);
});

// Projetos
const grid = document.getElementById("projectsGrid");
dados.projetos.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-icon">${p.icone}</div>
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <div class="project-tags">
      ${p.tags.map(t => `<span>${t}</span>`).join("")}
    </div>
    <div class="project-links">
      <a href="${p.github}" target="_blank">⬡ GitHub</a>
      <a href="${p.demo}" target="_blank">↗ Demo</a>
    </div>
  `;
  grid.appendChild(card);
});

// Footer
const footerLinks = document.getElementById("footerLinks");
Object.values(dados.contato).forEach(c => {
  const a = document.createElement("a");
  a.href = c.url;
  a.target = "_blank";
  a.textContent = c.label;
  footerLinks.appendChild(a);
});
document.getElementById("footerText").textContent =
  `© ${new Date().getFullYear()} ${dados.nome} — Feito com HTML, CSS & JavaScript`;

/* ─────────────────────────────────────────────────
   HAMBURGER MENU
───────────────────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});