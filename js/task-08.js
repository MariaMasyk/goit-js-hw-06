const form = document.querySelector('.login-form');

  form.addEventListener('submit', onSubmit);

  function onSubmit(event) {
    event.preventDefault(); 

    const elements = event.target.elements;
    const emailInput = elements.email;
    const passwordInput = elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Всі поля треба заповнити!');
      return;
    }

    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData); 
    form.reset(); 
  }