import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadAsyncStorage() {
      const storageUser = await AsyncStorage.getItem('auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }

    loadAsyncStorage();
  }, [])

  async function signUp(email, password, nome) {
    try {
      setLoadingAuth(true);
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
          let uid = response.user.uid;
          await firebase.database().ref('users').child(uid).set({
            saldo: 0,
            nome: nome
          })
            .then(() => {
              let data = {
                uid: uid,
                nome: nome,
                email: email
              }
              setUser(data);
              saveAsyncStorage(data);
              setLoadingAuth(false);
            })
        });
    } catch (error) {
      alert('Ops, algo deu errado...');
      setLoadingAuth(false);
      console.log(error);
    }
  }

  async function signIn(email, password) {
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        let uid = response.user.uid;
        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: response.user.email,
              saldo: snapshot.val().saldo
            }
            setUser(data);
            saveAsyncStorage(data);
            setLoadingAuth(false);
          });
      }).catch((err) => {
        alert('Ops! Algo deu errado...');
        console.log(err);
        setLoadingAuth(false);
      });
  }

  async function saveAsyncStorage(data) {
    await AsyncStorage.setItem('auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut().then(async () => {
      await AsyncStorage.clear()
        .then(() => {
          setUser(null);
        })
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loading, signOut, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}