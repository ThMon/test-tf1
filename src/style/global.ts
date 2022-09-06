import { createGlobalStyle } from "styled-components";
import { global_colors } from "./global_colors";

export default createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: ${global_colors.background};
      color: ${global_colors.font_color}
  }

  p {
    font-family: 'Inter', sans-serif;
  }

  .react-multi-carousel-list {
      z-index: 20;
      position: initial !important;
  }
`;
