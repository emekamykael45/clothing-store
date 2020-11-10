import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CollectionItemComponent = styled.div`
  position: relative;
  width: 20.5vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageComponent = styled.div`
  margin-bottom: 5px;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterComponent = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameComponent = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceComponent = styled.span`
  width: 10%;
  text-align: right;
`;

export const CustomButtonComponent = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
