/**React */
import { useEffect } from 'react';

/**redux */
import {useAppDispatch, useAppSelector} from './redux/hooks.ts'
import { GetCondicion } from './service/condition.ts'


function App() {
  const state = useAppSelector(state => state.fuctionGetCondition)
  const dispatch= useAppDispatch()

  const getCondition = async()=>{
    dispatch(GetCondicion())
  }

  console.log()

  useEffect(()=>{
    getCondition()
  })

  
  return (
    <div className="App">
      <p>{state} </p>
      {/* <table>
        <th>id</th>
        <th>cityid</th>
        <th>name</th>
        <th>id</th>
        <th>probability of precip</th>
        <th>relativehu midity</th>
        <th>probability of precip</th>
        <th>Last report time formato(YYYY/MM/DD)</th>
        <th>LLUEVE</th>

        <tr>Dato1</tr>
        <tr>Dato2</tr>
      </table> */}

    </div>
  );
}

export default App;
