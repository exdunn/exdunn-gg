import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Popup.css";

class Popup extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.show}
        modalTransition={{ timeout: 200 }}
        backdropTransition={{ timeout: 200 }}
        toggle={() => this.props.onToggle(this.props.id)}
        size="lg"
      >
        <ModalHeader toggle={() => this.props.onToggle(this.props.id)}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>
          <img src={this.props.demo} className="demo"></img>
        </ModalBody>
        <ModalFooter>
          <div>{this.props.description}</div>
          <div className="buttons">
            <a href={this.props.visitUrl} target="_">
              <div
                className={
                  "button visit-btn" + (this.props.visitUrl ? " has-visit" : "")
                }
              >
                visit
              </div>
            </a>
            <a href={this.props.sourceUrl} target="_">
              <div
                className={
                  "button source-btn" +
                  (this.props.visitUrl ? " has-visit" : "")
                }
              >
                source
              </div>
            </a>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Popup;
