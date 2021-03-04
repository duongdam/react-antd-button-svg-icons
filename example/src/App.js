import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import { message } from "antd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  antBtn: {
    background: `red !important`,
    borderColor: `red !important`,
    textAlign: "left",
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
      left: "3px !important"
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div style={{
      width: "100%",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "100px"
    }}>

      With no icon
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={() => {
          message.success("This is key + click", 0.2);
        }}
        width={150}
      />

      Default
      <CLFButtonSVG
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={() => {
          message.success("This is key + click", 0.2);
        }}
        disable={false}
        width={150}
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
        onKeyClick={() => {
          message.success("This is key + click", 0.2);
        }}
        disable={false}
        width={150}
        background="#1790FF"
        borderColor="#1790FF"
      />

      Full Width
      <CLFButtonSVG
        name={"Full Width"}
        size={"default"}
        iconComponent={<TestSVG />}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        onKeyClick={() => {
          message.success("This is key + click", 0.2);
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
        onKeyClick={() => {
          message.success("This is key + click", 0.2);
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
