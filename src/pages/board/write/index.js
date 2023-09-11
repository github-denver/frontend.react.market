import React from 'react'
import { Link, useParams } from 'react-router-dom'
import HeaderContainer from '@/containers/header'
import HgroupComponent from '@/components/hgroup'
import NavigationComponent from '@/components/navigation'
import ThumbnailUnit from '@/unit/thumbnail'
// import ProfileComponent from "@/components/profile";
import FooterComponent from '@/components/footer'
import ProfileStandardUnit from '@/unit/profile/standard'
import TextStandardUnit from '@/unit/text/standard'
import { styled } from 'styled-components'
import ArticleWriteContainer from '@/containers/board/write'

const StyledRead = styled.div``

const ArticleCreatePage = () => {
  const { category } = useParams()

  return (
    <StyledRead>
      <HeaderContainer />

      <section>
        <HgroupComponent attribute={{ title: '본문 영역', invisible: true }} />

        <NavigationComponent />

        <HgroupComponent attribute={{ level: 3, title: '집들이', invisible: true }} />

        <ArticleWriteContainer attribute={{ category: `${category}` }} />
      </section>
      <FooterComponent />
    </StyledRead>
  )
}

export default ArticleCreatePage