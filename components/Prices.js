import React, { Component } from 'react';

import Select from 'react-select';

const CURRENCY_OPTIONS = [
    { value: 'GBP', label: 'GBP' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
];

export default class Prices extends Component {

    state = {
        currency: 'GBP',
    }

    _onCurrencyChange = ({ value }) => {
        this.setState({ currency: value });
    }

    render() {
        const { bpi } = this.props;
        const { currency } = this.state;
        const value = bpi[currency];
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span>
                            Bitcoin rate for {value.description}
                        </span>
                        <span> : </span>
                        <span className="badge badge-primary">
                            {value.code}
                        </span>
                        <span> </span>
                        <strong>{value.rate}</strong>
                    </li>
                </ul>
                <br />
                <Select
                    name="select-currency"
                    value={currency}
                    onChange={this._onCurrencyChange}
                    options={CURRENCY_OPTIONS}
                />
            </div>
        );
    }
}
