function renderCards(cards) {
    for (var card of cards) {
        var cardElement = document.createElement('a');
        cardElement.className = 'card row col-lg-5 mt-5 p-2 d-flex text-decoration-none project-card';
        cardElement.href = card.gitHubLink;
        
        var imageElement = document.createElement('img');
        imageElement.src = card.imageUrl;
        imageElement.className = "col-2"
        imageElement.style = "height: 200px; width: 200px; margin-bottom: 30px"
        
        var innerContainer = document.createElement('div');
        innerContainer.className = "row col d-flex  project-inner-container p-0 m-0"
        

        var infoElement = document.createElement('div');
        infoElement.className = "col d-flex-column project-details w-100 p-0";


        var titleElement = document.createElement("h4");
        titleElement.className = "col-12 mb-0 p-1"
        titleElement.textContent = card.title;

        var descriptionElement = document.createElement("p");

        descriptionElement.className = "project-description col-12 p-1"

        descriptionElement.textContent = card.description;

        
        cardElement.appendChild(innerContainer);
        innerContainer.appendChild(imageElement);
        innerContainer.appendChild(infoElement)
        infoElement.appendChild(titleElement);
        infoElement.appendChild(descriptionElement);
        
        var container = document.querySelector("#project-container__row__projects__project-cards");
        container.appendChild(cardElement);


    }
}