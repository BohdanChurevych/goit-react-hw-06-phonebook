import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, Form, Text, Input, Submit } from './ContactForm.styled';
import { addContact } from 'components/Redux/contacts/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    )
      ? alert(`${name.value} is already in contacts`)
      : dispatch(
          addContact({ name: name.value, number: number.value, id: nanoid(3) })
        );

    name.value = '';
    number.value = '';
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <label>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;