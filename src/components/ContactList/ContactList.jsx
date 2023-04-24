import { DeleteItem, Span } from './StyledListContact';
import PropTypes from 'prop-types';

export const ContactList = ({contacts,onDeleteContact  })=>  {
   return (
      <div>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Span>
                {name}: {number}
              </Span>
              <DeleteItem
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </DeleteItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }


ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
