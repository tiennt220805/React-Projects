import styled from "styled-components"
import { useState, useEffect } from 'react'
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = 'http://localhost:9000'


const App = () => {
  const [foodData, setFoodData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL)
        const foodData = await response.json()
  
        setFoodData(foodData)
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

  console.log(foodData)

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img alt="logo" src="/images/logo.svg"/>
        </div>
        <div className="search">
          <input 
            placeholder="Search Food..."
          />
        </div>
      </TopContainer>

      <FoodFilter>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FoodFilter>

      <SearchResult foodData={foodData}/>
    </Container>
  )
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopContainer = styled.section`
  min-height: 140px;
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
`

export const Button = styled.button`
  all: unset;
  border-radius: 5px;
  background: #FF4343;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const FoodFilter = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 32px;
`


