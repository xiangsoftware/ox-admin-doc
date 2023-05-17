import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "开发指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "快速开始",
        icon: "creative",
        prefix: "bar/",
        children: [
            "baz",
          { text: "开发初衷", icon: "more", link: "" },
            "aaa",
          { text: "项目简介", icon: "more", link: "" },
        ],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { text: "开发教程", icon: "discover", link: "/demo/" },
  {
    text: "项目演示",
    icon: "note",
    link: "http://oxadmin.java668.com",
  },
]);
