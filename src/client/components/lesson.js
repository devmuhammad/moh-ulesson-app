import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useHistory, useLocation } from 'react-router'
import {NXTBUTTON} from '../../constants/urls'

const Lesson = () => {
    const location = useLocation()
    const history = useHistory()
    const [lessonDet, setLesson] = React.useState(location.state.lessonDet.lesson)
    const [chapterName, setChapt] = React.useState(location.state.lessonDet.chptrName)


    return (
        <div className="block overflow-hidden">
            <HiOutlineArrowNarrowLeft className="cursor-pointer text-3xl " onClick={() => history.goBack()} />
            <div className="flex flex-col items-center justify-center"> 
                <video 
                className="w-2/4"
                controls 
                autoPlay={false}
                src={lessonDet.media_url} />
                <span className="text-black text-2xl font-semibold p-3 py-8">
                  {lessonDet.name}
                </span>
                <span className="text-gray-400 text-lg font-medium p-3 ">
                  {chapterName}
                </span>
                <button style={{backgroundImage:`url(${NXTBUTTON})`}} className="p-2 px-24 rounded-lg text-white text-lg">NEXT</button>
            </div>
        </div>
    )
}

export default Lesson