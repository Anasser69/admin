import React,{useState} from 'react'
import "./bottom.css"
import Chart from "react-apexcharts";
import img from "../../../assets/laptop.png"
import img2 from "../../../assets/dimensions.png";
import img3 from "../../../assets/boy.png"

function Bottom() {

  const [state,setState]=useState({
    options:{
      colors:['#01565B','#5ABA8A'],
      chart:{
        id:'basic-bar',
        toolbar:{
          show:true,
          tools:{
            selection:false,
            zoom:false,
            zoomin:false,
            zoomout:false,
            pan:false,
            
          }
        },
      },

      xaxis:{
        categories:['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
      }
    },

    series:[
      {
        name:'Updates',
        data:[25,33,13,89,34,20,30]
      },
      {
        name:'New Tasks',
        data:[70,47,72,45,12,59,38]
      },
    ]
  })

  return (
    <div className='bottom flex'>
      <div className='graphDiv'>
        <span className="title">All Activities (Graphical View)</span>

        <Chart 
        options={state.options}
        series={state.series}
        type='area'
        width='500'
        />
      </div>

      <div className='scheduleDiv'>
        <span className='title'>Upcoming Schedule</span>

        <div className='singleTask flex'>
          <div className='imgDiv flex'>
            <img src={img} alt='TaskImage' />
          </div>
          <div className="taskInfo">
            <span className="task">Desk Time Redesign</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">09:30 AM</span>
        </div>
        <div className='singleTask flex'>
          <div className='imgDiv flex'>
            <img src={img2} alt='TaskImage' />
          </div>
          <div className="taskInfo">
            <span className="task">New Landing Page</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">10:30 AM</span>
        </div>
        <div className='singleTask flex'>
          <div className='imgDiv flex'>
            <img src={img3} alt='TaskImage' />
          </div>
          <div className="taskInfo">
            <span className="task">Create Animation</span>
            <span className="status">Working On</span>
          </div>
          <span className="time">11:59 AM</span>
        </div>

        <div className='btn'>
          See All Activities
        </div>

        
      </div>
    </div>
  )
}

export default Bottom