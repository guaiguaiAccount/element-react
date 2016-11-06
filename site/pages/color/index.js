import './style.scss';

import React from 'react';
import { Markdown } from '../../../libs';
import template from '../../docs/zh-CN/color.md';

export default class Playground extends React.Component {
  render() {
    return <Markdown component="Color">{template}</Markdown>
  }
}
