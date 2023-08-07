const body = document.body;

const btnTheme = document.querySelector('.fa-moon');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

const btnHamburger = document.querySelector('.fa-bars');

const displayList = () => {
  const navUl = document.querySelector('nav ul');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

// const showMoreBtn = document.getElementById('showMoreBtn');
// const moreProjectContainer = document.getElementById('moreProjectContainer');

const showMoreBtn = document.getElementById('showMoreBtn');
const moreProjectContainer = document.getElementById('moreProjectContainer');

showMoreBtn.addEventListener('click', () => {
  const isHidden = moreProjectContainer.classList.contains('project-hidden');

  if (isHidden) {
    moreProjectContainer.classList.remove('project-hidden');
    showMoreBtn.textContent = 'Show Less';
    setTimeout(() => {
      moreProjectContainer.style.maxHeight = '1800px'; // Adjust this value based on your design

      window.scrollTo({
        top: moreProjectContainer.offsetTop,
        behavior: 'smooth',
      });
    }, 50); // Delay to ensure transition works properly
  } else {
    moreProjectContainer.style.maxHeight = '0';
    window.scrollTo({
      top:
        moreProjectContainer.offsetTop -
        window.innerHeight +
        moreProjectContainer.offsetHeight,
      behavior: 'smooth',
    });
    setTimeout(() => {
      moreProjectContainer.classList.add('project-hidden');
      showMoreBtn.textContent = 'Show More';
    }, 300); // Adjust this value to match your transition duration
  }
});

// showMoreBtn.addEventListener('click', () => {
//   moreProjectContainer.classList.toggle('project-hidden');
// });

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);
