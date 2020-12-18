import React , { useState , useEffect  } from 'react'

// REDUX MODULE
import {  useSelector , useDispatch  } from 'react-redux'

// GLOBAL ACTION
import { changeDetail , setModal  } from '../../../Redux/Actions'

// STYLE
import './style.css'

// COMPONENT 
import StarComponent from '../starComponentFavorite'
import StarComponentDelete from '../starComponentDelete'

function TableBody () {

    // LOCAL STATE
    const [num,setNum] = useState(0)
    const [isRun,setIsRun] = useState(false)
    const [isClick,setIsClick] = useState(false)
    const [afterPush,setAfterPush] = useState(null)
    const [dataFavorite,setDataFavorite] = useState(JSON.parse(localStorage.getItem('favorite')))

     // CALL GLOBAL STATE
    const { movieList, selectedDetail } = useSelector( state=> state.data)

    // CALL DISPATCH
    const dispatch = useDispatch()

    // HOOKS ?
    useEffect(()=>{
        let timeEl;
        if (isRun && num < 120) {
            timeEl = setTimeout(()=>{ setNum(num+4) },10)
        }else {
            setIsRun(false)
            clearTimeout(timeEl)
        }
    },[isRun,num])

    // ADD FAVORITE
    let handleAddFavorite = (data) => {
        if (dataFavorite) {
            let condition  = true;
            let arrTemp = [...dataFavorite]
            arrTemp.forEach(el=>el.imdbID === data.imdbID ? condition = false : condition )
            condition && arrTemp.push(data)
            condition && setDataFavorite(arrTemp)
            condition && setIsClick(true)
            condition && setAfterPush(data)
            localStorage.setItem('favorite',JSON.stringify(arrTemp))
        }else {
            let result = [];
            result.push(data)
            setDataFavorite(result)
            setIsClick(true)
            setAfterPush(data)
            localStorage.setItem('favorite',JSON.stringify(result))
        }
    }

    // DELETE FAVORITE
    let handleDeleteFavorite = (id) => {
        let arrTemp = JSON.parse(localStorage.getItem('favorite'))
        let result = arrTemp.filter(e=>e.imdbID !== id)
        localStorage.setItem('favorite',JSON.stringify(result))
        setDataFavorite(result)
    }

    // FOR ANIMATION
    let styleRotate = (el) => {
        return selectedDetail && selectedDetail.imdbID === el.imdbID && isRun &&  `linear-gradient(90deg, #0033FF ${num}%,  #F5F5FA 0%)`
    }

    // CHECK DATA
    let checkDataFavorite = (elem,dataFavorite) => {
        let condition = true;
        dataFavorite && dataFavorite.forEach((el)=>{
            if (elem.imdbID === el.imdbID) {
                condition = false
            }
        })
        return condition  ? 
            <StarComponentDelete
                isClick={isClick}
                handleAddFavorite={handleAddFavorite}
                el={elem}
                afterPush={afterPush}
                isRun={isRun}
                selectedDetail={selectedDetail}
            /> : 
           <StarComponent
                isClick={isClick}
                handleAddFavorite={handleAddFavorite}
                handleDeleteFavorite={handleDeleteFavorite}
                el={elem}
                afterPush={afterPush}
                isRun={isRun}
                selectedDetail={selectedDetail}
           />
    }

    // RENDER DATA
    let renderMovie = () => {
        return movieList.map((el,index)=>{
            return (
                <tr 
                    key={el.imdbID} 
                    className={selectedDetail && selectedDetail.imdbID === el.imdbID && isRun && "tr-style"}
                    style={{background : styleRotate(el)}}
                >
                    <td 
                        style={{cursor : "pointer"}}
                        onClick={e=>handleDetailClick(el,e)}
                        className="td-style-56"
                    >
                        {el.Title}
                    </td>
                    <td className="td-style-56">{el.Year}</td>
                    <td className="td-style-56">{el.imdbID}</td>
                    <td>
                        {
                            checkDataFavorite(el,dataFavorite)
                        }
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
            {renderMovie()}
        </tbody>
    )

}

export default TableBody