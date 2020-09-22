import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs } from 'antd-mobile';

const PicViewUi = () => {
  const tabs = [
    { title: <img alt="prodictionshow" src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/89510/35/5720/179021/5def3118Edceca1f1/b3b8edf1126e4ee3.jpg!q70.dpg.webp" /> },
    { title: <img alt="prodictionshow" src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/88008/34/5826/118282/5def3120Ee18a8edc/befbef9035c1ac67.jpg!q70.dpg.webp" /> },
    { title: <img alt="prodictionshow" src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/95729/32/5649/53271/5def3129Ee0e56de6/12365d37449c8ade.jpg!q70.dpg.webp" /> },
    { title: <img alt="prodictionshow" src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/101784/3/5701/210045/5def3130E6172a60e/e6f602897d68c3a8.jpg!q70.dpg.webp" /> },
    { title: <img alt="prodictionshow" src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/102911/12/15632/121784/5e71ccd6E63b84804/592e58f2fc2acaae.jpg!q80.dpg.webp" /> },
  ];

  return (
    <Tabs
      tabs={tabs}
      renderTabBar={(p) => (
        <Tabs.DefaultTabBar
          page={4}
          {...p}
        />
      )}
    />
  );
};

export default withRouter(PicViewUi);
