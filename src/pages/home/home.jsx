import './home.css'
import Card from '../../components/card/card.jsx'

function Home() {
  return (
    <div className='home-body'>
      <div className='intro'>
        <h1 className='title'>
          It's me, <span className='accent'>Hamish</span>!
          
        </h1>
        <p className='location'>
          16yo student: Adelaide, South Australia.
        </p>

        <p className='about'>
          I hold professional certifications from <span className='accent'>HarvardX</span>, <span className='accent'>IBM</span>, and <span className='accent'>AlaskaX</span>. I intend on utlising my new skills to build something special.
        </p>

        {/* <div className='cards-body'>
          <Card
            projectTitle="test"
            image="../../src/assets/react.svg"
          />
        </div> */}

      </div>
    </div>
  )
}

export default Home