// review
// 함수이름에 의도가 명확하게 보이면 좋을 것 같아요
// toYYMMDDSplitedByDot 은 어떠신가요?
export const formatTime = (timeString: string): string | null => {
  const date = new Date(timeString)

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}.${month}.${day}`
}
