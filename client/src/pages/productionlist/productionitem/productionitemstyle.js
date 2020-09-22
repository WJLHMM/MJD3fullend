/** @jsx jsx */

import React from 'react';
import { css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackJustify,
  flexlayout1,

} from '@/statics/flexlayout';

export const productionitemwrapstyle = css`
    width:100%;
    max-width:1080px;
    height:8rem;
    max-height:140px;
    background:#fff;
    padding-top:6px;
    padding-left:6px;
    ${flexlayout};
    ${flexlayoutPackJustify};
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
        div {
            color: #262626;
            font-size:14px;
            height:1.3em;
            padding-right:0.1em;
            padding-bottom:0.2em;
        }
        .name {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-family: -apple-system,Helvetica,sans-serif;
            font-size:14px;
            height:2.8em;
            line-height:1.4em;
        }
        .skuinfo {
            font-size:14px;
        }
        .priceinfo {
            em {
                color:red;
                font-size:18px;
            }
            
        }
        .appraiseinfo {
            .imglogo {
                width:24px;
                height:14px;
            }
        }
    }
    
`;
