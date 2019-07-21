import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

class ChecksList extends Component {
    render() {
        return (
            <React.Fragment>
                <HideOnScroll {...this.props}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6">assertio ;) - Checks status & history</Typography>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar />
            </React.Fragment>
        );
    }
}

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
};

export default ChecksList;