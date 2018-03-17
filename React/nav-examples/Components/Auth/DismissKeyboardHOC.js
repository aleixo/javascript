import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

const DismissKeyboardHOC = (Comp, style) => ({ children, ...props }) => (
  <KeyboardAvoidingView style={style} behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default DismissKeyboardHOC;
