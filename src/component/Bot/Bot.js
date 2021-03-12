import React, { Component } from "react";
import chatbot from "../../asset/chtbotfloat.png";

import ChatWidget from "./ChatWidget";
const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#E65100",
  color: "#FFFFFF",
};

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div>
        <div>{this.state.show && <ChatWidget />}</div>
        <div className="floatbutton" style={style} onClick={this.toggleDiv}>
          {!this.state.show ? (
            <img src={chatbot} className="msgbotimg" />
          ) : (
            <h5
              style={{
                fontSize: "30px",
                color: "#fff",
                marginTop: window.innerWidth < 600 ? "7px" : "15px",
              }}
            >
              &#10006;
            </h5>
          )}
        </div>
      </div>
    );
  }
}
export default ChatComponent;
