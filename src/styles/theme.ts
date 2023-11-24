const commons = {
  main: {
    bg_color: '#0A070B',
    bg_color_g: '#191919',
    ft_color_w: '#fff',
    ft_color_r: '#F41B3B',
    ft_color_g: '#807E81',
    hr_color_b: '#363536'
  },
  greyScale: {},
  subColor: {},
  customSize: {
    tiny: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '28px',
    xxxlarge: '48px'
  }
}

const darkColors = {
  body: '#0A070B',
  fontColor: '#fff',
  ButtonColor: '#ffffff80'
}
const lightColors = {
  body: '#fff',
  fontColor: '#000',
  ButtonColor: '#dedede99'
}

export const lightTheme = {
  themMode: lightColors,
  ...commons
}

export const darkTheme = {
  themMode: darkColors,
  ...commons
}

export type Theme = typeof lightTheme | typeof darkTheme
