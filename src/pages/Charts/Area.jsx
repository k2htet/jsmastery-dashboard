import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 mt-24 p-10 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject services={[SplineAreaSeries, Legend, DateTime]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
