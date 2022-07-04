import React from "react";
import { Container, Table} from "reactstrap"
import ResultFormItem from "./ResultFormItem";
function ResultForm(props) {
  let {danhSach} = props;
  return (
    <Container>
     <h2>Danh Sach Account</h2>
      <Table>
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th>Email</th>
            <th className="text-center">Username</th>
            <th className="text-center" >Fullname</th>
            <th className="text-center">Department</th>
            <th className="text-center">Position</th>
            <th className="text-center">Create Date</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
        <ResultFormItem danhSach={danhSach}/>
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultForm;
