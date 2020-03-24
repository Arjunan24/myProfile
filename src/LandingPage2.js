import React from 'react';
import data from './Datas'
import "../src/index.css"
import Footer from './Footer';
import {
    Card, CardGroup,
} from 'reactstrap';


class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className=" ">
                    <div className="row">
                        <div className="col-md-4">
                            <CardGroup>
                                <Card>
                                    <img src={data.profilePic} className="rounded-circle  ml_5" width="307" height="240" />
                                </Card>
                            </CardGroup>
                        </div>
                        <div className="col-md-6 ml_right" >
                            <h1 className="mt-3">{data.headingText}</h1>
                            <p className="big-text">{data.WelcomeText}</p>
                            <p>`{data.qutoesText}`</p>
                            <a className="btn btn-first" href="#">{data.buttonText}</a>

                        </div>
                    </div>
                </div>
                <div >
                    <Footer />
                </div>

            </div>

        )
    }

}
export default LandingPage;