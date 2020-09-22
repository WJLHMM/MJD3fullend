/** @jsx jsx */

import React, { Fragment } from 'react';
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

export const settlementbarwrapstyle = css`
    width:100%;
    max-width:1080px;
    height:50px;
    position:fixed;
    bottom:50px;
    background:#fff;
    ${flexlayout};
    ${flexlayoutAlignCenter};
    ${flexlayoutPackJustify};
    .selectedicon {
        width:10%;
        ${flexlayout};
        ${flexlayoutAlignCenter};
        ${flexlayoutPackCenter};
        .checkboxtotal {
            width:100%;
            height:20px;
            position:relative;
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
                left: 12px;
                top: 1px;
                width: 16px;
                height:16px;
                text-align:center;
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
    }
    .totleamount {
        ${flexlayout};
        ${flexlayoutAlignCenter};
        ${flexlayoutFlexEnd};
        ${flexlayout1};
        padding-right:8px;
        .settlementamountwrap {
            ${flexlayout};
            ${flexlayoutV};
            ${flexlayout1};
            font-size:12px;
            .settlementamount {
                ${flexlayout};
                ${flexlayoutFlexEnd};
                ${flexlayoutAlignCenter};
                padding-bottom:4px;
                color:#000;
                height:50%;
                .amount {
                    font-size:16px;
                    margin-right:4px;
                }
                span{ font-size:12px; }
                em{font-size:16px;}
                
            }
            .settlementdiscount {
                ${flexlayout};
                ${flexlayoutFlexEnd};
                ${flexlayoutAlignCenter};
                padding-bottom:4px;
                height:50%;
                color: #262626;
                .amount {
                    font-size:16px;
                    margin-right:4px;
                }
                span{ font-size:12px; }
                .currentdiscountdigit {
                    font-size:12px;
                }
            }

        }
        .settlementbtn {
            margin-left:10px;
            background:red;
            height:40px;
            line-height:40px;
            width:100px;
            border-radius:40px;
            text-align:center;
            color:#fff;
            font-size:14px;
        }

    }
`;
