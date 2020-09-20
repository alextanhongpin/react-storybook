import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";

// Returns an object that configures both light and dark theme. If no
// dark theme is provided, then the light theme will be used as
// default.
const lightDark = (light, dark = light) => ({
  light,
  dark,
});

const buttonVariants = theme.variants("mode", "variant", {
  primary: lightDark(
    `
      color: white;
      background-color: #1ea7fd;
    `,
    `
      color: white;
      background-color: black;
    `
  ),
  ghost: lightDark(
    `
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `
  ),
});

const buttonSizes = theme.variants("mode", "size", {
  small: lightDark(`
    font-size: 12px;
    padding: 10px 16px;
  `),
  medium: lightDark(`
    font-size: 14px;
    padding: 11px 20px;
  `),
  large: lightDark(`      
    font-size: 16px;
    padding: 12px 24px;
  `),
  default: lightDark(""),
});

// NOTE: The styled components does not have prop types defined, but we
// need it for storybook documentation. One approach is to just wrap it
// inside another React component...
export const ButtonStyle = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${buttonVariants};
  ${buttonSizes};
  background-color: ${(props) => props.backgroundColor};
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...rest }) => (
  <ButtonStyle {...rest}>{label}</ButtonStyle>
);

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(["primary", "ghost"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: "primary",
  size: "medium",
  onClick: undefined,
};

export const ButtonSmall = (props) => <Button {...props} size="small" />;
