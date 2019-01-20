import React, { Component } from "react";
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
  state = {
    formError: false,
    city: "",
    address: "",
    postcode: "",
    floor: "",
    totalFloors: "",
    size: "",
    numberOfRooms: "",
    constructionYear: "",
    maintenanceCost: "",
    apartmentCondition: "",
    landOwnership: "",
    elevator: "",
    balcony: "",
    pipeRenovation: "",
    facadeRenovation: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  validateForm = () => {
    let valid = true;
    Object.keys(this.state).forEach(key => {
      valid = valid && this.state[key] !== "";
    });
    return valid;
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!this.validateForm()) {
      this.setState({ formError: true });
    } else {
      this.setState({ formError: false });
      try {
        const response = await this.props.dispatch(getValuationData());
        console.log("Insight data", response);
      } catch (error) {
        this.setState({ formError: true });
      }
    }
  };

  render() {
    const {
      formError,
      city,
      address,
      postcode,
      floor,
      totalFloors,
      size,
      numberOfRooms,
      constructionYear,
      maintenanceCost,
      apartmentCondition,
      landOwnership,
      elevator,
      balcony,
      pipeRenovation,
      facadeRenovation
    } = this.state;

    return (
      <Paper square style={{ padding: 20 }}>
        <div className="valuation-form-wrapper">
          <Typography variant="h4" component="h2">
            Home Price Valuation
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <TextField
                  name="city"
                  select
                  label="City"
                  value={city}
                  onChange={this.handleChange("city")}
                  margin="normal"
                  required
                  fullWidth
                >
                  {cities.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Address"
                  name="address"
                  type="text"
                  required
                  onChange={this.handleChange("address")}
                  value={address}
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Postcode"
                  name="postcode"
                  type="number"
                  required
                  onChange={this.handleChange("postcode")}
                  value={postcode}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="floor"
                  select
                  label="Floor"
                  value={floor}
                  onChange={this.handleChange("floor")}
                  margin="normal"
                  required
                  fullWidth
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="totalFloors"
                  select
                  label="Total floors"
                  value={totalFloors}
                  onChange={this.handleChange("totalFloors")}
                  margin="normal"
                  required
                  fullWidth
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="numberOfRooms"
                  select
                  label="Number of rooms"
                  value={numberOfRooms}
                  onChange={this.handleChange("numberOfRooms")}
                  margin="normal"
                  required
                  fullWidth
                >
                  {floorsAndRooms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Living area sizze"
                  name="size"
                  type="number"
                  required
                  onChange={this.handleChange("size")}
                  value={size}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Construction year"
                  name="constructionYear"
                  type="number"
                  required
                  onChange={this.handleChange("constructionYear")}
                  value={constructionYear}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Maintenance cost"
                  name="maintenanceCost"
                  type="number"
                  required
                  onChange={this.handleChange("maintenanceCost")}
                  value={maintenanceCost}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Apartment condition"
                  name="apartmentCondition"
                  select
                  value={apartmentCondition}
                  onChange={this.handleChange("apartmentCondition")}
                  margin="normal"
                  required
                  fullWidth
                >
                  {apartmentConditions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Land ownership</FormLabel>
                  <RadioGroup
                    aria-label="Land ownership"
                    name="landOwnership"
                    value={landOwnership}
                    onChange={this.handleChange("landOwnership")}
                  >
                    <FormControlLabel
                      value="own"
                      control={<Radio />}
                      label="Own"
                    />
                    <FormControlLabel
                      value="rented"
                      control={<Radio />}
                      label="Rented"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">
                    Is there an elevator in the building
                  </FormLabel>
                  <RadioGroup
                    aria-label="Is there an elevator in the building"
                    name="elevator"
                    value={elevator}
                    onChange={this.handleChange("elevator")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">
                    Is there balcony in the apartment
                  </FormLabel>
                  <RadioGroup
                    aria-label="Is there balcony in the apartment"
                    name="balcony"
                    value={balcony}
                    onChange={this.handleChange("balcony")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">
                    Is there pipe renovation planned within 5 years
                  </FormLabel>
                  <RadioGroup
                    aria-label="Is there pipe renovation planned within 5 years"
                    name="pipeRenovation"
                    value={pipeRenovation}
                    onChange={this.handleChange("pipeRenovation")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">
                    Is there facade renovation planned within 10 years
                  </FormLabel>
                  <RadioGroup
                    aria-label="Is there facade renovation planned within 10 years"
                    name="facadeRenovation"
                    value={facadeRenovation}
                    onChange={this.handleChange("facadeRenovation")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Form error message */}
              {formError && (
                <Grid item xs={12}>
                  <FormHelperText error>
                    Please check the form again
                  </FormHelperText>
                </Grid>
              )}

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
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

export default connect()(ValuationForm);
