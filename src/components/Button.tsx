import { forwardRef } from "react";
import styled, { css, CSSProp } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  theme: "white" | "dark";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const sizeStyle = SIZES[props.size];
    const themeStyle = THEME[props.theme];
    return (
      <StyledButton
        sizeStyle={sizeStyle}
        themeStyle={themeStyle}
        {...props}
        ref={ref}
      >
        {props.children}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button<{
  sizeStyle: CSSProp;
  themeStyle: CSSProp;
}>`
  ${(props) => props.sizeStyle}
  ${(props) => props.themeStyle}

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
  margin: 0;
  padding: var(--button-padding, 12px 16px 12px 16px);

  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  border: var(--button-border, 0);
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  font-family: "inter";
  font-size: var(--button-font-size, 1em);
  line-height: var(--button-line-height, 1em);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  font-weight: 700;
  color: #ffffff;

  background-color: var(--button-background-color, --color-status-info);
  &:hover {
    background-color: var(--button-color-hover);
  }

  &:active {
    background-color: var(--button-color-press);
  }
  &:focus {
    background-color: var(--button-color-focus);
    outline: 0;
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
    background-color: #c8c8c8;
    color: #878585;
  }

  //
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

const SIZES = {
  sm: css`
    --button-font-size: 14px;
    --button-line-height: 18px;
    --button-inner-gap: 4px;
    --button-padding: 12px 16px 12px 16px;
  `,
  md: css`
    --button-font-size: 16px;
    --button-line-height: 24px;
    --button-inner-gap: 4px;
    --button-padding: 16px 32px 16px 32px;
  `,
  lg: css`
    --button-font-size: 24px;
    --button-line-height: 32px;
    --button-inner-gap: 8px;
    --button-padding: 16px 32px 16px 32px;
  `,
} as const;

const THEME = {
  white: css`
    --button-background-color: white;
    --button-font-color: #101828;
    --button-border: #101828 2.5px solid;
  `,
  dark: css`
    --button-background-color: #101828;
    --button-font-color: white;
    --button-border: white 2.5px solid;
  `,
};
