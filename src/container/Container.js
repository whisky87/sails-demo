import React, { Component } from 'react';
import { Button, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';
// drawer import
// header import
// footer import

import './style.scss';

const { Header, Sider, Footer } = Layout;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    render() {
        let _this = this;
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <label>Sider</label>
                    <Button onClick={() => _this.setState({collapsed: !_this.state.collapsed})}>Toggle</Button>
                </Sider>
                <Layout>
                    <Header>
                        <label>Header</label>
                    </Header>
                        <label>Main</label>
                    <Footer>
                        <label>Footer</label>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default observer(Container);