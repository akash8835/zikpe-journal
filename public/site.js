(()=>{
const form=document.querySelector('.newsletter form');if(form){form.addEventListener('submit',e=>e.preventDefault());form.querySelector('button').addEventListener('click',()=>form.querySelector('[role=status]').textContent='Demo only. No email has been collected or saved.');}




const grid=document.querySelector('.story-grid');if(!grid)return;
const data=window.storyData;let category='All stories',query='',page=1;
const categories=[...document.querySelectorAll('.categories button')],search=document.querySelector('input[type=search]'),pagination=document.querySelector('.pagination');
function refresh(){const filtered=data.filter(a=>(category==='All stories'||a.category===category)&&(a.title+' '+a.desc).toLowerCase().includes(query.toLowerCase()));const pages=Math.max(1,Math.ceil(filtered.length/8));page=Math.min(page,pages);document.querySelector('.results').textContent=filtered.length+' stories · '+category;grid.replaceChildren(...filtered.slice((page-1)*8,page*8).map(a=>{const el=document.createElement('div');el.innerHTML=a.card;return el.firstElementChild;}));categories.forEach(b=>b.classList.toggle('selected',b.textContent===category));document.querySelector('.empty')?.remove();if(!filtered.length){const d=document.createElement('div');d.className='empty';d.innerHTML='<h3>No stories found</h3><p>Try another search or browse every category.</p><button>Reset filters</button>';d.querySelector('button').onclick=()=>{category='All stories';query='';search.value='';page=1;refresh()};grid.after(d);}pagination.replaceChildren();function button(label,p,disabled){const b=document.createElement('button');b.textContent=label;b.disabled=disabled;b.onclick=()=>{page=p;refresh()};if(p===page&&!disabled&&/^\d+$/.test(label)){b.className='selected';b.setAttribute('aria-current','page')}pagination.append(b)}button('← Previous',page-1,page===1);for(let i=1;i<=pages;i++)button(String(i),i,false);button('Next →',page+1,page>=pages);}
categories.forEach(b=>b.onclick=()=>{category=b.textContent;page=1;refresh()});search.oninput=()=>{query=search.value;page=1;refresh()};refresh();
})();
