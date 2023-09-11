import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'
import { boardRead, readInitial } from '@/modules/board/read'
import ArticleReadComponent from '@/components/board/read'

const ArticleReadContainer = ({ attribute }) => {
  const { category } = attribute || {}

  const { user, read, error, loading } = useSelector(
    ({ user, boardRead, loading }) => ({
      user: user.user?.user2,
      read: boardRead.data?.result,
      error: boardRead.error,
      loading: loading['boardRead/read']
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  let number = location.pathname
    .split('/')
    .filter((element) => element !== null && element !== undefined && element !== '')
    .splice(-1)[0]

  if (number === 'list' || number === 'read') {
    number = 1
  }

  useEffect(() => {
    dispatch(boardRead({ category, number }))

    return () => {
      console.log('boardList/read 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(readInitial())
    }
  }, [dispatch, location.pathname, category, number])

  const edit = () => {
    dispatch()

    navigate(`/board/${attribute.category}/modify/${read.number}`)
  }

  const remove = async () => {
    try {
      navigate(`/board/${attribute.category}/list`)
    } catch (error) {
      console.error(error)
    }
  }

  const owner = (() => (user && user.id) === (read && read.id))()

  return (
    <ArticleReadComponent
      attribute={{
        user: user,
        category: attribute.category,
        read: read,
        error: error,
        loading: loading
      }}
    />
  )
}

export default ArticleReadContainer
