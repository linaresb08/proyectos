const sectionsArray = document.querySelectorAll('section');
const sectionPos = {};

sectionsArray.forEach((section) => {
  sectionPos[section.id] = section.offsetTop;
});

window.onscroll = () => {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (id in sectionPos) {
    if (sectionPos[id] <= scrollPosition) {
      document.querySelector('.active').classList.remove('active');
      document.querySelector(`a[href*=${id}]`).classList.add('active');
    }
  }
};

/* De esta manera también funciona, pero la anterior es más óptima
  if (scrollPosition < sectionPos.about) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href*='home']`).classList.add('active');
  }
  if (scrollPosition >= sectionPos.about) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href*='about']`).classList.add('active');
  }
  if (scrollPosition >= sectionPos.projects) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href*='projects']`).classList.add('active');
  }
  if (scrollPosition >= sectionPos.testimonials) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href*='testimonials']`).classList.add('active');
  }
  if (scrollPosition >= sectionPos.contact) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`a[href*='contact']`).classList.add('active');
  }
*/