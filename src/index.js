import React from "react";
import { Button } from "antd";
import styles from "./styles.module.css";

export const CLFButtonSVG = ({
                               iconComponent = null,
                               name = null,
                               onClick = null,
                               size = null,
                               disable = false,
                               loading = false,
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
                             }) => {
  return (
    <Button
      className={`${styles.primary} ${styles.flex} ${className}`}
      icon={iconComponent ?
        {
          ...iconComponent,
          props: { ...iconComponent.props, className: styles.iconBtn }
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
      <div className={styles.buttonName}>
        {name}
      </div>
    </Button>
  );
};
