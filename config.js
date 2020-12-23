'use strict';

module.exports = {
  url: 'https://steven-terrana.github.io',
  pathPrefix: '/blog',
  title: 'My Dope Blog',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
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
      label: 'About me',
      path: '/pages/about-me'
    },
    {
        label: 'Categories',
        path: '/categories'
    }
  ],
  author: {
    name: 'Steven Terrana',
    photo: '/photo.png',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: 'steven.terrana@hey.com',
      facebook: '',
      telegram: '',
      twitter: 'steven_terrana',
      github: 'steven-terrana',
      rss: '',
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
    repo: `https://steven-terrana:${process.env.GITHUB_TOKEN}@github.com/steven-terrana/obsidian`
  }
};
