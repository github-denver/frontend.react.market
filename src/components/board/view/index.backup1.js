import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
import { TfiTimer } from 'react-icons/tfi';
import { LuBarChart } from 'react-icons/lu';
import { GoComment } from 'react-icons/go';

import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const StyledProfile = styled(Profile)`
  padding-top: 0;
`;

const StyledThin = styled(Thin)`
  &.test {
    margin-top: 1.6rem;
  }
`;

const StyledSignature = styled(Signature)``;

const StyledSystemMessage = styled(Text)`
  margin: 2.4rem 1.6rem 0;
  font-size: 1.3rem;
`;

const StyledList = styled(List)`
  margin: 0 1.2rem;
  text-align: center;

  /* margin-top: -4rem !important;
  margin-bottom: 1.2rem !important; */
`;

const StyledImageProducts = styled.img`
  max-width: 100%;
`;

const StyledBoxProducts = styled.div`
  overflow: hidden;
  display: table-cell;
  width: 7.2rem;
  height: 7.2rem;
  /* padding: 0.6rem; */
  border: 0.1rem solid #f1f1f1;
  border-radius: 2.4rem;
  box-sizing: border-box;
  vertical-align: middle;
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

const StyledText = styled(Text)`
  position: relative;
  z-index: 1;
`;

const StyledOptions = styled(List)`
  /* margin: -2rem 0 0 -2rem; */
  padding: 0 1.2rem;
  text-align: left;
`;

const StyledCommentProfile = styled(Profile)``;

const StyledCommentItem = styled.li`
  position: relative;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }

  ${({ $parentCommentId }) =>
    $parentCommentId &&
    css`
      margin-left: 1rem;
      padding-bottom: 1rem;
      border-radius: 0.8rem;
      background-color: #fff;
    `}
`;

const StyledProfileImage = styled.img`
  width: 3.6rem;
`;

const StyledCell = styled(Cell)``;

const StyledHalf = styled(Half)`
  ${StyledCell} {
  }
`;

const StyledCommentWrite = styled.div`
  padding: 0 1.6rem 1.6rem;

  ${StyledHalf} {
    position: relative;
    margin-left: 0;

    & > div {
      overflow: hidden;
      display: block;
      width: auto;
    }

    & > div:first-child {
      float: left;
      height: 4.4rem;
    }
  }
`;

const StyledComments = styled.div``;

const StyledCommentList = styled.ul`
  padding: 0.4rem 0.4rem;

  ${StyledCommentWrite} {
    padding: 0 1.2rem 1.2rem 1.2rem;

    & > div > div > div {
      width: 100%;
      padding-right: 9.4rem;
    }

    & > div > div > button {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 8.4rem;
    }
  }
`;

const StyledHgroup = styled(Hgroup)`
  & + ${StyledImageProducts} {
    margin-top: 1.6rem;
  }
`;

const BoardView = ({ attributes }) => {
  const { category, formData, user, number, read, recipeList, error, loading, owner, edit, remove, handleLogin, handleFollow, handleUnfollow, followings, comment, onChangeField, handleCommentSubmit, handleCommentModifyVisible, commentModifyVisible, handleCommentModify, handleCommentRemove } = attributes || {};

  const [showProductId, setShowProductId] = useState(null);

  function handle111Click(productId) {
    setShowProductId(productId);
  }

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.log('존재하지 않는 글입니다.');

      return (
        <StyledSystemMessage
          attributes={{
            text: '존재하지 않는 글입니다.'
          }}
        />
      );
    }

    // console.log('문제가 발생했습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '문제가 발생했습니다.'
        }}
      />
    );
  }

  if (loading || !read) {
    // console.log('읽어들이는 중입니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '읽어들이는 중입니다.'
        }}
      />
    );
  }

  if (!read) {
    // console.log('등록된 글이 없습니다.');

    return (
      <StyledSystemMessage
        attributes={{
          text: '등록된 글이 없습니다.'
        }}
      />
    );
  }

  const comma = (str) => {
    return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <div className="head_common">
        <strong>{read.subject}</strong>

        <ul>
          <li>
            <span className="screen_out">난이도</span>
            <LuBarChart size={14} />
            <span className="text_local">{read.level}</span>
          </li>
          <li>
            <span className="screen_out">조리 시간</span>
            <TfiTimer size={14} />
            <span className="text_local">{read.time}</span>
          </li>
        </ul>
      </div>

      {/* <StyledThin /> */}

      <StyledProfile
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

      {/* <Boundary /> */}

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

      {read.products.length > 0 && (
        <StyledProducts>
          <StyledListProducts>
            {read.products.map((currentValue, index) => (
              <StyledItemProducts key={index} onMouseEnter={() => handle111Click(currentValue.productId)} onMouseLeave={() => setShowProductId(null)}>
                <StyledBoxProducts>
                  <StyledImageProducts src={`/uploads/products/${currentValue.thumbnail}`} alt={currentValue.name} />
                </StyledBoxProducts>
              </StyledItemProducts>
            ))}
          </StyledListProducts>
        </StyledProducts>
      )}

      <StyledText
        attributes={{
          text: read.content
        }}
      />

      <Boundary />

      <Hgroup attributes={{ level: 'strong', title: '재료' }} />
      <ul className="test2">
        {read.products.map((currentValue, index) => (
          <li key={index}>
            <Half
              attributes={{
                first: (
                  <>
                    <img src={`/uploads/products/${currentValue.thumbnail}`} alt="" className="img_comm" />

                    <div className="outer_comm1">
                      <Cell className="test001">
                        <em className="emph_comm">{currentValue.name}</em>
                      </Cell>
                    </div>
                  </>
                ),
                second: (
                  <Text
                    className="txt_comm"
                    attributes={{
                      text: `${comma(currentValue.price)}원`
                    }}
                  />
                )
              }}
            />
          </li>
        ))}
      </ul>

      <StyledHgroup attributes={{ level: 'strong', title: '레시피', line: 'thick' }} />

      {recipeList?.map((currentValue, index) => (
        <div key={index}>
          {currentValue.thumbnail && <StyledImageProducts src={`/uploads/${currentValue.thumbnail}`} alt="" />}

          <Hgroup attributes={{ level: 'strong', title: currentValue.subject, line: 'thin' }} />
          <StyledText
            attributes={{
              text: currentValue.content
            }}
          />
        </div>
      ))}

      {owner && (
        <StyledList
          attributes={{
            list: [
              {
                text: '글 수정',
                event: edit
              },
              {
                text: '글 삭제',
                event: remove
              }
            ]
          }}
        />
      )}

      <StyledThin className="test" />

      <StyledSignature
        attributes={{
          userNumber: read.userNumber,
          author: read.name,
          message: '',
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
                  paddingLeft: 0
                },
                second: {}
              },
              first: (
                <StyledCell>
                  <StyledProfileImage src="/images/default_picture.png" alt="" />
                </StyledCell>
              ),
              second: (
                <Field
                  attributes={{
                    input: {
                      type: 'text',
                      name: 'content',
                      id: 'content',
                      placeholder: '칭찬의 댓글은 작성자에게 큰 힘이 됩니다.',
                      value: formData.comment.content,
                      event: onChangeField,
                      fake: {
                        state: !user,
                        input: {
                          value: '로그인 후 작성 가능합니다.',
                          event: () => handleLogin()
                        }
                      }
                    },
                    standard: true,
                    confirm: true,
                    confirmButton: (
                      <Button
                        attributes={{
                          type: 'button',
                          confirm: true,
                          fill: true,
                          event: () => handleCommentSubmit({ postId: read.number, parentCommentId: null, category })
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

        <Thin />

        <StyledCommentList>
          {comment?.map((currentValue) => (
            <StyledCommentItem key={currentValue.commentId} $parentCommentId={currentValue.parentCommentId}>
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

              {commentModifyVisible !== currentValue.commentId ? (
                <StyledText
                  attributes={{
                    text: currentValue.content
                  }}
                />
              ) : (
                <StyledCommentWrite>
                  <Field
                    attributes={{
                      input: {
                        type: 'text',
                        name: 'modifyContent',
                        id: 'modifyContent',
                        placeholder: '칭찬의 댓글은 작성자에게 큰 힘이 됩니다.',
                        defaultValue: currentValue.content,
                        value: formData.comment.modifyContent,
                        event: onChangeField,
                        fake: {
                          state: !user,
                          input: {
                            value: '로그인 후 작성 가능합니다.',
                            event: () => handleLogin()
                          }
                        }
                      },
                      standard: true,
                      confirm: true,
                      confirmButton: (
                        <Button
                          attributes={{
                            type: 'button',
                            confirm: true,
                            // fill: true,
                            event: () => handleCommentModify({ commentId: currentValue.commentId })
                          }}>
                          <span className="text_local">수정</span>
                        </Button>
                      )
                    }}
                  />
                </StyledCommentWrite>
              )}

              {user?.userNumber === currentValue.userNumber ? (
                <StyledOptions
                  attributes={{
                    list: [
                      {
                        screenOut: '등록일',
                        text: moment(currentValue.createdAt).format('YYYY-MM-DD')
                      },
                      {
                        text: '댓글 수정',
                        event: () => {
                          handleCommentModifyVisible({ commentId: currentValue.commentId });
                        }
                      },
                      {
                        text: '댓글 삭제',
                        event: () => {
                          handleCommentRemove({ commentId: currentValue.commentId });
                        }
                      }
                    ]
                  }}
                />
              ) : (
                <StyledOptions
                  attributes={{
                    list: [
                      {
                        screenOut: '등록일',
                        text: moment(currentValue.createdAt).format('YYYY-MM-DD')
                      }
                    ]
                  }}
                />
              )}
            </StyledCommentItem>
          ))}
        </StyledCommentList>
      </StyledComments>

      <ul className="toolbar">
        <li>
          <span className="screen_out">댓글</span>
          <GoComment size={24} />
          <span className="text_local">{comment?.length}</span>
        </li>
      </ul>
    </>
  );
};

export default BoardView;
