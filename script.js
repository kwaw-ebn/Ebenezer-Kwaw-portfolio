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
