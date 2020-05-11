import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button } from "antd";
import { Popconfirm, Switch, message } from "antd";
import postman from "../../Photos/Videos/postman.png";

import axios from "axios";
import "./CSS/ContactForm.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 1006,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.sendInfo = this.sendInfo.bind(this);
    this.getTextName = this.getTextName.bind(this);
    this.getTextEmail = this.getTextEmail.bind(this);
    this.getTextDescription = this.getTextDescription.bind(this);
    this.state = {
      contactInfo: [],
      contactName: [],
      contactEmail: [],
      contactDescription: [],
      visible: false,
      condition: true,
    };
  }

  sendInfo = () => {
    let URL = `${process.env.REACT_APP_BACKEND_URL}/contact`;
    let HEADERS = {
      "Access-Control-Allow-Origin": "*",
      authorization: "sdjfjdskfj45j4ekj",
    };
    let contactName = this.state.contactName;
    let contactEmail = this.state.contactEmail;
    let contactDescription = this.state.contactDescription;
    let DATA = {
      name: contactName,
      email: contactEmail,
      description: contactDescription,
    };
    console.log(DATA);

    if (contactName.length === 0) {
      this.setState({ visible: false });
      message.success("Please enter your Name.");
    }
    if (contactEmail.length === 0) {
      this.setState({ visible: false });
      message.success("Please enter your email.");
    } else {
      axios
        .post(URL, DATA, HEADERS)
        .then((response) => {
          this.setState({ contactInfo: DATA });
          console.log(this.state.contactInfo);
          this.setState({ contactInfo: "" });
          this.setState({ visible: false });
          message.success("Thank you! Your information has been sent!");
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to send contact info!");
        });
    }
  };

  getTextName = (e) => {
    const myName = e.target.value;
    this.setState({
      contactName: myName,
    });
  };

  getTextEmail = (e) => {
    const myName = e.target.value;
    this.setState({
      contactEmail: myName,
    });
  };
  getTextDescription = (e) => {
    const myName = e.target.value;
    this.setState({
      contactDescription: myName,
    });
  };

  render() {
    return (
      <div className="backgroundContactForm">
        <h1 className="ContactMeTitle">Contact Me!</h1>
        <div className="backgroundContact">
          <div className="boxs">
            <Popconfirm
              title="Are you sure delete this task?"
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            ></Popconfirm>
            <Form
              {...layout}
              name="nest-messages"
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label=""
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                {" "}
                <div>
                  <div className="inline" className="contactNameFrom">
                    {" "}
                    Name:
                  </div>
                  <Input onChange={this.getTextName} className="length" />
                </div>
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                rules={[
                  {
                    type: "",
                  },
                ]}
              >
                {" "}
                <div>
                  <div className="inline"> Email:</div>
                  <Input onChange={this.getTextEmail} className="length" />
                </div>
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="">
                <div className="inline">
                  <div> Description:</div>
                  <Input.TextArea
                    onChange={this.getTextDescription}
                    className="lengths"
                  />
                </div>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.sendInfo}
                >
                  Submit
                </Button>
                <img src={postman} className="postman"></img>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
