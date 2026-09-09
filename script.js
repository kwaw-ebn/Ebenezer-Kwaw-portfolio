const menuButton=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuButton&&navLinks){
  menuButton.setAttribute('role','button');
  menuButton.setAttribute('aria-label','Toggle navigation');
  menuButton.setAttribute('tabindex','0');
  const toggle=()=>navLinks.classList.toggle('active');
  menuButton.addEventListener('click',toggle);
  menuButton.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('active')));
}

// Featured public health technology project
window.addEventListener('DOMContentLoaded',()=>{
  const projects=document.querySelector('#projects');
  if(!projects||document.querySelector('#malaria-outreach-featured-project')) return;

  const featured=document.createElement('article');
  featured.id='malaria-outreach-featured-project';
  featured.setAttribute('aria-label','Featured project: Rootslink Africa Malaria Outreach Intelligence Platform');
  featured.innerHTML=`
    <div style="display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:28px;align-items:center;max-width:1180px;margin:28px auto 42px;padding:26px;border:1px solid rgba(8,99,75,.22);border-radius:22px;background:linear-gradient(135deg,#f4fbf8 0%,#ffffff 60%);box-shadow:0 18px 45px rgba(20,55,45,.08);">
      <div>
        <span style="display:inline-block;padding:7px 12px;border-radius:999px;background:#e6f5ee;color:#08634b;font-size:.8rem;font-weight:800;letter-spacing:.03em;">FEATURED • PUBLIC HEALTH • DATA • RESPONSIBLE AI</span>
        <h3 style="font-size:clamp(1.65rem,3vw,2.35rem);line-height:1.12;margin:16px 0 12px;color:#173c32;">Rootslink Africa Malaria Outreach Intelligence Platform</h3>
        <p style="font-size:1rem;line-height:1.7;color:#4e625c;margin:0 0 14px;">A working digital public health prototype that connects malaria outreach data capture, explainable priority classification, structured follow-up, field-note intelligence through MalaGuide, and community education support.</p>
        <p style="font-size:.92rem;line-height:1.65;color:#5c6e68;margin:0 0 20px;"><strong style="color:#173c32;">Stack:</strong> HTML, CSS, JavaScript, FastAPI, PostgreSQL, GitHub Pages and Render. <strong style="color:#173c32;">Status:</strong> Prototype / Pilot.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <a href="https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/insights/malaria-outreach-intelligence-platform.html" target="_blank" rel="noopener" style="display:inline-block;padding:11px 15px;border-radius:10px;background:#08634b;color:#fff;text-decoration:none;font-weight:700;">View Case Study ↗</a>
          <a href="https://kwaw-ebn.github.io/rootslink-africa-malaria-app/" target="_blank" rel="noopener" style="display:inline-block;padding:11px 15px;border-radius:10px;background:#fff;color:#08634b;border:1px solid #9fcbbd;text-decoration:none;font-weight:700;">Live Demo ↗</a>
          <a href="https://github.com/kwaw-ebn/rootslink-africa-malaria-app" target="_blank" rel="noopener" style="display:inline-block;padding:11px 15px;border-radius:10px;background:#fff;color:#173c32;border:1px solid #cedbd6;text-decoration:none;font-weight:700;">GitHub Repo ↗</a>
        </div>
      </div>
      <div style="overflow:hidden;border-radius:16px;border:1px solid #d9e8e2;background:#eef8f4;">
        <img src="https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/assets/insights/malaria-outreach-intelligence-hero.svg" alt="Malaria outreach intelligence platform with public health dashboard and explainable decision support" style="display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;">
      </div>
    </div>`;

  const heading=projects.querySelector('.section-header,.section-heading,.heading,h2,h1');
  if(heading){
    const parent=heading.closest('.section-header,.section-heading,.heading')||heading;
    parent.insertAdjacentElement('afterend',featured);
  }else{
    projects.prepend(featured);
  }

  const responsive=document.createElement('style');
  responsive.textContent='@media(max-width:780px){#malaria-outreach-featured-project>div{grid-template-columns:1fr!important;padding:18px!important;margin:20px 14px 32px!important;}}';
  document.head.appendChild(responsive);
});
