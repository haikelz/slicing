const baseConfig =
  process.env.NODE_ENV === "production"
    ? {
        server: "./server.js",
        serverBuildPath: ".netlify/functions-internal/server.js",
      }
    : undefined;

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...baseConfig,
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  tailwind: true,
  postcss: true,
};
