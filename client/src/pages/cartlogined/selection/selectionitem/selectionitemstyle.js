/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
  flexlayoutPackJustify,
  flexlayoutFlexEnd,
  flexlayoutFlexStart,
  flexlayout1,

} from '@/statics/flexlayout';

export const selectionstyle = css`
    width:100%;
    max-width:1080px;
    background:#fff;
    border-radius:20px;
    margin:10px 0px;
    padding-top:10px;
    ${flexlayout};
    ${flexlayoutV};
    ${flexlayoutAlignCenter};
    ${flexlayoutPackCenter};
`;
export const selectionheaderstyle = css`
    width:100%;
    max-width:1080px;
    max-height:43px;
    margin-bottom:20px;
    ${flexlayout};
    ${flexlayoutAlignCenter};
    ${flexlayoutPackJustify};
    .checkboxwrap {
        width:10%;
        height:20px;
        position: relative;
        ${flexlayout};
        ${flexlayoutAlignCenter};
        ${flexlayoutPackCenter};
        input {
            position: absolute;
            left:10px;
            top: 0;
            width: 16px;
            height: 16px;
            opacity: 0;
        }
        label {
            position: absolute;
            left: 0px;
            top: 0;
            width: 16px;
            height: 16px;
            line-height: 16px;
        }
        label:after {
            content: '✔';
            font-size:10px;
            color:#fff;
            position: absolute;
            width: 16px;
            height:16px;
            text-align:center;
            left: 12px;
            top: 1px;
            border: 0;
            background: #fff;
            border: 1px solid #666;
            border-radius: 50%;
            transform: rotate(-12deg);
            -webkit-transform: rotate(-12deg);
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
        }
        input[type='checkbox']:checked +::after {
            border-color: #f2270c;
            background: #f2270c;
        }
    }
    .sellerinfo {
        height:100%;
        ${flexlayout1};
        ${flexlayout};
        ${flexlayoutAlignCenter};
        font-size:12px;
        .icon-jingdong {
            font-size:14px;
        }
        .isselfselling{
            margin-left:6px;
            overflow: hidden;
        　　text-overflow:ellipsis;
        　　white-space: nowrap;
            color:#666;
            font-weight:bold;
            font-size:14px;
        }
    }
    .reductioninfo {
        width:40%;
        height:100%;
        ${flexlayout};
        ${flexlayoutAlignCenter};
        ${flexlayoutFlexEnd};
        padding-right:10px;
        font-size:12px;
        .icon-notice {
            font-size:12px;
        }
        button {
            color:#f2270c;
            background: #fcedeb;
            border-radius:19px;
            border:none;
        }
    }
`;

export const itemcontentwrapstyle = css`
    ${flexlayout};
    ${flexlayoutV};
    ${flexlayoutAlignCenter};
    width:100%;
    max-height:250px;
`;

export const selectionitemswraptyle = css`
    width:100%;
    max-width:1080px;
    height:10.91rem;
    margin-top:20px;
    ${flexlayout};
    ${flexlayoutPackJustify};
    .checkboxwrap {
        width:10%;
        height:100%;
        position:relative;
        input {
            position: absolute;
            left:10px;
            top: 20px;
            width: 16px;
            height: 16px;
            opacity: 0;
        }
        label {
            position: absolute;
            left: 0px;
            top: 20px;
            width: 16px;
            height: 16px;
            line-height: 16px;
        }
        label:after {
            content: '✔';
            font-size:10px;
            color:#fff;
            position: absolute;
            left: 13px;
            top: 21px;
            width: 16px;
            height:16px;
            text-align:center;
            border: 1px solid #666;
            border-radius: 50%;
            background: #fff;
            transform: rotate(-12deg);
            -webkit-transform: rotate(-12deg);
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
        }
        input[type='checkbox']:checked +::after {
            border-color: #f2270c;
            background: #f2270c;
        }
    }
    .imgshow {
        width:26%;
        max-width:150px;
        position:relative;
        height:100%;
        img {
            position:absolute;
            top:0;
            display:block;
            height:6.37rem;
            max-height:144px;
            width:6.37rem;
            max-width:144px;
            border-radius:10px;
        }
    }
    .content {
        ${flexlayout1};
        ${flexlayoutAlignCenter};
        ${flexlayoutV};
        height:100%;
        padding-left:10px;
        padding-right:8px;
        font-size:12px;
        div {
            color: #262626;
            padding-right:0.1em;
            margin-bottom:2px;
        }
        .name {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-family: -apple-system,Helvetica,sans-serif;
            font-size:12px;
            height:30px;
            line-height:1.2;
            margin-bottom:2px;
        }
        .skuinfo {
            font-size:12px;
            margin-bottom:2px;
        }
        .discoverinfo {
            font-size:12px;
            margin-bottom:2px;
        }
        .priceinfo {
            ${flexlayout};
            ${flexlayoutAlignCenter};
            ${flexlayoutPackJustify};
            margin-bottom:2px;
            .pricenum {
                color:#f2270c;
                font-size:12px;
                em {
                    font-size:16px;
                }
            }
        }
        .guanzhu {
            font-size:12px;
            margin-bottom:2px;
            ${flexlayout};
            ${flexlayoutFlexEnd};
        }
    }
`;

export const selectioncouponactionstyle = css`
    width:100%;
    max-width:1080px;
    height:1.2rem;
    font-size: 12px;
    ${flexlayout};
    ${flexlayoutAlignCenter};
    ${flexlayoutPackJustify};
    padding-left:10%;
    padding-right:8px;
    .coupontype {
        ${flexlayout};
        ${flexlayoutAlignCenter};
        background: #f2270c;
        color: #fff;
        padding: 0 2px;
        height: 14px;
        border-radius: 3px;
    }
    p {
        font-size:8px;
        margin-left:-4px;
    }
    .checkprompt {

    }
    
`;
