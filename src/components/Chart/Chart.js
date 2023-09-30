import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const TotalMax = Math.max(...dataPointsValue);
  console.log(props.dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxvalue={TotalMax}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
