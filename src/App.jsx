// App.jsx
// import React from 'react';
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import './App.css';import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="home-page"><hr/>
//         <Home/>
//         {/* <h1>Welcome to the Home Page</h1> */}
        
        
//       </div>
//     </div>
//   );
// };

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Bookspace from './components/BookSpace';
// import Bookroom from './components/BookRoom';
// import Bookdesk from './components/BookDesk';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar /><hr/>
        
//         <div className="home-page">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/bookspace" element={<Bookspace />} />
//             <Route path="/bookroom" element={<Bookroom />} />
//             <Route path="/bookdesk" element={<Bookdesk />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Bookspace from './components/BookSpace';
import Bookroom from './components/BookRoom';
import Bookdesk from './components/BookDesk';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="home-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookspace" element={<Bookspace />} />
            <Route path="/bookroom" element={<Bookroom />} />
            <Route path="/bookdesk" element={<Bookdesk />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

