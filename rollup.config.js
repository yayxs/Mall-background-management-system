/*
 * @Author: your name
 * @Date: 2020-06-30 22:50:01
 * @LastEditTime: 2020-06-30 23:06:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-source-code\rollup.config.js
 */
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/vue.js",
    name: "Vue",
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    process.env.ENV === "development"
      ? serve({
          open: true,
          openPage: "/public/index.html",
          port: "3000",
          contentBase: "",
        })
      : null,
  ],
};
