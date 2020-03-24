import React  from 'react';
import data from './Datas'
import "../src/index.css"
 import Footer from './Footer';


class LandingPage extends React.Component{
    render(){
        return(
            <div>
          <div className="container ">
              <div className="row">
                  <div className="col-md-6">

        <h1 className="mt-3">{data.headingText  }</h1>
        <p className="big-text">{data.WelcomeText}</p>
        <p>`{data.qutoesText}`</p>
        <a className="btn btn-first" href="#">{data.buttonText}</a>

                  </div>
<div className="col-md-6" >

<img src={data.profilePic} className="rounded-circle float-right" width="307" height="240" />
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
export default LandingPage;