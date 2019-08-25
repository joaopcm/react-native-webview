import React from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const renderLoading = () => (
    <ActivityIndicator style={{flex: 1}} animating color="black" size="large" />
  );

  const runFirst = `
    document.body.style.backgroundColor = 'red';
    setTimeout(function() { window.alert('hi') }, 2000);
    true;
  `;

  return (
    <WebView
      startInLoadingState={true}
      source={{uri: 'https://google.com'}}
      renderLoading={renderLoading}
      onMessage={data => {
        console.log(data);
      }}
    />
  );
};

export default App;
