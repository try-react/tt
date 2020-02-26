import { rootService } from "./route";
import { pathToRegexp, Path, match } from "path-to-regexp";

const getPath = () => location.pathname + location.search;
const getRegExpExecArray = (p: Path) => pathToRegexp(p).exec(getPath());
const head = () => true;

const filtered = () =>
  Object.entries(rootService.machine.definition.states) //
    .filter((v) => getRegExpExecArray(v[1].meta.path));

export const getMatchPathData = () =>
  filtered()
    .map((v) => match(v[1].meta.path)(getPath()))
    .find(head);

export const getXState = () =>
  filtered()
    .map((v) => v)
    .find(head);
