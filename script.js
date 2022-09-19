const formBtn = document.querySelector('.submit-arrow-btn');
const emailInput = document.querySelector('#email-input');

formBtn.addEventListener('click', event => {
    if (emailInput.value < 1) {
        document.querySelector('.error-message').style.display = 'flex';
        document.querySelector('.error-message').innerHTML = 'The field cannot be empty.';
    }
    else {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(emailInput.value.toLowerCase()) == false) {
            document.querySelector('.error-message').style.display = 'flex';
            document.querySelector('.error-message').innerHTML = 'Invalid email format.';
        }
        else {
            document.querySelector('.error-message').style.display = 'flex';
            document.querySelector('.error-message').innerHTML = 'Thank you!';
        }
    }
    
    
})
