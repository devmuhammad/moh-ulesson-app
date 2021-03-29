import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useHistory, useLocation } from 'react-router';

const Chapters = () => {
    const location = useLocation()
    const history = useHistory()

    const [chapterDetails, setChapter] = React.useState()
    const [subjectName, setSubjName] = React.useState()
    React.useEffect(()=> {
      setChapter(location.state.chapterDet.chapter)
      setSubjName(location.state.chapterDet.name)
    },[chapterDetails,subjectName])

    const showLessons = (chpter) =>{
      const {lessons} = chpter

      const goLesson = (lesson) => {
        const chptrName = chpter.name
        const lessonDet = {lesson, chptrName}
        history.push('/lesson/'+lesson.id, {lessonDet})
      }

      return ( lessons.map((lesson) => {

        return (
          <div key={lesson.id} onClick={() => goLesson(lesson)} className="grid grid-rows-2 gap-4 hover:shadow-xl cursor-pointer py-4 mb-8 h-36 md:h-48 px-4 md:mx-0 bg-white text-gray-700 text-xl font-semibold rounded-2xl md:px-8">
             <span className="w-16 place-self-center">
                  <img src={lesson.icon} />
              </span >
              <span className="place-self-center">{lesson.name.length > 20 ? lesson.name.substring(0, 20)+'...' : lesson.name}</span>
          </div>
        )
      }))

    }

    return (

      <div className="block overflow-hidden">
            <span className=" flex flex-row items-center font-bold text-2xl md:text-4xl text-gray-800 :mb-2 md:mb-10 p-3 md:p-0">
              <HiOutlineArrowNarrowLeft className="cursor-pointer text-3xl middle" onClick={() => history.goBack()} /> 
              &nbsp;&nbsp; {subjectName}
            </span>
            {chapterDetails && chapterDetails.map((chapter, index) => (
              <div className="px-10">
                <span className="text-black text-2xl font-semibold p-3">
                  {index+1}. {chapter.name}
                </span>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 w-full pt-4">
                    {showLessons(chapter)}
                  </div>
            </div>
            ))}
      </div>
    )
}

export default Chapters