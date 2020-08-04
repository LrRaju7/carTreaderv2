import React, {  } from "react";
import { unflatten } from 'flat';
import { DropZone, Label, Box } from "admin-bro";
import ReactDOM from 'react-dom';

const ImageUpload = (props) => {
    const {property, record, onChange} = props
    var savedFiles = []
    const fileObject = unflatten(record.params)[property.name]
    const onUpload = (files) => {
        const newRecord = {
            ...record
        }
        const [file] = files
        savedFiles = files
        console.log(files)
        onChange({
            ...newRecord,

            params: {
                ...newRecord.params,
                imageFiles: files
            }
        })
        event.preventDefault()
    }
    const datum = props.record.params
    const keylist = Object.keys(datum);
    let imageObj = {}
    const images = []
    for (var i = 0; i < keylist.length; i++) {
        if (keylist[i].includes("images")) {
            let key = keylist[i]
            let index = key.split(".")[1]
            let objKey = key.split(".")[2]
            let value = datum[keylist[i]]
            if (imageObj.hasOwnProperty(index)) {
                console.log('heyo')
                imageObj[index][objKey] = value
            } else {
                let obj = {}
                obj[objKey] = value
                imageObj[index] = obj
            }

        }
    }
    console.log(imageObj)
    const mimeTypes = ["image/png", "image/jpeg"]
    Object.values(imageObj).forEach((value) => {
        images.push(value)
    })
    console.log(images)
    let comp = []
    images.forEach((image, index) => {
        comp.push(
            <div>
              <img src={image.image} key={index}/>
            </div>
        )
    })
    return (
        <Box>

                {comp}

      <br/>
      <Label>{property.label}</Label>
      <DropZone multiple onChange={onUpload} validate={{
            mimeTypes
        }} />
      <br/>
    </Box>
    )
}

export default ImageUpload;