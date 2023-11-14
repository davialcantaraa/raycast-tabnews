import breaksPlugin from "@bytemd/plugin-breaks";
import gemojiPlugin from "@bytemd/plugin-gemoji";
import gfmPlugin from "@bytemd/plugin-gfm";
import gfmLocale from "@bytemd/plugin-gfm/locales/pt_BR.json";
import highlightSsrPlugin from "@bytemd/plugin-highlight-ssr";
import mathPlugin from "@bytemd/plugin-math";
import mathLocale from "@bytemd/plugin-math/locales/pt_BR.json";
import mermaidPlugin from "@bytemd/plugin-mermaid";
import mermaidLocale from "@bytemd/plugin-mermaid/locales/pt_BR.json";

export const CATEGORIES = [
  {
    title: "Relevant",
    endpoint: "contents?strategy=relevant",
  },
  {
    title: "Recent",
    endpoint: "contents?strategy=new",
  },
];

export const DEFAULT_CATEGORY = "contents?strategy=relevant";

export const BASE_URL = "https://www.tabnews.com.br";
export const BASE_API_URL = "https://www.tabnews.com.br/api/v1";

export const MARKDOWN_PLUGINS = [
  gfmPlugin({ locale: gfmLocale }),
  highlightSsrPlugin(),
  mathPlugin({
    locale: mathLocale,
    katexOptions: { output: "html" },
  }),
  breaksPlugin(),
  gemojiPlugin(),
  mermaidPlugin({ locale: mermaidLocale }),
];

export type Category = (typeof CATEGORIES)[0];
