// @ts-check
/// <reference path = "../../@types/globals.d.ts" />

window.$docsify = {
  repo: "https://github.com/mika-f/Unity-WireframeShader",
  loadSidebar: true,
  subMaxLevel: 2,
  auto2top: true,
  name: "Wireframe Shader",
  nameLink: "/WireframeShader/",
  alias: {
    "/.*/_sidebar.md": "/WireframeShader/_sidebar.md",
  },
  autoHeader: true,
  mergeNavbar: true,
  formatUpdated: "最終更新日 : {YYYY}/{MM}/{DD} {HH}:{mm}:{ss}",
  routerMode: "history",
  requestHeaders: {
    "Cache-Control": "max-age=0",
  },
  plugins: [
    window.EditOnGitHub.create("mika-f/docs.mochizuki.moe", "master", "public"),
    window.AppendFooter,
    window.BeautifulTitle.create("Wireframe Shader")
  ],};