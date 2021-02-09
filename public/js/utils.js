/*
This file contains all the utility methods used by other files
*/

// sets Error Message in the UI
function setErrorMessage( errorElement , message){
    errorElement.textContent = message
}

// clears Error Message in the UI
function clearErrorMessage( errorElement ){
    errorElement.textContent = ''
}

// sets Success Message in the UI
function setSuccessMessage( successElement ){
    successElement.textContent = 'Wohoo! Meme added successfully'
    setTimeout(() => {
        successElement.textContent = ''
        // reload the page to load fresh content
        location.reload()
    }, 3000)

}

// clear all input fields
function clearFields(){
    document.querySelector('#name').value = ''
    document.querySelector('#caption').value = ''
    document.querySelector('#url').value = ''
}

// utility method to check validity of URL
function isValidURL(url) {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}

