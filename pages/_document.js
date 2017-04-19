import Document, { Head, Main, NextScript } from "next/document";
import styleSheet from "styled-components/lib/models/StyleSheet";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map(rule => rule.cssText).join("\n")
        }}
      />
    );
    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <script src="https://use.fontawesome.com/72ba5df163.js" />
          <title>Florian Kapfenberger | Webdeveloper</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
