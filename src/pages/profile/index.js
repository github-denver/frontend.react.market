import React from 'react';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Profile from '@/containers/profile';

const Page = () => {
  return (
    <>
      <Header attributes={{ minimal: true }} />

      <section className="container">
        <Hgroup attributes={{ title: '본문 영역', invisible: true }} />

        <Profile />
      </section>

      <footer> </footer>
    </>
  );
};

export default Page;
