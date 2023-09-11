import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import qs from 'qs'
import { boardList, listInitial } from '@/modules/board/list'
import GalleryListComponent from '@/components/gallery'

const GalleryListContainer = ({ attribute }) => {
  const { horizon = true, category, limit = 10 } = attribute || {}

  const { user, list, pagination, error, loading } = useSelector(
    ({ user, boardList, loading }) => ({
      user: user.user?.user2,
      list: boardList.data?.list.slice(0, limit),
      pagination: boardList.data?.pagination,
      error: boardList.error,
      loading: loading['boardList/standard']
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const location = useLocation()

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0]

  let test = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-2)[0]

  if (number === 'list' || number === 'read' || test === 'read') {
    number = 1
  }

  useEffect(() => {
    dispatch(
      boardList({
        category,
        number,
        select: prefixed.select,
        keyword: prefixed.keyword
      })
    )

    return () => {
      console.log('boardList/standard 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(listInitial())
    }
  }, [dispatch, location.pathname, category, number, prefixed.select, prefixed.keyword])

  return (
    <GalleryListComponent
      attribute={{
        horizon,
        user,
        category,
        list,
        pagination,
        error,
        loading,
        select: prefixed.select,
        keyword: prefixed.keyword
      }}
    />
  )
}

export default GalleryListContainer
