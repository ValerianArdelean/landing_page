//Define Global Variables
const sections = document.querySelectorAll('section');
let ul = document.querySelector('ul');
let nav = document.querySelector('#nav');
let fragment = document.createDocumentFragment();

//CREATING THE NAVIGATION/LINK BUTTONS/MENU
//creating a separate HOME button as this is need it no matter how many sec. are
let home = document.createElement('li');
home.setAttribute('id', '#link');
let an = document.createElement('a');
an.setAttribute('href','#section0');
an.innerHTML = 'TOP';
home.appendChild(an);
fragment.appendChild(home);
//now creating the others NAV buttons based on number of sections
let i = 1;
for (section of sections) {
  let a = document.createElement('a');
  a.setAttribute('href', `#section${i}`);
  a.innerHTML = `SECTION${i}`;
  let li = document.createElement('li');
  li.setAttribute('id', `#link${i}`);
  li.setAttribute('class', 'INactiveLi');
  li.appendChild(a);
  fragment.appendChild(li);
  ul.appendChild(fragment);
  /* Aligning the content to left and right */
  if (i % 2 === 0) {
    section.setAttribute('class', 'right');
  }
  i += 1;
}
nav.appendChild(fragment);
// Scroll to anchor ID using scrollTO event
nav.addEventListener('click', function(e) {
  e.preventDefault();
  let link = `${e.target.hash}`;
  let s = document.querySelector(link.toLowerCase());
  s.scrollIntoView({behavior: 'smooth'});
});




//HIGLIGHTING THE BUTTONS MENU as scroling
window.addEventListener('scroll', function(y) {
  lists = document.querySelectorAll('.activeLi');
  for (list of lists) {
    list.setAttribute('class', 'INactiveLi');
  }
  let current = '';
  for (s of sections) {
    const sectionTop = s.offsetTop;
    const sectionHeight = s.clientHeight;
    if (pageYOffset > (sectionTop-350)) {
      current = s.getAttribute('id');
    }
  }
  // get and format the link ID in a nice text
  const navli = '#link'+String(current).slice(-1);
  //get the link button whom section is in view
  let na = document.getElementById(String(navli));
  // Add class 'active' to section when near top of viewport
  na.setAttribute('class', 'activeLi');
})
