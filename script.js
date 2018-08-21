var firstName = document.getElementById('form-first-name');
var lastName = document.getElementById('form-last-name');
var getEmail = document.getElementById('form-email');
var getExtension = document.getElementById('form-extension');
var getLocation = document.getElementById('location-select');
var getTitle = document.getElementById('form-title');
var modalClose = document.getElementById('modal-copy-button');
var modalPara = document.querySelectorAll('.modal-p');

modalClose.addEventListener('click', () => {
    for (let para of modalPara) {
        para.innerHTML = `test`;
    } 
});



// on submit, if all fields are filled => do the following : return error

// create a modal at top of HDML and these <p> are currently empty.

// Maybe use <br> and put the (5)paragraphs in one paragraph instead to make it work in copy/paste into signature

// set a <p>[0].innerHTML = `${firstName.value} ${lastName.value}`

// set a <p>[1].innerHTML = `${getTitle.value}`

// <p>empty for space?</p>

// set <p>[3].innerHTML = `<strong>o:<strong> 800-918-8924 x${getExtension.value}`

// set <p>[4].innerHTML = `<strong>e:<strong> ${getEmail.value}`

// set <p>[5].innerHTML = `${setAddress(getLocation.value)}`
// use a switch?

// toggle <a><img>eviCore Logo</img></a> Image Link

// set <a href="https://www.evicore.com">evicore.com</a>
