// Tutorial: https://www.youtube.com/watch?v=acAH2_YT6bs&t=448s

import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

const devMode = process.env.NODE_ENV !== "production";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: "development", // "production is the default mode and webpack optimizes files for production. Delete this line to enter production or set it using --env when running in terminal",
  entry: path.resolve(__dirname, "public/src/js/main.js"),
  output: {
    path: path.resolve(__dirname, "public/dist"), // Path for saving the final bundle file
    filename: "[name].[contenthash].bundle.js", //  Static file names have a PROBLEM. The browser chaches them and you that old version so your new changes might not work. You need a different name every time you change the built file Static file name - filename: "my-first-bundle.js", [name] uses the entry point name. [contenthash] solves the problem of caching by changing the name every time you change the file. If you run "build" again without changing files, the name will not be changed and the hash stays the same.
    clean: true, // Clean the output folder before starting the build to avoid unnecessary files from previous builds
    publicPath: "/", // About the option: https://webpack.js.org/guides/development/#using-webpack-dev-middleware:~:text=The%20publicPath%20will%20be%20used%20within%20our%20server%20script%20as%20well%20in%20order%20to%20make%20sure%20files%20are%20served%20correctly%20on%20http%3A//localhost%3A3000
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "webpack-template.html") }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css", // Output filename for extracted CSS
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json", // generated in dist
      publicPath: "/", // must match output.publicPath
    }),
  ], //  html-webpack-plugin generates an HTML file for your application and automatically injects all your generated bundles into this file.
  devtool: "inline-source-map", // helps to track the source code of the bundle.
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    // port: env.port ?? 3000,
    // open: true,
    // hot: true,
    // compress: true,
    // historyApiFallback: true, // for Single Page Applications (SPAs). If you refresh on /about, the dev server would normally give a 404, because /about doesn’t exist as a real file. With historyApiFallback: true, webpack-dev-server instead serves your index.html, letting your client-side router handle the route.
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
};

export default config;
