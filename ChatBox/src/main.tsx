import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatBox from "app/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <React.StrictMode>
    <div className="h-screen w-screen border-2 border-black flex item-center">
      <ChatBox />
    </div>
  </React.StrictMode>
);
