import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    const { fileName, filePath } = res.data;
    setUploadedFile({ fileName, filePath });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='file'
            id='customFile'
            onChange={onChange}
          />
        </div>
      </form>
    </Fragment>
  );
};

export default FileUpload;