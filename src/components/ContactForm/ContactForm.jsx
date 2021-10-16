import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts-operations';
import { getContacts } from 'redux/contacts-selectors';
import { ConteinerForm, Label, Button, Input } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const contact = { name, number };
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const duplicateContact = contacts.find(contact => {
      return contact.name === name;
    });
    if (duplicateContact) {
      toast.warn(`${name} is in the phonebook!!!`);
      resetState();
      return [...contacts];
    }
    dispatch(addContact(contact));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <ConteinerForm>
      <form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChangeName}
            value={name}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={handleChangeNumber}
            value={number}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </ConteinerForm>
  );
}
