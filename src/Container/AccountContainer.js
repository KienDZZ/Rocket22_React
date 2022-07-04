import React, { useEffect, useState } from "react";
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
   // tao list account
   let [listAccount, setListAccount] = useState([]);
   
   //xu li khi an nut create o inputform
   let onHandleCreateNewAccount = (accountNew) =>{
       listAccount.push(accountNew);
       setListAccount(listAccount);
       localStorage.setItem("listAccount", JSON.stringify(listAccount));
       setShowForm(false);
       console.log(listAccount);
   }

   useEffect(() => {
    if (localStorage && localStorage.getItem("listAccount")) {
      let listAccount_LocalStorage = JSON.parse(
        localStorage.getItem("listAccount")
      );
      // console.log("listAccount_LocalStorage: ", listAccount_LocalStorage);
      setListAccount(listAccount_LocalStorage);
    }
  }, []);

 
  return (
    <Container>
      <CreateButton  onHandleCreateButtuon={onHandleCreateButtuon} />
      <ModalCreateNewAccount showForm={showForm} onCloseModal={closeModal} onHandleCreateNewAccount={onHandleCreateNewAccount}/>
      <ResultForm danhSach={listAccount}
      />
    </Container>
  );
}

export default AccountContainer;
