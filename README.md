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
import { CLFButtonSVG } from 'react-antd-button-svg-icons';
import 'react-antd-button-svg-icons/dist/index.css';

function App() {
  return (
    <div className="App">
      <CLFButtonSVG
        display={"clf-flex-center"}
        name={"ClassFunc"}
        size={"default"}
      />
    </div>
  );
}

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
   width = null,
   height = null,
   key = null,
   margin = null,
   padding = null,
   block = false,
   className = null,
   minWidth = null,
   minHeight = null,
   background = "#1790FF",
   borderColor = "#1790FF"
```

## License

MIT © [duongdam](https://github.com/duongdam)
