import React, { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/containers/Style";
import { ErrorBoundary } from "~/containers/ErrorBoundary";
import { theme } from "~/theme";
import { Page } from "~/containers/Page";

export class App extends React.PureComponent {
  render() {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary>
            <Page />
          </ErrorBoundary>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
