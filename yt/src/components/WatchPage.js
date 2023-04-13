import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CloseMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import VideoContainer from './VideoContainer';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const[VideosSearch] = useSearchParams()

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(CloseMenu())
    },[])
  return (
    <div className='px-5'>

 
    <div >
        <iframe
         width="1200" height="600" 
         src={"https://www.youtube.com/embed/"+VideosSearch.get("v")}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage