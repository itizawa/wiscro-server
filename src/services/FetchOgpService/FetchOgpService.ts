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
      return new Promise((resolve) => {
        resolve({
          url,
          favicon: "",
          image: "",
          description: "",
          title: "",
          body: "",
          siteName: "",
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
