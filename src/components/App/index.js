import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import MainContainer from '../MainContainer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainContainer title="FAQs" />
    </ThemeProvider>
  );
}

export default App;
