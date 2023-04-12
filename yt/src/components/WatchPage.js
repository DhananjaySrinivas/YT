import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CloseMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import VideoContainer from './VideoContainer';

const WatchPage = () => {
    const[VideosSearch] = useSearchParams()

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(CloseMenu())
    },[])
  return (
    <div className='px-5'>
        <iframe
         width="1200" height="600" 
         src={"https://www.youtube.com/embed/"+VideosSearch.get("v")}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage