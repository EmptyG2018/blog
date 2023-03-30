import { defineConfig } from "vitepress";

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  base: '/',
  lang: "en-US",
  title: "Empty's blog",
  description:
    "Welcome to Empty's blog, this blog is mainly used as a personal platform for sharing personal growth, recording life, accumulating experience, etc.",

  themeConfig: {
    logo: "",
    nav: [
      {
        text: "项目案例",
        link: "/project/navigation",
        activeMatch: "/project/",
      },
      {
        text: "技术文档",
        link: "/document/navigation",
        activeMatch: "/document/",
      },
      {
        text: "学习教程",
        link: "/tutorial/navigation",
        activeMatch: "/tutorial/",
      },
      {
        text: "命令手册",
        link: "/command/navigation",
        activeMatch: "/command/",
      },

      // ...
    ],

    sidebar: {
      "/project/": [
        {
          text: "目录",
          link: "/project/navigation",
        },
        {
          text: "mdocs",
          link: "/project/mdocs",
        },
      ],
      "/document/": [
        {
          text: "目录",
          link: "/document/navigation",
        },
        {
          text: "React",
          collapsed: false,
          items: [
            {
              text: "精华！React组件设计模式思想",
              link: "/document/React/react-component-ui.md",
            },
          ],
        },
      ],
      "/tutorial/": [
        {
          text: "目录",
          link: "/tutorial/navigation",
        },
        {
          text: 'NVM安装使用流程教程（window）',
          link: '/tutorial/nvm-install.md',
        }
      ],
      "/command/": [
        {
          text: "目录",
          link: "/command/navigation",
        },
        {
          text: "工具类",
          collapsed: false,
          items: [
            {
              text: "超细节！小白专属的git命令手册",
              link: "/command/util/git.md",
            },
            {
              text: '一分钟就能熟悉的常见nvm命令',
              link: '/command/util/nvm.md',
            }
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/EmptyG2018" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Empty's blog",
    },

    lastUpdatedText: "上次更新",
  },
});
