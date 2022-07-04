import React from "react";
import { Button } from "reactstrap";
function ResultFormItem(props) {
  let { danhSach } = props;
  let items = "";
  if(danhSach){
    items = danhSach.map((account, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{account.id}</td>
          <td>{account.email}</td>
          <td className="text-center">{account.username}</td>
          <td className="text-center">{account.fullname}</td>
          <td className="text-center">{account.department}</td>
          <td className="text-center">{account.position}</td>
          <td className="text-center">{account.createDate}</td>
          <td className="text-center">
            <Button color="warning">Edit</Button>
          </td>
          <td className="text-center">
            <Button color="danger">Delete</Button>
          </td>
        </tr>
      )
    }
  )};
  return items;
}



export default ResultFormItem;
