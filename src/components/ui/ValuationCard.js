import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class ValuationCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const props = this.props;
    return (
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            className="address"
            gutterBottom
          >
            {`${props.street} ${props.street_number}`}
          </Typography>
          <Typography
            color="textSecondary"
            className="description"
            gutterBottom
          >
            {props.size_sqm} m<sup>2</sup> {props.description}
          </Typography>
          <Typography
            color="primary"
            className="price"
            gutterBottom
            variant="body2"
          >
            {parseInt(props.price_sqm * props.size_sqm, 10)} €
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={classnames(props.classes.expand, {
              [props.classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Balcony: {props.balcony}</Typography>
            <Typography paragraph>
              Number of rooms: {props.room_count}
            </Typography>
            <Typography paragraph>
              Construction year: {props.built_year}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ValuationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ValuationCard);
