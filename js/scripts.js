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
            let content = document.getElementById("mainContent")
            content.innerHTML +="\
            <div class='card' style='width: 18rem;'>\
                <img src='"+thing.imageUrl+"' class='card-img-top' alt='...'> \
                <div class='card-body'> \
                    <h5 class='card-title'>"+thing.name+"</h5>\
                    <p class='card-text'>"+thing.description+"</p>\
                    <a href='#' class='btn btn-primary'>Go somewhere</a>\
                </div>\
            </div>"
        }
    })
    .catch(function(err) {
        // Une erreur est survenue
    });
}
makeRequest()