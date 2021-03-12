import React from "react";

const ChatWidget = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: window.innerWidth < 600 ? 120 : 140,
        right: window.innerWidth < 600 ? 5 : 50,
        zIndex: 100000,
      }}
    >
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/cfc68cb1-6ca4-48df-a030-7c1955573f17"
      ></iframe>
    </div>
  );
};

export default ChatWidget;

//adam
