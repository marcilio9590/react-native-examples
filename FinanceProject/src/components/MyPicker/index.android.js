import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { PickerView } from './styles';

export default function MyPicker({ value, onChange }) {
  return (
    <PickerView>
      <Picker
        style={{
          width: '100%'
        }}
        selectedValue={value}
        onValueChange={(selected) => onChange(selected)}
      >
        <Picker.Item label="Receita" value="receita" />
        <Picker.Item label="Despesa" value="despesa" />
      </Picker>
    </PickerView>
  )
}
