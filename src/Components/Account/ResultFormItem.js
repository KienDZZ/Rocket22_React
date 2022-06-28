import React from "react";
import { Button } from "reactstrap";
function ResultFormItem(props) {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>kien.letrung@gmail.com</td>
      <td className="text-center">KienDz</td>
      <td className="text-center">Le Trung Kien</td>
      <td className="text-center">D8</td>
      <td className="text-center">Intern</td>
      <td className="text-center">28/06/2022</td>
      <td className="text-center">
        <Button color="warning">Edit</Button>
      </td>
      <td className="text-center">
        <Button color="danger">Delete</Button>
      </td>
    </tr>
  );
}

export default ResultFormItem;
