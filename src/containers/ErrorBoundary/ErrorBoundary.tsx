import React from "react";
type Props = {
  children: React.ReactNode;
};
type State = {
  error?: Error;
};
type ReactErrorInfo = {
  componentStack: string;
};
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, info?: ReactErrorInfo) {
    console.log(error);
    console.log(info);
    this.setState({ error: error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? <>えらー</> : children;
  }
}
