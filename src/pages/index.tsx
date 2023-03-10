/**React */
import { useEffect } from 'react';

/**redux */
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import { getAllCondition } from '../redux/features/crudCondition'

function App() {
  const state = useAppSelector(state => state.FuctioncrudCondition)
	const dispatch = useAppDispatch()
  const getCondition = async () => {dispatch(getAllCondition())}

	useEffect(() => {
		getCondition ()
	})

  return (
    <div className="table">

      <div className='container'>
        <h1>General Table</h1>
        <table className='table__table'>
          <thead>
            <tr>
              <th>id</th>
              <th>cityid</th>
              <th>probability of precip</th>
              <th>relativehu midity</th>
              <th>probability of precip</th>
              <th>Last report time formato(YYYY/MM/DD)</th>
              <th>LLUEVE</th>
            </tr>
          </thead>

          <tbody>

            {
              state?.condition.results.slice(0,10).map((condition, index)=>(  
                  
              <tr key={index}>
                <td><a data-testid="individualLink" href={`/information/${condition._id}`} >{condition._id}</a></td>
                <td>{condition.cityid}</td>
                <td>{condition.name} </td>
                <td>{condition.probabilityofprecip} </td>
                <td>{condition.relativehumidity} </td>
                <td><p>{(new Date((condition['date-insert'])).toLocaleDateString())}</p> </td>
                <td>
                  <div  className={'table__lluvia ' + ((condition.probabilityofprecip>60 || condition.relativehumidity>50)? 'table__lluvia--active ':'' ) }> SI</div>
                </td>
              </tr>

              ))
            }

          </tbody>

        </table>
      </div>
    
    </div>
  )
}

export default App
