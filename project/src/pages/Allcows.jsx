import React, { useEffect, useState } from 'react';
import { Cog as Cow } from 'lucide-react';
import CowCard from '../components/CowCard';
import { cows } from '../data/cows';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [allCows, setAllCows] = useState([]);
  const [user,setUser] = useState('');

  useEffect(() => {
    ;(async () => {
      try {
        const userResponse = await axios.get(
          "http://localhost:4200/api/owners/getOwnerDetsils"
        );
        setUser(userResponse.data.id);
      } catch (error) {
        console.error(error);
      }
    })();

    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4200/api/owners/${user}/cows`);
        console.log(response.data);
        
       if(response.status == "200")
        setAllCows(response.data);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if(user) fetchData();
    else navigate("/signIn");
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {allCows.map((cow) => (
            <CowCard key={cow._id} cow={cow} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;