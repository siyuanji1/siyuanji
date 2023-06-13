
export const findAllPets = async () => {
  const res = await fetch(`/database-arr.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();

  return data;
}
// search function
export const searchPets = async (keyword = '', age, gender, size, color, distance) => {
  const res = await fetch(`/database-arr.json`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const dogDatabase = await res.json();

  const matchedPetsByKeyword = dogDatabase
    .filter(pet => {
      if (!keyword) {
        return true;
      }
      return pet.name.toUpperCase().includes(keyword.toUpperCase())
        || pet.breed.toUpperCase().includes(keyword.toUpperCase())
        || pet.size.toUpperCase().includes(keyword.toUpperCase())
        || pet.color.toUpperCase().includes(keyword.toUpperCase())
        || pet.ageCategory.toUpperCase().includes(keyword.toUpperCase())
        || pet.habits.includes(keyword);
    });
  const matchedPets = matchedPetsByKeyword
    .filter(pet => {
      let matched = true;

      if (age && age !== 'all') {
        let ageMatched = pet.ageCategory.toUpperCase() === age.toUpperCase();
        matched = matched && ageMatched;
      }

      if (gender && gender !== 'all') {
        let genderMatched = pet.gender.toUpperCase() === gender.toUpperCase();
        matched = matched && genderMatched;
      }

      if (size && size !== 'all') {
        let sizeMatched = pet.size.toUpperCase() === size.toUpperCase();
        matched = matched && sizeMatched;
      }

      if (color && color !== 'all') {
        let colorMatched = pet.color.toUpperCase() === color.toUpperCase();
        matched = matched && colorMatched;
      }

      if (distance && distance !== 'all') {
        let maxDistance = distance.match(/\d+/g)[0];
        maxDistance = Number(maxDistance);
        let petDistance = pet.adoptionDistance.match(/\d+/g)[0];
        petDistance = Number(petDistance);
        let distanceMatched = petDistance <= maxDistance;
        matched = matched && distanceMatched;
      }

      return matched;


    })

  return matchedPets;
}