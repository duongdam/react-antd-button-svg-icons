import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";
import { message } from "antd";

const App = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    }}>
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        // loading={true}
        width={150}
        height={30}
      />
    </div>
  );
};

export default App;
