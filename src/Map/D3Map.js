import states_hash from '../utils/states_hash' 

export default class D3Map {
   constructor(el, json, covidData) {

        /*  This visualization was made possible by modifying code provided by:

        Scott Murray, Choropleth example from "Interactive Data Visualization for the Web" 
        https://github.com/alignedleft/d3-book/blob/master/chapter_12/05_choropleth.html   
                
        Malcolm Maclean, tooltips example tutorial
        http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html

        Mike Bostock, Pie Chart Legend
        http://bl.ocks.org/mbostock/3888852  */

                
        const d3 = window.d3

        //Width and height of map
        var width = 960;
        var height = 500;

        // D3 Projection
        var projection = d3.geo.albersUsa()
            .translate([width/2, height/2])    // translate to center of screen
            .scale([1000]);          // scale things down so see entire US
                
        // Define path generator
        var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
            .projection(projection);  // tell path generator to use albersUsa projection

                
        // Define linear scale for output
        var color = d3.scale.linear()
            .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"])

        //Create SVG element and append map to the SVG
        var svg = d3.select(el)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // Load in my states data!
        d3.csv('./stateslived.cvs', (data) => {
            color.domain([0,1,2,3]); // setting the range of the input data

                // Loop through each state data value in the .csv file
                for (var i = 0; i < data.length; i++) {

                    // Grab State Name
                    var dataState = data[i].state;

                    // Grab data value 
                    var dataValue = data[i].visited;

                    // Find the corresponding state inside the GeoJSON
                    for (var j = 0; j < json.features.length; j++)  {
                        var jsonState = json.features[j].properties.name

                        if (dataState === jsonState) {
                            // Copy the data value into the JSON
                            json.features[j].properties.visited = dataValue;

                            // Stop looking through the JSON
                            break
                        }
                    }
                }
                        
                // Bind the data to the SVG and create one path per GeoJSON feature
                svg.selectAll("path")
                    .data(json.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .style("stroke", "#fff")
                    .style("stroke-width", "1")
                    .on('click', d => {
                        //console.log(states_hash[d.properties.name], covidData.data)
                        const stateData = covidData.data.find(s => s.state === states_hash[d.properties.name])
                        console.log(stateData)
                    })
                    .style("fill", function(d) {
                        // Get data value
                        var value = d.properties.visited;

                        if (value) {
                            //If value exists…
                            return color(value);
                        } else {
                            //If value is undefined…
                            return "rgb(213,222,217)";
                        }
                    })

        })
    }
}