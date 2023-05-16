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
  { text: "案例", icon: "discover", link: "/demo/" },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
