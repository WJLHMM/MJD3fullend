import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile';

@withRouter

@connect(
  (state) => ({ /* 由于使用redux-persist神器store持久化，所以immutable中的getIn方法不能在用，改为如下取值 */
    cartskulist: state.productioninfo.get('cartskulist'),
    islogined: state.login2.get('islogined'),
    username: state.login2.get('username'),
  }),
)
class TabBarUi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  render() {
    const { islogined, username, cartskulist } = this.props
    let skulist
    if (islogined) {
       skulist = cartskulist[username] || (cartskulist.toJS())[username]
    }
    // console.log(skulist)
    let badgenum
    if (skulist) {
      badgenum = skulist.length
    } else {
      badgenum = 0
    }
    return (
      <div
        id="footwrap"
        style={{
          position: 'fixed', width: '100%', maxWidth: 1080, bottom: 0, height: 50, zIndex:100,
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="FirstPage"
            icon={<i className="iconfont icon-zhifu-jingdong">&#xe6a2;</i>}
            selectedIcon={<i className="iconfont icon-zhifu-jingdong">&#xe6a2;</i>}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              }, () => {
                this.props.history.push('/home')
              });
            }}
            data-seed="logId"
          />
          <TabBar.Item
            title="分类"
            key="Categories"
            icon={<i className="iconfont icon-2">&#xe623;</i>}
            selectedIcon={<i className="iconfont icon-2">&#xe623;</i>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              }, () => {
                this.props.history.push('/categorylist/WQR2006')
                // window.location.reload();
              });
            }}
          />
          <TabBar.Item
            icon={<i className="iconfont icon-jingxi">&#xe613;</i>}
            selectedIcon={<i className="iconfont icon-jingxi">&#xe613;</i>}
            title="京喜"
            key="Jinxi"
            badge="new"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          />
          <TabBar.Item
            icon={<i className="iconfont icon-gouwuche1">&#xe600;</i>}
            selectedIcon={<i className="iconfont icon-gouwuche1">&#xe600;</i>}
            title="购物车"
            key="cart"
            badge={`${badgenum}`}
            // badge={ '0' }
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              }, () => {
                islogined ? this.props.history.push(`/cartlogined/${username}`) : this.props.history.push('/cartunlogin')
              });
            }}
          />
          <TabBar.Item
            icon={<i className="iconfont icon-denglu">&#xe635;</i>}
            selectedIcon={<i className="iconfont icon-denglu">&#xe635;</i>}
            title={islogined ? '我的' : '未登录'}
            key="isLogin"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              }, () => {
                !islogined ? this.props.history.push('/login') : this.props.history.push(`/myinfo/${username}`)
              });
            }}
          />
        </TabBar>
      </div>
    );
  }
}

export default TabBarUi;
