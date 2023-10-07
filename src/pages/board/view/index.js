import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import BoardView from '@/containers/board/view';
import Footer from '@/components/footer';

const View = () => {
  const { category } = useParams();

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

        <BoardView attributes={{ category: `${category}` }} />
      </section>

      <Footer />
    </>
  );
};

export default View;
