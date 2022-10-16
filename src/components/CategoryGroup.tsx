import React, { useState } from 'react';
import styled from 'styled-components';

/** Category */
const CategoryGroup = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: auto;
`;
const Category = styled.button<{selectedId:number, categoryId:number}>`
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
  background-color: ${(props)=>(props.selectedId === props.categoryId ? "black": "gray")} ;;
`;
const CategoryName = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryFooter = styled.div<{selectedId:number, categoryId:number}>`
  width: 100%;
  height: 5px;
  background-color: ${(props)=>(props.selectedId === props.categoryId ? "black": "gray")};
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
          onClickHandler(-1);
        }}
      >
        <CategoryName>모두</CategoryName>
        <CategoryFooter 
        selectedId={selectedId}
        categoryId={idAllCategory}/>
      </Category>
      {categoryList.map((elem) => (
        <Category
          selectedId={selectedId}
          categoryId={elem.id}
          onClick={() => {
            onClickHandler(elem.id);
          }}
        >
          <CategoryName>{elem.name}</CategoryName>
          <CategoryFooter 
          selectedId={selectedId}
          categoryId={idAllCategory}/>
        </Category>
      ))}
    </CategoryGroup>
  );
}

export default CategoryBox;