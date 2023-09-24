import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import BoardList from '@/containers/board/list';
import Footer from '@/components/footer';

const Page = () => {
  const { category } = useParams();
  console.log('category: ', category);

  return (
    <>
      <Header />

      <section>
        <Hgroup attributes={{ title: '본문 영역', invisible: true }} />

        <Navigation />

        <Hgroup
          attributes={{
            level: 3,
            title: '집사진',
            invisible: true
          }}
        />

        <BoardList attributes={{ category: `${category}` }} />
      </section>

      <Footer />
    </>
  );
};

export default Page;
