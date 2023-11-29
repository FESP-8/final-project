/* eslint-disable react/prop-types */
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
import { CommonArrow, CommonPlayLogo } from '@components/icons'
import { isProduction } from '@utils'
import { VideoItem } from '@types'

interface Slide {
  $image?: string
  $height?: number
}

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MainBanner = ({ fetchData }: { fetchData: any }) => {
  const navigate = useNavigate()
  const propData = isProduction ? fetchData : fetchData.items

  const renderContents = () => {
    return isProduction ? (
      <>
        <Slider {...settings}>
          {propData &&
            propData.map((i: any) => {
              return i.results.slice(5, 11).map((item, index) => (
                <div key={index}>
                  {item.snippet.thumbnails && (
                    <ThumbnailBox>
                      <ThumnailImg
                        src={
                          item.snippet.thumbnails.maxres
                            ? item.snippet.thumbnails.maxres.url
                            : item.snippet.thumbnails.high.url
                        }
                        loading="lazy"
                      />
                      <PlayBtnBox
                        onClick={() => handlePlayButtonClick(item.id)}>
                        <CommonPlayLogo />
                        <PlayBtnText>Play Now</PlayBtnText>
                      </PlayBtnBox>
                    </ThumbnailBox>
                  )}
                </div>
              ))
            })}
        </Slider>
      </>
    ) : (
      <>
        <Slider {...settings}>
          {propData &&
            propData.map((item: VideoItem, index: number) => (
              <div key={index}>
                {
                  <ThumbnailBoxImg
                    $height={item.snippet.thumbnails.maxres.height / 1.5}
                    $image={item.snippet.thumbnails.maxres.url}>
                    <PlayBtnBox onClick={() => handlePlayButtonClick(item.id)}>
                      <CommonPlayLogo />
                      <PlayBtnText>Play Now</PlayBtnText>
                    </PlayBtnBox>
                  </ThumbnailBoxImg>
                }
              </div>
            ))}
        </Slider>
      </>
    )
  }

  const handlePlayButtonClick = (id: string) => {
    navigate(`/detail/${id}`)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />
  }

  return (
    <>
      <Wrap>{renderContents()}</Wrap>
    </>
  )
}
const Wrap = styled.div`
  margin: 0 auto;
  max-width: calc(100% -100px);
`

// IMAGE
const ThumbnailBoxImg = styled.div<Slide>`
  position: relative;
  height: ${props => props.$height}px;
  border-radius: 8px;
  width: calc(100% - 100px);
  margin: 0 auto;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.$image})`};
`

const ThumbnailBox = styled.div`
  position: relative;
  border-radius: 8px;
  width: calc(100% - 100px);
  margin: 0 auto;
`

const ThumnailImg = styled.img<Slide>`
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 8px;
`

// PLAY_BUTTON
const PlayBtnBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  width: 191px;
  height: 66px;
  position: absolute;
  bottom: 16%;
  left: 8%;

  cursor: pointer;
`

const PlayBtnText = styled.div`
  display: flex;
  color: ${props => props.theme.main.FONT_COLOR_WHITE};
  font-size: 20px;
`

// 슬라이드 BUTTON
const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: ${props => props.theme.themMode.ButtonColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`

const Prev = styled(SlideButton)`
  left: 16px;
`
const Next = styled(SlideButton)`
  right: 16px;
`
const CustomPrev: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  onClick
}: NextArrowProps) => (
  <Prev onClick={onClick}>
    <CommonArrow />
  </Prev>
)

const CustomNext: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  onClick
}: NextArrowProps) => (
  <Next onClick={onClick}>
    <CommonArrow rotate={180} />
  </Next>
)
