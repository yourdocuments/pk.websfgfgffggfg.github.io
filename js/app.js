const PRODUCTS=[
{name:"Nexora Corporate",cat:"Business",price:"24,999",desc:"Premium corporate & service website",pages:"6 pages",theme:"Minimal"},
{name:"LuxeCart",cat:"Ecommerce",price:"39,999",desc:"Modern fashion & online store",pages:"Store",theme:"Dark"},
{name:"Karahi House",cat:"Restaurant",price:"19,999",desc:"Restaurant, menu & reservation layout",pages:"5 pages",theme:"Warm"},
{name:"EstateHub",cat:"Real Estate",price:"29,999",desc:"Property listings & agency website",pages:"7 pages",theme:"Clean"},
{name:"Apex Portfolio",cat:"Portfolio",price:"17,999",desc:"Creative portfolio for professionals",pages:"4 pages",theme:"Editorial"},
{name:"GrowthLab",cat:"Agency",price:"27,999",desc:"Digital agency & marketing website",pages:"6 pages",theme:"Modern"},
{name:"Urban Store",cat:"Ecommerce",price:"34,999",desc:"Premium retail storefront",pages:"Store",theme:"Luxury"},
{name:"Sapphire Clinic",cat:"Business",price:"21,999",desc:"Clinic, doctor & appointment site",pages:"5 pages",theme:"Medical"},
{name:"Biryani District",cat:"Restaurant",price:"18,999",desc:"Food brand & restaurant website",pages:"5 pages",theme:"Food"}];
let active="All", shown=6;
const grid=document.querySelector("#products");
function render(){
 const list=PRODUCTS.filter(x=>active==="All"||x.cat===active).slice(0,shown);
 grid.innerHTML=list.map((p,i)=>`<article class="product"><div class="thumb"><span class="tag">${p.cat.toUpperCase()}</span><div class="mini"><div class="mini-head"><b>${p.name.split(" ")[0].toUpperCase()}</b><span>HOME</span><span>ABOUT</span><span>CONTACT</span></div><div class="mini-body"><small>PREMIUM WEBSITE</small><h4>${p.name}</h4><p>${p.desc}</p><i class="mini-box"></i><i class="mini-box"></i><i class="mini-box"></i></div></div></div><div class="product-info"><div class="row"><h3>${p.name}</h3><b class="price2">PKR ${p.price}</b></div><p>${p.desc}</p><div class="meta"><span>${p.pages} · ${p.theme}</span><b>View preview ↗</b></div></div></article>`).join("");
}
document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{active=b.dataset.filter;shown=6;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{active=b.dataset.cat;shown=6;document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x.dataset.filter===active));document.querySelector("#websites").scrollIntoView({behavior:"smooth"});render()});
document.querySelector("#loadMore").onclick=()=>{shown+=3;render();if(shown>=PRODUCTS.length)document.querySelector("#loadMore").style.display="none"};
document.querySelector("#searchBtn").onclick=()=>{const q=prompt("Search websites by name or category:");if(!q)return;const found=PRODUCTS.filter(x=>(x.name+" "+x.cat+" "+x.desc).toLowerCase().includes(q.toLowerCase()));grid.innerHTML=found.length?found.map(p=>`<article class="product"><div class="thumb"><span class="tag">${p.cat.toUpperCase()}</span><div class="mini"><div class="mini-head"><b>${p.name}</b></div><div class="mini-body"><h4>${p.name}</h4><p>${p.desc}</p></div></div></div><div class="product-info"><div class="row"><h3>${p.name}</h3><b class="price2">PKR ${p.price}</b></div><p>${p.desc}</p></div></article>`).join(""):"<p>No matching websites found.</p>"};
render();