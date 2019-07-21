import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/styles';
import { green, red, orange } from '@material-ui/core/colors';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import ValidationDetails from './ValidationDetails';

const styles = (theme) => createStyles({
    greenIcon: {
        color: green[400],
        flexBasis: '10%',
    },
    redIcon: {
        color: red[400],
        flexBasis: '10%',
    },
    orangeIcon: {
        color: orange[400],
        flexBasis: '10%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '30%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class Validation extends Component {
    render() {
        var today = new Date();
        var rundate = new Date(Date.parse(this.props.item.check.timestamp));
        var formatting = {
            hour: '2-digit',
            minute: '2-digit',
        };
        var datimeDisp;
        if (today.getUTCFullYear() !== rundate.getUTCFullYear()) {
            formatting['year'] = 'numeric';
            formatting['month'] = 'long';
            formatting['day'] = 'numeric';
            datimeDisp = rundate.toLocaleDateString('default', formatting);
        } else if (today.getUTCMonth() !== rundate.getUTCMonth()) {
            formatting['month'] = 'long';
            formatting['day'] = 'numeric';
            datimeDisp = rundate.toLocaleDateString('default', formatting);
        } else if (today.getUTCDate() !== rundate.getUTCDate()) {
            formatting['day'] = 'numeric';
            formatting['weekday'] = 'short';
            datimeDisp = rundate.toLocaleDateString('default', formatting);
        } else
            datimeDisp = rundate.toLocaleTimeString('default', formatting);

        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        const greenIcon = this.props.classes.greenIcon;
        const redIcon = this.props.classes.redIcon;
        const orangeIcon = this.props.classes.orangeIcon;

        var iconColor, statusIcon;
        switch (this.props.item.result.status) {
            case 'Passed':
                iconColor = greenIcon;
                statusIcon = 'fas fa-check-circle';
                break;
            case 'Failed':
                iconColor = redIcon;
                statusIcon = 'fas fa-times-circle';
                break;
            default://Warn
                iconColor = orangeIcon;
                statusIcon = 'fas fa-exclamation-circle';
                break;
        }
        var opIcon;
        switch (this.props.item.check.operator) {
            case 'equals':
                opIcon = 'fas fa-equals';
                break;
            case 'notequals':
                opIcon = 'fas fa-not-equal';
                break;
            default:
                break;
        }

        return (
                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        id={this.props.item.doc_id}>
                        <Icon className={clsx(iconColor, opIcon)} />
                        <Typography className={this.props.classes.heading}>{datimeDisp}</Typography>
                        <Icon className={clsx(iconColor, statusIcon)} />
                        <Typography className={this.props.classes.secondaryHeading}>{this.props.item.result.status}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ValidationDetails left={this.props.item.check.left_compare_obj} right={this.props.item.check.right_compare_obj} message={this.props.item.result.message} />
                        {/* {JSON.stringify()}
                        {JSON.stringify()} */}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        );
    }
}

export default withStyles(styles)(Validation);