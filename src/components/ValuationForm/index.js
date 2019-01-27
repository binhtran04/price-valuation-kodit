import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

import { cities, floorsAndRooms, apartmentConditions } from "./constants";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { getValuationData } from "../../actions";
import { connect } from "react-redux";

class ValuationForm extends Component {
  onSubmit = async () => {
    // event.preventDefault();

    try {
      const response = await this.props.dispatch(getValuationData());
      console.log("Insight data", response);
    } catch (error) {
      this.setState({ formError: true });
    }
  };

  renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return (
      <TextField
        label={label}
        fullWidth
        error={touched && error ? true : false}
        {...input}
        {...custom}
      />
    );
  }

  renderSelectField({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) {
    return (
      <TextField
        select
        label={label}
        required
        fullWidth
        error={touched && error ? true : false}
        {...input}
        {...custom}
      >
        {children}
      </TextField>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Paper square style={{ padding: 20 }}>
        <div className="valuation-form-wrapper">
          <Typography variant="h4" component="h2">
            Home Price Valuation
          </Typography>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <Field
                  name="city"
                  component={this.renderSelectField}
                  label="City"
                >
                  {cities.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="address"
                  component={this.renderTextField}
                  label="Adress"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="postcode"
                  component={this.renderTextField}
                  label="Postcode"
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="floor"
                  component={this.renderSelectField}
                  label="Floor"
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="numberOfFloors"
                  component={this.renderSelectField}
                  label="Number of floors"
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="numberOfRooms"
                  component={this.renderSelectField}
                  label="Number of Rooms"
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="size"
                  component={this.renderTextField}
                  label="Living size area"
                />
              </Grid>

              <Grid item xs={6}>
                <Field
                  name="constructionYear"
                  component={this.renderTextField}
                  label="Construction years"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(this.onSubmit.bind(this))}
                >
                  Get price valuation
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    );
  }
}

function validate(values) {
  const errors = {};
  const requiredFields = [
    "city",
    "address",
    "postcode",
    "floor",
    "numberOfFloors",
    "numberOfRooms",
    "size",
    "constructionYear"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (
    !values.postcode ||
    isNaN(parseInt(values.postcode, 10)) ||
    parseInt(values.postcode, 10) < 0
  ) {
    errors.postcode = "Invalid postcode";
  }

  if (
    !values.size ||
    isNaN(parseInt(values.size, 10)) ||
    parseInt(values.size, 10) < 0
  ) {
    errors.size = "Invalid size";
  }

  if (
    !values.constructionYear ||
    isNaN(parseInt(values.constructionYear, 10)) ||
    parseInt(values.constructionYear, 10) < 0
  ) {
    errors.constructionYear = "Invalid year";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "ValuationForm"
})(connect()(ValuationForm));
