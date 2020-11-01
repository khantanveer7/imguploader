import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import './UploadForm.css'

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [err, setErr] = useState(null)
    const types = ['image/png', 'image/jpeg', 'image/svg']
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        // console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setErr('')
        }
        else {
            setFile(null);
            setErr('Please Select Iamge File Png or Jpeg')
        }
    }
    return (
        <div>
            <form action="">
                <input className="form__input" type="file" onChange={changeHandler} />
            </form>
            <div className="output">
                {err && <div className='error'>{err}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </div>
    )
}

export default UploadForm
