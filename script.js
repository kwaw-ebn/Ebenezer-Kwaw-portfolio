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
  // Remove the previous oversized featured block if an older cached version created it.
  document.querySelector('#malaria-outreach-featured-project')?.remove();

  const projects=document.querySelector('#projects');
  if(!projects||document.querySelector('#malaria-outreach-card')) return;

  // Find the Public Health / AI project group by its visible heading.
  const headings=[...projects.querySelectorAll('h1,h2,h3,h4,h5,h6,.title,.category-title')];
  const targetHeading=headings.find(el=>{
    const t=(el.textContent||'').toLowerCase();
    return t.includes('public health')&&(t.includes('ai')||t.includes('artificial intelligence'));
  }) || headings.find(el=>(el.textContent||'').toLowerCase().includes('public health'));

  if(!targetHeading) return;

  // Locate the existing card grid immediately associated with that category.
  let scope=targetHeading.parentElement;
  let grid=null;
  for(let i=0;i<5&&scope&&!grid;i++,scope=scope.parentElement){
    const candidates=[...scope.querySelectorAll('.project-grid,.projects-grid,.portfolio-grid,.project-container,.projects-container,.row,.grid')];
    grid=candidates.find(g=>g.querySelector('.project-card,.project-item,.portfolio-item,.card'))||null;
  }
  if(!grid){
    let next=targetHeading.nextElementSibling;
    while(next&&!grid){
      if(next.querySelector?.('.project-card,.project-item,.portfolio-item,.card')) grid=next;
      next=next.nextElementSibling;
    }
  }
  if(!grid) return;

  const sample=grid.querySelector('.project-card,.project-item,.portfolio-item,.card');
  if(!sample) return;

  // Clone an existing project card so the new project matches the portfolio's exact dimensions and styling.
  const card=sample.cloneNode(true);
  card.id='malaria-outreach-card';

  const img=card.querySelector('img');
  if(img){
    img.src='https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/assets/insights/malaria-outreach-intelligence-hero.svg';
    img.alt='Roots Link Africa Malaria Outreach Intelligence Platform dashboard and public health decision support';
    img.removeAttribute('srcset');
  }

  const title=card.querySelector('h2,h3,h4,h5,.project-title,.title');
  if(title) title.textContent='Malaria Outreach Intelligence Platform';

  const paragraphs=[...card.querySelectorAll('p')];
  if(paragraphs[0]) paragraphs[0].textContent='Digital public health prototype for malaria outreach monitoring, explainable priority classification, follow-up tracking and community education.';

  // Replace technology/tag labels when the existing card provides them.
  const tagContainer=card.querySelector('.tags,.tech-stack,.project-tags,.skills-used');
  if(tagContainer) tagContainer.innerHTML='<span>Public Health</span><span>AI</span><span>FastAPI</span><span>PostgreSQL</span>';

  const links=[...card.querySelectorAll('a')];
  const destinations=[
    ['View Case Study','https://kwaw-ebn.github.io/ebenezer-kwaw-personal-website/insights/malaria-outreach-intelligence-platform.html'],
    ['Live Demo','https://kwaw-ebn.github.io/rootslink-africa-malaria-app/'],
    ['GitHub','https://github.com/kwaw-ebn/rootslink-africa-malaria-app']
  ];
  links.forEach((a,i)=>{
    const d=destinations[Math.min(i,destinations.length-1)];
    a.href=d[1];
    a.target='_blank';
    a.rel='noopener';
    const label=a.querySelector('span')||a;
    if(label===a||label.children.length===0) label.textContent=d[0];
    a.setAttribute('aria-label',d[0]+' for Malaria Outreach Intelligence Platform');
  });

  // If the template has fewer than three links, add compact links while preserving card styling.
  if(links.length<3){
    const actionHost=card.querySelector('.project-links,.links,.buttons,.project-buttons')||card;
    destinations.slice(links.length).forEach(d=>{
      const a=document.createElement('a');
      a.href=d[1];a.target='_blank';a.rel='noopener';a.textContent=d[0];a.className=links[0]?.className||'project-link';
      actionHost.appendChild(a);
    });
  }

  grid.prepend(card);
});
