import React, { useState } from 'react';
import styled from 'styled-components';

/** Category */
const CategoryGroup = styled.div`
  /* width: calc(100vw - 1.2em); */
  width: 100%;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar{
    display:none;
  }
`;
const Category = styled.button<{selectedId:number, categoryId:number}>`
  width: 96px;
  flex: 1 0 auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  margin-top:16px;
  padding: 0;
  border: none;
  background-color: white;
  color: ${(props)=>(props.selectedId === props.categoryId ? "#1C1C1E": "#BCBCC0")};
`;

const CategoryName = styled.div`
  height: 23px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding:0 3px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  /* text-align: center; */
`;

const CategoryFooter = styled.div<{selectedId:number, categoryId:number}>`
  width: 100%;
  height: 3px;
  background-color: ${(props)=>(props.selectedId === props.categoryId ? "#6C6C70": "#EBEBF0")};
  border-radius: 5px 5px 0 0;
`;

interface CategoryBoxProps {
  categoryList: { id: number; name: string }[],
  onClickHandler: (id: number) => void;
}


function CategoryBox({ categoryList, onClickHandler }: CategoryBoxProps) {
  const [selectedId, setSelectedId] = useState<number>(-1)
  const idAllCategory = -1
  return (
    <CategoryGroup>
      <Category
        selectedId={selectedId}
        categoryId={idAllCategory}
        onClick={() => {
          onClickHandler(idAllCategory);
          setSelectedId(idAllCategory);
        }}
      >
        <CategoryName>모두</CategoryName>
        <CategoryFooter 
        selectedId={selectedId}
        categoryId={idAllCategory}/>
      </Category>
      {categoryList.map((elem) => (
        <Category
          key={elem.id}
          selectedId={selectedId}
          categoryId={elem.id}
          onClick={() => {
            onClickHandler(elem.id);
            setSelectedId(elem.id);
          }}
        >
          <CategoryName>{elem.name}</CategoryName>
          <CategoryFooter 
            selectedId={selectedId}
            categoryId={elem.id}
          />
        </Category>
      ))}
    </CategoryGroup>
  );
}

export default CategoryBox;