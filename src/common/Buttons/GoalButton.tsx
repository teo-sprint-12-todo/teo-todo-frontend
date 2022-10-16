import styled from 'styled-components';

const Button = styled.button<{ backgroundColor:string }>`
    box-sizing: border-box;
    display: flex;    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    gap: 10px;

    min-width: 34px;
    width: fit-content;
    height: 20px;
    margin: 0;
    background: ${({ backgroundColor }) => backgroundColor};
    border: none;
    border-radius: 2px;
    

    font-weight: 600;
    font-size: 10px;
    line-height: 160%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
`;

export default Button;
