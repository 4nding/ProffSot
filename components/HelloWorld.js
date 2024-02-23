import React from 'react';
import {Text, ScrollView, Image} from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <Image
            source={{
            uri: 'https://i.pinimg.com/https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png/f5/64/46/f564468c10abbf3174c81485f5be702b.jpg',
            }}
            style={{width: 300, height: 200}}
        />
    </ScrollView>
  );
};

export default App;
