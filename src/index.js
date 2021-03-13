import React from "react";
import { Button, Tooltip } from "antd";
import styled from "styled-components";
import PropType from "prop-types";
import "./styles.module.css";
// import { useKeyboardJs } from "react-use";

const ButtonCustom = styled(Button)`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  min-width: ${props => props.otherprops.minWidth};
  min-height: ${props => props.otherprops.minHeight};
  border-radius: ${props => props.otherprops.borderRadius};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background: ${props => props.background};
  border-color: ${props => props.otherprops.borderColor};
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.otherprops.iconRevert ? "row-reverse" : ""};
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
    margin-left: 10px;
  }

  & .anticon img {
    fill: #FFF;
    margin-left: 10px;
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

const NameCustomWithIcon = styled.div(props => ({
  marginLeft: props.otherprops.iconRevert ? "" : "10px",
  marginRight: props.otherprops.iconRevert ? "10px" : "",
  width: "90%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "1rem"
}));

const NameCustom = styled.div(props => ({
  margin: "auto",
  height: "100%",
  width: "90%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "1rem"
}));

const TooltipCustom = styled(Tooltip)`

`;

export const CLFButtonSVG = ({
                               onKeyClick,
                               onClick,
                               disable,
                               loading,
                               name,
                               className,
                               iconRevert,
                               iconComponent,
                               minHeight,
                               minWidth,
                               borderColor,
                               borderRadius,
                               fontSize,
                               fontWeight,
                               ...rest
                             }) => {
  const inputRef = React.createRef();
  // const [isCtrl] = useKeyboardJs("ctrl");
  // const [isCmd] = useKeyboardJs("command");

  const onClickFunction = () => {
    // if (isCmd || isCtrl) {
    //   if (onKeyClick && typeof onKeyClick === "function")
    //     return onKeyClick();
    //   return null;
    // }
    if (onClick && typeof onClick === "function")
      onClick();
  };

  return (
    <TooltipCustom
      title={!rest.enableTooltip || (disable || loading) ? null : name}
      color={rest.tooltipBackground}
      placement={rest.tooltipPlacement}
      arrowPointAtCenter
      getPopupContainer={() => document.getElementById(rest.id)}
    >
      <StyledButtonWrapper disable={disable}>
        <ButtonCustom
          ref={inputRef}
          id={rest.id}
          width={rest.width}
          height={rest.height}
          margin={rest.margin}
          padding={rest.padding}
          className={className}
          color={rest.color}
          otherprops={{
            minWidth,
            minHeight,
            borderRadius,
            borderColor,
            iconRevert,
            fontWeight,
            fontSize,
            iconComponent
          }}
          background={rest.background}
          size={rest.size}
          disabled={disable}
          loading={loading}
          key={rest.key}
          block={rest.block}
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
          {
            !iconComponent ?
              <NameCustom otherprops={{ iconRevert }}>
                {name}
              </NameCustom>
              :
              <NameCustomWithIcon otherprops={{ iconRevert }}>
                {name}
              </NameCustomWithIcon>
          }
        </ButtonCustom>
      </StyledButtonWrapper>
    </TooltipCustom>
  );
};

CLFButtonSVG.propTypes = {
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
  // onKeyClick: PropType.func,
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
};

CLFButtonSVG.defaultProps = {
  id: "button-test-12345678",
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
  // onKeyClick: null,
  fontSize: "1.2rem",
  tooltipPlacement: "top",
  tooltipBackground: "#1790FF",
  enableTooltip: false
};
