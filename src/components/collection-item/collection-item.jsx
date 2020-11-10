import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemComponent,
  ImageComponent,
  CollectionFooterComponent,
  NameComponent,
  PriceComponent,
  CustomButtonComponent,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemComponent>
      <ImageComponent className="image" imageUrl={imageUrl} />
      <CollectionFooterComponent>
        <NameComponent>{name}</NameComponent>
        <PriceComponent>${price}</PriceComponent>
      </CollectionFooterComponent>
      <CustomButtonComponent onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonComponent>
    </CollectionItemComponent>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
