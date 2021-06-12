import { useState, useEffect } from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import simpleRestProvider from "ra-data-json-server";
import "./App.scss";

const dataProvider = simpleRestProvider ("https://jsonplaceholder.typicode.com/todos");

const Post = (props) => {

  console.log("props", props)
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="userId" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};

function App() {
console.log(dataProvider)

  return (
    <>
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={Post} />
    </Admin>
    </>
  );
}

export default App;
