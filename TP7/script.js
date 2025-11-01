const body = document.body;
const img = document.getElementById('follower');
let mouseDown = false;
body.addEventListener('mousedown', ()=>mouseDown = true);
window.addEventListener('mouseup', ()=>mouseDown = false);
body.addEventListener('mousemove', (e)=>{
  if(!mouseDown) return;
  img.style.left = e.clientX + 'px';
  img.style.top = e.clientY + 'px';
});
