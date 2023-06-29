export default {
  install: (app, options) => {
    // 注入全域變數 $translate() 方法
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
    // provide 出去
    app.provide("i18n", options);
  }
}