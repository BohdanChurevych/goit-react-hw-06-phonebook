import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContaactsList';
import Filter from '../Filter/Filter';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;