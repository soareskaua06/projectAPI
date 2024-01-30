function showDogFact(photoId){
    const dogFactApiUrl = 'https://dog-api.kinduff.com/api/facts'

    fetch(dogFactApiUrl)
        .then(response => response.json())
        .then(data => {

        
            const dogFact = data.facts;
            document.getElementById('dogFactMessage').innerText = dogFact;

        })
        .catch(error => {
            console.error("Erro ao obter um fato de um cachorro.")
            document.getElementById('dogFactMessage').innerText = "Erro ao obeter um fato."
        })

}