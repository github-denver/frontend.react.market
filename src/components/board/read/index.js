import React, { useState } from 'react';
import styled from 'styled-components';
import Hgroup from '@/unit/hgroup/standard';
import Profile from '@/unit/profile/standard';
import Boundary from '@/unit/boundary/standard';
import Thumbnail from '@/unit/thumbnail/rectangle/read';
import Text from '@/unit/text/standard';
import Thin from '@/unit/thin/standard';
import Signature from '@/unit/profile/signature';
import List from '@/unit/list/standard';
import { Link } from 'react-router-dom';
import Field from '@/unit/field/standard';
import Button from '@/unit/button/standard';
import Half from '@/unit/half/standard';
import Cell from '@/unit/cell/standard';

import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const StyledList = styled(List)`
  margin-top: -4rem !important;
  margin-bottom: 1.2rem !important;
`;

const StyledImageProducts = styled.img`
  max-width: 100%;
`;

const StyledBoxProducts = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  padding: 0.6rem;
  border: 0.1rem solid #e3e3e3;
  border-radius: 2.4rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledItemProducts = styled.div`
  display: inline-block;
  margin-left: 0.8rem;
  vertical-align: middle;
`;

const StyledListProducts = styled.div`
  overflow: auto;
  margin-left: -0.8rem;
  padding-right: 0.8rem;
  white-space: nowrap;
`;

const StyledProducts = styled.div`
  padding: 1.2rem 0 1.2rem 1.2rem;
`;

const StyledText = styled(Text)``;

const StyledCommentOptionItem = styled.li`
  display: inline-block;
  margin-left: 1rem;
  font-size: 1.2rem;
  vertical-align: middle;
`;

const StyledCommentOptionList = styled.ul`
  margin: 1rem 0 0 -1rem;
  padding: 0 0 0 0;
  font-size: 0;
`;

const StyledCommentProfile = styled(Profile)`
  margin: 0 -1.2rem;
`;

const StyledCommentItem = styled.li`
  margin-top: 1.2rem;

  ${StyledText} {
    margin-right: 0;
    margin-left: 0;
  }
`;

const StyledCommentList = styled.ul`
  margin-top: -1.2rem;
  padding: 1.6rem 1.6rem 0;
`;

const StyledProfileImage = styled.img`
  width: 3.6rem;
`;

const StyledHalf = styled(Half)``;

const StyledCommentWrite = styled.div`
  ${StyledHalf} {
    position: relative;
    padding: 0 1.6rem;
  }
`;

const StyledComments = styled.div``;

const BoardRead = ({ attributes }) => {
  const { category, user, number, read, error, loading, owner, edit, remove, handleLogin, handleFollow, handleUnfollow, followings, comment } = attributes || {};

  const [showProductId, setShowProductId] = useState(null);

  function handle111Click(productId) {
    setShowProductId(productId);
  }

  if (error) {
    if (error.response && error.response.status === 404) {
      console.log('존재하지 않는 데이터입니다.');

      return <p>존재하지 않는 데이터입니다.</p>;
    }

    console.log('에러가 발생했습니다.');

    return <p>에러가 발생했습니다.</p>;
  }

  if (loading || !read) {
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.');

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>;
  }

  if (!read) {
    console.log('목록이 존재하지 않습니다.');

    return <p>목록이 존재하지 않습니다.</p>;
  }

  return (
    <>
      <Profile
        attributes={{
          visible: {
            author: true,
            date: true,
            follow: true
          },
          userNumber: read.userNumber,
          author: read.name,
          date: read.regdate,
          event: [handleLogin, handleFollow, handleUnfollow],
          followings
        }}
      />

      <Thumbnail
        attributes={{
          href: `/board/${read.category}/read/${read.number}`,
          radius: false,
          image: read.thumbnail,
          subject: read.subject,
          level: read.level,
          time: read.time,
          author: read.name,
          count: read.count,
          tags: read.tags,
          products: read.products,
          showProductId
        }}
      />

      <StyledProducts>
        <StyledListProducts>
          {read.products.map((currentValue, index) => (
            <StyledItemProducts key={index} onMouseOver={() => handle111Click(currentValue.productId)} onMouseOut={() => setShowProductId(null)}>
              <StyledBoxProducts>
                <StyledImageProducts src={`/uploads/${currentValue.thumbnail}`} alt={currentValue.name} />
              </StyledBoxProducts>
            </StyledItemProducts>
          ))}
        </StyledListProducts>
      </StyledProducts>

      <StyledText
        attributes={{
          text: read.content
        }}
      />

      {owner && (
        <StyledList
          attributes={{
            list: [
              {
                // href: `/board/${category}/modify/${number}`,
                text: '글 수정',
                event: edit
              },
              {
                // href: `/board/${category}/modify/${number}`,
                text: '글 삭제',
                event: remove
              }
            ]
          }}
        />
      )}

      <Thin />

      <Signature
        attributes={{
          userNumber: read.userNumber,
          author: read.name,
          message: '메시지를 입력해 주세요.',
          event: [handleLogin, handleFollow, handleUnfollow],
          followings
        }}
      />

      <Boundary />

      <StyledComments>
        <Hgroup attributes={{ level: 'strong', title: '댓글' }} />

        <StyledCommentWrite>
          <StyledHalf
            attributes={{
              styles: {
                first: {
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  float: 'left',
                  width: 'auto'
                },
                second: {
                  overflow: 'hidden',
                  display: 'block',
                  width: 'auto',
                  paddingLeft: '5.6rem'
                }
              },
              first: (
                <Cell>
                  <StyledProfileImage src="/images/default_picture.png" alt="" />
                </Cell>
              ),
              second: (
                <Field
                  attributes={{
                    input: {
                      type: 'text',
                      name: 'comment',
                      id: 'comment',
                      placeholder: '칭찬의 댓글은 작성자에게 큰 힘이 됩니다.',
                      // value: formData.email,
                      value: '',
                      // event: onChangeField,
                      fake: {
                        // state: fakeFields.emailField,
                        state: !user,
                        input: {
                          // value: user.email,
                          value: '로그인 후 작성 가능합니다.',
                          event: () => handleLogin()
                        }

                        /*
                        confirmButton: (
                          <Button
                            attributes={{
                              type: 'button',
                              // fill: true,
                              confirm: true
                              // event: onClickFakeField('name')
                            }}>
                            <span className="text_local">등록</span>
                          </Button>
                        )
                        */
                      }
                    },
                    standard: true,
                    confirm: true,
                    confirmButton: (
                      <Button
                        attributes={{
                          type: 'button',
                          confirm: true
                          // event: onEmailCheck
                        }}>
                        <span className="text_local">등록</span>
                      </Button>
                    )
                  }}
                />
              )
            }}
          />
        </StyledCommentWrite>

        <StyledCommentList>
          {comment?.map((currentValue) => (
            <StyledCommentItem key={currentValue.commentId}>
              <Thin />

              <StyledCommentProfile
                attributes={{
                  visible: {
                    author: true,
                    date: false,
                    follow: true
                  },
                  href: currentValue.picture,
                  userNumber: currentValue.userNumber,
                  id: currentValue.username,
                  author: currentValue.author_name,
                  date: currentValue.author_regdate,
                  event: [handleLogin, handleFollow, handleUnfollow],
                  followings
                }}
              />

              <StyledText
                attributes={{
                  text: currentValue.content
                }}
              />

              <StyledCommentOptionList>
                <StyledCommentOptionItem>
                  <span className="screen_out">등록일</span>
                  {moment(currentValue.createdAt).format('YYYY-MM-DD')}
                </StyledCommentOptionItem>

                <StyledCommentOptionItem>
                  <span className="screen_out">공감</span> 9999
                </StyledCommentOptionItem>

                <StyledCommentOptionItem>
                  <button type="button">댓글 달기</button>
                </StyledCommentOptionItem>
              </StyledCommentOptionList>

              {/* <StyledHalf
                attributes={{
                  styles: {
                    first: {
                      float: 'left',
                      width: 'auto',
                      marginTop: '1.4rem'
                    },
                    second: {
                      overflow: 'hidden',
                      display: 'block',
                      width: 'auto'
                    }
                  },
                  first: <StyledProfileImage src="/images/default_picture.png" alt="" />,
                  second: (
                    <Field
                      attributes={{
                        input: {
                          type: 'text',
                          name: 'comment',
                          id: 'comment',
                          placeholder: '',
                          value: ''
                        },
                        standard: true,
                        confirm: true,
                        confirmButton: (
                          <Button
                            attributes={{
                              type: 'button',
                              confirm: true
                            }}>
                            <span className="text_local">등록</span>
                          </Button>
                        )
                      }}
                    />
                  )
                }}
              /> */}
            </StyledCommentItem>
          ))}
        </StyledCommentList>

        <ul className="paging">
          <li>
            <Link to="/">이전</Link>
          </li>
          <li>
            <Link to="/">1</Link>
          </li>
          <li>
            <Link to="/">2</Link>
          </li>
          <li>
            <Link to="/">3</Link>
          </li>
          <li>
            <Link to="/">4</Link>
          </li>
          <li>
            <Link to="/">5</Link>
          </li>
          <li>
            <Link to="/">6</Link>
          </li>
          <li>
            <Link to="/">7</Link>
          </li>
          <li>
            <Link to="/">8</Link>
          </li>
          <li>
            <Link to="/">9</Link>
          </li>
          <li>
            <Link to="/">10</Link>
          </li>
          <li>
            <Link to="/">다음</Link>
          </li>
        </ul>
      </StyledComments>
    </>
  );
};

export default BoardRead;
