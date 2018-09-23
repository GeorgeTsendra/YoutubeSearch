import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import App from '../App.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


class TopComponentWithSearch extends Component {
  state = {
    inputValue: "",
  }

    onChange = (event) =>{
      this.setState({
        inputValue: event.target.value
      })
      this.props.onChange(event.target.value)
    }

  render() {
    const {
      inputValue
    } = this.state;


    return(

      <TextField
      id="filled-full-width"
      label="Please, enter something"

      placeholder="video name"
      helperText=""
      fullWidth
      margin="normal"
      variant="filled"
      value={inputValue}
      onChange={this.onChange}
      />

    )
  }
}


export default TopComponentWithSearch;
