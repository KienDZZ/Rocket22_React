import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import { Container } from "reactstrap";
import ResultForm from "../Components/Account/ResultForm";
function AccountContainer(props) {
  return (
    <Container>
      <CreateButton />
      <ResultForm
        title="Danh Sách Account"
        h1="ID"
        h2="Email"
        h3="Username"
        h4="Fullname"
        h5="Department"
        h6="Position"
        h7="Create Date"
        h8="Edit"
        h9="Delete"
      />
    </Container>
  );
}

export default AccountContainer;
