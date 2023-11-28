import {
  CommonFooter,
  CommonHeader,
  MainContent,
  MainThumbnail
} from '@components'
import { CommonTopButton } from '@common'
import { useLoaderData } from 'react-router-dom'

export const MainPage = () => {
  // review  preLoadPopularVideos로 바꾸면 어떨까요?
  const preLoadData: any = useLoaderData()

  return (
    <>
      {/* // review CommonHeader에서 Common은 의미가 없는것 같은데 지우고 Header로 명명함녀 어떨까요? */}
      <CommonHeader />
      {/* // review 보통 thumbnail이라는 단어보다 banner라는 표현을 쓰는 것 같아요 */}
      <MainThumbnail preLoadData={preLoadData} />

      <MainContent preLoadData={preLoadData} />

      <CommonFooter />
      <CommonTopButton />
    </>
  )
}
