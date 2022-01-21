# D3 Scatterplot Visualization

## Overview

A simple scatterplot built with D3.js.

## Description

Having already completed a previous project utilizing the D3.js library, I felt more prepared to tackle making a scatterplot. However, I quickly ran into issues with setting up the y axis since I was attempting to parse the time from the time property for each data point rather than the seconds property. By taking each seconds property, multiplying it by 1000 (to convert to milliseconds), then creating a JavaScript Date object based on each one, I was then able to parse the time and format it for the y axis. That was the hardest part of creating the project.

This project is also unique in that it was a good opportunity for me to change the color of each data point conditionally. I can see how that would be very useful in future projects. Creating a scatterplot was also different from bar charts in that I learned how to use the cx, cy, and r attributes associated with SVG circles. 

Overall, this was a challenging project to create, but I feel like it has helped me gain a better grasp of the fundamentals of the D3.js library.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- D3.js

## Installation

No installation steps are required to view this project. To view the page, visit the URL above. The application's source code can be found on GitHub here: https://github.com/vruss14/scatterplot-d3.

## Usage

This webpage is best viewed on desktop devices.

## Credits

Valerie Russell was the sole contributor to this project. Contact her at vruss14@gmail.com.
