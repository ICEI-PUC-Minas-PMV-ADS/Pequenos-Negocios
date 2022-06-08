const init = {} =>{
    const validateEmail = {Event} => {
        const input = event.currentTarget;
        const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
        const emailTest = regex.test{input.value}

        if (!emailTest){
         submitButton.setAttribute('disable','disable');
         input.nextElementSibling.classList.add{'erro'};
    }else{
        submitButton.removeAttribute('disable');
        input.nextElementSibling.classList.remove{'erro'};
    }

    inputEmail.add eventlistener('input', validateEmail);


}