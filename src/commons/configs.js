import { Platform ,Dimensions} from 'react-native';
import { getPlatformValue } from '../utils';
const {height, width} = Dimensions.get('window');
export default {
  // Window
   get getWidthWindow() {
    return width
  },
  get getHeightWindow() {
     return height
  },
  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',


  // Button
  btnFontFamily: getPlatformValue('HelveticaNeue', 'Roboto_medium'),
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',
  buttonPadding: 6,

  // Card
  cardDefaultBg: '#fff',


  // Check Box
  checkboxBgColor: '#039BE5',
  checkboxSize: 23,
  checkboxTickColor: '#fff',


  // Color
  brandPrimary: '#5067FF',
  brandInfo: '#5bc0de',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


  // Font
  fontFamily: getPlatformValue('HelveticaNeue', 'Roboto'),
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


  // Footer
  footerHeight: 55,
  footerDefaultBg: getPlatformValue('#F8F8F8', '#4179F7'),


  // FooterTab
  tabBarTextColor: getPlatformValue('#6b6b6b', '#b3c7f9'),
  tabBarActiveTextColor: getPlatformValue('#007aff', '#fff'),
  tabActiveBgColor: getPlatformValue('#e4f0fe', undefined),

  // SnackBar
  get snackBarHeight (){
    return 56
  },
  get snackBarWidth (){
    return width
  },
  snackBarColor: '#000',
  snackBarTextColor: '#fff',
  snackBarTimeShow: 1500,
  
  // Header
  iosToolbarBtnColor: '#007aff',
  toolbarDefaultBg: getPlatformValue('#F8F8F8', '#4179F7'),
  toolbarHeight: getPlatformValue(64, 56),
  toolbarIconSize: getPlatformValue(20, 22),
  toolbarInputColor: '#CECDD2',
  toolbarInverseBg: '#222',
  toolbarTextColor: getPlatformValue('#000', '#fff'),

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: getPlatformValue(30, 28),
  iconMargin: 7,


  // InputGroup
  inputFontSize: 15,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputGroupMarginBottom: 10,
  inputHeightBase: 40,
  inputPaddingLeft: 5,

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: getPlatformValue(37, 30),
  lineHeight: getPlatformValue(20, 26),


  // List
  listBorderColor: '#ACAAAB',

  // listBorderColor: '#ddd',
  listDividerBg: '#ddd',
  listItemHeight: 45,
  listItemPadding: 9,
  listNoteColor: '#808080',
  listNoteSize: 13,


  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


  // Radio Button
  radioBtnSize: getPlatformValue(25, 23),
  radioColor: '#7e7e7e',


  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#fff',


  // Text
  textColor: '#fff',
  inverseTextColor: '#fff',


  // Title
  titleFontSize: getPlatformValue(17, 19),
  subTitleFontSize: getPlatformValue(12, 14),
  subtitleColor: '#8e8e93',

};