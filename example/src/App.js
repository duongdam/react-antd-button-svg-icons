import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";
import { message } from "antd";

const App = () => {
  return (
    <div style={{
      width: "100%",
      display: "grid",
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

      <CLFButtonSVG
        name={"Full Width"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        block={true}
      />

      <CLFButtonSVG
        name={"Full Width Loading"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        loading={true}
        block={true}
      />

      <CLFButtonSVG
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={true}
        loading={false}
        block={true}
      />
    </div>
  );
};

export default App;
