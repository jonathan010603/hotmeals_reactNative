import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Wrapper, Search } from './components';
import { ContextWrapper } from './context/globalCtx';

export default function App() {

  return (
    <ContextWrapper>
      <Header />
      <Search />
      <Wrapper />
    </ContextWrapper>
  );
}
