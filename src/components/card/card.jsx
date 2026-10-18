import './card.css'

function Card({ projectTitle, image }) {
  return (
    <div className='card-body'>
      <img
        src={image}
        alt={`${projectTitle} Preview`}
        className='image'
      />

      <h1 className='Test'>
        {projectTitle}
      </h1>
    </div>
  )
}

export default Card