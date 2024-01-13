import React from "react";

const PhotoPicker = ({ onChange }) => {
  const component = <input type="file" hidden id="photo-picker" onChange={onChange}/>
}

export default PhotoPicker;
