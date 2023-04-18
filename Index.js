window.addEventListener('load', function() {
    const splashScreen = document.querySelector('#splash-screen');
    const bottom = document.querySelector('#bottom');
    
    // simulate loading time
    setTimeout(function() {
      // hide splash screen and show main content
      splashScreen.style.display = 'none';
      bottom.style.display = 'none';
    }, 2000);
  });
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnicon = document.querySelector('.toggle_btn i');
  const dropdownMenu  = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isopen = dropdownMenu.classList.contains('open')

    toggleBtnicon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }