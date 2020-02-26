const isProduction = process.env.NODE_ENV === "production";

export const env = {
  lazyTimeMs: isProduction ? 0 : 2000,
};
