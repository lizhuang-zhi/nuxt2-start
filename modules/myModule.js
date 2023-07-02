export default function ExampleModule(moduleOptions) {
  console.log(moduleOptions.token);
  console.log(this.options.exampleMsg);

  this.nuxt.hook('ready', async nuxt => {
    console.log("Nuxt is ready");
  })
}

// 如果需要发布这个模块作为npm包，需要导出一个meta对象
module.exports.meta = require('../package.json')