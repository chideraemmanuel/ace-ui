import './App.scss';
import { Button, SelectField } from './components/index';

const App: React.FC = () => {
  return (
    <>
      <span>Hello, world!</span>
      <br />
      <br />
      <Button
        children="Button"
        variant="primary"
        borderRadius="50px"
        size="sm"
        width="100%"
      />
      <br />
      <br />

      <SelectField placeholder="Select something!" />
    </>
  );
};

export default App;
