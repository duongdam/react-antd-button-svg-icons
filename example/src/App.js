import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import { message, Typography } from "antd";
import "antd/lib/message/style/css";
import { makeStyles } from "@material-ui/core/styles";

const { Text } = Typography;

const useStyles = makeStyles(theme => ({
  antBtn: {
    background: `red !important`,
    borderColor: `red !important`,
    // textAlign: "left",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    display: "flex",
    "& svg": {
      fill: "red"
    },
    "& .ant-btn-block": {
      width: "97%"
    },
    "& .clf-icon-Btn": {
      left: "1px !important"
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div style={{
      width: "100%",
      display: "grid",
      maxWidth: "800px",
      // justifyContent: "center",
      // alignItems: "center",
      padding: "100px 50px",
      margin: "100px auto"
    }}>

      With no icon
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={(event, keyboard) => {
          message.success(`This is key + click ${keyboard.toString()}`, 0.2);
        }}
        width={"150px"}
      />

      Default
      <CLFButtonSVG
        name={<Text>Default</Text>}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={(event, keyboard) => {
          message.success(`This is key + click ${keyboard.toString()}`, 0.2);
        }}
        disable={false}
        width={"150px"}
      />

      Icon revert right
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG />}
        iconRevert={true}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={(event, keyboard) => {
          message.success(`This is key + click ${keyboard.toString()}`, 0.2);
        }}
        disable={false}
        width={"150px"}
        background={"#1790FF"}
        borderColor={"#1790FF"}
      />

      Full Width
      <CLFButtonSVG
        name={"Full Width"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={(event, keyboard) => {
          message.success(`This is key + click ${keyboard.toString()}`, 0.2);
        }}
        disable={false}
        block={true}
        margin={"5px"}
      />

      With Tooltip
      <CLFButtonSVG
        name={"With tooltip"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={(event, keyboard) => {
          message.success(`This is key + click ${keyboard.toString()}`, 0.2);
        }}
        disable={false}
        block={true}
        margin={"5px"}
        enableTooltip={true}
        tooltipPlacement={"right"}
      />

      Loading
      <CLFButtonSVG
        name={"Full Width Loading"}
        size={"default"}
        iconComponent={<TestSVG />}
        disable={false}
        loading={true}
        block={true}
      />

      Disabled
      <CLFButtonSVG
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG />}
        disable={true}
        loading={false}
        block={true}
        enableTooltip={true}
        tooltipPlacement={"right"}
      />

      Disabled custom with makesTheme
      <CLFButtonSVG
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG />}
        disable={true}
        loading={false}
        block={true}
        enableTooltip={true}
        tooltipPlacement={"right"}
        className={classes.antBtn}
      />
    </div>
  );
};

export default App;
