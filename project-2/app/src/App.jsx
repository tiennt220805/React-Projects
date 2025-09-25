import styled from "styled-components"
import { useState, useEffect } from 'react'
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = 'http://localhost:9000'
const buttons = [
  {name: 'All', type: 'all'},
  {name: 'Breakfast', type: 'breakfast'},
  {name: 'Lunch', type: 'lunch'},
  {name: 'Dinner', type: 'dinner'},
]

const App = () => {
  const [foodData, setFoodData] = useState(null)
  const [filteredFood, setFilteredFood] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [selectedButton, setSelectedButton] = useState('all')

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL)
        const foodData = await response.json()
  
        setFoodData(foodData)
        setFilteredFood(foodData)
        setLoading(false)
      } 
      catch (error) {
        setError("Fail to fetch data")
      }
    }

    fetchFoodData()
  }, [])

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading....</div>

  const searchFood = (e) => {
    const searchedValue = e.target.value

    if (searchedValue === '') {
      setSelectedButton('all')
    }

    const filteredFood = foodData?.filter((food) => 
      food.name.toLowerCase().includes(searchedValue.toLowerCase())
    )

    setFilteredFood(filteredFood)
  }

  const filterFood = (type) => {
    setSelectedButton(type)

    if (type.toLowerCase() === 'all') {
      setFilteredFood(foodData)
      return
    }

    const filteredFood = foodData?.filter(food =>
      food.type.toLowerCase() === type.toLowerCase()
    )

    setFilteredFood(filteredFood)
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img alt="logo" src="/images/logo.svg"/>
          </div>
          <div className="search">
            <input 
              onChange={searchFood}
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>

        <FoodFilter>
          {
            buttons.map(button =>
              <Button 
                isSelected={button.type === selectedButton}
                key={button.name} 
                onClick={() => filterFood(button.type)}
              >{button.name}</Button>
            )
          }
        </FoodFilter>
      </Container>
      <SearchResult foodData={filteredFood}/>
    </>
  )
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border-radius: 4px;
      border: 1px solid #FF0909;
      padding: 8px 12px;
      color: #fff;
      font-size: 16px;
    }
    input::placeholder {
      color: #ddd;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`

export const Button = styled.button`
  all: unset;
  border-radius: 5px;
  background: #FF4343;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#FF4343")};
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

const FoodFilter = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 32px;
`


