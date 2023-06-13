import React, { useState } from 'react';

const breeds = [
  {
    id: 1,
    type: "German Shepherd",
    image: "img/german-shepherd.jpeg",
    gender: "Male",
    lifespan: "9-11",
    habits: ["Alarms", "Activity"],
    weight: "75 Ibs",
    size: "Large",
    personality: ["Confidence", "Smart", "Courageous"],
  },
  {
    id: 2,
    type: "Golden Retriever",
    image: "img/golden-retriever.jpeg",
    gender: "Female",
    lifespan: "8-11",
    habits: ["Friendly", "Devoted"],
    weight: "51 Ibs",
    size: "Large",
    personality: ["Confidence", "Intelligent", "Funny"],
  },
  {
    id: 3,
    type: "Australian Shepherd",
    image: "img/australian-shepherd.jpeg",
    gender: "Male",
    lifespan: "11-13",
    habits: ["Friendly", "Active"],
    weight: "37 Ibs",
    size: "Medium",
    personality: ["Work-oriented", "Exuberant", "Smart"],
  },
  {
    id: 4,
    type: "Bulldog",
    image: "img/bulldog.jpeg",
    gender: "Male",
    lifespan: "9-10",
    habits: ["Alarms", "Activity"],
    weight: "34 Ibs",
    size: "Medium",
    personality: ["Calm", "Friendly", "Courageous"],
  },
  {
    id: 5,
    type: "Cane Corso",
    image: "img/cane-corso.jpeg",
    gender: "Male",
    lifespan: "8-10",
    habits: ["Alarms", "Not friendly to other dog"],
    weight: "107 Ibs",
    size: "Extra Large",
    personality: ["Affectionate", "Intelligent", "Majestic"],
  },
  {
    id: 6,
    type: "Australian Terrier",
    image: "img/australian-terrier.jpeg",
    gender: "Female",
    lifespan: "11-14",
    habits: ["Friendly", "Quiet"],
    weight: "17 Ibs",
    size: "Small",
    personality: ["Courageous", "Affectionate", "Spirited"],
  },
];


function Compare() {
  // Component state
  const [breed1, setBreed1] = useState('German Shepherd');
  const [breed2, setBreed2] = useState('Golden Retriever');
  const [comparedTimes, setComparedTimes] = useState(0);
  let comparedBreeds = breeds;

  // Check compare time
  if (comparedTimes > 0) {
    comparedBreeds = breeds.filter(breed => {
      return breed.type === breed1 || breed.type === breed2;
    });
  }

  // Event handler for breed change
  const handleBreed1Change = (e) => {
    setBreed1(e.target.value);
    setComparedTimes(0);
  };

  const handleBreed2Change = (e) => {
    setBreed2(e.target.value);
    setComparedTimes(0);
  };

  return (
    <div>
      <main>
        <h2 className="pt-4">Select Pets Breeds to Compare:</h2>
        <div className="select-container">
          <div className="col-auto">
            <select id="breed1" onChange={handleBreed1Change} aria-label="Select Breed 1">
              <option value>Choose Pet Breed 1</option>
              {breeds.map((breed, index) => (
                <option key={index} value={breed.type}>{breed.type}</option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <select id="breed2" onChange={handleBreed2Change} aria-label="Select Breed 2">
              <option value>Choose Pet Breed 2</option>
              {breeds.map((breed, index) => (
                <option key={index} value={breed.type}>{breed.type}</option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn-search btn-warning" onClick={() => { setComparedTimes(comparedTimes + 1); }} aria-label="Compare">Compare</button>
          </div>
        </div>
        <div className="table-responsive">
          <table className=" table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Paws Type</th>
                <th scope="col">Paws Lifespan</th>
                <th scope="col">Paws Habit</th>
                <th scope="col">Paws Size</th>
                <th scope="col">Paws Personality</th>
              </tr>
            </thead>
            <tbody>
              {comparedBreeds.map((breed, index) => (
                <tr key={index}>
                  <td>
                    <img className="image-size" src={breed.image} alt='Dog' />
                  </td>
                  <td>{breed.type}</td>
                  <td>{breed.lifespan}</td>
                  <td>
                    {breed.habits.map((habit, index) => (
                      <span key={index} className="oval-word">{habit}</span>
                    ))}
                  </td>
                  <td>{breed.size}</td>
                  <td>
                    {breed.personality.map((trait, index) => (
                      <span key={index} className="oval-word">{trait}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Compare;
