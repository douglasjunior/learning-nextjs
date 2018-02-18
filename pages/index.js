import React, { Component } from 'react';

import axios from 'axios';

import Layout from '../components/Layout';
import Prices from '../components/Prices';

export default class Index extends Component {

    state = {
        bpi: null
    }

    componentDidMount() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(({ data }) => {
                console.log(data)
                this.setState({ bpi: data.bpi });
            });
    }

    _renderContent = () => {
        const { bpi } = this.state;

        return bpi ?
            (
                <Prices bpi={bpi} />
            ) : (
                <div>Carregando...</div>
            );
    }

    render() {

        return (
            <Layout>
                <h1>
                    Olá Next.JS!
                </h1>
                {this._renderContent()}
            </Layout>

        );
    }
}
