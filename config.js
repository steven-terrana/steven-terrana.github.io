'use strict';

module.exports = {
  url: 'https://steven-terrana.github.io',
  pathPrefix: '/blog',
  title: "Steven Terrana's Blog",
  subtitle: '',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'G-1R4Z3JXBMF',
  useKatex: false,
  menu: [
    {
      label: 'Posts',
      path: '/'
    },
    {
      label: 'Publications',
      path: '/page/publications'
    },
    {
        label: 'Categories',
        path: '/categories'
    }
  ],
  author: {
    name: 'Steven Terrana',
    photo: '/photo.png',
    bio: 'Digital Duct Tape Enthusiast. Premature Optimizer. Open Source. Cat Dad. 🚀',
    contacts: {
      email: 'steven.terrana@hey.com',
      facebook: '',
      telegram: '',
      twitter: 'steven_terrana',
      github: 'steven-terrana',
      rss: 'rss.xml',
      vkontakte: '',
      linkedin: 'sterrana',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  },
  obsidian: {
    repo: `https://${process.env.PAT_USER}:${process.env.PAT_TOKEN}@github.com/steven-terrana/obsidian`,
    vaultPath: '/Users/steventerrana/Documents/obsidian'
  }
};
