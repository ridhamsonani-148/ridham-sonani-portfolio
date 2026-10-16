(() => {
 const header=document.querySelector('.site-header');
 const desktopNav=header?.querySelector(':scope > nav');
 if(header&&desktopNav){
  const menu=document.createElement('details');menu.className='mobile-menu';
  menu.innerHTML='<summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation">'+desktopNav.innerHTML+'</nav>';
  header.append(menu);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.open=false;}));
  document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.open=false;});
  menu.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
 }
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const targets=document.querySelectorAll('.section-top,.project-card,.role,.skill-grid article,.method-grid article,.about-copy,.education-stack,.contact-section h2');
 if(!reduced.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.06});
  targets.forEach(el=>{el.classList.add('reveal');observer.observe(el);});
 }
 const progress=document.querySelector('.reading-progress');
 let pending=false;
 const update=()=>{const range=document.documentElement.scrollHeight-innerHeight;const amount=range>0?scrollY/range:0;if(progress)progress.style.transform=`scaleX(${Math.min(1,Math.max(0,amount))})`;document.querySelector('.site-header')?.classList.toggle('is-scrolled',scrollY>20);pending=false;};
 addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);update();
 // Keep navigation context visible as the reader moves through the overview.
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('nav a[href^="#"]').forEach(a=>{if(a.hash===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}),{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
})();
