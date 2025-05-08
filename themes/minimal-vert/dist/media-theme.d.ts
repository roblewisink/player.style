import { MediaThemeElement } from 'media-chrome/dist/media-theme-element.js';

declare global {
  interface HTMLElementTagNameMap {
   'media-theme-minimal-vert': MediaThemeMinimalVertElement;
  }
}

declare class MediaThemeMinimalVertElement extends MediaThemeElement {
  static template: HTMLTemplateElement;
}

export default MediaThemeMinimalVertElement;
