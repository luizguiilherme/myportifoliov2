document.addEventListener('click', (e) =>{
  const isDropMenuBtn = e.target.classList.contains('dropmenucontatos');

  if(!isDropMenuBtn && e.target.closest('.navitem') != null) return;

  let currentSubmenu;

  if(isDropMenuBtn) {
    const item = e.target.closest('.navitem');

    currentSubmenu = item.querySelector('.submenu');

    console.log(currentSubmenu);

    currentSubmenu.classList.toggle('show');
  }

  document.querySelectorAll('.submenu.show').forEach(submenu => {
    if(submenu == currentSubmenu){
      return;
    } 

    submenu.classList.remove('show');
  })
})