import React from 'react';
import { View } from 'react-native';
import Demo from '../../../components/demo';

const MyButtonMeta = {
  title: 'MyButton',
  component: Demo,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic = {};

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
};
