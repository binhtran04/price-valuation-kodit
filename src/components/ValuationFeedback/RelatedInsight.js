import React, { Component } from "react";
import CardBlock from "../ui/CardBlock";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { connect } from "react-redux";

class RelatedInsight extends Component {
  static defaultProps = {
    valuationList: [],
    currentValuation: {},
    formValues: {}
  };

  state = {
    filter: "similar_size",
    tabValue: 0
  };

  filterValuation = filter => {
    this.setState({
      filter
    });
  };

  handleChange = (event, tabValue) => {
    let filter = "";
    switch (tabValue) {
      case 0:
        filter = "similar_size";
        break;
      case 1:
        filter = "similar_price";
        break;
      case 2:
        filter = "same_area";
        break;
      default:
        filter = "similar_size";
        break;
    }
    this.setState({ tabValue, filter });
  };

  render() {
    const {
      state: { filter },
      props: { currentValuation, valuationList, formValues }
    } = this;

    const currentSize =
      parseInt(formValues.size, 10) || currentValuation.size_sqm;
    const formStreet = formValues.address && formValues.address.split(" ")[0];
    let currentStreet = currentValuation.street;

    if (valuationList.find(item => item.street === formStreet)) {
      currentStreet = formStreet;
    }

    const filteredList = valuationList.filter(item => {
      switch (filter) {
        case "similar_size":
          return (
            currentSize - 10 <= item.size_sqm &&
            item.size_sqm <= currentSize + 10
          );
        case "similar_price":
          return (
            currentValuation.price_sqm - 100 <= item.price_sqm &&
            item.price_sqm <= currentValuation.price_sqm + 100
          );
        case "same_area":
          return currentStreet === item.street;
        default:
          return false;
      }
    });

    return (
      <div>
        {valuationList.length > 0 && (
          <Paper square style={{ padding: 20 }}>
            <Tabs
              value={this.state.tabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
              centered
            >
              <Tab label="Similar size" />
              <Tab label="Similar price" />
              <Tab label="Same area" />
            </Tabs>
            <div className="valuation-list" style={{ marginTop: 20 }}>
              <CardBlock list={filteredList} />
            </div>
          </Paper>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    valuationList: state.valuation.valuationList,
    currentValuation: state.valuation.valuationFeedback,
    formValues: state.form.ValuationForm.values
  };
};

export default connect(mapStateToProps)(RelatedInsight);
