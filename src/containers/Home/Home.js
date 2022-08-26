import './Home.css';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition.js';

const Home = () => {
    return(
        <div className="home">
            <ImageLinkForm/>
            <FaceRecognition/>
        </div>
    );
}

export default Home;