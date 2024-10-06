import React, { useEffect } from 'react';
import * as d3 from 'd3';

const AssetChart = ({ data }) => {
  useEffect(() => {
    const svg = d3.select("svg");

    // Lógica para criar o gráfico
    const dates = Object.keys(data);
    const prices = dates.map(date => data[date]['4. close']);

    const xScale = d3.scaleLinear()
      .domain([0, prices.length - 1])
      .range([0, 600]);

    const yScale = d3.scaleLinear()
      .domain([d3.min(prices), d3.max(prices)])
      .range([400, 0]);

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d));

    svg.append("path")
      .datum(prices)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [data]);

  return (
    <div>
      <h3>Asset Chart</h3>
      <svg width={600} height={400}></svg>
    </div>
  );
};

export default AssetChart;
