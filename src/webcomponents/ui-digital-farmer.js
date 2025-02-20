import { html, css } from "lit";
import { BaseClass } from "./baseComponent.js";

export class UiDigitalFarmer extends BaseClass {
  static properties = {
    myBoolean: { type: Boolean, attribute: "my-boolean" },
  };

  static styles = css`
    :host {
      display: block;
      contain: content;
      box-sizing: border-box;
      padding: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.myBoolean = true;
  }

  render() {
    return html`
      <svg
        width="150"
        height="291"
        viewBox="0 0 150 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="145" width="5" height="20" fill="#EF7E49" />
        <rect x="5" y="125" width="5" height="20" fill="#EF7E49" />
        <rect x="5" y="165" width="5" height="5" fill="#EF7E49" />
        <rect x="10" y="120" width="5" height="5" fill="#EF7E49" />
        <rect x="5" y="115" width="10" height="5" fill="#272A45" />
        <rect x="15" y="110" width="10" height="5" fill="#272A45" />
        <rect x="35" y="100" width="10" height="5" fill="#272A45" />
        <rect x="45" y="95" width="5" height="5" fill="#272A45" />
        <rect x="60" y="50" width="5" height="10" fill="#272A45" />
        <rect x="90" y="50" width="5" height="10" fill="#272A45" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M125 75H110V80V85H115V80H125V75Z"
          fill="#272A45"
        />
        <rect x="125" y="70" width="15" height="5" fill="#272A45" />
        <rect x="140" y="65" width="10" height="5" fill="#272A45" />
        <rect x="20" y="145" width="5" height="5" fill="#EF7E49" />
        <rect x="15" y="105" width="5" height="5" fill="#EF7E49" />
        <rect x="20" y="100" width="5" height="5" fill="#EF7E49" />
        <rect x="60" y="40" width="10" height="5" fill="#903F0E" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90 75H65V80H70V85H85V80H90V75Z"
          fill="white"
        />
        <rect x="90" y="40" width="10" height="5" fill="#903F0E" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 45H45V90H50V95H55V100H60H65V95H60V90H55V85H50V45Z"
          fill="#A48A7E"
        />
        <rect x="55" y="40" width="5" height="5" fill="#772700" />
        <rect x="85" y="40" width="5" height="5" fill="#772700" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100 45H85V50V55H90V50H100V45Z"
          fill="#D07D4D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75 45H55V50V55H60V50H70V70H75H80V65H75V50V45Z"
          fill="#D07D4D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110 45H105V65H100V70H90H65H55V65H50V70V85H55V90H60V95H65V100H100V95H105V90H110V70V65V45ZM90 75H65V80H70V85H85V80H90V75Z"
          fill="#C9A691"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90 100H65V105H75V110H85V105H90V100Z"
          fill="#EF7E49"
        />
        <rect x="115" y="165" width="5" height="5" fill="#EF7E49" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M115 170H110V190H115H125V185H115V170Z"
          fill="#EF7E49"
        />
        <rect x="120" y="160" width="5" height="5" fill="#EF7E49" />
        <rect x="125" y="155" width="5" height="5" fill="#EF7E49" />
        <rect x="130" y="150" width="5" height="5" fill="#EF7E49" />
        <rect x="135" y="145" width="5" height="5" fill="#EF7E49" />
        <rect x="45" y="185" width="10" height="10" fill="#782502" />
        <rect x="55" y="185" width="15" height="10" fill="#903F0E" />
        <rect x="85" y="185" width="25" height="10" fill="#903F0E" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M75 185H70V195H75H80V190H75V185Z"
          fill="#C2C5CD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80 185H75V190H80V195H85V185H80Z"
          fill="#E3E3E5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 105H50V110H55V130V135H50V130H45V135H40V140H35V145H25V140H20V135V130V125H25V120H30V115H35V110H40V105Z"
          fill="#F22C3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 95H55V100H65V105H70V110H75V115V120H70V115H65V110H60V105H50V100V95Z"
          fill="#F22C3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100 95H105V100V105H95V110H90V115H85V120H80V115V110H85V105H90V100H100V95Z"
          fill="#F22C3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110 100H115V105H125V110H130V115H135V120H140V130H145V135H140V140H135V145H130V140H125V135H120V130H115V125H110V185H100V110H105V105H110V100Z"
          fill="#F22C3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90 115H95V120V125V185H80V125H85V120H90V115Z"
          fill="#F22C3A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M60 115H65V120H70V125H75V185H60V125V120V115Z"
          fill="#F22C3A"
        />
        <rect x="70" y="105" width="5" height="5" fill="#FFA86B" />
        <rect x="75" y="110" width="5" height="5" fill="#FFA86B" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35 100H25V105H20V110H25V115H35V100Z"
          fill="#FFA86B"
        />
        <rect x="40" y="50" width="5" height="15" fill="#FFA86B" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100 30H55V35H50V65H55V70H60H65H70V50H65V60H60V55H55V40H70V45H75V65H80V70H85H90H95H100V65H105V35H100V30ZM95 60V50H100V40H85V55H90V60H95Z"
          fill="#FFA86B"
        />
        <rect x="110" y="50" width="5" height="15" fill="#FFA86B" />
        <rect x="110" y="20" width="5" height="15" fill="#252746" />
        <rect x="40" y="25" width="5" height="10" fill="#252746" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M130 30H135V45H140V60H145V65H140V70H135V60H130V50H125V45H120V40H125V35H130V30Z"
          fill="#98B4B1"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M140 20H150V60V65H145V60H140V45H135V25H140V20Z"
          fill="#BCDAD6"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M95 0H100V5H105V15H110V20H115V35H110V30H105V25H100V20H95V15H60H55V20H50V25H45V15H50V10H55V5H60V0H95Z"
          fill="#252746"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M95 15H55V20H50V25H45V35H40V50H45V45H50V35H55V30H95H100V35H105V45H110V50H115V35H110V30H105V25H100V20H95V15Z"
          fill="#515268"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 115H15V125H10V145H5V165H10V170H15V165H20V160H25V150H20V145V125V115Z"
          fill="#FFA86B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M145 140H140V145V150H135V155H130V160H125V165H120V170H115V185H125V175H130V170H140V165H145V160H150V150V145H145V140Z"
          fill="#FFA86B"
        />
        <rect x="20" y="160" width="5" height="5" fill="#B31319" />
        <rect x="20" y="140" width="5" height="5" fill="#B31319" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 130H45V135H40V140H35V145H30H25V160H30V155H35V150H40V145H45V185H55V135H50V130Z"
          fill="#B31319"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110 125H115V130H120V135H125V140H130V145H135V150H130H125V145H120V140H115H110V125Z"
          fill="#B31319"
        />
        <rect x="135" y="140" width="5" height="5" fill="#B31319" />
        <rect x="140" y="135" width="5" height="5" fill="#B31319" />
        <rect x="105" y="100" width="5" height="5" fill="#B31319" />
        <rect x="90" y="110" width="5" height="5" fill="#B31319" />
        <rect x="85" y="115" width="5" height="5" fill="#B31319" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80 115H75V120H70V125H75V185H80V125H85V120H80V115Z"
          fill="#B31319"
        />
        <rect x="55" y="110" width="5" height="75" fill="#772700" />
        <rect x="95" y="110" width="5" height="75" fill="#772700" />
        <rect x="65" y="115" width="5" height="5" fill="#B31319" />
        <rect x="60" y="110" width="5" height="5" fill="#B31319" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55 105H50V110H55H60V105H55Z"
          fill="#B31319"
        />
        <rect x="45" y="100" width="5" height="5" fill="#B31319" />
        <rect x="95" y="105" width="10" height="5" fill="#B31319" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M130 276H115V281H120V286H85V276H75V286H40V281V276H25V281H15V286H20V291H135V286H140V281H130V276Z"
          fill="#C3C4CD"
        />
        <rect x="55" y="271" width="15" height="5" fill="#BDD9D6" />
        <rect x="95" y="271" width="15" height="5" fill="#BDD9D6" />
        <rect x="85" y="271" width="10" height="5" fill="#98B4B1" />
        <rect x="45" y="271" width="10" height="5" fill="#98B4B1" />
        <rect x="45" y="195" width="10" height="76" fill="#1A75A8" />
        <rect x="65" y="210" width="5" height="61" fill="#1A75A8" />
        <rect x="70" y="205" width="15" height="5" fill="#1A75A8" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M90 210H85V271H90H95V215H90V210Z"
          fill="#1A75A8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65 195H55V271H65V210H70V205H85V210H90V215H95V271H110V215V210V205V195H70H65Z"
          fill="#46A8EB"
        />
        <rect x="40" y="276" width="35" height="10" fill="#53351D" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M115 276H85V286H115H120V281H115V276Z"
          fill="#53351D"
        />
      </svg>
    `;
  }
}
customElements.define("ui-digital-farmer", UiDigitalFarmer);
