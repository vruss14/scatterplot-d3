// Fetch data, convert to JSON, then begin creating the scatterplot

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
.then(response => response.json())
.then(response => {
    createScatterplot(response)
})

function createScatterplot(data) {
    console.log(data);
}
