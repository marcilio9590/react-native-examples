'use strict';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: {
          value: '',
          valid: false,
          touched: false
        },
        age: {
          value: '',
          valid: false,
          touched: false
        },
        gender: {
          value: null,
          valid: false,
          touched: false
        },
        limit: {
          value: 0,
          valid: false,
          touched: false
        },
        isEstudant: {
          value: false,
          valid: false,
          touched: false
        },
        submited: false
      },
      genders: [
        {
          description: 'Selecione seu sexo'
        },
        {
          cod: 'M',
          description: 'Masculino'
        },
        {
          cod: 'F',
          description: 'Feminino'
        },
        {
          cod: 'U',
          description: 'Não Definido'
        }
      ],
      errors: []
    }
    this.verifyErrors = this.verifyErrors.bind(this);
    this.save = this.save.bind(this);
    this.renderError = this.renderError.bind(this);
    this.setFieldValid = this.setFieldValid.bind(this);
  }

  setFieldValid(name, valid) {
    this.setState(prevState => ({ form: { ...prevState.form, [name]: { ...prevState.form[name], valid: valid } } }))
  }

  verifyErrors() {
    if (!this.state.form.name.value) {
      this.setFieldValid('name', false);
    } else {
      this.setFieldValid('name', true);
    }

    if (!this.state.form.age.value) {
      this.setFieldValid('age', false);
    } else {
      this.setFieldValid('age', true);
    }

    if (!this.state.form.gender.value || this.state.form.gender.value == 0) {
      this.setFieldValid('gender', false);
    } else {
      this.setFieldValid('gender', true);
    }

    if (!this.state.form.limit.value || this.state.form.limit.value == 0) {
      this.setFieldValid('limit', false);
    } else {
      this.setFieldValid('limit', true);
    }

  }

  save() {
    this.setState(prevState => ({ form: { ...prevState.form, submited: true } }))
    this.verifyErrors();
    if (this.state.errors.length > 0) {
      alert('Existem campos inválidos');
    } else {
      alert('Cadastro realizado com sucesso')
    }
  }

  renderError(fieldName) {
    if (!this.state.form[fieldName].valid && this.state.form.submited) {
      return <Text style={styles.error}>Campo Inválido</Text>
    }
  }

  render() {
    let gendersItem = this.state.genders.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.description} />
    })

    return (
      <>
        <Text style={styles.title}>Entre para o time!</Text>
        <View style={styles.registerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            underlineColorAndroid="transparent"
            onChangeText={(text) =>
              this.setState(prevState => ({ form: { ...prevState.form, name: { ...prevState.form.name, value: text, touched: true, valid: true } } }))
            }
          />
          {this.renderError('name')}

          <TextInput
            style={styles.input}
            placeholder="Idade"
            keyboardType='numeric'
            underlineColorAndroid="transparent"
            onChangeText={(text) =>
              this.setState(prevState => ({ form: { ...prevState.form, age: { ...prevState.form.age, value: text, touched: true, valid: true } } }))
            }
          />
          {this.renderError('age')}

          <Picker
            style={styles.picker}
            selectedValue={this.state.gender}
            onValueChange={(itemValue, itemIndex) =>
              this.setState(prevState => ({ form: { ...prevState.form, gender: { ...prevState.form.gender, value: itemValue, touched: true, valid: true } } }))
            }
          >
            {gendersItem}
          </Picker>
          {this.renderError('gender')}

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valueSelected) =>
              this.setState(prevState => ({ form: { ...prevState.form, limit: { ...prevState.form.limit, value: valueSelected, touched: true, valid: true } } }))
            }
            value={this.state.form.limit.value}
          />
          <Text style={styles.textoSimples}>
            {this.state.form.limit.value.toFixed(0)}
          </Text>
          {this.renderError('limit')}

          <View style={styles.switchContainer}>
            <Text style={{ flex: 1 }}>Você é estudante? {(this.state.isEstudant) ? 'Sim' : 'Não'}</Text>
            <Switch
              style={{ flex: 1 }}
              value={this.state.form.isEstudant.value}
              onValueChange={(selected) =>
                this.setState(prevState => ({ form: { ...prevState.form, isEstudant: { ...prevState.form.isEstudant, value: selected, touched: true, valid: true } } }))
              }
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.save}
            >
              <Text style={styles.textButton}>Criar Conta</Text>
            </TouchableOpacity>
          </View>

        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {

  },
  textoSimples: {
    textAlign: 'center',
    fontSize: 30
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'italic'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  slider: {
    marginTop: 20
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {

  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    width: 100,
    height: 45,
    backgroundColor: '#a8a8a5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    fontStyle: 'italic',
    marginLeft: 20,
    marginTop: -10
  }
});