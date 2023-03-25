/**
 * FetchOgpService
 */
export class FetchOgpService {
  /**
   * fetchOgpByUrl
   * @param {string} url
   * @returns
   */
  async fetchOgpByUrl(url: string): Promise<{ url: string }> {
    console.log(url);

    return { url };
  }
}
