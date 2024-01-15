import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  /* Purple */
  --color-purple-default: #4F2CD9;
  --color-purple-hover: #3213AC;
  --color-purple-pressed: #240C86;
  --color-purple-light: #6C47FF; 

  /* Grey */
  --color-gray-0: #FFFFFF;
  --color-gray-1: #F8F8F8;
  --color-gray-2: #D9D9D9;
  --color-gray-3: #595959;
  --color-gray-4: #000000;         

  --color-red-1: #D73737;
  --color-red-2:  #B72121;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif, serif;
  /* color: var(--color-grey-700); */

  /* min-height: 100vh; */
  font-size: 1.6rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  font-size: 1.6rem;
  font-family: "Inter", sans-serif, serif;;
}
`;

export default GlobalStyles;
