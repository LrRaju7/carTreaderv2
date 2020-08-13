import React, { } from 'react';
import { unflatten } from 'flat';
import { DropZone,Button, Label, useRecord, Box, useTranslation, ApiClient } from 'admin-bro';
import ReactDOM from 'react-dom';

const Approve = (props) => {
  const api = new ApiClient()
  console.log(api)
  console.log(props)
  const { record: initialRecord, resource, action } = props

  const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submiting')
    submit().then((res) => {
       console.log("res", res)  
    })
  }  
  const { translateButton } = useTranslation()  
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
    >

        <div className="cards">
          hi
        </div>

      <Button variant="primary" size="lg">
        {translateButton('approve', resource.id)}
      </Button>
    </Box>
  );
};

export default Approve;
