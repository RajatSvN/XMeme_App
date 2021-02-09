/*
This file contains all the form validation methods
*/

// Meme Owner Name Vaildator function, input parameter uses Object Destructuring
function validateName({ name }){
    if(!name){
        setErrorMessage(ownerErrorMsg, 'Owner Name can not be empty!')
        return false
    }

    if(!/^[a-zA-Z\s]+$/.test(name)){
        setErrorMessage(ownerErrorMsg, 'Name can only have letters and spaces')
        return false
    }

    if(name.length > 70){
        setErrorMessage(ownerErrorMsg, 'Name should be less than 70 characters')
        return false
    }

    clearErrorMessage(ownerErrorMsg)
    return true
}


// Meme Caption Validation function
function validateCaption({ caption }){
    if(!caption){
        setErrorMessage(captionErrorMsg, 'Meme Caption can not be empty!')
        return false
    }

    if(caption.length > 155){
        setErrorMessage(captionErrorMsg, 'Meme Caption too long!')
        return false
    }

    clearErrorMessage(captionErrorMsg)
    return true
}


// Url validation function 
function validateURL({ url }){
    if(!url){
        setErrorMessage(urlErrorMsg, 'Meme Url can not empty!')
        return false
    }

    if(!isValidURL(url)){
        setErrorMessage(urlErrorMsg, 'Enter a vaild URL!')
        return false
    }

    clearErrorMessage(urlErrorMsg)
    return true
}