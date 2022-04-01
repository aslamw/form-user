import './style.css';

function Message({ image, message }) {
  return (
    <div className='container-success'>
      <img src={image} alt="success" />
      {message && <h2>{message}</h2>}
    </div>
  )
}

export default Message