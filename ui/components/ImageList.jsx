import React, { } from 'react';
import { unflatten } from 'flat';
import { DropZone, Label, Box } from 'admin-bro';
import ReactDOM from 'react-dom';

const ImageList = (props) => {
  console.log("IIIIIå")
  const { property, record, onChange } = props;
  let savedFiles = [];
  const fileObject = unflatten(record.params)[property.name];
  const onUpload = (files) => {
    const newRecord = {
      ...record,
    };
    const [file] = files;
    savedFiles = files;
    console.log(files);
    onChange({
      ...newRecord,

      params: {
        ...newRecord.params,
        imageFiles: files,
      },
    });
    event.preventDefault();
  };
  const datum = props.record.params;
  const keylist = Object.keys(datum);
  const imageObj = {};
  const images = [];
  for (let i = 0; i < keylist.length; i++) {
    if (keylist[i].includes('images')) {
      const key = keylist[i];
      const index = key.split('.')[1];
      const objKey = key.split('.')[2];
      const value = datum[keylist[i]];
      if (imageObj.hasOwnProperty(index)) {
        console.log('heyo');
        imageObj[index][objKey] = value;
      } else {
        const obj = {};
        obj[objKey] = value;
        imageObj[index] = obj;
      }
    }
  }
  console.log(imageObj);
  const mimeTypes = ['image/png', 'image/jpeg'];
  Object.values(imageObj).forEach((value) => {
    images.push(value);
  });
  console.log(images);
  const comp = [];
  images.forEach((image, index) => {

    comp.push(
      <div className='card'>
        <img src={image.image} key={index} className='cardimg'/>
      </div>,
    );
  });
  return (
    <Box>

        <div className="cards">
          {comp}
        </div>

    </Box>
  );
};

export default ImageList;
