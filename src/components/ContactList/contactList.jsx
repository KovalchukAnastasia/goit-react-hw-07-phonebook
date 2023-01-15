import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/button';
import { List, ListItem, ListText } from './contactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { useEffect } from 'react';
// import { ProgressBar } from 'react-loader-spinner';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {/* {isLoading && (
        <ProgressBar
          height="50"
          width="50"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#292929"
          barColor="#9a9a9a"
        />
      )} */}

      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListText>
            {name}: {number}
          </ListText>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
