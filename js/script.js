document.addEventListener('DOMContentLoaded', () => {

    const apiKey = 'r9ppGt4m9wgwCPgKRXZYlaoZM3UwTWLf3qxfyb0PlmepDLvPlE0Rs0qJ7WaoFRhT';
    const imageEndpoint = `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`; 
    const catData = document.getElementById('cat-data'); 

    document.getElementById('get-data').addEventListener('click', async () => {
        try {
            const response = await fetch(imageEndpoint);
            const data = await response.json();
            const catImageUrl = data[0].url; 
            document.getElementById('cat-image').src = catImageUrl; 
            document.querySelector('.card-title').innerText = '¿No es hermoso? ~(=^‥^)ノ';
            catData.classList.remove('d-none'); 
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            cardTitle.innerText = 'Por alguna razón no se encontraron gatitos, lo siento :(';
            catData.classList.remove('d-none'); 
        }
    });
});
