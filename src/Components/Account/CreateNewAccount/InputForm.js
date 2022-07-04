import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { generateId } from "../../../Utils/Helpers/GenerateId";
import { getNowDate } from "../../../Utils/Helpers/GetNowDate";

function InputForm(props) {
  let [Email, setEmail] = useState("");
  let [Username, setUSerName] = useState("");
  let [Fullname, setFullName] = useState("");
  let [Department, setDepartment] = useState("");
  let [Position, setPosition] = useState("");

  let { onHandleCreateNewAccount } = props;

  const handleCreate = () => {
    let accountNew = {
      id: generateId(),
      email: Email,
      username: Username,
      fullname: Fullname,
      department: Department,
      position: Position,
      createDate: getNowDate(),
    };
    onHandleCreateNewAccount(accountNew);
  };

  const handleReset = ()=> {
    setEmail("");
    setUSerName("");
    setFullName("");
    setDepartment("");
    setPosition("");
  }

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label htmlFor="exampleEmail">Email</Label>
          <Input
            id="enmail"
            name="email"
            placeholder="email"
            type="email"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleEmail">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="username"
            type="text"
            value={Username}
            onChange={(event) => {
              setUSerName(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="exampleEmail">Fullname</Label>
          <Input
            id="fullname"
            name="fullname"
            placeholder="fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>
        <div className="form-group">
          <label htmlFor="Department">Select a Department: </label>
          <select
            className="form-control"
            id="department"
            value={Department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            <option>---Chọn Departmnet---</option>
            <option>Bán hàng</option>
            <option>Bảo vệ</option>
            <option>Giám đốc</option>
            <option>Kỹ thuật</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* Postion */}
        <div className="form-group">
          <label htmlFor="Position">Select a Position: </label>
          <select
            className="form-control"
            id="position"
            value={Position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option>---Chọn Position---</option>
            <option>Dev</option>
            <option>Test</option>
            <option>Scrum_Master</option>
            <option>PM</option>
          </select>
        </div>
        <Button color="primary" onClick={handleCreate}>
          Create
        </Button>
        <Button color="danger" onClick={handleReset}>Reset</Button>
      </Form>
    </Container>
  );
}

export default InputForm;
