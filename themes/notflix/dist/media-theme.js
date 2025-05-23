/*
<media-theme-notflix>
  <video
    slot="media"
    src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/high.mp4"
  ></video>
</media-theme-notflix>
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
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / 0.75));
        --_accent-color: var(--media-accent-color, #ea3323);
        --_panel-background: rgb(38 38 38);

        --media-control-hover-background: transparent;
        --media-control-background: transparent;
        --media-tooltip-display: none;
      }

      media-controller {
        --media-primary-color: var(--_primary-color, #fff);
        --media-font-size: 10px;
        font-size: var(--media-font-size);
      }

      media-controller[breakpointmd] {
        --media-font-size: 12px;
      }

      media-controller[breakpointlg] {
        --media-font-size: 14px;
      }

      media-controller[breakpointxl] {
        --media-font-size: 16px;
      }

      media-time-range,
      media-volume-range {
        --media-range-thumb-background: var(--_accent-color);
        --media-range-bar-color: var(--_accent-color);
        --media-range-track-background: gray;
        --media-range-thumb-height: 1em;
        --media-range-thumb-width: 1em;
      }

      .time-bar {
        height: 0.4em;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 0.4em;
        box-sizing: border-box;
      }

      .time-bar media-time-display {
        padding: 0 0.4em 0 0;
      }

      media-time-range {
        --media-time-range-buffered-color: #d3d3d3;
        --media-range-track-pointer-border-right: 2px solid #fff;
        --media-range-track-height: 0.25em;
        --media-preview-border-radius: 0;
        --media-preview-background: rgb(38, 38, 38);
        --media-preview-thumbnail-box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 1em;
        --media-preview-time-padding: 0.5em 9px;
        --media-box-margin: 0 0 0.8em;
        position: relative;
        width: 100%;
        height: 100%;
      }

      media-time-range:hover {
        --media-range-track-height: 0.4em;
      }

      media-control-bar {
        --media-button-icon-transition: transform 0.2s ease;
        padding: 0 0.4em;
      }

      media-control-bar *:hover {
        --media-button-icon-transform: scale(1.3);
        --media-button-icon-transition: transform 0.15s;
      }

      [role='button'] {
        --media-button-icon-height: 2em;
        padding: 1.5em 0.9em;
      }

      .control-bar-title {
        flex-shrink: 999;
        margin: 0 auto;
        font-size: 1.2em;
        white-space: nowrap;
        justify-content: space-around;
        overflow: hidden;
      }

      media-controller[breakpointmd] .control-bar-title {
        width: auto;
        padding-right: 15%;
      }

      .media-volume-wrapper {
        position: relative;
      }

      .media-volume-range-wrapper {
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.1s,
          visibility 0.1s;
        transform: rotate(-90deg) translateY(50%);
        transform-origin: 0 0;
        position: absolute;
        top: 0.7em;
        left: 0.5em;
      }

      media-mute-button:hover + .media-volume-range-wrapper,
      media-mute-button:focus + .media-volume-range-wrapper,
      media-mute-button:focus-within + .media-volume-range-wrapper,
      .media-volume-range-wrapper:hover,
      .media-volume-range-wrapper:focus,
      .media-volume-range-wrapper:focus-within {
        transition:
          opacity 0.1s 0.2s,
          visibility 0s;
        opacity: 1;
        visibility: visible;
      }

      media-volume-range {
        --media-range-track-height: 0.5em;
        --media-range-padding: 1em;
        --media-control-background: var(--_panel-background);
        --media-control-hover-background: var(--_panel-background);
        width: 7em;
        height: 1.5em;
        border-radius: 2px;
      }

      media-captions-menu-button svg {
        translate: 0 3%;
      }

      [role='menu'] {
        --media-control-background: var(--_panel-background);
        --media-font-size: 1.2em;
        margin-bottom: 15px;
        right: 10px;
        border-radius: 2px;
      }

      [breakpointmd] [role='menu'] {
        margin-bottom: 25px;
        right: 15px;
      }

      [role='menu'] [slot='header'] {
        padding: 0.4em 2em 0 1em;
        font-weight: 500;
        letter-spacing: 0.01rem;
        font-size: 1.2em;
        line-height: 1.5;
        border: none;
      }

      [role='menu']::part(menu-item) {
        padding: 0.2em 2em 0.2em 1em;
        font-size: 1em;
        line-height: 1.7;
        color: rgb(179 179 179);
      }

      [role='menu']::part(menu-item checked) {
        color: white;
      }
    </style>

    <media-controller
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
      breakpoints="sm:384 md:576 lg:768 xl:1440"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <div class="time-bar">
        <media-time-range></media-time-range>
        <media-time-display remaining></media-time-display>
      </div>
      <media-control-bar>
        <media-play-button>
          <svg aria-hidden="true" slot="play" role="img" viewBox="0 0 24 24">
            <path
              d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
            ></path>
          </svg>
          <svg aria-hidden="true" slot="pause" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 3C4.22386 3 4 3.22386 4 3.5V20.5C4 20.7761 4.22386 21 4.5 21H9.5C9.77614 21 10 20.7761 10 20.5V3.5C10 3.22386 9.77614 3 9.5 3H4.5ZM14.5 3C14.2239 3 14 3.22386 14 3.5V20.5C14 20.7761 14.2239 21 14.5 21H19.5C19.7761 21 20 20.7761 20 20.5V3.5C20 3.22386 19.7761 3 19.5 3H14.5Z"
            ></path>
          </svg>
        </media-play-button>
        <media-seek-backward-button seekoffset="10">
          <svg aria-hidden="true" slot="icon" fill="none" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0198 2.04817C13.3222 1.8214 15.6321 2.39998 17.5557 3.68532C19.4794 4.97066 20.8978 6.88324 21.5694 9.09717C22.241 11.3111 22.1242 13.6894 21.2388 15.8269C20.3534 17.9643 18.7543 19.7286 16.714 20.8192C14.6736 21.9098 12.3182 22.2592 10.0491 21.8079C7.77999 21.3565 5.73759 20.1323 4.26989 18.3439C2.80219 16.5555 2 14.3136 2 12L0 12C-2.74181e-06 14.7763 0.962627 17.4666 2.72387 19.6127C4.48511 21.7588 6.93599 23.2278 9.65891 23.7694C12.3818 24.3111 15.2083 23.8918 17.6568 22.5831C20.1052 21.2744 22.0241 19.1572 23.0866 16.5922C24.149 14.0273 24.2892 11.1733 23.4833 8.51661C22.6774 5.85989 20.9752 3.56479 18.6668 2.02238C16.3585 0.479973 13.5867 -0.214321 10.8238 0.0578004C8.71195 0.265799 6.70517 1.02858 5 2.2532V1H3V5C3 5.55228 3.44772 6 4 6H8V4H5.99999C7.45608 2.90793 9.19066 2.22833 11.0198 2.04817ZM2 4V7H5V9H1C0.447715 9 0 8.55228 0 8V4H2ZM14.125 16C13.5466 16 13.0389 15.8586 12.6018 15.5758C12.1713 15.2865 11.8385 14.8815 11.6031 14.3609C11.3677 13.8338 11.25 13.2135 11.25 12.5C11.25 11.7929 11.3677 11.1758 11.6031 10.6488C11.8385 10.1217 12.1713 9.71671 12.6018 9.43388C13.0389 9.14463 13.5466 9 14.125 9C14.7034 9 15.2077 9.14463 15.6382 9.43388C16.0753 9.71671 16.4116 10.1217 16.6469 10.6488C16.8823 11.1758 17 11.7929 17 12.5C17 13.2135 16.8823 13.8338 16.6469 14.3609C16.4116 14.8815 16.0753 15.2865 15.6382 15.5758C15.2077 15.8586 14.7034 16 14.125 16ZM14.125 14.6501C14.5151 14.6501 14.8211 14.4637 15.043 14.0909C15.2649 13.7117 15.3759 13.1814 15.3759 12.5C15.3759 11.8186 15.2649 11.2916 15.043 10.9187C14.8211 10.5395 14.5151 10.3499 14.125 10.3499C13.7349 10.3499 13.4289 10.5395 13.207 10.9187C12.9851 11.2916 12.8741 11.8186 12.8741 12.5C12.8741 13.1814 12.9851 13.7117 13.207 14.0909C13.4289 14.4637 13.7349 14.6501 14.125 14.6501ZM8.60395 15.8554V10.7163L7 11.1405V9.81956L10.1978 9.01928V15.8554H8.60395Z"
            ></path>
          </svg>
        </media-seek-backward-button>
        <media-seek-forward-button seekoffset="10">
          <svg aria-hidden="true" slot="icon" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.4443 3.68532C8.36795 2.39998 10.6778 1.8214 12.9802 2.04817C14.8093 2.22833 16.5439 2.90793 18 4H16V6H20C20.5523 6 21 5.55229 21 5V1H19V2.2532C17.2948 1.02859 15.2881 0.2658 13.1762 0.057802C10.4133 -0.214319 7.64154 0.479975 5.33316 2.02238C3.02478 3.56479 1.32262 5.85989 0.516718 8.51661C-0.289188 11.1733 -0.148981 14.0273 0.913451 16.5922C1.97588 19.1572 3.8948 21.2744 6.34325 22.5831C8.79169 23.8918 11.6182 24.3111 14.3411 23.7694C17.064 23.2278 19.5149 21.7588 21.2761 19.6127C23.0374 17.4666 24 14.7763 24 12L22 12C22 14.3136 21.1978 16.5555 19.7301 18.3439C18.2624 20.1323 16.22 21.3565 13.9509 21.8079C11.6818 22.2592 9.32641 21.9098 7.28604 20.8192C5.24567 19.7286 3.64657 17.9643 2.76121 15.8269C1.87585 13.6894 1.75901 11.3111 2.4306 9.09718C3.10219 6.88324 4.52065 4.97067 6.4443 3.68532ZM22 4V7H19V9H23C23.5523 9 24 8.55229 24 8V4H22ZM12.6018 15.5758C13.0389 15.8586 13.5466 16 14.125 16C14.7034 16 15.2078 15.8586 15.6382 15.5758C16.0753 15.2865 16.4116 14.8815 16.6469 14.3609C16.8823 13.8338 17 13.2135 17 12.5C17 11.7929 16.8823 11.1759 16.6469 10.6488C16.4116 10.1217 16.0753 9.71671 15.6382 9.43389C15.2078 9.14463 14.7034 9 14.125 9C13.5466 9 13.0389 9.14463 12.6018 9.43389C12.1713 9.71671 11.8385 10.1217 11.6031 10.6488C11.3677 11.1759 11.25 11.7929 11.25 12.5C11.25 13.2135 11.3677 13.8338 11.6031 14.3609C11.8385 14.8815 12.1713 15.2865 12.6018 15.5758ZM15.043 14.0909C14.8211 14.4637 14.5151 14.6501 14.125 14.6501C13.7349 14.6501 13.429 14.4637 13.207 14.0909C12.9851 13.7117 12.8741 13.1814 12.8741 12.5C12.8741 11.8186 12.9851 11.2916 13.207 10.9187C13.429 10.5395 13.7349 10.3499 14.125 10.3499C14.5151 10.3499 14.8211 10.5395 15.043 10.9187C15.2649 11.2916 15.3759 11.8186 15.3759 12.5C15.3759 13.1814 15.2649 13.7117 15.043 14.0909ZM8.60395 10.7163V15.8554H10.1978V9.01929L7 9.81956V11.1405L8.60395 10.7163Z"
              fill="currentColor"
            ></path>
          </svg>
        </media-seek-forward-button>
        <div class="media-volume-wrapper">
          <media-mute-button>
            <svg aria-hidden="true" slot="high" fill="none" role="img" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z"
              ></path>
            </svg>
            <svg aria-hidden="true" slot="medium" role="img" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM17.0709 4.92897C18.9462 6.80433 19.9998 9.34787 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87831 17.157 7.84347 15.6567 6.34318L17.0709 4.92897ZM14.2428 7.7574C15.368 8.88262 16.0001 10.4087 16.0001 12C16.0001 13.5913 15.368 15.1175 14.2428 16.2427L12.8285 14.8285C13.5787 14.0783 14.0001 13.0609 14.0001 12C14.0001 10.9392 13.5787 9.92176 12.8285 9.17161L14.2428 7.7574Z"
              ></path>
            </svg>
            <svg aria-hidden="true" slot="low" role="img" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM16.0001 12C16.0001 10.4087 15.368 8.88262 14.2428 7.7574L12.8285 9.17161C13.5787 9.92176 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1175 16.0001 13.5913 16.0001 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <svg aria-hidden="true" slot="off" role="img" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
              ></path>
            </svg>
          </media-mute-button>
          <div class="media-volume-range-wrapper">
            <media-volume-range></media-volume-range>
          </div>
        </div>
        <media-text-display class="control-bar-title">
          <slot name="title">
            <template if="mediatitle"> {{mediatitle}} </template>
          </slot>
        </media-text-display>
        <media-captions-menu-button>
          <svg aria-hidden="true" slot="icon" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3V17C23 17.5523 22.5523 18 22 18H19V21C19 21.3688 18.797 21.7077 18.4719 21.8817C18.1467 22.0557 17.7522 22.0366 17.4453 21.8321L11.6972 18H2C1.44772 18 1 17.5523 1 17V3ZM3 4V16H12H12.3028L12.5547 16.1679L17 19.1315V17V16H18H21V4H3ZM10 9L5 9V7L10 7V9ZM19 11H14V13H19V11ZM12 13L5 13V11L12 11V13ZM19 7H12V9H19V7Z"
            ></path>
          </svg>
        </media-captions-menu-button>
        <media-captions-menu anchor="auto" hidden>
          <div slot="header">Subtitles</div>
        </media-captions-menu>
        <media-fullscreen-button>
          <svg aria-hidden="true" slot="enter" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z"
            ></path>
          </svg>
          <svg aria-hidden="true" slot="exit" role="img" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 8H19V3H17V9V10H18H24V8ZM0 16H5V21H7V15V14H6H0V16ZM7 10H6H0V8H5V3H7V9V10ZM19 21V16H24V14H18H17V15V21H19Z"
            ></path>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `;
}

class MediaThemeNotflixElement extends MediaThemeElement {
  static template = template;
}

if (globalThis.customElements && !globalThis.customElements.get('media-theme-notflix')) {
  globalThis.customElements.define('media-theme-notflix', MediaThemeNotflixElement);
}

export default MediaThemeNotflixElement;
