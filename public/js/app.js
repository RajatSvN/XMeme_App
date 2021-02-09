/*
This is the main file where events are handled, requests to backend are made through this file
*/

// html elements
const addButton = document.querySelector('#add_meme')
const ownerErrorMsg = document.querySelector('#ownerErrorMsg')
const captionErrorMsg = document.querySelector('#captionErrorMsg')
const urlErrorMsg = document.querySelector('#urlErrorMsg')
const successElement = document.querySelector('#successMessage')

    // onclick checks for validation and calls the REST API if input data is valid
    addButton.addEventListener('click', async (e) => {
        e.preventDefault()

        let formData = new FormData(document.querySelector('form'))
        
        const data = {}

        formData.forEach((value, key) => {
            data[key] = value.trim()
        })

        // check if all fields have valid values 
        const isDataValid = validateName(data) && validateCaption(data) && validateURL(data)


        if(isDataValid){

            try{

                // call the StoreMeme method from api.js which requests API to store the meme object
                await storeMeme(data)
                
            } catch (e){

                console.log(e)

            }

            clearFields()
            setSuccessMessage(successElement)
        }

    })