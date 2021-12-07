const form = document.getElementById('form');
const username = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phnum');
const whatsapp = document.getElementById('wanum');
const dob = document.getElementById('dobdate');
const aadhar = document.getElementById('aadhar');
const position = document.getElementById('position');
const city = document.getElementById('city');
const doj = document.getElementById('dojdate');
const tenure = document.getElementById('tenure');
const cid = document.getElementById('cid');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const WhatsappValue = whatsapp.value.trim();
    const aadharValue = aadhar.value.trim();
    const positionValue = position.value.trim();
    const cityValue = city.value.trim();
    const tenureValue = tenure.value.trim();
    const CertificateValue = cid.value.trim();

    if(usernameValue==""){
        const formControl = username.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-div';
        small.innerText = "Enter Valid Name";
    }
}
