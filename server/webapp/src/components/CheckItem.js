import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import DataUsageIcon from "@material-ui/icons/DataUsage";
// import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import CheckStatusWidget from './CheckStatusWidget';

class CheckItem extends Component {

    render() {
        return (
            <ListItem
                button
                selected={this.props.selection === this.props.id}
                onClick={this.props.onSelect.bind(this, this.props.validations, this.props.id)} >
                <ListItemIcon >
                    <DataUsageIcon />
                </ListItemIcon>
                <ListItemText
                    primary={this.props.name}
                    secondary={
                        <CheckStatusWidget
                            statuslist={this.props.validations.map(v => ({ status: v.result.status, id: v.doc_id }))} />
                    }>
                </ListItemText>
            </ListItem>
        );
    }
}

export default CheckItem;