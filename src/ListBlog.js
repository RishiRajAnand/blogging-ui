import {
  Table, TableBody, TableHeader
} from '@patternfly/react-table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export function ListBlog({ wakeUp }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, [wakeUp]);

  function getAllBlogs() {
    axios.get('http://localhost:8080/blogs/blog').then(function (response) {
      // handle success
      console.log(response.data);

      const rowdata = response.data.map(b => {
        return { rowId: b.id, cells: [b.author, b.name] }
      });
      setBlogs(rowdata);
    });
  }

  const columns = ['Author', 'Title'];

  const actions = [
    {
      title: 'View',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowData.rowId)
    }, {
      title: 'Edit',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowData.rowId)
    }, {
      title: 'Delete',
      onClick: (event, rowId, rowData, extra) => {
        axios.delete('http://localhost:8080/blogs/blog/' + rowData.rowId).then(function (response) {
          getAllBlogs();
        }).catch(function (response) {
          console.log("Eroorrrrrrr");
        });
      }
    },];
  return (
    <React.Fragment>
      <Table aria-label="Simple Table" cells={columns} rows={blogs} actions={actions}>
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
}