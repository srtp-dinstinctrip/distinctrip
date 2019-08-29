'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
  async page1() {
    const { ctx } = this;
    await this.ctx.render('page1', {});
  }
  async page2() {
    const { ctx } = this;
    await this.ctx.render('page2', {});
  }
  async page3() {
    const { ctx } = this;
    await this.ctx.render('page3', {});
  }
}

module.exports = PageController;