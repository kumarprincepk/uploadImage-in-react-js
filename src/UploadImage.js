import React, {useRef, useState, useEffect} from 'react';
import './Uploadimage.css';

export default function UploadImage() {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState();
    const  [image, setImage] = useState();
    useEffect(()=>{
        if(image){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        }else{
            setPreview(null);
        }
    }, [image]);

  return (
    <>
    <h1>Upload Profile Picture</h1>
<form className='uploadimage'>
    {preview ? (<img src={preview}  className="imagesize" />) : (
    <button
    onClick={(e)=>{e.preventDefault();
    fileInputRef.current.click();
    }}
    className="imagesize">
    Add image
    </button>)}
    <input type="file" style={{display:"none"}} ref={fileInputRef}
    accept="image/*"

        onChange={(e)=>{
            const file= e.target.files[0];
            if(file && file.type.substr(0,5) === "image"){
                setImage(file);
            }else{
                setImage(null);
            }
        }}
    />
    
</form>
    </>
  )
}