// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';


//page
//header
//body
//footer
function App() {
    return (
        <>
            <>
                <Header />
            </>
            <>
                <Body background={'./img/BGWP.jpg'} />
            </>
            <>
                <Footer />
            </>
        </>
    );
}








export default App;
