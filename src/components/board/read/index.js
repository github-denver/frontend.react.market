import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '@/unit/profile/standard';
// import Boundary from '@/unit/boundary/standard';
import Thumbnail from '@/unit/thumbnail/rectangle/read';
import Text from '@/unit/text/standard';
import Thin from '@/unit/thin/standard';
import Signature from '@/unit/profile/signature';

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
  const { read, error, loading } = attributes || {};

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
          author: read[0].name,
          date: read[0].regdate
        }}
      />

      <Thumbnail
        attributes={{
          href: `/board/${read[0].category}/read/${read[0].number}`,
          radius: false,
          image: read[0].thumbnail,
          subject: read[0].subject,
          level: read[0].level,
          time: read[0].time,
          author: read[0].name,
          count: read[0].count,
          tags: read[0].tags,
          products: read[0].products,
          showProductId
        }}
      />

      <StyledProducts>
        <StyledListProducts>
          {read[0].products.map((currentValue, index) => (
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
          text: read[0].content
        }}
      />

      <Thin />

      <Signature
        attributes={{
          author: read[0].name,
          message: '메시지를 입력해 주세요.'
        }}
      />
    </>
  );
};

export default BoardRead;
