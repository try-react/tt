import React from "react";
import { App } from "~/containers/App";
import { render } from "react-dom";
import { rootService } from "~/state/route";

const init = () => {
  rootService.start();
};

const findTarget = (name: string) => document.getElementById(name);

init();
render(React.createElement(App), findTarget("root"));
