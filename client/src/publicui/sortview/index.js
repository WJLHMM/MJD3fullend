import React, { PureComponent } from 'react';

import { Tabs } from 'antd-mobile';

class SortViewUi extends PureComponent {
  render() {
    const tabs = [
      { title: '清凉节' },
      { title: '京东物流' },
      { title: '新品' },
      { title: <i className="iconfont icon-arrdown">品牌&#xe637;</i> },
      { title: <i className="iconfont icon-arrdown">CPU型号&#xe637;</i> },
      { title: <i className="iconfont icon-arrdown">屏幕尺寸&#xe637;</i> },
      { title: <i className="iconfont icon-arrdown">热点&#xe637;</i> },
      { title: <i className="iconfont icon-arrdown">存储卡&#xe637;</i> },
    ];

    return (
      <div className="sortviewwrap">
        <Tabs
          tabs={tabs}
          renderTabBar={
            () => <Tabs.DefaultTabBar page={4} />

          }
          tabBarActiveTextColor="red"
        />
      </div>
    );
  }
}

export default SortViewUi;
