// Fetch data, convert to JSON, then begin creating the scatterplot

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
.then(response => response.json())
.then(response => {
    createScatterplot(response)
})

function createScatterplot(data) {
    console.log(data);

    // Set up the SVG canvas

    let width = 900;
    let height = 600;
    let padding = 60;

    const svg = d3.select('#scatterplot-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)



}
