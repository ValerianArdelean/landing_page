//CREATING THE NAVIGATION/LINK BUTTONS/MENU
let fragment = document.createDocumentFragment();
  //creating separate home button
let home = document.createElement('li');
home.setAttribute('id', '#link');
let an = document.createElement('a');
an.setAttribute('href','#section0');
an.innerHTML = 'TOP';
home.appendChild(an);
fragment.appendChild(home);
//now the others buttons based on number of sections
let ul = document.querySelector('ul');
let i = 1;
const sections = document.querySelectorAll('section');
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
let nav = document.querySelector('#nav');
nav.appendChild(fragment);
// Scroll to section on link click and making the curent section visible
nav.addEventListener('click', function(e) {
  e.preventDefault();
  let link = `${e.target.hash}`;
  console.log(link)
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
    if (pageYOffset > (sectionTop-400)) {
      current = s.getAttribute('id');
    }
  }
  // get and format the link ID in a nice text
  const navli = '#link'+String(current).slice(-1);
  //get the link button whom section is in view
  let na = document.getElementById(String(navli));
  // formating the link
  na.setAttribute('class', 'activeLi');
})
