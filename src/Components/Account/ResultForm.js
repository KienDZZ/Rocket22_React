import React from "react";
import { Container, Table} from "reactstrap"
import ResultFormItem from "./ResultFormItem";
function ResultForm(props) {
  let {title, h1, h2, h3, h4, h5, h6, h7, h8, h9} = props;
  return (
    <Container>
     <h2>{title}</h2>
      <Table>
        <thead>
          <tr>
            <th className="text-center">{h1}</th>
            <th>{h2}</th>
            <th className="text-center">{h3}</th>
            <th className="text-center" >{h4}</th>
            <th className="text-center">{h5}</th>
            <th className="text-center">{h6}</th>
            <th className="text-center">{h7}</th>
            <th className="text-center">{h8}</th>
            <th className="text-center">{h9}</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem/>
          <ResultFormItem/>
          <ResultFormItem/>
          <ResultFormItem/>
          <ResultFormItem/>
          <ResultFormItem/>
          <ResultFormItem/>
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultForm;
