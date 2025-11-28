module.exports = {
  siteUrl: 'https://ivyready.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/agreement/*', '/agreement_project/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/agreement/', '/agreement_project/', '/api/']
      }
    ]
  }
};
