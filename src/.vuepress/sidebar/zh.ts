import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/guide/": [
        "",
        {
            icon: "discover",
            text: "快速开始",
            prefix: "quick-start/",
            link: "quick-start/",
            children: "structure",
        },
        {
            text: "后端手册",
            icon: "java",
            prefix: "guide/",
            children: "structure",
        },
        {
            text: "前端手册",
            icon: "javascript",
            prefix: "guide/",
            children: "structure",
        },
        {
            text: "项目部署",
            icon: "back-stage",
            prefix: "guide/",
            children: "structure",
        },
    ],
});
