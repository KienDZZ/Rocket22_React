import React, { useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import { Container } from "reactstrap";
import ResultForm from "../Components/Account/ResultForm";
import ModalNewAccountForm from "../Components/Account/CreateNewAccount/ModalNewAccountForm";



function AccountContainer(props) {
  let [showForm, setShowForm] = useState(false);

  let onHandleCreateButtuon = () => {
    // console.log("click!!");
    setShowForm(true);
  };


  return (
    <Container>
      <CreateButton  onHandleCreateButtuon={onHandleCreateButtuon} />
      <ModalNewAccountForm showForm={showForm}/>
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
