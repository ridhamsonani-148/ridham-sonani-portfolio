const projects = window.portfolioProjects;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

const grid=document.querySelector('#project-grid');
const tagsHTML=tags=>`<div class="tags">${tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>`;
const externalLink=(href,label)=>`<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
grid.innerHTML=projects.map((p,i)=>{
 const url=`project.html?id=${p.id}`;
 const visual=p.id==='catholic-charities'?'<img src="assets/charity-2.png" alt="Catholic Charities assistant interface" width="1600" height="1034" loading="lazy">':window.portfolioArtwork(p.art);
 return `<article class="project-card ${p.featured?'featured':''}" data-group="${p.group}"><a class="project-open" href="${url}" aria-label="Read the ${escapeHTML(p.name)} case study"><div class="project-art ${p.id==='catholic-charities'?'actual-screen':''}" style="color:${p.art==='heritage'||p.art==='compiler'?'#dae6ca':'#465744'}">${visual}<span class="open-arrow" aria-hidden="true">↗</span><div class="project-art-label"><span>${String(i+1).padStart(2,'0')} / ${p.group==='cic'?'ASU AI CIC':'COURSEWORK'}</span><span>${p.id==='catholic-charities'?'Application screenshot':'Concept illustration'}</span></div></div></a><div class="project-info"><div class="project-category">${escapeHTML(p.category)}</div><h3><a href="${url}">${escapeHTML(p.name)}</a></h3><p>${escapeHTML(p.summary)}</p><div class="project-ownership"><span>MY ROLE</span><p>${escapeHTML(p.ownership)}</p></div>${tagsHTML(p.tags)}<div class="project-resources"><a class="case-study-link" href="${url}">Explore case study <span aria-hidden="true">↗</span></a>${p.github?externalLink(p.github,'GitHub'):''}${p.asu?externalLink(p.asu,'ASU story'):''}</div></div></article>`;
}).join('');
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
 let visible=0;
 document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.group!==button.dataset.filter;if(!card.hidden)visible++;});
 document.querySelector('.work-count').textContent=`${visible} projects`;
}));
