import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import BoardWrite from '@/containers/board/write';
import Footer from '@/components/footer';

const Write = () => {
  const { category } = useParams();

  return (
    <>
      <Header />

      <section className="container">
        <Hgroup attributes={{ title: '본문 영역', invisible: true }} />

        <Navigation />

        <Hgroup
          attributes={{
            level: 3,
            title: '',
            invisible: true
          }}
        />

        <BoardWrite attributes={{ category: `${category}` }} />
      </section>

      <Footer />
    </>
  );
};

export default Write;
