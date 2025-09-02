fetch('data/destinations.json')
    .then(response => response.json())
    .then(data => handledestinations(data))
    
function handledestinations(data){
    console.log (data)
    let first

    data.destinations.forEach((dest, i) => {
        first = /*html*/`
        <div class="container">
            <img class="thumbnail" src="/img/${data.destinations[i].image}">
            <div class="bottom">
                <img class="svg" src="/img/heart.svg">
                <a href="">More</a>
            </div>
        </div>
        
        `
        document.getElementById("grid").insertAdjacentHTML("beforeend", first)

})}


