/**React */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**redux */
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import { getOneCondition } from '../redux/features/crudCondition'

function Information() {
  const state = useAppSelector(state => state.FuctioncrudCondition)
	const dispatch = useAppDispatch()

  /**GetId */
  const { id } = useParams();
  const _id = id as string
  
  const getCondition = async () => {dispatch(getOneCondition(_id))}

	useEffect(() => {
		getCondition ()
	})

  return (
    <div className="information">

      <div className='container'>

        <h2>Detalles de información</h2>

          <div className='information__information'>
            <h1>Id</h1>
            <p>{state.oneCondition.results[0]._id} </p>
          </div>

          <div className='information__information'>
            <h1>cityid</h1>
            <p>{state.oneCondition.results[0].cityid} </p>
          </div>

          <div className='information__information'>
            <h1>probabilityofprecip</h1>
            <p>{state.oneCondition.results[0].probabilityofprecip} </p>
          </div>

          <div className='information__information'>
            <h1>relativehumidity</h1>
            <p>{state.oneCondition.results[0].relativehumidity} </p>
          </div>

          <div className='information__information'>
            <h1>state</h1>
            <p>{state.oneCondition.results[0].state} </p>
          </div>

          <div className='information__information'>
            <h1>Name</h1>
            <p>{state.oneCondition.results[0].name} </p>
          </div>

          <div className='information__information'>
            <h1>validdateutc</h1>
            <p>{state.oneCondition.results[0].validdateut} </p>
          </div>

          <div className='information__information'>
            <h1>winddirectioncardina</h1>
            <p>{state.oneCondition.results[0].winddirectioncardinal} </p>
          </div>

          <div className='information__information'>
            <h1>date-insert</h1>
            <p>{state.oneCondition.results[0]['date-insert']} </p>
          </div>

          <div className='information__information'>
            <h1>longitude</h1>
            <p>{state.oneCondition.results[0].longitude} </p>
          </div>

          <div className='information__information'>
            <h1>skydescriptionlong</h1>
            <p>{state.oneCondition.results[0].skydescriptionlong} </p>
          </div>

      </div>

    </div>
  )
}

export default Information
