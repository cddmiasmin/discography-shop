import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Artists = () => {

  const alphabetAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "123"];

  return (
    <div
      className='d-flex flex-column w-100 justify-content-center align-items-center bg-black'
    >
      <Header colorIsDarkOrLight={'light'} color={'black'} colorIsWhiteOrBlack={'white'} />

      <div className='d-flex w-100 flex-column justify-content-center align-items-center position-absolute'
        style={{ top: '15vh' }}
      >
        <h1>ARTISTAS</h1>

        <section
          id='#'
          className='d-flex flex-wrap justify-content-center align-items-center gap-2'
          style={{ width: '85%', borderBottom: '1px solid white', padding: '3vh' }}
        >
          {alphabetAndNumbers.map((character, key) => (
            <a href={'#' + character}
              key={key}
              className='d-flex flex-wrap rounded justify-content-center align-items-center text-white bg-transparent text-decoration-none'
              style={{ width: '5vh', height: '5vh', border: '1px solid white' }}
            >
              <h5 className='m-0'>{character}</h5>
            </a>
          ))}
        </section>

        {alphabetAndNumbers.map((character, key) => (
          <section
            key={key}
            id={character}
            className='d-flex w-100 flex-column flex-wrap justify-content-star align-items-center gap-2'
            style={{ marginTop: '5vh', paddingBottom: '4vh' }}
          >

            <div
              className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-2'
              style={{ width: '85%', borderBottom: '1px solid white' }}
            >
              <h2 className='d-flex w-100 justify-content-star align-items-center ms-3'>{character}</h2>
            </div><div
              className='d-flex flex-row flex-wrap justify-content-star align-items-center gap-2'
              style={{ width: '85%' }}
            >
              <div className='d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: '20vh', width: '20vh', borderRadius: '6vh' }} src="https://i.pinimg.com/originals/c5/5f/b1/c55fb130aafc28a51618390e6325bd47.jpg" alt="" />
                <h6 className='m-0'>FLORENCE AND THE MACHINE</h6>
              </div>

              <div className='d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: '20vh', width: '20vh', borderRadius: '6vh' }} src="https://i.pinimg.com/originals/c5/5f/b1/c55fb130aafc28a51618390e6325bd47.jpg" alt="" />
                <h6 className='m-0'>FLORENCE AND THE MACHINE</h6>
              </div>

              <div className='d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: '20vh', width: '20vh', borderRadius: '6vh' }} src="https://i.pinimg.com/originals/c5/5f/b1/c55fb130aafc28a51618390e6325bd47.jpg" alt="" />
                <h6 className='m-0'>FLORENCE AND THE MACHINE</h6>
              </div>

              <div className='d-flex flex-column justify-content-center align-items-center gap-2 p-2'>
                <img style={{ height: '20vh', width: '20vh', borderRadius: '6vh' }} src="https://i.pinimg.com/originals/c5/5f/b1/c55fb130aafc28a51618390e6325bd47.jpg" alt="" />
                <h6 className='m-0'>FLORENCE AND THE MACHINE</h6>
              </div>
            </div>
          </section>
        ))}


        <a href="#">
          <BsFillArrowUpCircleFill id='back-to-top' className='d-flex position-fixed bottom-0 end-0 pointer m-4 text-white'
            style={{ width: '7vh', height: '7vh' }} />
        </a>

        <br />
        <br />
        <br />
        <Footer colorIsDarkOrLight={'dark'} color={'white'} colorIsWhiteOrBlack={'black'} />
      </div>
    </div>
  )
}

export default Artists