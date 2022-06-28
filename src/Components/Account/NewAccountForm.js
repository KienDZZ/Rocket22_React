import React from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";

function NewAccountForm(props) {
  return (
    <Container>
      <Form className="col-lg-6">
        <FormGroup className="col-lg-12">
          <Label className="col-lg-3" for="exampleEmail">
            Email
          </Label>
          <Input
            className="col-lg-9"
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup className="col-lg-12">
          <Label className="col-lg-3" for="examplePassword">
            Password
          </Label>
          <Input
            className="col-lg-9"
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
      </Form>
    </Container>
  );
}

export default NewAccountForm;
