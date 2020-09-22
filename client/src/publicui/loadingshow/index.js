import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';

const LoadingshowUi = () => {
  // const loadingToast = () => {
  //   Toast.loading('Loading...', 1, () => {
  //     console.log('Load complete !!!');
  //   });
  // };

  useEffect(() => {
    Toast.loading('数据加载中...,敬请期待', 30, () => {
      // console.log('Load complete !!!');
    });

    setTimeout(() => {
      Toast.hide();
    }, 500);
  });
  return (
    <div />
  );
};

export default LoadingshowUi;
