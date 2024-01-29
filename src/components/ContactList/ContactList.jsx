import { useDispatch, useSelector } from 'react-redux';
import { Button, Title } from 'styles/Shared.styles';
import { Book, Contact, Item } from './ContactList.styled';
import { deleteContact, selectContacts } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/filter/slice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <Title>Contacts</Title>
      <Book>
        {filteredContacts.map(contact => (
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
