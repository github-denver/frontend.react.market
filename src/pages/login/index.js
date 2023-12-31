import React from 'react';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import Login from '@/containers/login';
import Footer from '@/components/footer';

const Page = () => (
  <>
    <Header attributes={{ minimal: true }} />

    <section className="container">
      <Hgroup attributes={{ title: '본문 영역', invisible: true }} />
      <Login />
    </section>

    <Footer />
  </>
);

export default Page;
