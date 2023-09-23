import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Navigation from '@/components/navigation';
import BoardWrite from '@/containers/board/write';

const Page = () => {
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

        <BoardWrite attributes={{ category: `${category}` }} />
      </section>

      <footer></footer>
    </>
  );
};

export default Page;
