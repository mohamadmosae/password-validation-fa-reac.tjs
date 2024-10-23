import React from 'react'
import zxcvbn from 'zxcvbn';

function Progress({password}) {
const output=zxcvbn(password)
const num =output.score*100/4
console.log(num);
const color=()=>{
    switch (num) {
        case 0:return '#818181' ;
    case 25:return 'ea1111';
    case 50:return '#ffed00';
    case 75:return '#9bc158'
    case 100:return "#00b500"
        default:return "";
            
    }
}

const passcolor=()=>(
    {
        width:`${num}%`,
        background:color(),
        height:"7px"
    }
)
  return (
<>
<div>   
<div className="progress mt-3" style={{height:"7px"}}>
  <div className="progress-bar" style={passcolor()} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  
</div>
{
    num===0 && <p className='text-danger' >خیلی ضعیف</p>
}
{
    num===25 && <p className='text-danger' >خیلی </p>
}
{
    num===50 && <p className='text-warning' > متوسط</p>
}
{
    num===75 && <p className='text-secondary' >خوب </p>
}
{
    num===100 && <p className='text-success' >عالی </p>
}
</div>
</>
  )
}

export default Progress
