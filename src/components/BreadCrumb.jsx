import React from 'react'
import { useLocation } from 'react-router';

const BreadCrumb = () => {
    const currentLocation=useLocation()
    const {pathname}=currentLocation
    const getBreadCrumb=(pathname)=>{
        if(pathname === '/'){
            return <p className='text-gray-400 capitalize font-medium'>Home</p>
        }
        else if(pathname.startsWith('/about')){
            const modifiedPathName=pathname.replaceAll('/about/',"")
            if(modifiedPathName.includes('-')){
                const finalPathName=modifiedPathName.replaceAll('-',' ');
                return <p className='text-gray-400 capitalize font-medium'>About {'>'} {finalPathName}</p>
            }
            return <p className='text-gray-400 capitalize font-medium'>About {'>'} {modifiedPathName}</p>
        }
        else{
            const modifiedPathName=pathname.replaceAll('/','');
            if(modifiedPathName.includes('-')){
                const finalPathName=modifiedPathName.replaceAll('-',' ');
                return <p className='text-gray-400 capitalize font-medium'> {finalPathName}</p>
            }
            return <p className='text-gray-400 capitalize font-medium'> {modifiedPathName}</p>
        }
    }
    
  return (
    <div>
        {
            getBreadCrumb(pathname)
        }
    </div>
  )
}

export default BreadCrumb