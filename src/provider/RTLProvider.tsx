"use client";
import { type PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

/* 
  info: Read the below document to enable RTL
  @link: https://mui.com/material-ui/customization/right-to-left/
*/
export default function RTLProvider({ children, language }: PropsWithChildren<{ language: string }>) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  if (language != "fa") return children;
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
