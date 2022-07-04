import React from "react";
import {Button, Container} from "reactstrap"
function CreateButton(props) {
  let { onHandleCreateButtuon } = props;
  // Hàm xử lý khi click vào nút CreateNewAccount
  let handleCreateNewAccount = () => {
    onHandleCreateButtuon();
  };

  return (
    <Container style={{"marginTop": "50px"}}>
      <Button color="primary"  onClick={handleCreateNewAccount}>Create Account</Button>
    </Container>
  );
}

export default CreateButton;
