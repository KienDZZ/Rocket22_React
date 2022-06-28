import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import { Container } from "reactstrap";
import ResultForm from "../Components/Account/ResultForm";
function AccountContainer(props) {
  return (
    <Container>
      <CreateButton />
      <ResultForm
      />
    </Container>
  );
}

export default AccountContainer;
