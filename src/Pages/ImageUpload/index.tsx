import React, { useState } from 'react';
import { FormGroup, FormLabel } from '@material-ui/core';


interface type{
e:any[],
products: undefined,
setProducts:object,
// ...products:object,
}
const ImageUpload = () => {

//     const [Files, setFiles] = useState({ files: [] });
//     const fileSelectedHandler = (e) => {
//         setFiles({ files: [...Files.files, ...e.target.files] })
//     }
// }

const [products, setProducts]=useState();

// const handleInput = (e) => {
//     let updateValues = { ...products };
//     updateValues[e.target.name] = e.target.value;
//     setProducts(updateValues);
//     console.log("Update input values", updateValues);
//     };

//     const handleSliderImages = (e) => {
//         if (e.target.files) {
//         setProducts({ ...products, slider_images: [...e.target.files] });
//         }
//         console.log("Update slider images", products);
//       };

return (
    <>
        <FormGroup className="my-3">
            {/* <FormLabel for="slider_images">Slider Images</FormLabel>
            <CustomInput
                multiple
                type="file"
                id="slider_images"
                name="slider_images"
                onChange={handleSliderImages}
            /> */}
        </FormGroup>
    </>
);
};

export default ImageUpload;