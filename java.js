fetch('data/destinations.json')
    .then(response => response.json())
    .then(data => handledestinations(data))
    .catch(error => console.error(error));
function handledestinations(data){
    console.log (data)
    

}
