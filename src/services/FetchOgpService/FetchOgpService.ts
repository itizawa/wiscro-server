// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require("cheerio-httpcli");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const read = require("node-readability");

type Ogp = {
  url: string;
  favicon?: string;
  image?: string;
  description: string;
  title: string;
  body?: string;
  siteName?: string;
};

/**
 * FetchOgpService
 */
export class FetchOgpService {
  /**
   * fetchOgpByUrl
   * @param {string} url
   * @returns
   */
  async fetchOgpByUrl(url: string): Promise<Ogp> {
    try {
      const result = await client.fetch(url);

      return new Promise((resolve) => {
        read(result.body, async (err, article) => {
          if (err) {
            resolve({
              url,
              title: url,
              description: "取得できませんでした",
            });

            // Close article to clean up jsdom and prevent leaks
            article.close();
          }

          // replace img and iframe
          const regex = /<img(.|\s)*?>|<iframe(.|\s)*?>/gi;
          const body = article.textBody
            ? article?.textBody?.replace(regex, "")
            : null;

          resolve({
            url,
            favicon:
              result.$("link[rel='icon']").attr("href") ||
              result.$("link[rel='shortcut icon']").attr("href"),
            image: result.$("meta[property='og:image']").attr("content"),
            description:
              result.$("meta[property='og:description']").attr("content") ||
              "取得できませんでした",
            title:
              result.$("meta[property='og:title']").attr("content") ||
              result.$("title").text(),
            body,
            siteName: result.$("meta[property='og:site_name']").attr("content"),
          });

          // Close article to clean up jsdom and prevent leaks
          article.close();
        });
      });
    } catch (err) {
      return {
        url,
        title: url,
        description: "取得できませんでした",
      };
    }
  }
}
