let body = document.getElementById('body');
body.style.width= '80%';
body.style.marginLeft= '10%';
body.style.marginRight= '10%';
body.style.display ='block';
body.style.flexDirection = 'row';
body.style.justifyContent = 'center';

let navbar = document.getElementById('navbar');
navbar.style.display = 'flex';
navbar.style.alignItems = 'center';
navbar.style.paddingTop = '20px';
navbar.style.paddingBottom = '20px';
navbar.style.justifyContent = 'space-between';

let pages = document.getElementById('pages');
pages.style.width = '20%';
pages.style.display = 'flex';
pages.style.justifyContent = 'space-between';

let anchortag1 = document.getElementById("anchor1")
anchortag1.style.textDecoration = 'none';
anchortag1.style.color = '#797670';

let anchortag2 = document.getElementById("anchor2")
anchortag2.style.textDecoration = 'none';
anchortag2.style.color = '#797670';


let anchortag3 = document.getElementById("anchor3")
anchortag3.style.textDecoration = 'none';
anchortag3.style.color = '#797670';

let anchortag4 = document.getElementById("anchor4")
anchortag4.style.textDecoration = 'none';
anchortag4.style.color = '#797670';

let brandName = document.getElementById("brandname");
brandName.style.textDecoration = 'none';
brandName.style.color = '#797670';
brandName.style.fontSize = '32px';

let spanedName = document.getElementById("spanname");
spanedName.style.color = '#000200';

let socialLogos = document.getElementById("sociallogos");
socialLogos.style.justifyContent = 'space-between';
socialLogos.style.width = '15%';
socialLogos.style.display = 'flex';

let myname = document.getElementById('myname')
myname.style.fontSize = '50px';
myname.style.textAlign = 'center';

let lastrow = document.getElementById('lastrow')
lastrow.style.display = 'flex';
lastrow.style.justifyContent = 'space-between'

let services = document.getElementById('services')
services.style.paddingTop = '50px';
services.style.width = '30%';

let image = document.getElementById('image')
image.style.width = '40%';

let userImage = document.getElementById('user-image')
userImage.style.width = '100%';
userImage.style.height = 'auto'


let special = document.getElementById('special')
special.style.marginTop = '50px';
special.style.width = '30%';
special.style.marginLeft = '5%'

let webdev = document.getElementById('webdev');
webdev.style.display = 'flex';
webdev.style.alignContent = 'center';

let uiux = document.getElementById('uiux')
uiux.style.display = 'flex';

let consult = document.getElementById('consult')
consult.style.display = 'flex';

let webdevImg = document.getElementById('webdevImg');
webdevImg.style.width = '40px';
webdevImg.style.height = '40px';

let uiuxImg = document.getElementById('uiuxImg');
uiuxImg.style.width = '40px';
uiuxImg.style.height = '40px';

let consultImg = document.getElementById('consultImg');
consultImg.style.width = '50px';
consultImg.style.height = '40px';

let servicesTexts = document.querySelectorAll('p')
servicesTexts.forEach(text => {
    text.style.width = '70%';
    text.style.top = 0;
})

let summary = document.getElementById('summary');
summary.style.display = 'flex';

let experiences = document.querySelectorAll('#experiences')
experiences.forEach(experience => {
    experience.style.display = 'flex';
    experience.style.flexDirection = 'column';
    experience.style.marginTop = '30px';
    experience.style.width = '20%';
    experience.style.margin = '10px';
});






