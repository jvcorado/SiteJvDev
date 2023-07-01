import React from "react";

export const Chat = () => {
  return (
    <div className="card-container  bg-red-700">
      <div className="card-header">
        <div className="img-avatar"></div>
        <div className="text-chat">Chat</div>
      </div>
      <div className="card-body">
        <div className="messages-container">
          <div className="message-box left">
            <p>Hello, How are you?</p>
          </div>
          <div className="message-box right">
            <p>Im good, thanks for asking! How about you?</p>
          </div>
        </div>
        <div className="message-input">
          <form>
            <textarea
              placeholder="Type your message here"
              className="message-send"
            ></textarea>
            <button type="submit" className="button-send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
