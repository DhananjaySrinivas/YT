import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "./../utils/Constant"
import VideoCard, { AdVideoCard }  from './VideoCard';
import { Link } from 'react-router-dom';

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
     {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map(videos=>{
       return <Link to ={"/watch?v="+videos.id} key={videos.id}> <VideoCard  info={videos}/></Link>
      })}
      
      </div>
  )
}

export default VideoContainer