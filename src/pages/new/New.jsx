import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./New.scss";
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import { useState } from 'react';

function New({inputs,title}) {

  const [file, setFile] = useState("");
  console.log(file)
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
            <h1 >{title}</h1>
        </div>
        <div className="bottom">
            <div className="left">
              <img src={file? URL.createObjectURL(file):
                   'https://images.pexels.com/photos/5437586/pexels-photo-5437586.jpeg'
                }
               alt='image' />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor='file'>
                    Image <DriveFolderUploadRoundedIcon className='icon'/> 
                  </label>
                  <input type="file" id='file' 
                  style={{display: 'none'}}
                  onChange={e=>setFile(e.target.files[0])}/>
                </div>

                {inputs.map(input =>(
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder}/>
                    </div>
                ))}
                <button>Send</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New