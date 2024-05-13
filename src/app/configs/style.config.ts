import { Theme, css } from "@emotion/react";

const globalStyle = (theme: Theme) => css`
  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #fbfbfb;
    font-family: "SUIT-Regular", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
      "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    scroll-behavior: smooth;
  }

  #root {
    padding: 8px;
    width: 100vw;
    max-width: 100vw;
    gap: 16px;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    outline: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    /* color: */
  }

  ol {
    margin: 0;
  }

  input {
    background: none;
    border: none;
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  address {
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }

  .swal2-popup {
    border-radius: 50%;
    aspect-ratio: 1/1;
    -webkit-box-shadow: inset 32px 32px 32px 12px rgba(0, 0, 0, 0.16), 32px 32px 32px 12px rgba(0, 0, 0, 0.16);
    box-shadow: inset 32px 32px 32px 12px rgba(0, 0, 0, 0.16), 32px 32px 32px 12px rgba(0, 0, 0, 0.16);
    background: #fafafa;
  }
`;
export default globalStyle;
