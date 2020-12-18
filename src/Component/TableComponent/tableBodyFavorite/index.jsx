import React , { useState , useEffect } from 'react'

// REDUX MODULE
import {  useSelector , useDispatch  } from 'react-redux'

// GLOBAL ACTION
import { changeDetail , setModal  } from '../../../Redux/Actions'


function TableBody (props) {

    console.log('SKFMDSKMFSKDMFSKDMKFKSDM')


    // LOCAL STATE
    const [num,setNum] = useState(0)
    const [isRun,setIsRun] = useState(false)
    const [loopResult,setLoopResult] = useState([])
    const [dataFavorite] = useState(JSON.parse(localStorage.getItem('favorite')))

     // CALL GLOBAL STATE
    const { 
     selectedDetail
    } = useSelector( state=> state.data)

    // CALL DISPATCH
    const dispatch = useDispatch()

    // HOOKS ?
    useEffect(()=>{
        let timeEl;
        if (isRun && num < 120) {
            timeEl = setTimeout(()=>{
                setNum(num+4)
            },10)
        }else {
            setIsRun(false)
            clearTimeout(timeEl)
            // setNum(0)
        }
    },[isRun,num])


    // DELETE FAVORITE
    let handleDeleteFavorit = (id) => {
        let arrTemp = JSON.parse(localStorage.getItem('favorite'))
        let result = arrTemp.filter(e=>e.imdbID !== id)
        localStorage.setItem('favorite',JSON.stringify(result))
        setLoopResult(result)
    }

    useEffect(()=>{
        setLoopResult(JSON.parse(localStorage.getItem('favorite')) )
    },[])

    // RENDER DATA
    let renderMovie = () => {
        
        return loopResult.map((el,index)=>{
            return (
                <tr 
                    key={el.imdbID} 
                    className={  selectedDetail && selectedDetail.imdbID === el.imdbID && isRun && "tr-style"}
                    style={
                            {
                                background : selectedDetail && selectedDetail.imdbID === el.imdbID && isRun &&  `linear-gradient(90deg, #0033FF ${num}%,  #F5F5FA 0%)`,
                            }
                    }
                >
                    <td 
                        style={{cursor : "pointer"}}
                        onClick={e=>handleDetailClick(el,e)}
                    >
                        {el.Title}
                    </td>
                    <td>{el.Year}</td>
                    <td>{el.imdbID}</td>
                    <td>
                        <div 
                            className="star-outside-content2">
                            <span 
                                class="fa fa-star star-favorite"
                                onClick={e=> handleDeleteFavorit(el.imdbID)}
                                style={{color : selectedDetail && selectedDetail.imdbID === el.imdbID && isRun && "#0033FF"}}
                            >
                            </span>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    // HANDLE DETAIL MODAL AND ANIMATION
    let handleDetailClick = (el,e) => {
        setIsRun(true)
        dispatch(changeDetail(el))
        setTimeout(()=>{
            dispatch(setModal(true))
            setNum(0)
        },800 )
    }
    
    return (
        <tbody>
            { dataFavorite && renderMovie()}
        </tbody>
    )

}

export default TableBody