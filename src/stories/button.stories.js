/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button/index'

export default {
  title: 'Button',
  component: Button
}

const Template = args => <Button {...args}></Button>

export const SampleButton = Template.bind({})
SampleButton.args = {
  value: '1',
  onClick: action('Clicked')
}

