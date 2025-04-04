import styled from "styled-components";



export const Form = styled.form`
    display: inline-block ;
    margin: 0 auto;
    width: 300px;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #4b0082;
    border-radius: 5px;
    background-color: #1f1f1f;
    color: white;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #4b0082;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #6a0dad;
    }
`;

export const Checkbox = styled.label`
    color: #b0b0b0;
    margin-bottom: 10px;
`;
