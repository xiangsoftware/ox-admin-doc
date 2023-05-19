import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "开发指南",
    icon: "creative",
    link: "/guide/",
    prefix: "/guide/",
    children: [
      {
        text: "快速开始",
        icon: "creative",
        prefix: "quick-start/",
        children: [
            "1.md",
            "2.md",
            "3.md",
        ],
      },
      {
        text: "后端手册",
        icon: "java",
        prefix: "code-gen/",
        children: ["gen.md"],
      },
      {
        text: "前端手册",
        icon: "javascript",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "项目部署",
        icon: "back-stage",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { text: "开发教程", icon: "discover", link: "/tutorial/" },
  {
    text: "项目演示",
    icon: "note",
    link: "http://oxadmin.java668.com",
  },
]);
