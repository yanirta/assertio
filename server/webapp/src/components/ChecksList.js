import React, { Component } from 'react';
import CheckItem from './CheckItem'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class ChecksList extends Component {
    render() {
        var id = 0;
        return (
            <List>
                {
                    Object.keys(this.props.checks).map(uname =>
                        <React.Fragment key={uname}>
                            <CheckItem
                                name={uname}
                                id={++id}
                                validations={this.props.checks[uname]}
                                onSelect={this.props.onSelect}
                                selection={this.props.selectedId} />
                            <Divider />
                        </React.Fragment>
                    )
                }
            </List>
        );
    }
}

export default ChecksList;