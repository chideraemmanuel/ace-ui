import './App.scss';
import { Button } from './components/index';

const App: React.FC = () => {
  return (
    <>
      <span>Hello, world!</span>
      <br />
      <br />
      <Button
        text="Button"
        variant="primary"
        borderRadius="50px"
        size="sm"
        width="100%"
      />
    </>
  );
};

export default App;
