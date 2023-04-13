import { deleteContact } from 'components/Redux/contacts/contactsSlice';
import { Span, DeleteItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const deleteContacts = id => {
    return dispatch(deleteContact(id));
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filtered?.length > 0 && (
        <ul>
          {filtered.map(({ id, name, number }) => (
            <li key={id}>
              <Span>
                {name}: {number}
              </Span>
              <DeleteItem type="button" onClick={() => deleteContacts(id)}>
                Delete
              </DeleteItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;