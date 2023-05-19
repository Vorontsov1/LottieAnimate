import  React, {useState} from 'react';
import Splash from './src/screens/Splash';
import Home from './src/Home';




const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return isLoading ? <Splash setIsLoading={setIsLoading} isLoading={isLoading} /> : <Home/>;
};

export default App;