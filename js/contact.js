
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        nameError.style.display = 'block';
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
        emailError.style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('is-invalid');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
        phoneError.style.display = 'none';
    }

    // Project scope validation
    const address = document.getElementById('address');
    const projectError = document.getElementById('projectError');
    if (!address.value.trim()) {
        address.classList.add('is-invalid');
        projectError.style.display = 'block';
        isValid = false;
    } else {
        address.classList.remove('is-invalid');
        projectError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        messageError.style.display = 'block';
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
        messageError.style.display = 'none';
    }

    if (isValid) {
        // Here you would typically send the form data to your server
        console.log('Form is valid, ready to submit');
        // Reset form after successful submission
        this.reset();
    }
});

// Real-time validation
const inputs = document.querySelectorAll('.form-control');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim()) {
            this.classList.remove('is-invalid');
            this.nextElementSibling.style.display = 'none';
        }
    });
});