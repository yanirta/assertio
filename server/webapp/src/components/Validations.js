import React, { Component } from 'react';
import Validation from './Validation';

class Validations extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item =>
                        <Validation key={item.doc_id} item={item} />)
                }
            </ul>
        );
    }
}

export default Validations;