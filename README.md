# react-antd-button-svg-icons

Welcome to ClassFunc. We are love to use new technology!

Demo
link: [https://duongdam.github.io/react-antd-button-svg-icons/](https://duongdam.github.io/react-antd-button-svg-icons/)

Resource: [https://github.com/duongdam/react-antd-button-svg-icons](https://github.com/duongdam/react-antd-button-svg-icons)
## Install

```bash
yarn add react-antd-button-svg-icons
npm install --save react-antd-button-svg-icons
```

## Usage

```js
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
        iconComponent={<TestSVG/>}
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
        iconComponent={<TestSVG/>}
        onClick={() => {
          message.success("Hello CLFButtonSVG", 0.2);
        }}
        disable={false}
        block={true}
      />

      <CLFButtonSVG
        name={"Full Width Loading"}
        size={"default"}
        iconComponent={<TestSVG/>}
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
        iconComponent={<TestSVG/>}
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

```

```text
Props: Here are some props of Antd Button.
   display = "clf-flex-center",
   iconComponent = null, // Icon SVG Component
   name = null,  // Button Name
   onClick = null, // Button onClick
   size = null,     // Button Size
   disable = false, // true or false
   loading = false, // true or false
   width = null, // Button width
   height = null, // Button height
   key = null, // Button key
   margin = null,
   padding = null,
   block = false, // if true -> full width
   className = null, // add more className
   minWidth = null, // button minWidth
   minHeight = null, // button minHeight
   background = "#1790FF", // button background color
   borderColor = "#1790FF" // button border color
```

## License

MIT © [duongdam](https://github.com/duongdam)
