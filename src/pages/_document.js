import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { readFileSync } from "fs";

const linkForStylesheet = () => {
  let style = null;

  if (process.env.NODE_ENV === "production") {
    style = readFileSync(`${process.cwd()}/src/.next/static/style.css`, "utf8");
  }

  return typeof style === "string" ? (
    <style dangerouslySetInnerHTML={{ __html: style }} />
  ) : (
    <link rel="stylesheet" href="/_next/static/style.css" />
  );
};

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>{linkForStylesheet()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
