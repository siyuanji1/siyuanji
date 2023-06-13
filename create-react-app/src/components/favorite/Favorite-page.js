import React, { useState, useEffect } from 'react';
import PetList from '../searchindex/cards.js';
import {useAuth} from "../../auth/Auth";
import {fetchLikesOfUser} from "../../services/favorites";

export default function Favorite() {
    // react Hook For State Handler
    const [pets,setPets] = useState([]);
    const {user} = useAuth();
    // Fetch Function
    useEffect(()=>{
       if (user) {
           fetchLikesOfUser(user.email)
             .then(data => {
                 setPets(data || []);
             })
       }
      // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    return (
        <div>
            {pets.length > 0 && (
                <PetList pets={pets} />
            )}
            {pets.length === 0 && (<div className={'empty'}>
          <h3>No Paws in your favorite list!</h3>
          <h3>Find your lovely paws now!</h3>
          <img src="/img/dog_empty.gif" alt={"No Data"} width={400}/>
        </div>)
            }
        </div>
    );
}
