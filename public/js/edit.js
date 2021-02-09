function validateCaptionLength(caption, errorMessage){
    if(caption.length > 155){
        return false
    }
    return true 
}

function hideForm(id){

    const editForm = document.querySelector('#editForm-'+id)
    document.querySelector('#caption-'+id).value = ''
    document.querySelector('#url-'+id).value = ''
    document.querySelector('#errorMessage-'+id).textContent = ''
    document.querySelector('#successMessage-'+id).textContent = ''
    editForm.style.display = 'none'
    document.querySelector('#closeButton-'+id).style.display = 'none'
    return
        
}

async function editMeme(id){

    const editForm = document.querySelector('#editForm-'+id)
    const closeButton = document.querySelector('#closeButton-'+id)

    if(editForm.style.display == 'none'){
        closeButton.style.display = ''
        editForm.style.display = ''
        return
    }

    const caption = document.querySelector('#caption-'+id).value
    const url = document.querySelector('#url-'+id).value
    const errorMessage = document.querySelector('#errorMessage-'+id)
    const successMessage = document.querySelector('#successMessage-'+id)

    if(!caption && !url){
        successMessage.textContent = ''
        errorMessage.textContent = 'Caption and url can not be both empty!'
        return
    }

    let payload = {}
    
    if(caption){
        if(validateCaptionLength(caption, errorMessage)){
           payload['caption'] = caption
        }else{
            successMessage.textContent = ''
           errorMessage.textContent = 'Meme Caption too long!'
           return
        }
    }


    if(url){
        if(isValidURL(url)){
            payload['url'] = url
        }else{
            successMessage.textContent = ''
            errorMessage.textContent = 'Invalid URL!'
            return
        }
    }

    try{
        await patchMeme(payload, id)
        errorMessage.textContent = ''
        successMessage.textContent = 'Meme updated successfully!' 
        document.querySelector('#caption-'+id).value = ''
        document.querySelector('#url-'+id).value = ''
        setTimeout(() => {
            location.reload()
        },1500)
    }catch (e){
        successMessage.textContent = ''
        errorMessage.textContent = 'Trouble Editing Meme :('
    }

}