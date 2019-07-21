import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ValidationDetails extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ReactJson src={this.props.left} displayDataTypes={false} />
                </Grid>
                <Grid item xs={6}>
                    <ReactJson src={this.props.right} displayDataTypes={false} />
                </Grid>
                <Typography> Message - {this.props.message}</Typography>
            </Grid>);
    }
}

export default ValidationDetails;