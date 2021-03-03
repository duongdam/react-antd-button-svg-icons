import React from "react";
import { Button, Tooltip } from "antd";
import { useKeyboardJs } from "react-use";
import styled from "styled-components";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";

const ButtonCustom = styled(Button)`
  position: relative;
  width: ${props => props.width && `${props.width}px`};
  height: ${props => props.height && `${props.height}px`};
  margin: ${props => props.margin && `${props.margin}`};
  padding: ${props => props.padding && `${props.padding}`};
  background: ${props => props.background};
  border-color: ${props => props.otherprops.borderColor};
  border-radius: ${props => `${props.otherprops.borderRadius}px`};
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.otherprops.iconRevert ? "row-reverse" : ""};
  min-width: ${props => `${props.otherprops.minWidth}px`};
  min-height: ${props => `${props.otherprops.minHeight}px`};
  font-weight: ${props => props.otherprops.fontWeight};
  font-size: ${props => props.otherprops.fontSize};
  pointer-events: ${props => props.disable ? "none" : "auto"};

  :focus {
    opacity: 0.8;
    background: ${props => props.background};
    border-color: ${props => props.background};
    color: #FFF
  }

  :hover {
    opacity: 0.8;
    background: ${props => props.background};
    border-color: ${props => props.background};
    color: #FFF
  }

  &.ant-btn[disabled] {
    opacity: 0.6;
    background: ${props => props.background};
    border-color: ${props => props.background};
    color: #FFF;
  }

  &.ant-btn-clicked:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border: 0 solid ${props => props.otherprops.borderColor};
    opacity: 0.4;
    -webkit-animation: buttonEffect 0.4s;
    animation: buttonEffect 0.4s;
    display: block;
  }

  &.ant-btn-loading-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
  }

  & .anticon svg {
    fill: #FFF;
  }

  & .clf-icon-Btn {
    position: absolute;
    left: 3px;
    max-width: 31px;
    margin-right: 10px;
  }

  & .clf-icon-Btn-Revert {
    max-width: 31px;
    position: absolute;
    right: 1px;
    margin-left: 10px;
  }

  &.clf-icon-Btn span {
    margin-left: 20px;
  }
`;

const StyledButtonWrapper = styled.span`
  cursor: ${props => props.disable ? "not-allowed" : "pointer"};
`;

const NameCustom = styled.div(props => ({
  marginLeft: props.otherprops.iconRevert ? "" : "20px",
  marginRight: props.otherprops.iconRevert ? "20px" : ""
}));

const TooltipCustom = styled(Tooltip)`

`;

export const CLFButtonSVG = ({
                               id = uuidv4(),
                               iconComponent,
                               name,
                               onClick,
                               size,
                               disable,
                               loading,
                               width,
                               height,
                               key,
                               margin = "5px",
                               padding,
                               block,
                               className,
                               minWidth = 125,
                               minHeight = 35,
                               color = "#FFF",
                               borderRadius = 25,
                               background = "#1790FF",
                               borderColor = "#1790FF",
                               iconRevert = false,
                               onKeyClick = null,
                               fontWeight = 700,
                               fontSize = "1.2rem",
                               tooltipPlacement = "top",
                               tooltipBackground = "#1790FF",
                               enableTooltip = false
                             }) => {
  const inputRef = React.createRef();
  const [isCtrl] = useKeyboardJs("ctrl");
  const [isCmd] = useKeyboardJs("command");

  const onClickFunction = () => {
    if (isCmd || isCtrl) {
      if (onKeyClick && typeof onKeyClick === "function")
        return onKeyClick();
      return null;
    }
    if (onClick && typeof onClick === "function")
      onClick();
  };

  return (
    <TooltipCustom
      title={!enableTooltip || (disable || loading) ? null : name}
      color={tooltipBackground}
      placement={tooltipPlacement}
      arrowPointAtCenter
      getPopupContainer={() => document.getElementById(id)}
    >
      <StyledButtonWrapper disable={disable}>
        <ButtonCustom
          ref={inputRef}
          id={id}
          width={width}
          height={height}
          margin={margin}
          padding={padding}
          className={className}
          color={color}
          otherprops={{
            minWidth,
            minHeight,
            borderRadius,
            borderColor,
            iconRevert,
            fontWeight,
            fontSize
          }}
          background={background}
          size={size}
          disabled={disable}
          loading={loading}
          key={key}
          block={block}
          icon={iconComponent ?
            {
              ...iconComponent,
              props: {
                ...iconComponent.props,
                className: iconRevert ? "clf-icon-Btn-Revert" : "clf-icon-Btn"
              }
            } :
            null
          }
          onClick={onClickFunction}
        >
          <NameCustom otherprops={{ iconRevert }}>
            {name}
          </NameCustom>
        </ButtonCustom>
      </StyledButtonWrapper>
    </TooltipCustom>
  );
};
