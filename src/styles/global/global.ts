import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

html, body {
    width: 100%;
    height: 100%;
    position: relative;
    color: ${(props) => props.theme.colors.text.light};
}

html, body {
    scroll-behavior: smooth;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

a {
    text-decoration: none;
}

button {
    color: ${(props) => props.theme.colors.text.light};
}

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border-radius: ${(props) => props.theme.misc.borderRadius};
    -webkit-text-fill-color: ${(props) => props.theme.colors.text.light};
    -webkit-box-shadow: ${(props) =>
      `0 0 0px 1000px ${props.theme.colors.semiDark} inset`}; 
  }

ol, ul {
	list-style: none;
}

body {
    background-color: ${(props) => props.theme.colors.dark};
    font-family: ${(props) => props.theme.fonts.primary};
}

`;
