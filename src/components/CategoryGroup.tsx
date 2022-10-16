import React, { useState } from 'react';
import styled from 'styled-components';

/** Category */
const CategoryGroup = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: auto;
`;
const Category = styled.button`
  width: 96px;
  flex: 1 0 auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
`;
const CategoryName = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryFooter = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
  border-radius: 5px 5px 0 0;
`;

interface CategoryBoxProps {
  categoryList: { id: number; name: string }[],
  onClick: (id: number) => void;
}

function CategoryBox({ categoryList, onClick }: CategoryBoxProps) {
  return (
    <CategoryGroup>
      <Category
        onClick={() => {
          onClick(-1);
        }}
      >
        <CategoryName>모두</CategoryName>
        <CategoryFooter />
      </Category>
      {categoryList.map((elem) => (
        <Category
          onClick={() => {
            onClick(elem.id);
          }}
        >
          <CategoryName>{elem.name}</CategoryName>
          <CategoryFooter />
        </Category>
      ))}
    </CategoryGroup>
  );
}

export default CategoryBox;