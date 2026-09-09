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

window.addEventListener('DOMContentLoaded',()=>{
  // Remove any previous oversized version if present.
  document.querySelector('#malaria-outreach-featured-project')?.remove();
  document.querySelector('#malaria-outreach-card')?.remove();

  const categories=[...document.querySelectorAll('#projects .project-category')];
  const publicHealthAI=categories.find(category=>{
    const heading=category.querySelector('.sub-category h2');
    return heading && heading.textContent.trim().toLowerCase()==='public health & ai tech';
  });

  if(!publicHealthAI) return;
  const gallery=publicHealthAI.querySelector('.gallery');
  if(!gallery) return;

  const card=document.createElement('div');
  card.className='item';
  card.id='malaria-outreach-card';
  card.innerHTML=`
    <img src="https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/assets/insights/malaria-outreach-intelligence-hero.svg" alt="Roots Link Africa Malaria Outreach Intelligence Platform">
    <div class="overlay">
      <div class="project-info">
        <h3>Malaria Outreach Intelligence Platform</h3>
        <p><strong>Problem:</strong> Outreach data and volunteer field observations were difficult to turn into consistent follow-up decisions.</p>
        <p><strong>Strategy:</strong> Combine structured public health monitoring with explainable priority rules and responsible AI-assisted field-note analysis.</p>
        <p><strong>Execution:</strong> Built a full-stack prototype using HTML, CSS, JavaScript, FastAPI and PostgreSQL, with MalaGuide, follow-up tracking and malaria education support.</p>
        <p><strong>Result:</strong> A working pilot platform that converts community outreach information into priority-based follow-up and program action.</p>
        <a href="https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/insights/malaria-outreach-intelligence-platform.html" target="_blank" rel="noopener">View Case Study</a>
        <a href="https://kwaw-ebn.github.io/rootslink-africa-malaria-app/" target="_blank" rel="noopener" style="margin-left:8px;">Live Demo</a>
        <a href="https://github.com/kwaw-ebn/rootslink-africa-malaria-app" target="_blank" rel="noopener" style="margin-left:8px;">GitHub</a>
      </div>
    </div>`;

  // Add it as a normal portfolio card, matching ITN, Post CS and Surveillance cards.
  gallery.appendChild(card);
});
