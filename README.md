# react-antd-button-svg-icons for next js

> Welcome to ClassFunc. We love to use new technology!

[![NPM](https://img.shields.io/npm/v/react-antd-button-svg-icons.svg)](https://www.npmjs.com/package/react-antd-button-svg-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Demo
link: [https://duongdam.github.io/react-antd-button-svg-icons/](https://duongdam.github.io/react-antd-button-svg-icons/)

Resource: [https://github.com/duongdam/react-antd-button-svg-icons/tree/nextjs](https://github.com/duongdam/react-antd-button-svg-icons)

![plot](buttonNPM.gif)

## Install

```bash
yarn add react-antd-button-svg-icons@nextjs
npm install --save react-antd-button-svg-icons@nextjs
```

## Usage

```js
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css"

//or

import "antd/dist/antd.css"

```

```js
import React from "react";
import { ReactComponent as TestSVG } from "./test.svg";
import { CLFButtonSVG } from "react-antd-button-svg-icons";
import "react-antd-button-svg-icons/dist/index.css";

import { message } from "antd";
import "antd/dist/antd.css";
import { makeStyles } from "@material-ui/core/styles";

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
        id={'1'}
        name={"ClassFunc"}
        size={"default"}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        width={"150px"}
      />

      Default
      <CLFButtonSVG
        id={'2'}
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        width={"150px"}
      />

      Icon revert right
      <CLFButtonSVG
        id={'3'}
        name={"ClassFunc"}
        size={"default"}
        iconComponent={<TestSVG/>}
        iconRevert={true}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        width={"150px"}
        background={"#1790FF"}
        borderColor={"#1790FF"}
      />

      Full Width
      <CLFButtonSVG
        id={'4'}
        name={"Full Width"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        block={true}
        margin={"5px"}
      />

      With Tooltip
      <CLFButtonSVG
        id={'5'}
        name={"With tooltip"}
        size={"default"}
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        block={true}
        margin={"5px"}
        enableTooltip={true}
        tooltipPlacement={"right"}
      />

      Loading
      <CLFButtonSVG
        id={'6'}
        name={"Full Width Loading"}
        size={"default"}
        iconComponent={<TestSVG/>}
        disable={false}
        loading={true}
        block={true}
      />

      Disabled
      <CLFButtonSVG
        id={'7'}
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG/>}
        disable={true}
        loading={false}
        block={true}
        enableTooltip={true}
        tooltipPlacement={"right"}
      />

      Disabled custom with makesTheme
      <CLFButtonSVG
        id={'8'}
        name={"Full Width Disable"}
        size={"default"}
        iconComponent={<TestSVG/>}
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


```

## Prop types

```text
  id: PropType.oneOfType([PropType.string, PropType.number]),
  iconComponent: PropType.element,
  name: PropType.string,
  onClick: PropType.func,
  size: PropType.string,
  disable: PropType.bool,
  loading: PropType.bool,
  width: PropType.oneOfType([PropType.number, PropType.string]),
  height: PropType.oneOfType([PropType.number, PropType.string]),
  key: PropType.string,
  margin: PropType.string,
  padding: PropType.string,
  block: PropType.bool,
  className: PropType.string,
  minWidth: PropType.oneOfType([PropType.number, PropType.string]),
  minHeight: PropType.oneOfType([PropType.number, PropType.string]),
  color: PropType.string,
  borderRadius: PropType.oneOfType([PropType.string]),
  background: PropType.string,
  borderColor: PropType.string,
  iconRevert: PropType.bool,
  fontWeight: PropType.oneOfType([PropType.string, PropType.number]),
  fontSize: PropType.oneOfType([PropType.string]),
  tooltipPlacement: PropType.oneOf([
    "topLeft",
    "top",
    "topRight",
    "leftTop",
    "left",
    "leftBottom",
    "rightTop",
    "right",
    "rightBottom",
    "bottomLeft",
    "bottom",
    "bottomRight"]),
  tooltipBackground: PropType.string,
  enableTooltip: PropType.bool
```

## Default props

```text
  id: 'test',
  iconComponent: null,
  name: "ClassFunc Button",
  onClick: null,
  size: "default",
  disable: false,
  loading: false,
  key: null,
  margin: "5px",
  padding: "unset",
  block: false,
  className: null,
  width: null,
  height: "auto",
  minWidth: "125px",
  minHeight: "35px",
  fontWeight: 700,
  color: "#FFF",
  borderRadius: "25px",
  background: "#1790FF",
  borderColor: "#1790FF",
  iconRevert: false,
  fontSize: "1.2rem",
  tooltipPlacement: "top",
  tooltipBackground: "#1790FF",
  enableTooltip: false
```

## License

MIT © [duongdam](https://github.com/duongdam)
