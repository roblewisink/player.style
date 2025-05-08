import { MediaThemeElement } from 'media-chrome/dist/media-theme-element.js';

declare global {
  interface HTMLElementTagNameMap {
   'media-theme-yt-vert': MediaThemeYtVertElement;
  }
}

declare class MediaThemeYtVertElement extends MediaThemeElement {
  static template: HTMLTemplateElement;
}

export default MediaThemeYtVertElement;
