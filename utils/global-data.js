export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Pokuong Lao';
    const email = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'pokuonglao123@gmail.com';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Portfolio';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    email,
    blogTitle,
    footerText,
  };
};
