const withMT = require("@material-tailwind/html/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
// module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/david-ui-angular/**/*.{html,ts,js,mjs}"
  ],
  //  safelist: generateSafelist([
  //       'slate-900',
  //       'blue-500',
  //       'blue-600',
  //       'generalBlack',
  //       'primaryPink',
  //       'generalWhite'
  //       'whiteBlued',
  //       'complementBlue',
  //       'primaryBlue',
  //       'secondaryBlue',
  //       'thirdBlue',
  //       'darkPurple',
  //   ]),
  // safelist: [
  //   {
  //     pattern: /^(bg|text|border|ring|fill|stroke)-(.+)-(\d{2,3})/, // Incluye todos los colores
  //   },
  // ],

  theme: {
    extend: {
      colors: {
         ...colors,
        slate: {
          900: '#101D2D',
        },
        blue: {
          500: '#5696FF',
          600: '#2174EA',
        },
        "generalBlack": "#242424",
        "primaryPink": "#FF419B",
        "whiteBlued": "#F0F8FF",
        "generalWhite": "#F8FAFC",
        "complementBlue": "#5BE7FF",
        "primaryBlue": "#0085F4",
        "secondaryBlue": "#00378E",
        "thirdBlue": "#003366",
        "darkPurple": "#1B1D5C",
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'pcTab': '1000px',
        'lg': '1200px',
        'xl': '1500px',
        '2xl': '2000px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        nunito: ['Nunito']
      },
      fontSize: {
        x: ['0.50rem', { lineHeight: '1.5' }],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['4rem', { lineHeight: '1.1562', letterSpacing: '-0.01em' }],
      },
      spacing: {
        's_2': '2px',
        's_2.5': '2.5px',
        's_5': '5px',
        's_7.5': '7.5px',
        's_10': '10px',
        's_12.5': '12.5px',
        's_15': '15px',
        's_16': '16px',
        's_17': '17px',
        's_20': '20px',
        's_22.5': '22.5px',
        's_25': '25px',
        's_30': '30px',
        's_35': '35px',
        's_40': '40px',
        's_45': '45px',
        's_50': '50px',
        's_55': '55px',
        's_60': '60px',
        's_65': '65px',
        's_70': '70px',
        's_75': '75px',
        's_80': '80px',
        's_85': '85px',
        's_90': '90px',
        's_95': '95px',
        's_100': '100px',
        's_110': '110px',
        's_125': '125px',
        's_135': '135px',
        's_150': '150px',
        's_155': '155px',
        's_160': '160px',
        's_165': '165px',
        's_175': '175px',
        's_190': '190px',
        's_200': '200px',
        's_225': '225px',
        's_240': '240px',
        's_250': '250px',
        's_275': '275px',
        's_300': '300px',
        's_325': '325px',
        's_350': '350px',
        's_375': '375px',
        's_400': '400px',
        's_425': '425px',
        's_450': '450px',
        's_475': '475px',
        's_500': '500px',
        's_525': '525px',
        's_550': '550px',
        's_575': '575px',
        's_600': '600px',
        's_625': '625px',
        's_650': '650px',
        's_675': '675px',
        's_700': '700px',
        's_725': '725px',
        's_750': '750px',
        's_775': '775px',
        's_800': '800px',
        's_825': '825px',
        's_850': '850px',
        's_875': '875px',
        's_900': '900px',
        's_925': '925px',
        's_950': '950px',
        's_975': '975px',
        's_1000': '1000px',
        's_1025': '1025px',
        's_1030': '1030px',
        's_1035': '1035px',
        's_1040': '1040px',
        's_1045': '1045px',
        's_1050': '1050px',
        's_1055': '1055px',
        's_1060': '1060px',
        's_1065': '1065px',
        's_1070': '1070px',
        's_1075': '1075px',
        's_1100': '1100px',
        's_1125': '1125px',
        's_1150': '1150px',
        's_1175': '1175px',
        's_1200': '1200px',
        's_1225': '1225px',
        's_1250': '1250px',
        's_1275': '1275px',
        's_1300': '1300px',
        's_1325': '1325px',
        's_1350': '1350px',
        's_1375': '1375px',
        's_1400': '1400px',
        's_1425': '1425px',
        's_1450': '1450px',
        's_1475': '1475px',
        's_1500': '1500px',
        's_1525': '1525px',
        's_1550': '1550px',
        's_1575': '1575px',
        's_1600': '1600px',
        's_1625': '1625px',
        's_1650': '1650px',
        's_1675': '1675px',
        's_1700': '1700px',
        's_1725': '1725px',
        's_1750': '1750px',
        's_1775': '1775px',
        's_1800': '1800px',
        's_1825': '1825px',
        's_1850': '1850px',
        's_1875': '1875px',
        's_1900': '1900px',
        's_1925': '1925px',
        's_1950': '1950px',
        's_1975': '1975px',
        's_2000': '2000px',
        's_5p': '5%',
        's_10p': '10%',
        's_15p': '15%',
        's_20p': '20%',
        's_25p': '25%',
        's_30p': '30%',
        's_35p': '35%',
        's_40p': '40%',
        's_45p': '45%',
        's_50p': '50%',
        's_55p': '55%',
        's_60p': '60%',
        's_65p': '65%',
        's_70p': '70%',
        's_75p': '75%',
        's_80p': '80%',
        's_85p': '85%',
        's_90p': '90%',
        's_95p': '95%',
        's_100p': '100%',

      },
      lineHeight: {
        'small': '0.5',
        'short': '0.75',
        'normal': '1',
        'semi': '1.25',
        'medium': '1.5',
        'double': '2'
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [],
// };
});