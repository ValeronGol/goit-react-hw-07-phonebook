export const getContacts = state => state.phonebook.contacts;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = state.phonebook.filter;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
