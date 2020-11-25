import {selection} from "d3-selection";

const w = 500;
const h = 500;

selection("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);