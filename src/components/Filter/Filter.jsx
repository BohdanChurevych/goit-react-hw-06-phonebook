import { useDispatch } from 'react-redux';
import { onFilter } from 'components/Redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filteredContacts = e => {
    dispatch(onFilter(e.currentTarget.value.toLowerCase()));

  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <label>
        <input
          onChange={filteredContacts}
          // value={value}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

export default Filter;