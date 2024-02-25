import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { Link } from 'react-router-dom';
import { deletuser } from './redux';

function Home() {
      const data =useSelector(state=>state.users)
      const dispatch = useDispatch()
      const deleteuser=(id)=>{
        dispatch(deletuser({id}))
      }
  return (
    <div className="App">
      <div className="containt">
        <h1>React Crud Application With Redux</h1>
        <Link to="/create" className='create'> Create +</Link>
        <table className='head'>
          <thead >
            <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Email</th>
                <th> Action</th>
            </tr>
          </thead>

          <tbody>
           {
            data.map(user=>( <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <Link to={`/Edit/${user.id}`} className='create' > Edit</Link>
              <button onClick={()=>{deleteuser(user.id)}} className='create' > Delet</button>
              </td>
          </tr>))
           }
           
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Home;