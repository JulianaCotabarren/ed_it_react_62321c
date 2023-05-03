import { useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  useEffect(() => {
    const getAllPosts = () => {

      //Petición Sincrónica
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=> response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
    }
    getAllPosts()
  
    const getPost = async (id) => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getPost(1)

  }, [])
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
