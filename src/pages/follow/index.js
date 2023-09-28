import React from 'react';
import styled from 'styled-components';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import Follow from '@/containers/follow';

const StyledNavigation = styled(Navigation)``;

const Page = () => {
  return (
    <>
      <Header />

      <section className="container">
        <Hgroup attributes={{ title: '본문 영역', invisible: true }} />

        <StyledNavigation />

        <Follow />
      </section>

      <footer> </footer>
    </>
  );
};

export default Page;
