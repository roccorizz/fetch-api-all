const loadsneakers = () => {
    fetch('https://mmt.boostonamazon.com/api/v1/top-sneakers')
        .then(res => res.json())
        .then(data => displaySneakers(data.data.best_sellers))
}
const displaySneakers = sneakers => {
    const sneakersContainer = document.getElementById('sneakers-container')

    sneakers.forEach(sneaker => {
        console.log(sneaker)
        const sneakerDiv = document.createElement('div');
        sneakerDiv.classList.add('card');
        sneakerDiv.innerHTML = `
     <img src="${sneaker.image.image_url}" class="product-image" alt="..." >
<div class="card-body">
<h5 class="card-title">${sneaker.title}</h5>
<p class="product-info">${sneaker.description}</p>

`;
        sneakersContainer.appendChild(sneakerDiv);
    });

}
loadsneakers();

