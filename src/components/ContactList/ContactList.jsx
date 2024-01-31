import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Title } from 'styles/Shared.styles';
import { Book, Contact, Item } from './ContactList.styled';
import { selectContacts } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/filter/slice';
import { deleteContact, fetchContact } from '../../redux/contacts/operations';
import { createSelector } from '@reduxjs/toolkit';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filter))
  );
  const contacts = useSelector(filteredContacts);

  return (
    <>
      <Title>Contacts</Title>
      <Book>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Contact>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </Contact>
            <Button
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              Delete
            </Button>
          </Item>
        ))}
      </Book>
    </>
  );
};
