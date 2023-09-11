import React, { useCallback, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { formChangeField, formChangeThumbnail, writeInitial } from '@/modules/board/write'
import ArticleWriteComponent from '@/components/board/write'

const ArticleWriteContainer = ({ attribute }) => {
  const { category } = attribute || {}

  const { user, subject, contents, thumbnail } = useSelector(
    ({ user, boardWrite }) => ({
      user: user.user?.user2,
      subject: boardWrite?.subject,
      contents: boardWrite?.contents,
      thumbnail: boardWrite?.thumbnail
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const field = useCallback((payload) => dispatch(formChangeField(payload)), [dispatch])

  const upload = useCallback((payload) => dispatch(formChangeThumbnail(payload)), [dispatch])

  useEffect(() => {
    if (!user) {
      // navigate(`/`);
    }

    return () => {
      console.log('boardWrite/write 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(writeInitial())
    }
  }, [dispatch, navigate, user])

  return (
    <ArticleWriteComponent
      attribute={{
        user: user,
        category: attribute.category,
        subject: subject,
        contents: contents,
        thumbnail: thumbnail,
        field: field,
        upload: upload
      }}
    />
  )
}

export default ArticleWriteContainer
