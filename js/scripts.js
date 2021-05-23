function makeRequest() {
    fetch('http://localhost:3000/api/furniture')
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        for (thing of value) {
            console.log(thing);
            price = thing.price/100
            let content = document.getElementById("mainContent")
            content.innerHTML +="\
            <div style='margin:10px;'>\
                <div class='card' style='width:350px;'>\
                    <img src='"+thing.imageUrl+"' class='card-img-top' alt='...' style='height:150px;object-fit: cover;'> \
                    <div class='card-body'> \
                        <h5 class='card-title'>"+thing.name+"</h5>\
                        <p class='card-text'>"+thing.description+"</p>\
                        <p class='card-text'> Prix: "+price+"€</p>\
                        <a href='#' class='btn btn-success'>Ajouter dans le panier</a>\
                    </div>\
                </div>\
            </div>"
        }
    })
    .catch(function(err) {
        // Une erreur est survenue
    });
}
makeRequest()