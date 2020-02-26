import React, { FC, useEffect, useState } from "react";
import { Content } from "./contents/Content";
import { Header } from "./contents/Header";
import { Article } from "./contents/Article";
import { Section } from "./contents/Section";
import { Aside } from "./contents/Aside";
import { Footer } from "./contents/Footer";
import { getMatchPathData, getXState } from "~/state/route/action";
import { useLocation } from "react-use";
import { rootService } from "~/state/route";

type LinkProps = {
  path: string;
  name: string;
};

const Link: FC<LinkProps> = ({ children, path, name }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      rootService.send(name, { path });
    }}
    href={path}
  >
    {children}
  </a>
);

type Route = ReturnType<typeof getMatchPathData>;
const useRouter = () => {
  const state = useLocation();
  const [xState, setXState] = useState();
  const [regExpExec, setRegExpExec] = useState<Route>();

  useEffect(() => {
    setXState(getXState());
    setRegExpExec(getMatchPathData());
  }, [state.pathname]);

  return { regExpExec, xState };
};

export const Page: FC = () => {
  const { xState, regExpExec } = useRouter();
  return (
    <>
      <Header />
      <main>
        <ul>
          <li>
            <Link name="top" path="/">
              top
            </Link>
          </li>
          <li>
            <Link name="books" path="/books/789">
              /books/789
            </Link>
          </li>
          <li>
            <Link name="users" path="/users/123">
              /users/123
            </Link>
          </li>
          <li>
            <Link name="book" path="/book">
              book
            </Link>
          </li>
          <li>
            <Link name="user" path="/user">
              user
            </Link>
          </li>
        </ul>
        <hr />
        <h2>path-to-regexp</h2>
        <pre>{JSON.stringify(regExpExec, null, 2)}</pre>
        <h2>xState</h2>
        <pre>{JSON.stringify(xState, null, 2)}</pre>
        <Content />
        <Article />
        <Section />
      </main>
      <Aside />
      <Footer />
    </>
  );
};
