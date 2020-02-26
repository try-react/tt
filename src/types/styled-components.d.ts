import "styled-components";
// https://styled-components.com/docs/api#create-a-declarations-file

type Theme = {
  colors: {
    main: string;
    secondary: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
