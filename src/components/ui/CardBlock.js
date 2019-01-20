import React from "react";
import ValuationCard from "./ValuationCard";

import Grid from "@material-ui/core/Grid";

const CardBlock = props => {
  const renderCards = () =>
    props.list
      ? props.list.map((cardInfo, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ValuationCard {...cardInfo} />
          </Grid>
        ))
      : null;

  return (
    <Grid container spacing={24}>
      {renderCards()}
    </Grid>
  );
};

// <div className="card-block">{renderCards()}</div>;
export default CardBlock;
