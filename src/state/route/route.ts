/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createMachine, interpret } from "xstate";
import { lazyFetch } from "~/util/misc";

/**
 * https://github.com/pillarjs/path-to-regexp
 */
const rootMachine = createMachine({
  id: "route",
  initial: "top",
  on: {
    top: ".top",
    books: ".books",
    users: ".users",
    book: ".book",
    user: ".user",
  },
  states: {
    top: {
      onEntry: async (_, __, p) => {
        await lazyFetch();
        history.pushState("", "", p._event.data.path);
      },
      onDone: {},
      meta: {
        path: "/",
      },
    },
    users: {
      onEntry: async (_, __, p) => {
        await lazyFetch();
        history.pushState("", "", p._event.data.path);
      },
      meta: {
        path: "/users/:id",
      },
    },
    user: {
      onEntry: async (_, __, p) => {
        await lazyFetch();
        history.pushState("", "", p._event.data.path);
      },
      meta: {
        path: "/user",
      },
    },
    books: {
      onEntry: async (_, __, p) => {
        await lazyFetch();
        history.pushState("", "", p._event.data.path);
      },
      meta: {
        path: "/books/:id",
      },
    },
    book: {
      onEntry: async (_, __, p) => {
        await lazyFetch();
        history.pushState("", "", p._event.data.path);
      },
      meta: {
        path: "/book",
      },
    },
  },
});

export const rootService = interpret(rootMachine);
