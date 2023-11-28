const commons = {
  // review
  // ft는 무슨 약자일까요?
  main: {
    bg_color: '#0A070B',
    ft_color_p: '#dd2d47',
    ft_color_w: '#fff',
    ft_color_r: '#F41B3B',
    ft_color_g: '#807E81',
    hr_color_b: '#363536'
  },
  randomColor: {},
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

// review
// darkModeColors, lightModeColors로 이름을 바꾸는게 어떨까요?
const darkColors = {
  body: '#0A070B',
  fontColor: '#fff',
  ButtonColor: '#ffffff80',
  hoverBgColor: '#191919',
  hoverOutlineColor: '#dd2d47'
}
const lightColors = {
  body: '#fff',
  fontColor: '#000',
  ButtonColor: '#dedede99',
  hoverBgColor: '#fff',
  hoverOutlineColor: '#1884f7'
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
