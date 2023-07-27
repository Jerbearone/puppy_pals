import {useState} from "react"
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div className="main_div">
      <div className="puppy_name_list">

        {puppies.map((puppy) => {
          return <p className="puppy_names_view" onClick={()=>{setFeatPupId(puppy.id)
            
            console.log(featuredPup)
          }
          }key={puppy.id}>{puppy.name}
          </p>
        })}


      </div> 

      <div className="featured_puppy_view">

        {featPupId && (
          <div>
            <h2 className="featured_puppy_name">{featuredPup.name}</h2>
            <ul className="featured_puppy_list">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}


      </div>
    </div>
  )
}

export default App
