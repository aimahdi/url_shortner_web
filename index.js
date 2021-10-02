
document.addEventListener('DOMContentLoaded', function () {
    /* ... */

    let urlInput = document.getElementById('input_url');
let submitButton = document.querySelector('.btn');

urlInput.onchange = function(){
    console.log(urlInput.value);
}

submitButton.addEventListener('click', submitfunction);

function submitfunction() {
    const params = {
        'url': urlInput.value,
    };
    const options = {
        method: 'POST',
        body: JSON.stringify( params )  
    };
    fetch( 'cleanuri.com/api/v1/shorten', options )
        .then( response => response.json() )
        .then( response => {
            // Do something with response.
            console.log(response.value);
        } );
}
});