const firstName = document.getElementById('form-first-name');
const lastName = document.getElementById('form-last-name');
const getEmail = document.getElementById('form-email');
const getExtension = document.getElementById('form-extension');
const getLocation = document.getElementById('location-select');
const getTitle = document.getElementById('form-title');
const modalClose = document.getElementById('modal-copy-button');
const modalPara = document.querySelectorAll('.modal-p');
const submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', () => {
    const office = checkSite(getLocation.value);
    modalPara[0].innerHTML = `<strong>${firstName.value} ${lastName.value}</strong>
                                <br>
                                ${getTitle.value}
                                <br>
                                <br>
                                <strong>o:</strong> 800-918-8924 x ${getExtension.value}
                                <br>
                                <strong>e:</strong> ${getEmail.value}
                                <br>
                                <br>
                                ${office}
                                <br>
                                <br>
                                <a href="http://www.evicore.com"><img src="https://www.carecorenational.com/emails/evicore.jpg" width="233" height="87"/></a>
                                <br>
                                <br>
                                <a href="http://www.evicore.com">evicore.com</a>
                                `;
                                
    function checkSite(site) {
        let officeLocal = '';
        switch (site) {
            case 'CA':
            officeLocal = "1610 Arden Way, Suite 280 Sacramento, CA 95815";
            break;
            case 'CO':
            officeLocal = "1575 Garden of the Gods Rd., #200 Colorado Springs, CO 80907";
            break;
            case 'CT':
            officeLocal = "80 Springs Lane Plainville, CT 06062";
            break;
            case 'FL':
            officeLocal = "1420 S. Babcock St. Melbourne, FL 32901";
            break;
            case 'MO':
            officeLocal = "1 Express Way St. Louis, MO 63121";
            break;
            case 'SC':
            officeLocal = "400 Buckwalter Place Blvd. Bluffton, SC 29910";
            case 'TN':
            officeLocal = "730 Cool Springs Blvd., Suite 800 Franklin, TN 37067";
            break;
            default:
            officeLocal = "400 Buckwalter Place Blvd. Bluffton, SC 29910"
        }
        return officeLocal
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
