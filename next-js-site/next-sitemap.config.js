module.exports = {
  siteUrl: 'https://ivyready.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/agreement/*', '/agreement_project/*', '/api/*', '/guides/*/thank-you'],
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
