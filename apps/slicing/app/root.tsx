import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "haikelz/slicing" },
    {
      description:
        "My result for 1 day 1 slicing. Design didapat dari codedesign.dev . Mayoritas desain yang dislicing berbentuk component karena untuk ngejar waktu, tapi tidak dipungkiri bakal ngambil yang page juga.",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
