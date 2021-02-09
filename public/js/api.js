// call to the api to store meme object is handled here 

async function storeMeme(data){

    try{

    let memeData = await fetch('/memes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return memeData

    } catch (e){

        throw new Error(e)

    }
    
}

async function patchMeme(data, id){

    try{

        let memeData = await fetch('/memes/'+id , {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        return memeData
    
        } catch (e){
    
            throw new Error(e)
    
        }

}