const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

// 动态创建 Webpack 配置
const config = {
  mode: "production",
  entry: path.resolve(
    __dirname,
    "node_modules/techui-react-lite/index.js" // 替换为你的入口文件路径
  ),
  output: {
    path: path.resolve(
      __dirname,
      "node_modules/techui-react-lite/techui.min.js"
    ),
    filename: "index.min.js", // 输出文件名
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

// 执行 Webpack 编译
const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toJson().errors);
  } else {
    console.log("打包完成！");
  }
  compiler.close(() => {}); // 关闭编译器
});
