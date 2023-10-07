import React from 'react';
import Header from '@/containers/header';
import Hgroup from '@/unit/hgroup/standard';
import PasswordFind from '@/containers/passwordFind';
import Footer from '@/components/footer';

const Page = () => (
  <>
    <Header attributes={{ minimal: true }} />

    <section className="container">
      <Hgroup attributes={{ title: '본문 영역', invisible: true }} />
      <PasswordFind />
    </section>

    <Footer />
  </>
);

export default Page;
