import React from "react";
import FeedBack from "./Feedback";
import RelatedInsight from "./RelatedInsight";

import Grid from "@material-ui/core/Grid";

const ValuationFeedback = () => {
  return (
    <div className="valuation-feedback-container">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FeedBack />
        </Grid>
        <Grid item xs={12}>
          <RelatedInsight />
        </Grid>
      </Grid>
    </div>
  );
};

export default ValuationFeedback;
