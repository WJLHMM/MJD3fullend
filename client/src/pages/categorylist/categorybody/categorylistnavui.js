/** @jsx jsx */
import React, { useEffect, useState } from 'react';
// import {  } from 'react-router';
import { withRouter, NavLink, Link  } from 'react-router-dom';
import { List } from 'antd-mobile';
import { jsx, css } from '@emotion/core';
import Swiper from 'swiper'
import axios from 'axios'

import { listyle } from '@/pages/categorylist/categorybody/categorybodystyle'

const CategoryListNavUi = (props) => {
  const [a1, setA1] = useState([]);
  const refreshfn = () => {
    props.history.push('/categorylist/WQR2006')
    const itemlist = document.querySelectorAll('.swiper-slide>a');
    const wrapperdom = document.getElementById('wrapper')
    for (let i = 0; i < itemlist.length; i += 1) {
      itemlist[i].style.color = 'rgba(0,0,0,1)';
      itemlist[i].style.background = 'rgba(239,255,239,.4)';
    }
    itemlist[0].style.color = '#ff5b05'
    itemlist[0].style.background = 'rgba(255,255,255,1)';
  }
  useEffect(() => {
    let isUnmount = false;
    const fetchData = async () => {
      const res = await axios.get('categorylist/categorylistnavui')
      if (!isUnmount) {
        setA1(res.data);
        refreshfn()
      }
    };
    fetchData();
    return () => { isUnmount = true }
  }, [])

  const data = a1.map((_val) => ({
    text: _val[0],
    cid: _val[1],
  }));

  useEffect(() => {
    const mylistdom = document.getElementById('mylist')
    const wrapperdom = document.getElementById('wrapper')
    const mySwiper = new Swiper('.swiper-container', {
      setWrapperSize: true,
      slidesPerView: '39',
      direction: 'vertical',
      height:46,
      resistance:true,
      touchEventsTarget:'container',
    })
    let y0; let y1;
    wrapperdom.addEventListener('touchstart', (e) => {
        // const touch = e.touches[0]; // 获取第一个触点
        // y0 = Number(touch.pageY);
    }, { passive:false });
    wrapperdom.addEventListener('touchmove', (e) => {
        // const touch = e.touches[0]; // 获取第一个触点
        // y1 = Number(touch.pageY);
        const distancewwrapper = parseInt(window.getComputedStyle(wrapperdom).transform.split(',')[5], 10)
        // console.log('distancewwrapper', distancewwrapper)
        if (distancewwrapper >= 100 || distancewwrapper <= -1206) {
           // wrapperdom.classList.add('touchstop')
        }
    }, { passive:false });
    wrapperdom.addEventListener('touchend', (e) => {
        const distancewwrapper = parseInt(window.getComputedStyle(wrapperdom).transform.split(',')[5], 10)
        if (distancewwrapper >= 0) {
          // mylistdom.style.transform = "translateY(0px)"
          wrapperdom.style.transform = "translateY(0px)"
        } else if (distancewwrapper <= -1196) {
          // mylistdom.style.transform = "translateY(0px)"
          wrapperdom.style.transform = "translateY(-1196px)"
        }
    }, { passive:false });
  })
  const handleClick = (e, item, index) => { /*since Swiper use wrapperdom to translate,so adjust it.*/
    // e.stopPropagation();
     /* 被点击item的字体颜色 背景变化 */
    const itemlist = document.getElementsByTagName('li');
    for (let i = 0; i < itemlist.length; i += 1) {
      itemlist[i].style.color = 'rgba(0,0,0,1)';
      itemlist[i].style.background = 'rgba(239,255,239,.4)';
    }
    e.target.style.color = '#ff5b05'
    e.target.style.background = '#fff'
    const wrapperdom = document.getElementById('wrapper')
    const itemdom = document.getElementById(`${item.cid}`);
    // e.target.classList.add(listyle.styles)
    /* 被点击的整个导航栏的向上移动逻辑 */
    // 需要移动的整个itemlist dom
    // 当前点击item的dom
    // 最后一个item 的 dom
    // const lastitemdom = document.getElementById(`${data[data.length - 1].cid}`);
    // 页面部分最最低处元素的 dom
    const footwrapdom = document.getElementById('footwrap');
    // 当前被点击元素距离的offsetTop
    const itemdomoffset = itemdom.offsetTop;
    // 页面部分最最低处元素的 offsetTop（可以理解为itemlist在页面所能显示的高度）
    const footwrapdomoffset = footwrapdom.offsetTop;
    // 需要移动的整个itemlist height
    const wrapperdomheight = parseInt(window.getComputedStyle(wrapperdom).height, 10);
    // 当前（即每一个item）Height
    const itemdomheight = parseInt(window.getComputedStyle(itemdom).height, 10);
    // 所有item的数量
    const itemNum = wrapperdomheight / itemdomheight;
    // 当前页面itemlist需要显示的个数
    const itemNuminpage = Math.floor(footwrapdomoffset / itemdomheight);
    // 能够点击向上移动的最后一个元素item的 index
    const lastItemIndex = itemNum - 1 - itemNuminpage;
    // 如果被点击的元素的index是在lastItemIndex之前的，移动距离就是这个元素的offsetTop
    // 如果是在此之后的就是最大位移距离 mylistdomheight -itemNuminpage*itemdomheight
    if (index < lastItemIndex) {
      wrapperdom.style.transform = `translateY(-${itemdomoffset}px)`;
      wrapperdom.style.transition = 'all 1 ease-in';
    } else {
      wrapperdom.style.transform = `translateY(-${wrapperdomheight - itemNuminpage * itemdomheight}px)`;
      wrapperdom.style.transition = 'all 1 ease-in';
    }
  }

  return (
    <div
      className="swiper-container"
      id="mylist"
    >
      <ul className="swiper-wrapper" id="wrapper">
        {data.map((item, index) => (
            <li
              className="swiper-slide"
              id={item.cid}
              onClick={(e) => { handleClick(e, item, index) }}
              css={[listyle]}
              key={Math.random()}
            >
              <NavLink to={`/categorylist/${item.cid}`} activeClassName="active">
                 {item.text}
              </NavLink>
            </li>
      ))}
      </ul>
    </div>
  );
};

export default withRouter(CategoryListNavUi);
