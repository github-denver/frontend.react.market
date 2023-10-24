import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { parallax, parallaxInitial } from '@/modules/parallax';
import ParallaxList from '@/components/parallax';

const Parallax = ({ attributes }) => {
  const { category } = attributes || {};

  const { list, pagination, error, loading } = useSelector(
    ({ parallax, loading }) => ({
      list: parallax.data?.list,
      pagination: parallax.data?.pagination,
      error: parallax.error,
      loading: loading['PARALLAX']
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parallax({ category }));

    return () => {
      console.log('unmount: parallax/list');

      dispatch(parallaxInitial());
    };
  }, [dispatch, category]);

  return (
    <ParallaxList
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

export default Parallax;
