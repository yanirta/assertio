import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Validations from "./Validations";


class ChecksInfo extends Component {
    render() {
        return (
            <Container>
                <Validations items={this.props.checkData} />
                {/* {this.props.checkName} */}
            </Container>);
    }
}

export default ChecksInfo;