import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  margin-top:28.82px;
`;

const Tap = styled.div<{ name: string, selectedValue:string }>`
  width:96px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.01em;
  text-align: center;
  
  ${({ name, selectedValue }) => (name === selectedValue
    ? 'color: #0E0E0F;'
    : 'color: #BCBCC0;')
}
`;

const TapBottomSheet = styled.div<{ name: string, selectedValue:string }>`
  width:96px;
  height:3px;
  border-radius: 30px 20px 0px 0px;
  
  ${({ name, selectedValue }) => (name === selectedValue
    ? 'background-color:#6C6C70;'
    : 'background-color: #EBEBF0;')
}
`;

function RetrospectCategory() {
  interface Category {
    id:number;
    name: string;
  }

  const [selectedCategory, setSelectedCategory] = useState('모두');
  const [categoryList, setCategoryList] = useState<Category[]>();

  const requestTodoCategoryList = async () => {
    try {
      const myHeaders = new Headers();
      const requestOptions:RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      myHeaders.append('Authorization', 'bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVsdG9ud29uQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiJ9.nLeekFmZL1s9QYlVsQQrslSa1ucvvL4Ng_1dT5sRKKA');

      const response = await fetch('http://3.35.154.223:8080/v1/todo/category/list', requestOptions).then((res) => res.json());
      const { data } = response;
      setCategoryList(data);
    } catch (err) {
      console.log('@@@@@@@@@@ GET TODO CATEGORY LIST ERROR @@@@@@@@@@');
      console.log(err);
    }
  };

  useEffect(() => { requestTodoCategoryList(); }, []);

  return (
    <Container>
      <Tap name="모두" selectedValue={selectedCategory} onClick={() => setSelectedCategory('모두')}>
        모두
        <TapBottomSheet name="모두" selectedValue={selectedCategory} />
      </Tap>
      {categoryList && categoryList.map((category) => (
        <Tap
          name={category.name}
          selectedValue={selectedCategory}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
          <TapBottomSheet name={category.name} selectedValue={selectedCategory} />
        </Tap>
      ))}
    </Container>
  );
}

export default RetrospectCategory;
