'use strict';


const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, servise } = this;
    ctx.status = 200;
    ctx.body = {
      data: ctx.query,
      code: 200,
    };
  }
}

module.exports = HomeController;
