import React, { useState } from "react";
import {Button, Container} from "reactstrap"
import NewAccountForm from "./NewAccountForm";
function CreateButton(props) {
  const [isShown, setIsShown] = useState(false);
  
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <Container>
      <Button color="primary" onClick={handleClick}>Create Account</Button>
      {isShown && <NewAccountForm />}
    </Container>
  );
}

export default CreateButton;
