import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class MyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {


    if(!this.props.show) {
      return null;
    }

    return (
      <div>

      {console.log(this.state.modal+" --state.modal inside props.show--- "+this.props.show)}
        <Modal isOpen={this.state.modal} toggle={this.state.modal} className={this.props.className} backdrop="static" keyboard={false}>
          <ModalHeader onClick={this.props.onClose} >{this.props.mssg}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
          <Button onClick={this.props.onClose}>
          Close
        </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
 