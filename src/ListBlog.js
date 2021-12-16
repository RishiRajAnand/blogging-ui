import { ButtonVariant } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
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
      setBlogs(response.data);

    });
  }

  const columns = ['Author', 'Title'];
  const rows = [
    ['one', 'two'],
    ['a', 'two']
  ];

  const defaultActions = [
    {
      title: 'View',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    },
    {
      title: 'Delete',
      onClick: (event, rowId, rowData, extra) => {
        // call deleteByD Here

        console.log("rowdata", extra);
        console.log("rowId", rowData);
        // axios.delete('http://localhost:8080/blogs/blog/' + 1).then(function (response) {

        // //  getAllBlogs();

        // });
      }
    },
    {
      title: 'Update',
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)
    }
  ];
  return (
    <React.Fragment>
      <TableComposable aria-label="Actions table">
        <Thead>
          <Tr>
            <Th>{columns[0]}</Th>
            <Th>{columns[1]}</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {blogs.map((blog, rowIndex) => (
            <Tr key={blog.id} id={blog.id}>
              <Td key={`${rowIndex}_${blog.author}`} dataLabel={columns[0]}>
                {blog.author}
              </Td>
              <Td key={`${rowIndex}_${blog.name}`} dataLabel={columns[1]}>
                {blog.name}
              </Td>
              <Td
                key={`${rowIndex}_5`}
                actions={{
                  items: defaultActions
                }}
              />
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
}