(function(){
  var menu=document.getElementById('pbMenuBtn'),nav=document.getElementById('pbMainNav');
  if(menu&&nav)menu.addEventListener('click',function(){nav.classList.toggle('pb-nav-open')});
  var popup=document.getElementById('cookie-consent'),accept=document.getElementById('cookie-accept');
  if(popup&&accept&&!localStorage.getItem('cookie-accepted')){setTimeout(function(){popup.classList.add('pb-cookie-visible')},1200);accept.addEventListener('click',function(){localStorage.setItem('cookie-accepted','true');popup.classList.remove('pb-cookie-visible')})}
  var items=document.querySelectorAll('[data-animate]');
  if(!('IntersectionObserver' in window)){items.forEach(function(el){el.classList.add('pb-visible')});return}
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('pb-visible');observer.unobserve(entry.target)}})},{threshold:.08});
  items.forEach(function(el){observer.observe(el)});
})();
