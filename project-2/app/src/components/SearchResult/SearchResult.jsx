import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Button, Container } from '../../App'

const SearchResult = ({ foodData: foods }) => {
    return (
        <FoodCardContainer>
            <Container>
                <FoodCards>   
                    {
                        foods?.map(({ name, image, text, price }) =>  
                            <FoodCard key={name}>
                                <div className="card-image">
                                    <img src={BASE_URL + image} alt="card-image" />
                                </div>
                                <div className='card-info'>
                                    <div className='info'>
                                        <h4>{name}</h4>
                                        <p>{text}</p>
                                    </div>
                                    <Button>${price.toFixed(2)}</Button>
                                </div>
                            </FoodCard>
                        )
                    }
                </FoodCards>
            </Container>
        </FoodCardContainer>
    )
}

export default SearchResult

const FoodCardContainer = styled.section`
  background-image: url("/images/bg.png");
  background-size: cover;
  min-height: calc(100vh - 210px);
`

const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
`

const FoodCard = styled.div`
    width: 340px;
    border-radius: 20px;
    border: 0.659px solid #98F9FF;
    background: url(<path-to-image>) lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.184196472167969px);

    display: flex;
    padding: 12px;
    
    .card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        p {
            font-size: 12px;
            font-weight: 400;
        }

        button {
            font-size: 14px;
            font-weight: 400;
            margin-top: 32px;
        }
    }
`