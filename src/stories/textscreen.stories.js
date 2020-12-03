import React from 'react'
import { TextScreen } from '../components/TextScreen/index'

export default {
  title: 'TextScreen',
  component: TextScreen
}

const Template = args => <TextScreen {...args}></TextScreen>

export const Expression = Template.bind({})
Expression.args = {
  expression: '1+2',
  error: false
}

export const Error = Template.bind({})
Error.args = {
  expression: '1+2++',
  error: "Malformed Expression"
}
