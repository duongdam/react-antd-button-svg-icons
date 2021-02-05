import React from "react";
import { Button } from "antd";
import styles from "./styles.module.css";

export const CLFButtonSVG = ({
                               iconComponent,
                               name,
                               onClick,
                               size,
                               disable,
                               loading,
                               width,
                               height,
                               key,
                               margin,
                               padding,
                               block,
                               className,
                               minWidth,
                               minHeight,
                               background = "#1790FF",
                               borderColor = "#1790FF",
                               iconRevert = false
                             }) => {
  return (
    <Button
      className={`${styles.primary} ${iconRevert ?
        styles.flexRevert :
        styles.flex} ${className}`}
      icon={iconComponent ?
        {
          ...iconComponent,
          props: {
            ...iconComponent.props,
            className: iconRevert ? styles.iconBtnRevert : styles.iconBtn
          }
        } :
        null}
      size={size}
      onClick={onClick}
      disabled={disable}
      loading={loading}
      style={{
        width,
        height,
        margin,
        padding,
        minWidth,
        minHeight,
        background,
        borderColor
      }}
      key={key}
      block={block}
    >
      <div className={iconRevert ? styles.buttonNameRevert : styles.buttonName}>
        {name}
      </div>
    </Button>
  );
};
