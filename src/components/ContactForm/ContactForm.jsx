import { Button, Title } from 'styles/Shared.styles';
import { Input, Label, Phonebook } from './ContactForm.styled';
import { addContact, selectContacts } from '../../redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Phonebook onSubmit={onSubmit}>
        <Label>
          Name
          <Input type="text" name="name" required />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" required />
        </Label>
        <Button>Add contact</Button>
      </Phonebook>
    </>
  );
}
