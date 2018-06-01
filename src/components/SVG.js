import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../theme';

const searchIcon =
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100.6" style={{ enableBackground:'new 0 0 100 100.6' }} xmlSpace="preserve">
    <g>
        <path d="M95,3.8H5v92.5h90V3.8z M89,9.8v16H11v-16H89z M11,90.3V31.8h78v58.5H11z"/>
        <circle cx="30" cy="17.7" r="4.1"/>
        <circle cx="40.6" cy="17.7" r="4.1"/>
        <circle cx="19.4" cy="17.7" r="4.1"/>
    </g>
    <path d="M69.3,81.3c-1.6,1.6-4.3,1.6-5.9,0l-7.7-7.7c-2.7,1.7-5.9,2.6-9.3,2.6c-9.8,0-17.8-8-17.8-17.9s8-17.8,17.8-17.8
        s17.9,8,17.9,17.8c0,3.4-1,6.6-2.6,9.3l7.7,7.7C70.9,77,70.9,79.6,69.3,81.3z M46.3,46.8c-6.3,0-11.5,5.2-11.5,11.5
        S40,69.9,46.4,69.9s11.6-5.2,11.6-11.6S52.7,46.8,46.3,46.8z"/>
</svg>

const viewAllIcon =
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100.6" style={{ enableBackground:'new 0 0 100 100.6' }} xmlSpace="preserve">
    <g>
        <path d="M95,3.8H5v92.5h90V3.8z M89,9.8v16H11v-16H89z M11,90.3V31.8h78v58.5H11z"/>
        <circle cx="30" cy="17.7" r="4.1"/>
        <circle cx="40.6" cy="17.7" r="4.1"/>
        <circle cx="19.4" cy="17.7" r="4.1"/>
    </g>
    <path d="M84,58.1c-8.8-8.8-20.6-13.6-33-13.6s-24.2,4.8-33,13.6l3.9,3.9c5.4-5.4,12-9.1,19.3-10.9c-2.8,2.6-4.4,6.3-4.4,10.4
	c0,7.9,6.4,14.2,14.2,14.2s14.2-6.4,14.2-14.2c0-4-1.7-7.7-4.4-10.4c7.3,1.7,13.9,5.5,19.3,10.9L84,58.1z"/>
</svg>

const browseIcon =
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100.6" style={{ enableBackground:'new 0 0 100 100.6' }} xmlSpace="preserve">
    <g>
        <path d="M95,3.8H5v92.5h90V3.8z M89,9.8v16H11v-16H89z M11,90.3V31.8h78v58.5H11z"/>
        <circle cx="30" cy="17.7" r="4.1"/>
        <circle cx="40.6" cy="17.7" r="4.1"/>
        <circle cx="19.4" cy="17.7" r="4.1"/>
        <path d="M63.1,84.4h19.8v-21H63.1V84.4z M69.1,69.4h7.8v9h-7.8V69.4z"/>
        <path d="M17.1,84.4h19.8v-21H17.1V84.4z M23.1,69.4h7.8v9h-7.8V69.4z"/>
        <path d="M40.1,84.4h19.8v-21H40.1V84.4z M46.1,69.4h7.8v9h-7.8V69.4z"/>
        <path d="M63.1,58.4h19.8v-21H63.1V58.4z M69.1,43.4h7.8v9h-7.8V43.4z"/>
        <path d="M17.1,58.4h19.8v-21H17.1V58.4z M23.1,43.4h7.8v9h-7.8V43.4z"/>
        <path d="M40.1,58.4h19.8v-21H40.1V58.4z M46.1,43.4h7.8v9h-7.8V43.4z"/>
    </g>
</svg>

const magnifyIcon =
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Magnifying Glass Icon</title>
    <defs></defs>
    <g id="r4r-magnify-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M12.370756,11.6338533 L11.497863,11.1003191 L12.0511346,10.2398009 C12.6676075,9.28098399 13,8.16636264 13,7 C13,3.6862915 10.3137085,1 7,1 C3.6862915,1 1,3.6862915 1,7 C1,10.3137085 3.6862915,13 7,13 C8.18648905,13 9.31933446,12.6559913 10.2886875,12.0193666 L11.1435654,11.4579236 L11.685632,12.3252172 C11.7040473,12.3546813 11.7258067,12.3825474 11.7510134,12.4086496 L14.5296468,15.2860088 C14.7214715,15.484649 15.0380057,15.4901741 15.2366459,15.2983495 C15.4352861,15.1065249 15.4408113,14.7899906 15.2489866,14.5913504 L12.4703532,11.7139912 C12.4398346,11.6823883 12.4065292,11.6557187 12.370756,11.6338533 Z" id="Combined-Shape" stroke="#FFFFFF" strokeWidth="2"></path>
    </g>
</svg>

const freeIcon = 
    <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Free Access Icon</title>
        <path d="M16.2453077,0.507269231 C7.27311538,0.507269231 0,7.78038462 0,16.7525769 C0,25.7264615 7.27311538,33 16.2453077,33 C25.2191923,33 32.4927308,25.7264615 32.4927308,16.7525769 C32.4927308,7.78038462 25.2191923,0.507269231 16.2453077,0.507269231 Z M3.71334615,12.3965769 L11.957,16.0866538 L14.5381923,17.2188077 L16.4538846,18.0882308 L18.0205385,18.7558462 C18.3095,19.0071538 18.4550385,19.3358846 18.4550385,19.7424615 C18.4550385,20.3225 18.2566154,20.7388077 17.8601923,20.9884231 C17.4633462,21.2414231 16.9844231,21.3670769 16.4238462,21.3670769 C15.0704231,21.3670769 13.8608462,20.8729231 12.7980769,19.888 L10.5638077,22.1501923 C12.0526154,23.4261923 13.6971154,24.0756154 15.4951923,24.0938077 L15.4951923,26.5891154 L17.3808462,26.5891154 L17.3808462,24.0938077 C18.5028462,23.9977692 19.4746538,23.6246154 20.2979615,22.9764615 C21.1174615,22.3287308 21.6365769,21.4927308 21.8481154,20.4663462 L27.8701923,23.1503462 C25.6126538,27.2453077 21.2545385,30.0219615 16.2453077,30.0219615 C8.91761538,30.0219615 2.97803846,24.0806923 2.97803846,16.7525769 C2.97803846,15.2273846 3.23907692,13.7614231 3.71334615,12.3965769 Z M20.8348462,16.5215769 L18.2219231,15.3610769 L16.8008077,14.7235 L14.7416923,13.7944231 C14.6439615,13.6590385 14.5961538,13.5236538 14.5961538,13.3878462 C14.5961538,12.9254231 14.7945769,12.5945769 15.191,12.4029231 C15.5878462,12.2078846 16.0371538,12.1122692 16.5397692,12.1122692 C17.4883077,12.1122692 18.4152692,12.4312692 19.3244615,13.0688462 L21.4432308,10.8925385 C20.2251923,9.96515385 18.8700769,9.46296154 17.3808462,9.38511538 L17.3808462,6.88980769 L15.4951923,6.88980769 L15.4951923,9.38511538 C14.4886923,9.44307692 13.6095385,9.72907692 12.8560385,10.2397308 C12.1008462,10.7537692 11.5885,11.4345 11.3173077,12.2857308 L5.1315,9.51076923 C7.49988462,5.885 11.5914615,3.48530769 16.2453077,3.48530769 C23.5734231,3.48530769 29.513,9.42657692 29.513,16.7525769 C29.513,17.9426923 29.3543462,19.0947308 29.0615769,20.1900769 L20.8348462,16.5215769 Z" id="Free-icon"></path>
    </svg>; 

const contractIcon =
<svg width="30px" height="30px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Registration Required Icon</title>
    <path d="M30.7799121,13.1199492 L29.7832734,14.1174258 L28.4160293,12.7501816 L29.4129902,11.7523828 C29.7901699,11.3753965 30.403377,11.3754609 30.7802988,11.7523828 C31.1571563,12.1294336 31.1591543,12.7406426 30.7799121,13.1199492 Z M22.2363281,31.0664063 L2.90039062,31.0664063 C2.36729883,31.0664063 1.93359375,30.6327012 1.93359375,30.0996094 L1.93359375,2.90039062 C1.93359375,2.36729883 2.36729883,1.93359375 2.90039062,1.93359375 L17.4023438,1.93359375 L17.4023438,6.76757812 C17.4023438,7.30150781 17.8352109,7.734375 18.3691406,7.734375 L23.203125,7.734375 L23.203125,15.2317559 C23.203125,15.2317559 20.3508164,18.0865137 20.3506875,18.0865781 L18.9840879,19.4532422 C18.877998,19.559332 18.7979473,19.6887539 18.7505098,19.8311309 L17.3832012,23.9329277 C17.2673789,24.2803301 17.3578066,24.663375 17.6167793,24.9222832 C17.8760742,25.1815781 18.259248,25.2715547 18.6061348,25.1558613 L22.7079316,23.7886172 C22.8503086,23.7411797 22.9797305,23.6611934 23.0858203,23.5550391 L23.203125,23.4377344 L23.203125,30.0996094 C23.203125,30.6327012 22.7694844,31.0664063 22.2363281,31.0664063 Z M20.1854941,2.21673633 L22.9199824,4.95128906 C23.2267793,5.25815039 23.2031895,5.59440234 23.2031895,5.80078125 L19.336002,5.80078125 L19.336002,1.93359375 C19.5186621,1.93359375 19.8706406,1.90194727 20.1854941,2.21673633 Z M23.7691523,20.1365742 L22.4019082,18.7693301 C23.1299707,18.0406875 26.3635195,14.8043672 27.0493008,14.1180059 L28.4165449,15.48525 L23.7691523,20.1365742 Z M22.402166,21.5041406 L21.8799023,22.0264043 L19.8290684,22.7099941 L20.5126582,20.6590957 L21.0349219,20.1368965 L22.402166,21.5041406 Z M32.1474785,10.3851387 C31.0166484,9.25424414 29.1765762,9.25430859 28.0453594,10.3853965 C27.6974414,10.7336367 25.4760645,12.9568184 25.1367188,13.2964863 L25.1367188,5.63487891 C25.1367188,4.86015234 24.8350137,4.13183203 24.2871621,3.58404492 L21.5527383,0.849492188 C21.0049512,0.301640625 20.2765664,0 19.5018398,0 L2.90039063,0 C1.30111523,0 0,1.30111523 0,2.90039062 L0,30.0996094 C0,31.6988848 1.30111523,33 2.90039063,33 L22.2363281,33 C23.8356035,33 25.1367188,31.6988848 25.1367188,30.0996094 L25.1367188,21.5035605 L32.1474141,14.4869355 C33.2809512,13.3534629 33.281209,11.5187402 32.1474785,10.3851387 Z" id="Fill-1" fill="#0A090B" mask="url(#mask-2)"></path>
    <path d="M4,12 L18,12 C18.5522667,12 19,11.5522667 19,11 C19,10.4477333 18.5522667,10 18,10 L4,10 C3.44773333,10 3,10.4477333 3,11 C3,11.5522667 3.44773333,12 4,12" id="Fill-4" fill="#0A090B"></path>
    <path d="M3.91666667,16 L13.0833333,16 C13.5895778,16 14,15.5522667 14,15 C14,14.4477333 13.5895778,14 13.0833333,14 L3.91666667,14 C3.41042222,14 3,14.4477333 3,15 C3,15.5522667 3.41042222,16 3.91666667,16" id="Fill-5" fill="#0A090B"></path>
    <path d="M3.91666667,19 L13.0833333,19 C13.5895778,19 14,18.5522667 14,18 C14,17.4477333 13.5895778,17 13.0833333,17 L3.91666667,17 C3.41042222,17 3,17.4477333 3,18 C3,18.5522667 3.41042222,19 3.91666667,19" id="Fill-6" fill="#0A090B"></path>
    <path d="M14,22 C14,21.4477333 13.5895778,21 13.0833333,21 L3.91666667,21 C3.41042222,21 3,21.4477333 3,22 C3,22.5522667 3.41042222,23 3.91666667,23 L13.0833333,23 C13.5895778,23 14,22.5522667 14,22" id="Fill-7" fill="#0A090B"></path>
    <path d="M18,27 L12,27 C11.4477333,27 11,27.4477333 11,28 C11,28.5522667 11.4477333,29 12,29 L18,29 C18.5522667,29 19,28.5522667 19,28 C19,27.4477333 18.5522667,27 18,27" id="Fill-8" fill="#0A090B"></path>
</svg>;

const moneyIcon =
<svg width="40px" height="41px" viewBox="0 0 40 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Paid Access Icon</title>
    <path d="M6,31 C6.5523,31 7,31.4477 7,32 C7,32.5523 6.5523,33 6,33 C5.4477,33 5,32.5523 5,32 C5,31.4477 5.4477,31 6,31" id="Fill-1" fill="#0A0B09"></path>
    <path d="M37,22 C37.5523,22 38,22.4477 38,23 C38,23.5523 37.5523,24 37,24 C36.4477,24 36,23.5523 36,23 C36,22.4477 36.4477,22 37,22" id="Fill-2" fill="#0A0B09"></path>
    <path d="M26.5781399,14.8792363 L27.9463719,14.8792363 C28.2631756,14.8792363 28.5210261,15.1358066 28.5210261,15.4513145 C28.5210261,15.8935059 28.8811803,16.2520957 29.3253007,16.2520957 C29.7694212,16.2520957 30.1295753,15.8935059 30.1295753,15.4513145 C30.1295753,14.2707227 29.1790836,13.307543 27.9999366,13.2790352 L27.9999366,12.5916445 C27.9999366,12.1494531 27.6397824,11.7908633 27.1956619,11.7908633 C26.7515415,11.7908633 26.3913873,12.1494531 26.3913873,12.5916445 L26.3913873,13.2858418 C25.2012217,13.3809746 24.2617485,14.3750645 24.2617485,15.584084 L24.2617485,16.2992617 C24.2617485,17.5709824 25.3009517,18.6056719 26.5782203,18.6056719 L27.813184,18.6056719 C28.2035789,18.6056719 28.5211065,18.9218203 28.5211065,19.3104395 L28.5211065,20.0256973 C28.5211065,20.4143164 28.2035789,20.7304648 27.813184,20.7304648 L26.444952,20.7304648 C26.1281482,20.7304648 25.8702978,20.4738945 25.8702978,20.1583867 C25.8702978,19.7161953 25.5101436,19.3576055 25.0660231,19.3576055 C24.6219027,19.3576055 24.2617485,19.7161953 24.2617485,20.1583867 C24.2617485,21.3390586 25.2123207,22.3021582 26.3913873,22.330666 L26.3913873,23.0180566 C26.3913873,23.460248 26.7515415,23.8188379 27.1956619,23.8188379 C27.6397824,23.8188379 27.9999366,23.460248 27.9999366,23.0180566 L27.9999366,22.3238594 C29.1901022,22.2287266 30.1295753,21.2347168 30.1295753,20.0256973 L30.1295753,19.3104395 C30.1295753,18.0387188 29.0903721,17.0041094 27.8131036,17.0041094 L26.5781399,17.0041094 C26.187745,17.0041094 25.8702173,16.6879609 25.8702173,16.2992617 L25.8702173,15.584084 C25.8702978,15.1953848 26.1878254,14.8792363 26.5781399,14.8792363" id="Fill-3" fill="#0A0B09" mask="url(#mask-2)"></path>
    <path d="M10.3781185,34.4878867 C10.365411,34.4934922 10.3527839,34.499498 10.3403176,34.5057441 L1.60846883,38.8975488 L1.60854926,35.6524629 L3.86960653,34.5469844 C4.26836589,34.3519941 4.43284005,33.872166 4.23707961,33.4752188 C4.04123874,33.0781914 3.55947823,32.9142715 3.16063844,33.1093418 L1.60846883,33.8681621 L1.60846883,27.1216602 L6.21929486,25.1099375 C6.34596812,25.0543633 6.45816443,25.08175 6.5137398,25.1032109 C6.56915433,25.1246719 6.67065378,25.1793652 6.7266313,25.3056484 L6.91097104,25.7212539 C6.91105147,25.7214141 6.91105147,25.7215742 6.9111319,25.7217344 C6.91121233,25.7218945 6.91129275,25.7220547 6.91137318,25.7222148 L10.5745224,33.9825938 C10.6603385,34.1759023 10.5722704,34.4025234 10.3781185,34.4878867 Z M25.2880834,8.02855273 L28.5967888,8.02855273 L28.5967888,6.37750195 L25.2880834,6.37750195 L25.2880834,8.02855273 Z M24.984711,1.66106055 L26.6153778,2.31009375 C26.798109,2.38280469 27.0012687,2.3864082 27.1863323,2.31994336 L29.0155746,1.66434375 L30.3990073,2.2901543 L28.9395706,4.7757793 L24.9574461,4.7757793 L23.5330757,2.21848438 L24.984711,1.66106055 Z M39.4953534,27.1472051 C39.1643944,26.400957 38.5613493,25.8275977 37.7973688,25.5329102 C37.0333883,25.2382227 36.1997577,25.2572812 35.4502542,25.5869629 C35.4462328,25.5886445 35.4422114,25.5904863 35.4383509,25.592248 L30.3723054,27.9183574 C29.9688813,28.1035781 29.7927451,28.5793223 29.9786934,28.9809141 C30.1647221,29.3825859 30.6426221,29.557877 31.0458854,29.3728164 L36.1054163,27.0496699 C36.4605035,26.8953594 36.854759,26.8871113 37.2163608,27.0263672 C37.5797321,27.166584 37.866456,27.4391699 38.0238526,27.7941562 C38.1813295,28.1491426 38.1904178,28.5437676 38.0496698,28.9055605 C37.9088413,29.2674336 37.6350662,29.5529121 37.2785313,29.709625 L26.9114313,34.2671914 C25.2766627,34.9858926 23.4211207,34.9440918 21.8202924,34.1522793 L18.0253226,32.275168 C15.9954943,31.2710684 13.6421867,31.2178164 11.5688471,32.1295059 L11.5205907,32.1506465 L8.707801,25.8076582 L12.6188277,24.0883809 C14.4878815,23.2666992 16.5733656,23.2005547 18.4909976,23.9016387 L26.1223574,26.6919609 C26.8039802,26.9411641 27.167271,27.7004648 26.9321816,28.3844121 C26.6926686,29.0814121 25.9275621,29.456418 25.2267172,29.2204277 L19.3253521,27.2330488 C18.9044752,27.0913105 18.4481298,27.3160898 18.3057732,27.7350586 C18.1634165,28.1540273 18.3891764,28.6084707 18.8099729,28.750209 L24.711338,30.7375879 C25.0233966,30.8427305 25.3411655,30.8926191 25.6540283,30.8926191 C26.8832012,30.8926191 28.0351638,30.1222676 28.4541909,28.9028379 C28.9699722,27.4016934 28.1726143,25.7355078 26.6768244,25.1886543 L19.0454645,22.398332 C18.5321765,22.2106289 18.0089154,22.0688105 17.4808287,21.9722363 L17.4808287,17.5457578 C17.4808287,13.1811797 21.0472237,9.63027539 25.4308421,9.63027539 L28.3683748,9.63027539 C32.7520736,9.63027539 36.3184686,13.1811797 36.3184686,17.5457578 L36.3184686,19.6326738 C36.3184686,20.0748652 36.6786228,20.4334551 37.1227433,20.4334551 C37.5668637,20.4334551 37.9270179,20.0748652 37.9270179,19.6326738 L37.9270179,17.5457578 C37.9270179,12.9235684 34.6001359,9.061 30.205338,8.20576562 L30.205338,5.79357227 L32.2374987,2.33243555 C32.3524296,2.13680469 32.3786489,1.90177539 32.3096422,1.68580469 C32.2406354,1.46983398 32.083078,1.29302148 31.8758164,1.19925 L29.3833693,0.07175 C29.192515,-0.0145742188 28.9754413,-0.0233027344 28.7783135,0.0473261719 L26.928884,0.710052734 L25.2884855,0.0571757813 C25.0998831,-0.0177773437 24.889887,-0.0189785156 24.7003999,0.0536523438 L22.0922981,1.05550977 C21.8753048,1.13887109 21.7052007,1.31175977 21.6257384,1.52949219 C21.5464369,1.74722461 21.5655787,1.98841992 21.6784184,2.19101758 L23.6795341,5.78388281 L23.6795341,8.18926953 C19.2424314,9.01071094 15.8722794,12.8933789 15.8722794,17.5455977 L15.8722794,21.8185664 C14.5436177,21.8060742 13.2164037,22.0747363 11.9691346,22.6230312 L8.02899321,24.3551211 C7.80331375,24.018873 7.48144304,23.7589395 7.09482822,23.609834 C6.59842992,23.4182871 6.05675096,23.4307793 5.57169293,23.6440273 L0.481438794,25.864834 C0.188924111,25.9924785 0,26.2802793 0,26.5982695 L0,40.1992187 C0,40.4773301 0.144930288,40.735502 0.382834724,40.8813242 C0.511759947,40.9602012 0.65781622,41 0.80427463,41 C0.928293778,41 1.05263464,40.9714922 1.16692206,40.9139961 L11.0492857,35.9434668 C11.5258989,35.727416 11.8919243,35.3414395 12.0814114,34.8544043 C12.2362342,34.4564961 12.2582714,34.0294395 12.14889,33.6250449 L12.2184598,33.5944551 C13.8533088,32.8755937 15.7090921,32.9174746 17.3095986,33.7093672 L21.1045684,35.5865586 C23.1344772,36.590418 25.4877043,36.6435098 27.5610439,35.7321406 L37.9281439,31.1745742 C38.6776474,30.8451328 39.253508,30.244707 39.5494811,29.4840449 C39.8454542,28.7233828 39.826232,27.8934531 39.4953534,27.1472051 Z" id="Fill-5" fill="#0A0B09" mask="url(#mask-2)"></path>
</svg>;

const checkmark =
<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M 13.265 3.346 L 12.124 2.23 C 11.968 2.077 11.778 2 11.554 2 C 11.33 2 11.14 2.077 10.984 2.23 L 5.482 7.622 L 3.016 5.201 C 2.86 5.047 2.669 4.971 2.446 4.971 C 2.222 4.971 2.032 5.047 1.875 5.201 L 0.735 6.317 C 0.578 6.47 0.5 6.656 0.5 6.875 C 0.5 7.094 0.578 7.28 0.735 7.433 L 3.771 10.404 L 4.912 11.52 C 5.068 11.673 5.258 11.75 5.482 11.75 C 5.705 11.75 5.896 11.673 6.052 11.52 L 7.193 10.404 L 13.265 4.462 C 13.421 4.309 13.5 4.123 13.5 3.904 C 13.5 3.685 13.421 3.499 13.265 3.346 Z" fill="#2a72a5" transform="matrix(1, 0, 0, 1, 0, 0)"/>
</svg>

const xmark =
<svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <polygon id="Rectangle-6" fill="#FFFFFF" points="9.63235931 3.25735931 11.7573593 5.38235931 5.38235931 11.7573593 3.25735931 9.63235931"></polygon>
    <polygon id="Rectangle-7" fill="#FFFFFF" points="5.38235931 3.25735931 11.7573593 9.63235931 9.63235931 11.7573593 3.25735931 5.38235931"></polygon>
</svg>

const images = {
    "open": freeIcon,
    "register": contractIcon,
    "cost": moneyIcon,
    "magnify": magnifyIcon,
    browseIcon,
    viewAllIcon,
    searchIcon,
    checkmark,
    xmark,
}

class SVG extends React.PureComponent{
    static propTypes = {
        iconType: PropTypes.oneOf(Object.keys(images)).isRequired,
        className: PropTypes.string,
    }

    static defaultProps = {
        className: 'r4r-svg-container',
    }

    render(){
        if(!images[this.props.iconType]){
            return null;
        }
        return (
            <Theme
                element="div"
                className={ this.props.className }
            >
                { images[this.props.iconType] }
            </Theme>
        ) 
    }
}

export default SVG;