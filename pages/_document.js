import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <title>Florian Kapfenberger | Webdeveloper</title>
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
