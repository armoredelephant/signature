var firstName = document.getElementById('form-first-name');
var lastName = document.getElementById('form-last-name');
var getEmail = document.getElementById('form-email');
var getExtension = document.getElementById('form-extension');
var getLocation = document.getElementById('location-select');
var getTitle = document.getElementById('form-title');
var modalCopy = document.getElementById('modal-copy-button');
var modalPara = document.querySelector('.modal-p');
var submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', () => {

    var address = checkLocation(getLocation.value);
    var first = firstName.value;
    var last = lastName.value;
    var title = getTitle.value;
    var ext = getExtension.value;
    var email = getEmail.value;

    // modalPara.style.color = "#002855";
    // modalPara.style.fontFamily = "arial";
    // modalPara.style.fontSize = "12px";
    modalPara.innerHTML = "<strong>" + first + " " + last + "</strong>" +
                            "<br>" +
                            title +
                            "<br>" +
                            "<br>" +
                            "<strong>o:</strong> 800.918.8924 x" + ext +
                            "<br>" +
                            "<strong>e:</strong> " + email +
                            "<br>" +
                            "<br>" +
                            address +
                            "<br>" +
                            "<br>" +
                            "<a href=\"http://www.evicore.com\"><img src=\"https://www.carecorenational.com/emails/evicore.jog\" width=\"233\" height=\"87\" /></a>" +
                            "<br>" +
                            "<br>" +
                            "<a href=\"http://www.evicore.com\">evicore.com</a>";
 

    // modalPara.innerHTML = `<strong>${firstName.value} ${lastName.value}</strong>
    //                             <br>
    //                             ${getTitle.value}
    //                             <br>
    //                             <br>
    //                             <strong>o:</strong> 800-918-8924 x${getExtension.value}
    //                             <br>
    //                             <strong>e:</strong> ${getEmail.value}
    //                             <br>
    //                             <br>
    //                             ${address}
    //                             <br>
    //                             <br>
    //                             <a href="http://www.evicore.com"><img src="https://www.carecorenational.com/emails/evicore.jpg" width="233" height="87"/></a>
    //                             <br>
    //                             <br>
    //                             <a href="http://www.evicore.com">evicore.com</a>
    //                             `;

    function checkLocation(site) {
        var officeLocal = '';
        switch (site) {
            case 'CA':
            officeLocal = "1610 Arden Way, Suite 280 &#149 Sacramento, CA 95815";
            break;
            case 'CO':
            officeLocal = "1575 Garden of the Gods Rd., Suite 200 &#149 Colorado Springs, CO 80907";
            break;
            case 'CT':
            officeLocal = "80 Springs Lane &#149 Plainville, CT 06062";
            break;
            case 'FL':
            officeLocal = "1420 S. Babcock St. &#149 Melbourne, FL 32901";
            break;
            case 'MO':
            officeLocal = "1 Express Way &#149 St. Louis, MO 63121";
            break;
            case 'SC':
            officeLocal = "400 Buckwalter Place Blvd. &#149 Bluffton, SC 29910";
            case 'TN':
            officeLocal = "730 Cool Springs Blvd., Suite 800 &#149 Franklin, TN 37067";
            break;
            default:
            officeLocal = "400 Buckwalter Place Blvd. &#149 Bluffton, SC 29910"
        }
        return officeLocal
    }
});

// modalCopy.addEventListener('click', () => {
//     copyToClipboard(modalPara.innerHTML);
// });

// const copyToClipboard = str => {
//   const el = document.createElement('textarea');
//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
// };
