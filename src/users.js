import React from 'react';
import { List, Datagrid, EmailField, TextField, DateField, SimpleForm, TextInput, DateInput, Edit } from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="name" />
      <TextInput source="role" />
      <TextInput source="qr" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);
