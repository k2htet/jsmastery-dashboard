import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesGrid, employeesData } from "../data/dummy";
import { Header } from "../components";
const Employees = () => {
  return (
    <div className="m-2 p-2 bg-white rounded-xl md:m-10 md:p-10">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        toolbar={["Search"]}
        width="auto"
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
