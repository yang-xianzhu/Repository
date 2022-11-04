export const SITE = {
  title: "前端博客",
  description: "yxz的个人博客",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/yang-xianzhu/blog`;

export const COMMUNITY_INVITE_URL = `https://github.com/yang-xianzhu/blog`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export const BASEURL = "blog";

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
  en: {
    // "": [
    //   // { text: "首页", link: `blog/home` },
    //   // { text: "面试题", link: `blog/interview-uestions` },
    //   // { text: "源码", link: `blog/source-code` },
    //   // { text: "算法", link: `blog/algorithm` },
    //   // { text: "工具库", link: `blog/tool-library` },
    //   // { text: "工程化", link: `blog/engineering` },
    // ],
    面试题: [
      {
        text: "前端基础",
        link: `blog/InterviewUestions/basis`,
      },
      {
        text: "Vue",
        link: `blog/InterviewUestions/vue`,
      },
      {
        text: "HTTP",
        link: `blog/InterviewUestions/http`,
      },
      {
        text: "面试记录",
        link: `blog/InterviewUestions/interviewRecords`,
      },
      {
        text: "小程序",
        link: `blog/InterviewUestions/smallProgra`,
      },
      {
        text: "项目遇到的问题",
        link: `blog/InterviewUestions/projectProblems`,
      },
      {
        text: "TypeScript",
        link: `blog/InterviewUestions/typeScript`,
      },
      {
        text: "Git",
        link: `blog/InterviewUestions/git`,
      },
      {
        text: "React",
        link: `blog/InterviewUestions/react`,
      },
    ],
    书籍: [
      {
        text: "JavaScript高级程序设计-第四版",
        link: `blog/Book/RedBook/fourthEdition`,
      },
      { text: "你不知道的JS-上卷", 
      link: `blog/Book/YouDontKnowJS/Top` 
    },
      {
        text: "你不知道的JS-中卷",
        link: `blog/Book/YouDontKnowJS/Middle`,
      },
      {
        text: "你不知道的JS-下卷",
        link: `blog/Book/YouDontKnowJS/Bottom`,
      },
      {
        text: "JavaScript设计模式",
        link: `blog/Book/DesignPatterns/JSDesgin`,
      },
    ],
    数据结构与算法:[],
    源码:[
      {text:'Vue',link:`blog/SourceCode/vueCode`}
    ],
    工具库:[
      
    ],
    工程化:[
      {text:'Node',link:`blog/Project/node`}
    ]
  },
};
