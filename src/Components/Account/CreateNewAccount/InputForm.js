import React from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";

function InputForm(props) {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input id="enmail" name="email" placeholder="email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="username"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Fullname</Label>
          <Input
            id="fullname"
            name="fullname"
            placeholder="fullname"
            type="text"
          />
        </FormGroup>
        <div class="form-group">
          <label for="Department">Select a Department: </label>
          <select class="form-control" id="department">
            <option>Bán hàng</option>
            <option>Bảo vệ</option>
            <option>Giám đốc</option>
            <option>Kỹ thuật</option>
            <option>Marketing</option>
          </select>
        </div>

        {/* Postion */}
        <div class="form-group">
          <label for="Position">Select a Position: </label>
          <select class="form-control" id="position">
            <option>Dev</option>
            <option>Test</option>
            <option>Scrum_Master</option>
            <option>PM</option>
          </select>
        </div>
        <Button color="primary">Create</Button>
        <Button color="danger">Reset</Button>
      </Form>
    </Container>
  );
}

export default InputForm;
