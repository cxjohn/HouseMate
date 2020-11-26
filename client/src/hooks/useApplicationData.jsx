import { useState, useEffect } from 'react';
import axios from 'axios';

function useApplicationData() {

  // let [form, setForm] = useState(null);
  // let [data, setData] = useState([])

  // const setDay = day => setState({ ...state, day });      
  /* const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  */
 // state is an object with two keys from and data
  const [state, setState] = useState({
    form: "none",
    user: {},
    history: [],
    summary: {},
    settle: {},
    friends_list: []
  })

  // useEffect(() => {
    
  //   axios({
  //     method: 'GET',
  //     url: '/api/users',
  //   }).then(({data}) => {
  //     // console.log('data: ', data[0])
  //     setState({...state, data})
  //   }).catch(error => console.log(error))

  // }, [])
  // }, [])

  return { state, setState }

};

export default useApplicationData;