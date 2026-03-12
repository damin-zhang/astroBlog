// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Zhangdamin's Blog",
  title: "Zhangdamin's Blog",
  description: "楠菜山，张大敏的个人网站。分享技术、生活与思考。",

  // Navigation
  navigation: {
    home: "首页",
    posts: "文章",
    about: "关于",
    contact: "联系",
    comments: "评论",
  },

  // Hero Section
  hero: {
    prefix: "我是",
    name: "张大敏",
    intro: "我是一名前端开发者和技术博主，热衷于分享知识和构建有趣的项目。\n欢迎来到我的个人博客！",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "查看文章",
      contactMe: "联系我",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/zhangdamin" },
      { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/zhangdamin07" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/damin-zhang" },
      { name: "Bilibili", icon: "/svg/bilibili.svg", url: "https://space.bilibili.com/431539006" },
    ],
  },

  // About Section
  about: {
    title: "关于我",
    text: "你好，我是张大敏，一名热衷于前端开发的技术爱好者。我喜欢探索新技术，分享学习心得和项目经验。在这个博客里，你会找到我的技术笔记、教程和项目展示。希望能对我的文章对你有所帮助！",
  },

  // Contact Page
  contact: {
    title: "联系我",
    subtitle: "无论是新项目合作、创意交流还是其他机会，都欢迎与我联系。",
    info: {
      email: {
        label: "邮箱",
        value: "your-email@example.com",
        link: "mailto:your-email@example.com",
      },
      phone: {
        label: "Phone",
        value: "+1 (234) 567-890",
        link: "tel:+1 (234) 567-890",
      },
      location: {
        label: "所在地",
        value: "中国",
      },
    },
    followMe: {
      title: "关注我",
      links: [
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/zhangdamin" },
        { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/zhangdamin07" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/damin-zhang" },
        { name: "Bilibili", icon: "/svg/bilibili.svg", url: "https://space.bilibili.com/431539006" },
      ],
    },
    footerText: [
      "我会在工作日内 24 小时内回复消息。",
      "期待与你交流！🚀",
    ],
    messageButton: "💬 留言",
  },

  // Footer
  footer: {
    copyright: "© 2026 张大敏。All rights reserved.",
    links: [],
    github: {
      text: "在 GitHub 上给这个项目点 Star",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },

  // Posts Page
  posts: {
    title: "博客文章",
    subtitle: "探索关于前端开发、技术和生活的最新文章",
    searchPlaceholder: "搜索文章...",
  },

  // Comments Page
  comments: {
    title: "评论与讨论",
    subtitle: "在这里分享你的想法、问题或建议。让我们一起交流讨论！",
    guidelines: {
      title: "社区准则",
      items: [
        "尊重他人，建设性评论",
        "禁止垃圾广告和自我推广",
        "禁止人身攻击和不当言论",
        "保持话题相关",
        "使用友好包容的语言",
      ],
    },
  },
};
