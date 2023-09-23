import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '@/unit/profile/standard';
// import Boundary from '@/unit/boundary/standard';
import Thumbnail from '@/unit/thumbnail/rectangle/read';
import Text from '@/unit/text/standard';
import Thin from '@/unit/thin/standard';
import Signature from '@/unit/profile/signature';
import List from '@/unit/list/standard';
import { Link } from 'react-router-dom';

const StyledList = styled(List)`
  margin-top: -4rem;
  margin-bottom: 1.2rem;
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

const StyledText = styled(Text)`
  margin-top: -1.2rem;
`;

const BoardRead = ({ attributes }) => {
  const { category, number, read, error, loading, owner, edit, remove } = attributes || {};

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
            date: true
          },
          author: read.name,
          date: read.regdate
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
          author: read.name,
          message: '메시지를 입력해 주세요.'
        }}
      />
    </>
  );
};

export default BoardRead;
