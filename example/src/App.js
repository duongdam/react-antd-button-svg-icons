import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";

const App = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    }}>
      <CLFButtonSVG
        display={"clf-flex-center"}
        name={"ClassFunc"}
        typeClass={"primary"}
        size={"default"}
        iconComponent={<TestSVG />}
      />
    </div>
  );
};

export default App;
