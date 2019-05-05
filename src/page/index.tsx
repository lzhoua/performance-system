import React, {  } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.scss';

const { Header, Sider, Content } = Layout;

interface IsideList {
  id: number,
  icon: string,
  name: string
} 

interface IState {
  collapsed: boolean
}

const SideBar = () => {
  const sideList: Array<IsideList> = [
    {
      id: 1,
      icon: 'user',
      name: '页面一'
    }, {
      id: 2,
      icon: 'video-camera',
      name: '页面二'
    }, {
      id: 3,
      icon: 'user',
      name: '页面三'
    }
  ]
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {
        sideList && sideList.map(item => {
          return <Menu.Item key={item.id}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Menu.Item>
        })
      }
    </Menu>
  )
}

export default class ContainPage extends React.Component<{}, IState> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="p-side-logo">性能监控平台</div>
          <SideBar/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
