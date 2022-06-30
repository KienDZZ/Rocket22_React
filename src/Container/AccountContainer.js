import React, { useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import { Container } from "reactstrap";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
function AccountContainer(props) {
   // Khai báo State để quản lý trạng thái đóng mở của ModalCreateNewAccount(InputForm)
   let [showForm, setShowForm] = useState(false);
 
   // Hàm Callback xử lý khi nhấn nút CreateNewAccount
   let onHandleCreateButtuon = () => {
     // console.log("click!!");
     setShowForm(true);
   };

   let closeModal = () =>{
     setShowForm(false);
   }
 
  return (
    <Container>
      <CreateButton  onHandleCreateButtuon={onHandleCreateButtuon} />
      <ModalCreateNewAccount showForm={showForm} onCloseModal={closeModal} />
      <ResultForm
      />
    </Container>
  );
}

export default AccountContainer;
