import namor from 'namor';
import FavFilled from './IconButtons/FavFilled';

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    // movieName: namor.generate({ words: 1, numbers: 0 }),
    movieName:["The Eternal Sunshine the Spotless Mind"],
    movieId: Math.floor(Math.random() * 100),
    id: Math.floor(Math.random() * 30),
    genre: namor.generate({ words: 1, numbers: 0 }),
    icon:<FavFilled></FavFilled> ,
  }
}

const newData= () => {
    
    return {
     
      movieName:["The Eternal Sunshine the Sportless Mind","Spiderman","Alabahama"],
      movieId: ["1","3","4","8"],
      genre: ["action","dram","war","science-fiction"],
      icon:<FavFilled></FavFilled> ,
    }
  }

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
