import {useState} from "react"
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div>
      {puppies.map((puppy) => {
        return <p className="puppy_name_component" onClick={()=>{setFeatPupId(puppy.id)
          
          console.log(featuredPup)
        }
        }key={puppy.id}>{puppy.name}
        </p>
      })}
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
  )
}

export default App
