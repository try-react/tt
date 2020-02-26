import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body,
h1,
h2,
h3,
h4,
ul,
ol,
dl,
li,
dt,
dd,
p,
div,
span,
img,
a,
table,
tr,
th,
td {
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font-weight: normal;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

article,
header,
footer,
aside,
figure,
figcaption,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

/* ol,
ul {
  list-style: none;
  list-style-type: none;
} */
`;
