import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);
@import url(//fonts.googleapis.com/css?family=Roboto:400,300,500,700);

 .container {
  display: block;
  margin: 10px;
}

body {
  font-family: Roboto;
  background-color: #E5E5E5;
}

* {
  box-sizing: border-box;
}

.error
{
  border-color: red !important;
}

`;
