import React from 'react';
import {fetchDashboardDetails} from "../../redux/actions"

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {MATHS,CHEMISTRY,PHYSICS,BIOLOGY} from '../../constants/urls'
import { useHistory } from 'react-router';
// import { ReactSVG } from 'react-svg'
import { IoPlay } from 'react-icons/io5'

const Dashboard = () => {
    const dashDetail = useSelector(state => state.dashboard.orig_details, shallowEqual)
    const [dashboardItems, setDashboard] = React.useState(dashDetail || [])
    const [username] = React.useState('Devmuhammad')
    const dispatch = useDispatch()
    const history = useHistory()
    const topics = [
        {id:1, color:'maths', subject:'Mathematics',img:MATHS, title:'Understanding Motion' },
        {id:2, color:'physics', subject:'Physics',img:PHYSICS, title:'Light' },
        {id:3, color:'chemistry', subject:'Chemistry',img:CHEMISTRY, title:"Polution Of Water" },
        {id:4, color:'biology', subject:'Biology',img:BIOLOGY, title:"Microorganism"},
    ]

    React.useEffect(() =>{
        console.log(dashDetail)
        if (!dashDetail || dashDetail === undefined || dashDetail.length < 1){
            dispatch(fetchDashboardDetails())
        }
        
    },[])

    React.useEffect(() =>{
         setDashboard(dashDetail)        
    },[dashDetail])

    const openChapter = (id,name,chapter) =>{
        const chapterDet = {name, chapter}
        history.push('chapter/'+id, {chapterDet})
    }

    function showAvailableVids() {
        return(
            topics.map((topic) => {
                return (<div className="block">
                    <div key={topic.id} style={{backgroundImage:`url(${topic.img})`}} className={`flex bg-no-repeat bg-cover hover:shadow-lg cursor-pointer h-32 md:h-40 text-gray-800 rounded-3xl `}>
                       <div className={`flex items-center justify-center bg-${topic.color} bg-opacity-20 h-full w-full px-4 md:mx-0 md:px-8 py-4 rounded-3xl`}>
                            <div  className={`flex items-center justify-center relative rounded-full h-16 w-16 bg-white text-${topic.color} text-xl`}>
                                <IoPlay /> 
                            </div>

                       </div>
                    </div>
                        <div className="flex flex-col p-3">
                        <span className={`text-lg font-medium py-4 text-${topic.color}`}>
                            {topic.subject}
                        </span>
                        <span className={`text-xl font-semibold`}>
                            {topic.title}
                        </span>
                        </div>
                    </div>
                )
            })
        )
    }

    return(
        <div className="block overflow-hidden">
            <span className="font-bold text-3xl md:text-5xl text-gray-700 p-5 md:p-0 mt-2 md:mt-0">Hello {username},</span>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3 w-full  pt-8 md:pt-12">

                {dashboardItems && dashboardItems.map((dash) => (<div key={dash.id} id="box" onClick={()=> openChapter(dash.id,dash.name,dash.chapters)}  className={`grid grid-cols-2 gap-4 hover:shadow-xl cursor-pointer py-4 h-28 md:h-32 px-4 mx-4 md:mx-0 bg-${dash.color} text-white text-xl rounded-2xl md:px-8`}>
                    {/* <div style={{top : getRandomNumber(0, boxHt),left: getRandomNumber(0, boxWt)}} className={`absolute rounded-full h-16 w-16 bg-${dash.circle}`}> </div> */}
                    <span className="place-self-start w-10 ">
                        <img src={dash.icon} />
                    </span>
                    <span className="place-self-end ">{dash.name.toUpperCase()}</span>
                </div>
                ))}
             
            </div>
            <div className="block w-full mt-8 h-auto px-2 md:px-0">

                <div className="block  mb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-black text-xl md:text-2xl font-semibold p-1 md:p-3">
                            Recently watched topics
                        </span>
                        <span className="flex bg-maths p-1 px-3 text-md text-white rounded-lg cursor-pointer ">
                            SEE ALL
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 w-full pt-8">
                        {showAvailableVids()}
                    </div>
                </div>
                <div className="block  ">
                    <div className="flex justify-between items-center">
                        <span className="text-black text-xl md:text-2xl font-semibold p-1 md:p-3">
                            Recommended videos
                        </span>
                        <span className="flex bg-maths p-1 px-3 text-md text-white rounded-lg cursor-pointer ">
                            SEE ALL
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 w-full pt-8">
                        {showAvailableVids()}
                    </div>
                </div>


            </div>
            
        </div>
        

    )
}

export default Dashboard;