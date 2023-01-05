// 加了下方这一段代码后，./module下的所有js文件可以映射成Vue.prototype.api对象的属性。其作为属性时是一个对象。
//require.context()方法
// 作用：创建当前模块的上下文
// 用法：require.context(directory, flag, regExp)
// directory: 要导入的当前模块的文件夹目录
// flag: 是否搜索当前路径的子目录  如果为false，在当前路径下的子目录不会进行搜索。
// regExp: 要匹配的文件  使用正则表达式来匹配。

const files = require.context('./module', false, /\.js$/) // files就是一个context


var pages = {}
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default pages
// 其他使用场景
// 1、 require.context()也可以进行多模块路由的自动导入配置

// 2、多组件的注册；