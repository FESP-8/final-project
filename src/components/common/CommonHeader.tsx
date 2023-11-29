import styled, { keyframes } from 'styled-components'
import { CommonLogo } from '@icons'
import { useNavigate } from 'react-router-dom'
import { CommonSearch } from '@icons'
import { useEffect, useRef, useState } from 'react'
import { CommonXBtn } from '@icons'
import { DarkModeButton } from '@common'

interface Truthy {
  $isSearch?: boolean
}

export const CommonHeader = () => {
  const [isSearch, setIsSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const moveToMain = () => {
    navigate('/')
  }

  const handleClickSearch = () => {
    setIsSearch(!isSearch)
  }

  const onSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate({
        pathname: '/results',
        search: `?search_query=${searchInput}`
      })
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [isSearch])

  return (
    <HeaderContainer $isSearch={isSearch}>
      {/* 메인 아이콘 */}
      <LogoIconWrapper
        onClick={moveToMain}
        $isSearch={isSearch}>
        <CommonLogo
          width={130}
          height={50}
        />
      </LogoIconWrapper>

      {
        <>
          {isSearch ? (
            <SearchBarWrapper>
              <StyledInput
                onKeyDown={onSearchEnter}
                maxLength={30}
                ref={inputRef}
                onChange={e =>
                  setSearchInput(encodeURIComponent(e.target.value))
                }
              />
              <SearchBarXWrapper onClick={handleClickSearch}>
                <CommonXBtn />
              </SearchBarXWrapper>
            </SearchBarWrapper>
          ) : (
            <SearchIconWrapper onClick={handleClickSearch}>
              <CommonSearch />
            </SearchIconWrapper>
          )}
        </>
      }

      {/* 다크모드 버튼 */}
      <DarkModeButton />
    </HeaderContainer>
  )
}

// KEYFRAMES
const animating = keyframes`
  from {
    width: 20px;
  }

  to {
    width:300px
  }
`
const animatingMoreBig = keyframes`
  from {
    width: 20px;
  }

  to {
    width: calc(100% - 100px);
  }
`

// HEADER CONTAINER
const HeaderContainer = styled.div<Truthy>`
  position: relative;
  padding: 12px;
  margin: 0 auto;
  max-width: calc(100% - 70px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 585px) {
    height: 76.5px;
    flex-direction: ${p => p.$isSearch && 'row-reverse'};
  }
`

// HEADER LOGO WRAP
const LogoIconWrapper = styled.div<Truthy>`
  cursor: pointer;

  @media screen and (max-width: 585px) {
    display: ${p => p.$isSearch && 'none'};
  }
`

// SEARCH BAR CONTAINER
const SearchBarWrapper = styled.div<Truthy>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  right: 80px;
  height: 30px;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 0;
  animation: ${animating} 0.4s forwards;

  @media screen and (max-width: 585px) {
    animation: ${animatingMoreBig} 0.4s forwards;
  }
`

// X BTN
const SearchBarXWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 8px;
  z-index: 1;
`

// GLASSES BTN
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 86px;
  transition: none;
`

// SEARCH INPUT
const StyledInput = styled.input<Truthy>`
  position: absolute;
  width: 100%;
  padding: 6px 12px;
  outline: none;
  border: 1.6px solid ${props => props.theme.themMode.fontColor};
  border-radius: 20px;
  font-size: ${props => props.theme.customSize.large};
  z-index: 1;

  box-shadow:
    0 3px 6px rgba(255, 255, 255, 0.16),
    0 3px 6px rgba(255, 255, 255, 0.23);
`
