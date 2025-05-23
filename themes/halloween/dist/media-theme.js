/*
<media-theme-halloween>
  <video
    slot="media"
    src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/high.mp4"
  ></video>
</media-theme-halloween>
*/

import 'media-chrome';
import { globalThis } from 'media-chrome/dist/utils/server-safe-globals.js';
import { MediaThemeElement } from 'media-chrome/dist/media-theme-element.js';
import 'media-chrome/dist/menu/index.js';

const template = globalThis.document?.createElement?.('template');
if (template) {
  template.innerHTML = /*html*/`
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #000);
        --_secondary-color: var(--media-secondary-color, rgb(38 38 38 / 0.75));
        --_accent-color: var(--media-accent-color, #fff);
        --media-icon-color: var(--_primary-color);
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-font-weight: bold;
        --media-tooltip-display: none;
        font-size: 16px;
        color: var(--_primary-color);
      }

      media-controller {
        display: block;
        overflow: hidden;
        container: media-theme-instaplay / inline-size;
      }

      media-play-button {
        --media-button-icon-transform: translateY(-.5em);
        --media-control-height: 5em;
        transition: transform .15s;
      }

      media-play-button:active {
        transform: scale(3);
      }

      media-play-button .pause,
      media-play-button .play {
        opacity: 0;
      }

      media-play-button:not([mediapaused]) .pause {
        opacity: 1;
      }

      media-play-button[mediapaused] .play {
        opacity: 1;
      }

      media-play-button .face {
        transition: fill .2s;
      }

      media-play-button:not([mediapaused]) .face {
        fill: #FFE194;
      }

      .media-time-range-wrapper {
        display: grid;
        flex-grow: 1;
      }

      .media-time-range-wrapper > * {
        width: 100%;
        grid-area: 1 / 1;
      }

      .web::part(thumb) {
        display: none;
      }

      .spider::part(track) {
        display: none;
      }

      .spider {
        pointer-events: none;
      }

      @keyframes spider-walk {
        0% {
          transform: rotate(0deg);
        }
        33% {
          transform: rotate(-.3deg);
        }
        66% {
          transform: rotate(.2deg);
        }
      }

      media-controller:not([mediapaused]) .spider {
        animation: spider-walk .5s ease infinite;
        transform-origin: 100% 50%;
      }

      :is(media-time-range, media-volume-range)::part(thumb) {
        transition: left .15s ease-out;
      }

      :is(media-time-range, media-volume-range)::part(progress) {
        transition: width .15s ease-out;
      }

      media-time-range {
        --media-range-track-height: 50px;
        --media-range-padding-left: 30px;
        --media-range-padding-right: 30px;
        --media-preview-time-background: var(--_secondary-color);
        --media-preview-time-background: transparent;
        --media-preview-thumbnail-border-radius: 0;
      }

      media-time-range::part(thumb) {
        background: no-repeat url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 55 48"><path fill="black" fill-rule="evenodd" d="M35.684 26.797c-1.554.75-3.21 1.103-4.939 1.094 1.596.371 3.242.007 4.939-1.094Zm-10.97 1.866c-2.966 2.771-7.28 1.102-12.134-4.329 4.923 4.808 9.375 6.236 12.133 4.329Zm6.198-9.145 2.131-2.131 7.183-.466c2.777.794 5.554 2.798 8.33 4.89-2.498-2.585-5.057-4.994-8.049-6.161l-7.977.41-3.586 3.71 1.864-6.506 6.979-5.36c5.473.835 11.042 4 16.638 7.787-5.374-4.51-10.794-8.572-16.537-9.507L29.696 12.1l-2.05 7.156.153-9.444-5.68-9.8c-4.702-.16-9.51 1.417-14.335 3.29 4.487-1.07 9.004-1.892 13.676-1.484l4.971 8.442.18 8.591L22.55 8.113 10.838 7.094C9.733 7.136 2.82 12.64 0 18.223c1.611-2.556 9.446-8.904 11.442-9.452l10.236.9 3.766 9.04C20.157 13.56 14.426 20.13 11.568 24c2.901 3.913 8.58 10.428 13.862 5.302l-3.752 9.007-10.236.9C9.446 38.661 1.612 32.313 0 29.758c2.821 5.584 9.733 11.086 10.838 11.128l11.712-1.019 4.05-10.706.007-.001.004-.011v.02l-.18 8.571-4.971 8.442c-4.672.408-9.19-.415-13.676-1.484 4.826 1.873 9.633 3.45 14.335 3.29l5.68-9.8-.154-9.444 2.05 7.156 8.193 5.916c5.743-.935 11.163-4.997 16.537-9.507-5.596 3.787-11.165 6.952-16.638 7.788l-6.979-5.36-1.864-6.507 3.586 3.71 7.977.41c2.992-1.167 5.551-3.576 8.05-6.161-2.777 2.092-5.554 4.096-8.331 4.89l-7.183-.466-2.131-2.132.096.014c2.744.325 5.21-.769 5.974-3.582-.723.87-1.756 1.485-2.968 1.081.109-.672.531-1.612 1.118-1.994-.572-.336-1.015-1.361-1.118-1.994 1.212-.404 2.245.212 2.968 1.081-.764-2.813-3.23-3.907-5.974-3.582a2.824 2.824 0 0 0-.096.014Z" clip-rule="evenodd"/><circle cx="30.5" cy="21.5" r=".5" fill="red"/><circle cx="31.75" cy="22.75" r=".75" fill="red"/><circle cx="30.5" cy="26.5" r=".5" fill="red"/><circle cx="31.75" cy="24.75" r=".75" fill="red"/></svg>');
        width: 35px;
        height: 35px;
        transform: translate(-8px, -13px);
      }

      media-time-range::part(track) {
        background: repeat-x url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 185 14"><path fill="rgb(38 38 38 / 0.25)" d="M0 3.5v1h50c12 0 50-.5 50-.5s-27.5-1-52-.5-48 0-48 0Z"/><path fill="rgb(38 38 38 / 0.25)" d="M185 3.5v1h-50c-12 0-50-.5-50-.5s27.5-1 52-.5 48 0 48 0Z"/><path fill="rgb(38 38 38 / 0.25)" d="M85 3.5c-4.8-4.8-14 0-16.5 2 0 0 12.092-8.652 17.5 0 2.5 4 9-5 15.5-4.7 7.763 0 9.5 12.2 18 12.7 13 .765 18-15 27-9.5 2 1.5 2.5 3 2.5 3l.5 4s.25-1.5.25-2.75-.25-1.75-.75-2.75c-1-1.5-1.5-2.5-6-3-7.52-.836-15 12-23.5 10s-10.4-12-18-12C92 .5 91 9.5 85 3.5Z"/></svg>');
      }

      media-time-range::part(buffered) {
        background: repeat-x url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 185 14"><path fill="rgb(38 38 38 / 0.35)" d="M0 3.5v1h50c12 0 50-.5 50-.5s-27.5-1-52-.5-48 0-48 0Z"/><path fill="rgb(38 38 38 / 0.35)" d="M185 3.5v1h-50c-12 0-50-.5-50-.5s27.5-1 52-.5 48 0 48 0Z"/><path fill="rgb(38 38 38 / 0.35)" d="M85 3.5c-4.8-4.8-14 0-16.5 2 0 0 12.092-8.652 17.5 0 2.5 4 9-5 15.5-4.7 7.763 0 9.5 12.2 18 12.7 13 .765 18-15 27-9.5 2 1.5 2.5 3 2.5 3l.5 4s.25-1.5.25-2.75-.25-1.75-.75-2.75c-1-1.5-1.5-2.5-6-3-7.52-.836-15 12-23.5 10s-10.4-12-18-12C92 .5 91 9.5 85 3.5Z"/></svg>');
      }

      media-time-range::part(progress) {
        background: repeat-x url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 185 14"><path fill="rgb(255 255 255 / 0.9)" d="M0 3.5v1h50c12 0 50-.5 50-.5s-27.5-1-52-.5-48 0-48 0Z"/><path fill="rgb(255 255 255 / 0.9)" d="M185 3.5v1h-50c-12 0-50-.5-50-.5s27.5-1 52-.5 48 0 48 0Z"/><path fill="rgb(255 255 255 / 0.9)" d="M85 3.5c-4.8-4.8-14 0-16.5 2 0 0 12.092-8.652 17.5 0 2.5 4 9-5 15.5-4.7 7.763 0 9.5 12.2 18 12.7 13 .765 18-15 27-9.5 2 1.5 2.5 3 2.5 3l.5 4s.25-1.5.25-2.75-.25-1.75-.75-2.75c-1-1.5-1.5-2.5-6-3-7.52-.836-15 12-23.5 10s-10.4-12-18-12C92 .5 91 9.5 85 3.5Z"/></svg>');
      }

      media-time-range::part(preview-box) {
        /* Add more space so thumb doesn't hide preview. */
        --media-preview-box-margin: 0 0 20px;
        display: grid;
      }

      media-preview-thumbnail,
      media-preview-time-display {
        grid-area: 1 / 1;
      }

      media-preview-time-display {
        place-self: end center;
        position: relative;
        line-height: 2;
      }

      @container (inline-size >=384px) {
        [role='button'],
        media-controller {
          font-size: 17px;
        }

        media-time-range::part(preview-box) {
          --media-preview-box-margin: 0 0 1em;
        }
      }

      .media-volume-wrapper {
        position: relative;
        width: 1em;
      }

      [mediavolumeunavailable] .media-volume-wrapper {
        display: none;
      }

      .media-volume-range-wrapper {
        display: grid;
        transform: rotate(-90deg) translateY(-50%) scale(0.6);
        transform-origin: 0 0;
        position: absolute;
        top: 2em;
        left: -.3em;
      }

      .media-volume-range-wrapper > * {
        grid-area: 1 / 1;
      }

      media-volume-range {
        --media-range-track-height: 0.75em;
        --media-range-padding: 1em;
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        width: 5em;
        height: 1.5em;
        border-radius: 2px;
        animation: candle-anim 2s ease infinite;
      }

      /* https://codepen.io/dykoode/pen/qBPoOBR  */
      @keyframes candle-anim {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }

      media-volume-range::part(thumb) {
        width: 30px;
        height: 30px;
        border-radius: 0 50% 50%;
        transform: scale(.5) rotate(135deg);
        background: #FFE194;
      }

      media-volume-range::part(progress) {
        background: #EEEBDD;
      }

      [mediavolumelevel="off"] media-volume-range {
        animation: none;
      }

      [mediavolumelevel="off"] media-volume-range::part(thumb) {
        background: #000;
        border-radius: 50%;
      }

      [mediavolumelevel="medium"] media-volume-range::part(thumb) {
        box-shadow: -6px -6px 0 10px #FFB319;
      }

      [mediavolumelevel="high"] media-volume-range::part(thumb) {
        box-shadow: -6px -6px 0 10px #FFB319, -14px -14px 0 20px #F88F01;
      }

      .candle {
        animation: none;
      }

      .candle::part(thumb) {
        display: none;
      }

      .flame::part(track) {
        display: none;
      }
    </style>

    <media-controller
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <div slot="centered-chrome">
        <media-play-button mediapaused>
          <svg slot="icon" aria-hidden="true" width="48" height="48" fill="none" viewBox="0 0 48 48">
            <g>
              <path fill="#FF8000" fill-rule="evenodd" d="M21.252 11.127c-2.784.412-6.001 1.646-7.288 2.816-1.761 1.603-3.986 4.736-5.337 7.51-.653 1.36-.717 1.35-.41-.053.505-2.278 1.412-4.04 3.322-6.476.442-.57.833-1.15.864-1.297.275-1.076-2.658-.844-5.178.411-2.932 1.466-5.369 4.42-6.54 7.921C.18 23.478 0 24.669 0 26.463c0 5.811 1.888 11.517 4.862 14.702.95 1.013 1.74 1.635 2.869 2.226 1.086.57 1.898.843 3.154 1.065.759.126 1.096.242 1.518.517 2.331 1.518 5.274 2.183 8.3 1.856 1.056-.116 1.214-.105 2.058.105 1.023.254 1.909.232 2.794-.073.422-.148.644-.148 1.55-.053 1.446.158 2.353.148 3.682-.053 1.74-.253 3.407-.875 4.799-1.782.422-.275.76-.39 1.519-.517 3.765-.644 6.58-2.995 8.553-7.14 1.54-3.249 2.331-6.93 2.342-10.853.01-1.846-.2-3.112-.76-4.715-1.17-3.301-3.596-6.254-6.244-7.583-.896-.454-2.32-.802-3.111-.76l-.601.032.58.306c1.234.643 2.363 2.204 2.995 4.124.623 1.845 1.023 4.651 1.002 6.898l-.01 1.223-.148-1.181c-.169-1.382-.58-3.301-.96-4.451-.358-1.076-1.17-2.785-1.73-3.607-1.054-1.582-2.89-3.112-4.535-3.797-.843-.348-1.867-.623-2.352-.623h-.295l.327.37c.76.864 1.371 2.731 1.635 5.01l.074.58-.338-.58c-1.519-2.637-2.848-4.082-4.767-5.2-1.783-1.034-3.017-1.35-5.4-1.392-.981-.022-1.93-.01-2.11.01ZM19 27.6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14.5 3.1a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z" clip-rule="evenodd"/>
              <g>
                <path fill="#0BB037" d="M30.375.158c-.727.074-1.444.137-1.592.137-.222.01-.56.359-1.846 1.92l-1.571 1.909-1.224.728-1.234.717-1.698 2.51c-.928 1.371-1.677 2.52-1.656 2.542.021.021.253-.032.507-.116 1.096-.38 2.14-.527 3.617-.527 1.72 0 2.658.2 3.987.854.443.221.812.38.812.348.01-.032-.095-1.129-.232-2.436l-.232-2.374.991-2.14c.538-1.182 1.023-2.163 1.055-2.184.042-.02 1.181.274 2.542.675l2.468.717.063 1.097c.042.601.074 1.646.085 2.31l.01 1.213-1.107.559c-.612.295-1.15.548-1.213.548-.18 0-1.044-.58-1.055-.706 0-.064.169-.56.37-1.097.21-.538.358-1.013.347-1.065-.042-.116-2.489 1.93-2.5 2.077-.01.064.623.739 1.403 1.52l1.414 1.402 1.592-1.013c.876-.57 1.614-1.065 1.635-1.107.106-.158 1.234-6.254 1.192-6.381C37.21 2.563 32.316-.011 31.989 0c-.158.01-.886.074-1.614.158Z"/>
              </g>
              <g class="face">
                <path d="M29.48 37v1.411l-2.44 1.619v-2.795h-6.08v2.795l-2.44-1.619v-1.41S11.286 36.058 8 34c0 0 .091 3.088 4.491 6.148l.966-1.942 2.23 1.723-.271 1.483S18.85 42.648 22.348 43v-2.677h3.304V43c3.497-.352 6.932-1.588 6.932-1.588l-.27-1.483 2.23-1.723.965 1.942C39.909 37.088 40 34 40 34c-3.285 2.058-10.52 3-10.52 3Z"/>
                <path d="M15 21c-2.761 0-5 2.35-5 5.25 0 2.1 1.173 3.91 2.869 4.75a3.813 3.813 0 0 1-1.446-3.017c0-2.074 1.601-3.756 3.577-3.756s3.578 1.682 3.578 3.756A3.817 3.817 0 0 1 17.133 31C18.826 30.16 20 28.35 20 26.25c0-2.9-2.239-5.25-5-5.25Z"/>
                <path d="M33.5 20c-3.037 0-5.5 2.35-5.5 5.25 0 2.1 1.29 3.91 3.155 4.75-.965-.685-1.59-1.78-1.59-3.017 0-2.074 1.761-3.756 3.935-3.756 2.173 0 3.936 1.682 3.936 3.756 0 1.237-.626 2.332-1.59 3.017C37.71 29.16 39 27.35 39 25.25c0-2.9-2.463-5.25-5.5-5.25Z"/>
                <path class="play" d="M28 30.999 22 28v6l6-3.001Z"/>
                <g class="pause">
                  <path fill-rule="evenodd" d="M25 28h1l2 5.226-3 .756V28Z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M24 28h-1l-2 5.226 3 .756V28Z" clip-rule="evenodd"/>
                </g>
              </g>
            </g>
          </svg>
        </media-play-button>
      </div>

      <media-control-bar>
        <div class="media-time-range-wrapper">
          <!-- It's impossible to do an animation on the thumb alone because
          of shadow dom so we duplicate, make 1 animate and only show the thumb
          and use the other for the static track. -->
          <media-time-range class="web">
            <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
            <media-preview-time-display slot="preview"></media-preview-time-display>
          </media-time-range>
          <media-time-range class="spider">
            <div slot="preview"></div>
          </media-time-range>
        </div>
        <div class="media-volume-wrapper">
          <div class="media-volume-range-wrapper">
            <!-- It's impossible to do an animation on the thumb alone because
            of shadow dom so we duplicate, make 1 animate and only show the thumb
            and use the other for the static track. -->
            <media-volume-range class="flame"></media-volume-range>
            <media-volume-range class="candle"></media-volume-range>
          </div>
        </div>
      </media-control-bar>

      <slot></slot>
    </media-controller>

  `;
}

class MediaThemeHalloweenElement extends MediaThemeElement {
  static template = template;
}

if (globalThis.customElements && !globalThis.customElements.get('media-theme-halloween')) {
  globalThis.customElements.define('media-theme-halloween', MediaThemeHalloweenElement);
}

export default MediaThemeHalloweenElement;
