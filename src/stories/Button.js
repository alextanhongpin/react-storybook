import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";

const buttonVariants = theme.variants("mode", "variant", {
  primary: {
    light: `
      color: white;
      background-color: #1ea7fd;
    `,
    dark: `
      color: white;
      background-color: black;
    `,
  },
  ghost: {
    light: `
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `,
    dark: `
      color: white;
      background-color: black;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `,
  },
});

const buttonSizes = theme.variants("mode", "size", {
  small: {
    light: `
      font-size: 12px;
      padding: 10px 16px;
    `,
    dark: `
      font-size: 12px;
      padding: 10px 16px;
    `,
  },
  medium: {
    light: `
      font-size: 14px;
      padding: 11px 20px;
    `,
    dark: `
      font-size: 14px;
      padding: 11px 20px;
    `,
  },
  large: {
    light: `
      font-size: 16px;
      padding: 12px 24px;
    `,
    dark: `
      font-size: 16px;
      padding: 12px 24px;
    `,
  },
  default: {
    light: "",
    dark: "",
  },
});

/**
 * Primary UI component for user interaction
 */
export const Button = styled.button`
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
