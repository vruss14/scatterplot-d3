// Fetch data, convert to JSON, then begin creating the scatterplot

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
.then(response => response.json())
.then(response => {
    createScatterplot(response)
})

function createScatterplot(data) {
    console.log(data);

    // Set up the SVG canvas & append to the document

    let width = 800;
    let height = 600;
    let padding = 60;

    const svg = d3.select('#scatterplot-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

    let toolTip = d3.select('#tooltip')

    // Set up the x axis and y axis
    // x axis uses scaleLinear and is formatted to decimals (i.e. 2002 instead of 2,002)
    // y axis uses scaleTime and formats the time from a JavaScript Date Object 
    // in milliseconds to minutes and seconds

    const xAxisScale = d3.scaleLinear()
    .domain([d3.min(data, (d) => d.Year - 1), d3.max(data, (d) => d.Year + 1)])
    .range([padding, width - padding])

    const yAxisScale = d3.scaleTime()
    .domain([d3.min(data, (d) => new Date (parseInt(d.Seconds) * 1000)), 
        d3.max(data, (d) => new Date (parseInt(d.Seconds) * 1000))])
    .range([padding, height - padding])

    const xAxis = d3.axisBottom(xAxisScale).tickFormat(d3.format('d'))
    const yAxis = d3.axisLeft(yAxisScale).tickFormat(d3.timeFormat('%M:%S'));

    // Append the x and y axis to the scatterplot; adjust so that they line up nicely

    svg.append('g')
    .call(xAxis)
    .attr('id', 'x-axis')
    .attr("transform", "translate(0," + (height - padding) + ")")

    svg.append("g")
    .call(yAxis)
    .attr('id', 'y-axis')
    .attr("transform", "translate(" + padding + ",0)")

    // Plot the dots on the scatterplot
    // cx = where the dot should be placed on the x axis (based on year)
    // cy = where the dot should be place on the y axis (based on time; needs to be Date object)

    // Doping allegation means that the Doping property of d object is not an empty string;
    // change fill color based on Doping

    // Tooltip HTML varies based on if there is a doping allegation

    svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', '5')
    .attr('data-xvalue', (d) => d.Year)
    .attr('data-yvalue', (d) => new Date (parseInt(d.Seconds) * 1000))
    .attr('cx', (d) => xAxisScale(d.Year))
    .attr('cy', (d) => yAxisScale(new Date (parseInt(d.Seconds) * 1000)))
    .attr('fill', (d) => d.Doping ? 'red': 'black')
    .on('mouseover', (event) => {
        let d = event.target.__data__;

        toolTip.transition()
        .style('visibility', 'visible')

        toolTip.attr('data-year', d.Year)

        if(d.Doping !== '') {
            toolTip.html(`
            <p>${d.Name}: ${d.Nationality}</p>
            <p>Year: ${d.Year}, Time: ${d.Time}</p>
            <p>${d.Doping}</p>`)
        } else {
            toolTip.html(`
            <p>${d.Name}: ${d.Nationality}</p>
            <p>Year: ${d.Year}, Time: ${d.Time}</p>
            <p>No allegations.</p>`)        
        }
    })
    .on('mouseout', (d) => {
        toolTip.transition()
        .style('visibility', 'hidden')
    })


}
