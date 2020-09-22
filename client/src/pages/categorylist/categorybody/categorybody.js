/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import {
  categorybodywrapstyle,
  categorylistwrapstyle,
  categorylistheaderstyle,

} from '@/pages/categorylist/categorybody/categorybodystyle';

export const CategorybodyWrap = (p0) => (
  <div
    className="categorybodywrap"
    css={categorybodywrapstyle}
    {...p0}
  />
);

export const CategoryListWrap = (p1) => (
  <div
    className="categorylistwrap"
    css={categorylistwrapstyle}
    {...p1}
  />
);
