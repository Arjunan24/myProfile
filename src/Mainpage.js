import React  from 'react';
// import data from './Datas'
import "../src/index.css"
 import Footer from './Footer';
 import Navbar from './Navbar'

class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>

          <div className="container ">
              <div className="row">
<div className="col-md-6">
 
                  </div>
<div className="col-md-6" >

</div>
              </div>
         </div>
         <div >
         <Footer/>
         </div>

         </div>
        
        )
    }

}
export default Mainpage;