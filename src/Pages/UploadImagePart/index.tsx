import FileUploadIcon from '@mui/icons-material/FileUpload';

import React, { useState } from 'react';




 const UploadImagePart = () => {
    // let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

   
        return (
            <div className="form-group">
            {/* <label htmlFor={id} className="text-primary font-weight-bold">{label}</label> */}
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                    <FileUploadIcon/>
                    </div>
                    {/* <input multiple className="file-input" type="file" id={id} onChange={handleChange} /> */}
                </div>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            {/* <Progress value={uploadProgress} /> */}
                        </div>
                    ) : null
                }
            </div>
            <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs && !isUploding ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>
        </div>
    );
};

export default UploadImagePart;