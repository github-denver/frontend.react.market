import React, { useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { boardRead } from '@/modules/board/read'
import { boardModify, formChangeField, formChangeThumbnail, writeInitial } from '@/modules/board/write'
import ArticleModifyComponent from '@/components/board/modify'

const ArticleModifyContainer = ({ attribute }) => {
  const { category } = attribute || {}

  const [board, setBoard] = useState(false)

  const { user, read, owner, subject, contents, thumbnail } = useSelector(({ user, boardRead, boardModify }) => {
    const temp = {}

    if (boardRead.data !== null) {
      temp.boardRead = boardRead.data.result[0]
    }

    if (boardRead.data !== null) {
      temp.owner = boardRead.data.result[0].id
    }

    return {
      user: user.user?.user2,
      read: boardRead.data?.result,

      subject: boardModify?.subject,
      contents: boardModify?.contents,
      thumbnail: boardModify?.thumbnail,

      owner: temp.owner
    }
  }, shallowEqual)

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

  const field = useCallback((payload) => dispatch(formChangeField(payload)), [dispatch])

  const upload = useCallback((payload) => dispatch(formChangeThumbnail(payload)), [dispatch])

  useEffect(() => {
    if (!user) {
      // navigate(`/`);
    }

    if (!board) {
      setBoard(true)

      dispatch(boardRead({ category, number }))
    }

    return () => {
      console.log('boardRead/modify 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(writeInitial())
    }
  }, [dispatch, navigate, category, user, number, read, board])

  return (
    <ArticleModifyComponent
      attribute={{
        user,
        category,
        read,
        subject,
        contents,
        thumbnail,
        field,
        upload,
        owner
      }}
    />
  )
}

export default ArticleModifyContainer
