/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';

import {
  flexlayout,
  flexlayoutV,
  flexlayoutAlignCenter,
  flexlayoutPackCenter,
  flexlayoutPackJustify,

} from '@/statics/flexlayout';

export const addressbaruistyle = css`
	width:100%;
	max-width:1080px;
	height:54px;
	${flexlayout};
	${flexlayoutAlignCenter};
	${flexlayoutPackJustify};
	background:#fff;
	padding:0 20px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
	.bgfont {
		font-size:14px;
	}
	.bgfont2 {
		font-size:14px;
	}
		
`;
