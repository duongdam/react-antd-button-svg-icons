import { useEffect, useState } from "react";
import { isString, pick, pickBy, reduce, sortBy } from "lodash";

const dfn = () => {
  return true;
};

export default function useHotKey(keys = [], domQuerySelectorOrFunc) {

  const [isPressed, setIsPressed] = useState(false);

  const _keys = (isString(keys) ? [keys] : keys).map(k => reRange(k));

  useEffect(() => {
    document.addEventListener("keydown", handlePress);
    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, []);

  const handlePress = evt => {
    evt = evt || window.event;
    if (!evt)
      return;

    const pressedObj = pick(evt, ["key"]);
    const keysString = reRange(getPressedKeysString(pressedObj, pressedObj.key));//ex: meta+shift+enter
    const _isPressed = _keys.includes(keysString);
    setIsPressed(_isPressed);
  };
  return [isPressed, setIsPressed];
}

//helpers
const getPressedKeysString = (obj, mainKey) => {
  const specialKeyString = reduce(
    pickBy(obj),
    (res, v, k) => {
      if (`${k}`.includes("Key"))
        res += `${k}`.replace("Key", "") + "+";
      return res;
    }, "");
  return specialKeyString + mainKey;
};
const reRange = (str) => {
  return sortBy(
    `${str}`
      .toLowerCase()
      .replace(/ /g, "")
      .split("+")
  ).join(",");
};
// const getId = evt => get(evt, 'target.id') || get(evt, 'target.firstChild.id')
const hasEl = (evt, domQuerySelector) => !!document.activeElement.parentElement.querySelector(domQuerySelector);
