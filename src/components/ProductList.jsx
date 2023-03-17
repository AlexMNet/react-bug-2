import React from 'react';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
  const { data } = useFetch('https://dummyjson.com/products?limit=10');

  return (
    <Grid>
      {data.products.map((data) => (
        <Card key={data.id}>
          <h4>{data.title}</h4>
          <img src={data.thumbnail} alt={data.title} />
        </Card>
      ))}
    </Grid>
  );
};

export default ProductList;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Card = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 20px;
    width: 100%;
  }
`;
