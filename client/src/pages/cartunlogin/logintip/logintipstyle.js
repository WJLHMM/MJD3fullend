/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,

} from '@/statics/flexlayout';

export const logintipstyle = css`
	width:100%;
	max-width:1080px;
	height:321px;
	${flexlayout};
	${flexlayoutV};
	${flexlayoutAlignCenter};
	${flexlayoutPackCenter};
	
	.smallui {
		width:100%;
		height:60px;
		${flexlayout};
		${flexlayoutAlignCenter};
		${flexlayoutPackCenter};
		background:#fff;
		border-radius:4px;
		span {
			color:rgba(0,0,0,0.4);
			font-size:14px;
		}
		button {
			background-image: linear-gradient(270deg,#f2270c,#ff4b2b);
			color:rgba(255,255,255,1);
			height:30px;
			width:60px;
			line-height:30px;
			border:none;
			border-radius:15px;
			margin-left:6px;
		}

	}
	.bigui {
		width:100%;
		height:261px;
		margin:0 auto;
		${flexlayout};
		${flexlayoutV};
		${flexlayoutAlignCenter};
		${flexlayoutPackCenter};
		padding-top:70px;
		padding-bottom:65px;
		background:#f2f2f2;
		img {
			display:block;
			width:90px;
			height:90px;
		}
		p {
			margin-top:6px;
			color:rgba(0,0,0,0.4);
			font-size:14px;
		}
	}
	.sksplitline {
		background:#f2f2f2;
		height:20px;
		width:100%;
		border-top:2px solid #999;
		position:relative;
		h4 {
			color:rgba(0,0,0,0.4);
			font-size:14px;
			position:absolute;
			top:-8px;
			left:39%;
			margin:0 auto;
			width:90px;
			background:#fff;
			text-align:center;
			background:#f2f2f2;
		}
	}



`;
