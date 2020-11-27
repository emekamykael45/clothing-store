import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <>
    {collections.length ? (
      <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    ) : (
      <h1 style={{ textAlign: "center" }}>Nothing To Show</h1>
    )}
  </>
);

export default CollectionsOverview;
