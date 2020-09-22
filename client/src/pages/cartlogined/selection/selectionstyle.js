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

export const itemcontentwrapstyle = css`
	${flexlayout};
    ${flexlayoutV};
    ${flexlayoutAlignCenter};
    width:100%;
    max-height:250px;
`;
