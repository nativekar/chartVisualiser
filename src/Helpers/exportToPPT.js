import pptxgen from "pptxgenjs";
import _ from "lodash";

const chartConfigOptions = {
  x: 0.5,
  y: 1.1,
  w: 8,
  h: 3.5,
  showTitle: true,
  titlePos: { x: -100, y: 10 },
  title: "Average sale of fruits in a week",
  titleColor: "002960",
  titleFontFace: "Arial",
  titleFontSize: 16,
  shadow: "none",
  showPercent: true,
  showLegend: true,
  legendPos: "t",
  legendFontSize: 13,
  legendColor: "000000",
  border: { pt: "1", color: "f1f1f1" },
  fill: "ffffff",
  axisLineColor: "666666",
  catAxisLabelColor: "666666",
  catAxisLineShow: false,
  valAxisHidden: false,
  valAxisLabelColor: "666666",
  valAxisLabelFontSize: 12,
  valAxisLineShow: false,
  valAxisMaxVal: 80,
  valAxisMinVal: 0,
  valGridLine: { size: 1, color: "666666", style: "dot" },
  catGridLine: "none", //{ size: 1, color: '666666', style: 'dot' },
  valAxisTitleFontSize: 14,
  valAxisTitleFontFace: "Arial",
  valAxisTitleColor: "3b73b3",
};

export const exportToPPT = (fileName, chartData, chartType = "Bar") => {
  let pres = new pptxgen();
  let slide = pres.addSlide();
  if (chartType === "Line") {
    slide.addChart(pres.ChartType.line, chartData, {
      x: 1,
      y: 1,
      w: 8,
      h: 4,
    });
  } else if (chartType === "Bar") {
    let chartColors = ["ff0000"];
    let chartOptions = _.cloneDeep(chartConfigOptions);
    chartOptions.chartColors = chartColors; // adding the colours
    chartOptions.catGridLine = { size: 1, color: "666666", style: "dot" }; // adding gridLine options to the global chart options
    slide.addChart(pres.charts.BAR, chartData, chartOptions);
  }
  return pres.writeFile(fileName);
};
