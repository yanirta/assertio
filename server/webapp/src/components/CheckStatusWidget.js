import React, { Component } from 'react';
import StopIcon from '@material-ui/icons/Stop';
import { green, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';

const styles = {
    iconStatusGreen: {
        margin: 0,
        spacing: 0,
        color: green[300],
    },
    iconStatusRed: {
        margin: 0,
        spacing: 0,
        color: red[300],
    },
}

class CheckStatusWidget extends Component {
    render() {
        var list = this.props.statuslist;
        list = list.slice(Math.max(0, list.length - 6));
        return (
            <React.Fragment>
                {
                    list.map(item =>
                        <StopIcon key={item.id} className={item.status === 'Passed' ? this.props.classes.iconStatusGreen : this.props.classes.iconStatusRed} />)
                }
            </React.Fragment>);
    }
}

export default withStyles(styles)(CheckStatusWidget);