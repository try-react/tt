import { env } from "~/util/env";

const getId = () => ({ id: Math.round(Math.random() * 100) });
export const lazyFetch = () =>
  new Promise<{ id: number }>((resolve) =>
    setTimeout(() => resolve(getId()), env.lazyTimeMs),
  );

export const throwError = (msg: string) => {
  throw Error(`🤬${msg}🤬`);
};
