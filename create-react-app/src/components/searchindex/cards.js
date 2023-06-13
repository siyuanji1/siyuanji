import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useAuth} from "../../auth/Auth";
import {fetchCancelLike, fetchIsLiked, fetchLike} from "../../services/favorites";

// click favorite icon to favorite list page, click other parts inside card to detail page
function PetCard({ pet }) {
    // Component state
    const {user} = useAuth();
    const navigate = useNavigate();
    const [likeRecord, setLikeRecord] = useState(null);
    const [like, setLike] = useState(false);  // 0 for non-like, 1 for like


    // Fetch Function
    useEffect(() => {
        if (user) {
            const email = user.email;
            fetchIsLiked(email, pet.id)
              .then(liked => {
                  if (liked) {
                    setLikeRecord(liked);
                    setLike(true);
                  } else {
                      setLike(false);
                  }
              })
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Event handler for like state change
    const handleLike = (e) => {
        if (!user) {
            return navigate('/signin');
        }
        const email = user.email;
        if (!like) {
            fetchLike(email, pet.id)
              .then((data) => {
                  setLike(true);
              })
        } else {
          if (likeRecord) {
            fetchCancelLike(likeRecord.id)
              .then(() => {
                setLike(false);
              })
          }
        }

    };

    return (
        <div className="col mb-4">
            <div className="card h-100">
                <span className="favorite-icon" onClick={handleLike}>
                    {like ? (
                        <i className="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i>
                    ) : (
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    )}
                </span>
                <Link to={`/detail/${pet.id}`} aria-label="Go to dog detail page">
                    <img src={pet.images[0]} className="card-img-top" alt={pet.name} />
                    <div className="card-body">
                        <p className="card-title" style={{fontSize: '1.2em', fontWeight: 'bold'}}>{pet.name}</p>
                        <p className="card-text">Breed: {pet.breed}</p>
                        <p className="card-text">Age: {pet.age}</p>
                        <p className="card-text">Gender: {pet.gender}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

function PetList({ pets }) {
    const petCardArray = pets.map((pet) => {


        return (
            <div key={pet.id}>
                <PetCard pet={pet} />
            </div>
        )
    })

    return (
        <section className="bg-color">
            <div className="container-full">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {petCardArray}
                </div>
            </div>
        </section>
    );
};

export default PetList;
