import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CartDropdownComponent = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 70px;
  z-index: 5;
`;

export const CartItemsComponent = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
`;

export const EmptyMessageComponent = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CustomButtonComponent = styled(CustomButton)`
  margin-top: auto;
`;
