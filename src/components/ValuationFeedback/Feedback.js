import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

export class Feedback extends Component {
  static defaultProps = {
    valuationFeedback: null
  };

  render() {
    const { valuationFeedback, classes } = this.props;

    return (
      <div>
        {valuationFeedback ? (
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              Your price valuation
            </Typography>
            <Typography component="p" color="textSecondary" gutterBottom>
              {parseInt(valuationFeedback.price_sqm, 10)}€ per square meter
            </Typography>
            <Typography color="primary" gutterBottom variant="body2">
              {parseInt(
                valuationFeedback.price_sqm * valuationFeedback.size_sqm,
                10
              )}{" "}
              €
            </Typography>
          </Paper>
        ) : (
          <Typography variant="h5" component="h3">
            Please submit the form to get your valuation
          </Typography>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    valuationFeedback: state.valuation.valuationFeedback
  };
};

Feedback.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Feedback));
