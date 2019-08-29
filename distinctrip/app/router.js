'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/page1', controller.page.page1);
  router.get('/page2', controller.page.page2);
  router.get('/page3', controller.page.page3);
};
