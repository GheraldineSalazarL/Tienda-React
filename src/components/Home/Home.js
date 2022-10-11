import Carrusel1 from '../../assets/Carrusel1.png'
import Carrusel2 from '../../assets/Carrusel2.png'
import Carrusel3 from '../../assets/Carrusel3.png'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  return (
    <div>
        <Carousel className="">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carrusel1}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carrusel2}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carrusel3}
                />
            </Carousel.Item>
        </Carousel>

        <div className='mt-5 d-flex justify-content-center'>
            <h3 className='text-warning'>- Sale -</h3>
        </div>
    </div>
  )
}

export default Home