import React from 'react';
import styles from './contacts.module.css';
import { NavLink } from 'react-router-dom';
import NameContacts from './NameContacts';
import { PropTypes } from 'prop-types';
import Avatar from '../App/Avatar/Avatar';

function Contact(props) {
  return (
    <div className={styles.contacts}>
      <NavLink
        to={`/contact/${props.contact._id}`}
      >
        <li>
          <Avatar
            fullname={props.contact.fullname}
            size={'medium'}
            online={props.contact.online}
          />
          <div className={styles['info_block']}>
            <NameContacts contacts={props.contact} />
          </div>
        </li>
      </NavLink>
    </div>
  );
}

Contact.propTypes = {
  _id: PropTypes.string,
  contact: PropTypes.object,
};
export default Contact;
