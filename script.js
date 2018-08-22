const firstName = document.getElementById('form-first-name');
const lastName = document.getElementById('form-last-name');
const getEmail = document.getElementById('form-email');
const getExtension = document.getElementById('form-extension');
const getLocation = document.getElementById('location-select');
const getTitle = document.getElementById('form-title');
const modalCopy = document.getElementById('modal-copy-button');
const modalPara = document.querySelector('.modal-p');
const submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener('click', () => {
    const address = checkLocation(getLocation.value);
    modalPara.innerHTML = `<strong>${firstName.value} ${lastName.value}</strong>
                                <br>
                                ${getTitle.value}
                                <br>
                                <br>
                                <strong>o:</strong> 800-918-8924 x${getExtension.value}
                                <br>
                                <strong>e:</strong> ${getEmail.value}
                                <br>
                                <br>
                                ${address}
                                <br>
                                <br>
                                <a href="http://www.evicore.com"><img src="https://www.carecorenational.com/emails/evicore.jpg" width="233" height="87"/></a>
                                <br>
                                <br>
                                <a href="http://www.evicore.com">evicore.com</a>
                                `;

    function checkLocation(site) {
        let officeLocal = '';
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

modalCopy.addEventListener('click', () => {
    copyToClipboard(modalPara.innerHTML);
});

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
