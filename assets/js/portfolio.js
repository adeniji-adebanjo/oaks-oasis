let body = document.getElementById('body');

// body.forEachElement(bodyElement => {
    body.style.width= '80%';
    body.style.marginLeft= '10%';
    body.style.marginRight= '10%';
    body.style.display ='block';
    body.style.flexDirection = 'row';
    body.style.justifyContent = 'center';
// })


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

function changeName(){
    myname.innerHTML = 'Oluwafemi'
    myname.style.backgroundColor = 'red';
}

setInterval(changeName, 3000);

let lastrow = document.getElementById('lastrow')
lastrow.style.display = 'none';
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



let experiment  = document.getElementsByTagName('p')[0];
console.log(experiment);



// let webb = document.getElementById('webb')

let webb = document.getElementById('webb');

webb.onmouseenter = changeText;

function changeText() {
 webb.innerHTML = 'Testing 1 2'
}

// setInterval(changeText, 3000);
// webb.innerHTML = 'Testing 1 2'

let createElement = document.createElement('div')

let innerDiv = createElement = 'h1'

innerDiv.innerText= 'Testing 1'


let vehicleSelect = document.getElementById('vehicle');


const showVehicle = () => {
    vehicleSelect.style.backgroundColor = 'red';
vehicleSelect.style.display = 'block';
    return
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function myContent() {
    document.getElementById('lastrow').style.display= 'flex';
}


const validateForm = () => {
    let name = document.forms['myForm']['fname'].value;
    let password = document.forms['myForm']['password'].value;
    let confirmpassword = document.forms['myForm']['confirmpassword'].value;

    if (name === "" || password === "" ) {
        return alert('Please enter your name or password');
    } else {
        if (name.length < 5) {
            return alert('Name must be at least 5 characters');   
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters');
        }
        if (!/[123]/.test(password)) {
            return alert('Password must contain at least one of the numbers 1, 2, or 3');
        }
 
        if (password !== confirmpassword) {
            return alert('Password does not match');
        }
         alert('Form submitted successfully');
         return myContent();
    }

}
