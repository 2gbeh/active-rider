"use strict";
import parse from "html-react-parser";

// import { default as h } from "../hooks/Okra";
export default class Okra {
  // export async function getStaticProps(context) {
  //   return {
  //     props: { head: h.setPageTitle("Log in") },
  //   };
  // }
  static setPageTitle(title) {
    return { title: title };
  }

  // <Head>
  //   <title>
  //     {h.getPageTitle(pageProps)}
  //     {process.env.NEXT_PUBLIC_APP_NAME} &reg;
  //   </title>
  // </Head>
  static getPageTitle(pageProps, delimiter = "-") {
    return pageProps.head ? `${pageProps.head.title} ${delimiter} ` : "";
  }

  // <div className={h.classNames(styles, "flex-item split-image")}>
  static classNames(styles, classes) {
    var f = "";
    for (let e of classes.split(" ")) {
      f += styles[e] + " ";
    }
    return f.trim();
  }

  // import BackgroundImageAsset from "../../public/images/guest-split-image.png";
  // <div style={h.backgroundImage(BackgroundImageAsset)}>
  static backgroundImage(img) {
    return {
      backgroundImage: `url(${img.src})`,
      width: "100%",
      height: "100%",
    };
  }

  // <article>{h.asHtml(p.article)}</article>
  static asHtml(text) {
    return parse(text);
  }
}
