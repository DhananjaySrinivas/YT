import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "./../utils/Constant"
import VideoCard  from './VideoCard';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getMovies();
  },[])

  const getMovies= async()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }

  return (
    
    <div className='flex flex-wrap'>
      {videos.map(videos=>{
       return <VideoCard key={videos.id} info={videos}/>
      })}
      
      </div>
  )
}

export default VideoContainer