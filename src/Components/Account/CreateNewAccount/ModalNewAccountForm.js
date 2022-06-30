import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
 
import NewAccountForm from "./NewAccountForm"; 
function ModalNewAccountForm(props) {
    let { showForm } = props;
  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>
        </ModalHeader>
        <ModalBody>
          <NewAccountForm />
        </ModalBody>
        <ModalFooter>
          <Button color="danger">Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
 
export default ModalNewAccountForm;

