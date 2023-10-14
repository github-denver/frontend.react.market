import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { hero, heroInitial } from '@/modules/hero';
import HeroList from '@/components/hero';

const Hero = ({ attributes }) => {
  const { category } = attributes || {};

  const { list, pagination, error, loading } = useSelector(
    ({ hero, loading }) => ({
      list: hero.data?.list,
      pagination: hero.data?.pagination,
      error: hero.error,
      loading: loading['HERO']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hero({ category }));

    return () => {
      console.log('unmount: hero/list');

      dispatch(heroInitial());
    };
  }, [dispatch, category]);

  return (
    <HeroList
      attributes={{
        category,
        list,
        pagination,
        error,
        loading
      }}
    />
  );
};

export default Hero;
