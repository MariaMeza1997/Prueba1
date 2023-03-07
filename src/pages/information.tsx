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
      <h2>Detalles de información</h2>

      <div className='information__information'>
      <h1>Id</h1>
      <p>{state.oneCondition.results[0]._id} </p>
      </div>

      <div className='information__information'>
      <h1>Name</h1>
      <p>{state.oneCondition.results[0].name} </p>
      </div>

      <div className='information__information'>
      <h1>Name</h1>
      <p>{state.oneCondition.results[0].name} </p>
      </div>
      


    </div>
  )
}

export default Information
