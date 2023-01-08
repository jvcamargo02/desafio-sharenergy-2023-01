import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
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
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}


ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
:root {
    --button-color: #a328d6;
    --positive-color: #03ac00;
    --negative-color: #c70000; 
    --logo-font: 'Saira Stencil One', cursive;
	--font: 'Raleway', sans-serif;
}
body {
	line-height: 1;
    background: rgb(223,229,101);
    background: linear-gradient(270deg, rgba(223,229,101,1) 0%, rgba(27,162,161,1) 65%);
	font-family: var(--font);

	#demo-simple-select-label{
		background: #fff;
    	padding: 3px;
	}

	.css-whebh7-MuiInputBase-root-MuiInput-root{
		border-bottom: none;

		&::before{
			border-bottom: none;
		}

		&::after{
			border-bottom: none;
		}

		&:hover{
			border-bottom: none;
		}

		&:hover::before{
			border-bottom: none;
		}

		&:hover::after{
			border-bottom: none;
		}

		&:focus::before{
			border-bottom: none;
		}

		&:focus::after{
			border-bottom: none;
		}
	}
}
button{
	font-family: var(--font);
	cursor: pointer;
}
::placeholder{
	font-family: var(--font);
}
`;

export default ResetCss;
