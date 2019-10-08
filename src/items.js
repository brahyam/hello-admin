import React from 'react';
import { List, Datagrid, TextField, BooleanField, ChipField, FunctionField } from 'react-admin';

export const ItemList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ChipField source="category" />
      <ChipField source="subcategory" />
      <TextField source="name" />
      <FunctionField label="Available" render={record => record.isRented ? 'No': 'Yes'} />
    </Datagrid>
  </List>
);
