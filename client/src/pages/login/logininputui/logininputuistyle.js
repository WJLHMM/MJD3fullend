/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutAlignCenter,
  flexlayoutPackJustify,
  flexlayoutV,
  flexlayoutPackCenter,

} from '@/statics/flexlayout';

export const inputformwrapstyle = css`
   width:100%;
   height:100px;
   margin-top:20px;
   form {
   		widht:100%;
   		height:50%;
   		${flexlayout};
   		${flexlayoutAlignCenter};
   		padding:0 5%;
   		.vcode {
   			width:70px;
   			font-size:12px;
   		}
   }
   .btnwrap {
   		width:100%;
   		max-width:1080px;
   		margin:20px auto 0 auto;
		padding:0 5%;
	    button {
	   		display:block;
	   		width:100%;
	   		height:50px;
	   		border-radius:25px;
	   		border:none;
	   		font-size:16px;
	   		max-width:1080px;
	   		margin-top:5px;
	   		
	    }
	    .btnlog {
	   		color:#fff;
			background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
	    }
	    .btnoncelog{
	   		border:1px solid #ff2000;
	   		color:#f10000;
	   		background:#ffffff;
	    }
   }
   .logmeth {
   		${flexlayout};
   		${flexlayoutAlignCenter};
   		${flexlayoutPackJustify};
   		width:21rem;
   		max-width:1080px;
   		margin:0.9rem auto 0 auto;
   		padding:0 5%;
   		p {
   			color:#848689;
   		}
   }
   .otherways {
   		${flexlayout};
   		${flexlayoutAlignCenter};
		${flexlayoutV};
		${flexlayoutPackCenter};
		position:relative;
		margin-top:88px;
		border-top: 1px solid rgba(0,0,0,.1);
		font-size: 0.12rem;	
		h4 {
			top:-7px;
			margin:0 auto;
			position:absolute;
			color:rgba(0,0,0,0.2);
			padding:0px 10%;
			background:#fff;

		}
		.otherwayslink {
			margin-top:20px;
			width:140px;
			${flexlayout};
	   		${flexlayoutAlignCenter};
	   		${flexlayoutPackJustify};
			.icontitle {
				height:69px;
				width:48px;
				.iconfont {
					display:block;
					height:48px;
					width:48px;
					font-size:30px;
					text-align:center;
					line-height:48px;
					background:#efefef;
					border-radius:48px;
				}
				.icon-QQ {
					color:blue;
				}
				.icon-weixin {
					color:green;
				}
				p {
					text-align:center;
					color:rgba(0,0,0,.4);
					margin-top:2px;
				}
			}
		}
   }
 
	.policy{
		margin-top:16px;
		width:100%;
		max-width:1080px;
		padding:0 5%;
		color:rgba(0,0,0,.4);
		${flexlayout};
   		${flexlayoutAlignCenter};
		${flexlayoutV};
		${flexlayoutPackCenter};
		span {
			display:block;
			margin-top:4px;
			a {
				color:blue;
			}
		}
	}
`;
