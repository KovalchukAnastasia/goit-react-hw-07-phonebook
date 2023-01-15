import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';
import { GlobalStyle } from './GlobalStyle';
import { Phonebook, MainTitle, ContactTitle } from './Layout';
// import { useSelector } from 'react-redux';
// import { selectContacts } from '../redux/selectors';

export default function App() {
  // const contacts = useSelector(selectContacts);
  // console.log(contacts);
  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {
        /*contacts.length > 0 &&*/ <>
          <Filter />
          <ContactList />
        </>
      }
      <GlobalStyle />
    </Phonebook>
  );
}
