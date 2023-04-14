import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/Constant'
import { CacheResults } from '../utils/searchSlice'

const Head = () => {
  const dispatch = useDispatch()
 
  const [serachQuery, SetSearchQuery] = useState("");
  const [sugesestions, setSugesestions] = useState([]);
  const [showSugesestions, setShowSugesestions] = useState(false);
  const searchCache = useSelector((store)=>store.search);
  useEffect(() => {
    const timer = setTimeout(() =>
    {
      if(searchCache[serachQuery])
      {
        setSugesestions(searchCache[serachQuery])
      }else{
        getSearchSugsestions()
      }
    }
      , 200);
    return   ()=> {
      clearTimeout(timer);
    };
    
  }, [serachQuery])

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + serachQuery);
    const json = await data.json();
    dispatch(CacheResults({
      [serachQuery]:json[1]
    }
    ))
    setSugesestions(json[1])
  }

  const ToggleHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col m-2 p-5 shadow'>
      <div className='flex col-span-1 '>
        <img
          className='h-8 cursor-pointer'
          onClick={ToggleHandler}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt='HambargerMenu'></img>
        <a href='/'>
          <img
            className='h-8 mx-2'
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-3-3.png"
            alt='Logo'></img>
        </a>
      </div>
      <div className='col-span-10 px-10 '>
        <div>
        <input
          className='w-1/2 border border-gray-400 p-2 rounded-l-full'
          type="text"
          value={serachQuery}
          onChange={(e) => {
            SetSearchQuery(e.target.value)
          }}
          onFocus={()=>setShowSugesestions(true)}
          onBlur={()=>setShowSugesestions(false)}
          onScroll={()=>setShowSugesestions(false)} />
        <button
          className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200' >&#128269;</button>
      </div>
      {showSugesestions  && <div className='fixed px-5 py-2 w-[31rem]  shadowrounded-lg bg-white'>
       <ul>
      { sugesestions.map((s)=>( <li key={s} className='py-2 px-3 cursor-default shadow-sm hover:bg-gray-100'> &#128269; {s} </li>   
      ))
      }
       </ul>

      </div>
}
      </div>
    
      <div className='col-span-1 '>
        <img className='h-8'
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt='user' />
      </div>
    </div>
  )
}

export default Head