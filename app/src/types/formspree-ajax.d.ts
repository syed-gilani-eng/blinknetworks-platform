// @formspree/ajax's package.json "browser" field resolves the bare specifier to a
// non-modular CDN bundle without named exports, so components import this explicit
// ESM subpath instead. Re-export the package's real types for that subpath here.
declare module "@formspree/ajax/dist/index.mjs" {
  export * from "@formspree/ajax";
}
