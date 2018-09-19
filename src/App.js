import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 text-center mb-4">
                            <h1>Gradient Experiments</h1>
                            <h4 className="text-secondary">
                                Hello Guys, this is Sandip Vindoray Ravaliya(SVR12).<br/>
                                I have used simple red and yellow colors so we can easily notice the visual effects of CSS gradient properties.
                            </h4>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-vertically" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Vertically, to Bottom(Default)</h5>
                                <h6>
                                    background-image: linear-gradient( red, yellow );<br/>
                                    background-image: linear-gradient( to bottom, red, yellow );<br/>
                                    background-image: linear-gradient( to top, yellow, red );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-horizontally" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Horizontally</h5>
                                <h6>
                                    background-image: linear-gradient( to left, red, yellow );<br/>
                                    background-image: linear-gradient( to right, yellow, red );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Diagonally</h5>
                                <h6>
                                    background-image: linear-gradient( to bottom right, red, yellow );<br/>
                                    background-image: linear-gradient( to top left, yellow, red );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-angle" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient at an Angle of 30 degrees</h5>
                                <h6>
                                    background-image: linear-gradient( 30deg, red, yellow );<br/>
                                    background-image: linear-gradient( -150deg, yellow, red );
                                </h6>
                                <p><small>Note that Gradient Diagonally is same as Gradient at an Angle of 135 degrees.</small></p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-multi" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient with Multi Colors</h5>
                                <h6>
                                    background-image: linear-gradient( violet, indigo, blue, green, yellow, orange, red );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-rgba" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient with RGBA</h5>
                                <h6>
                                    background-image: linear-gradient( to right, rgba(255, 0, 0, 1), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.6) );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-repeat" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient with Repetition</h5>
                                <h6>
                                    background-image: repeating-linear-gradient( to right, rgba(255, 0, 0, 0.9) 10%, rgba(0, 255, 0, 1) 10%, rgba(0, 0, 255, 0.8) 10% );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially, Ellipse (Default)</h5>
                                <h6>
                                    background-image: radial-gradient( rgba(255, 0, 0, 0.9), rgba(0, 255, 0, 1), rgba(0, 0, 255, 0.8) );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-circle" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially, Circle</h5>
                                <h6>
                                    background-image: radial-gradient( circle, rgba(255, 0, 0, 0.9), rgba(0, 255, 0, 1), rgba(0, 0, 255, 0.8) );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-closest-side" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially with Closest Side</h5>
                                <h6>
                                    background-image: radial-gradient( closest-side at 30% 30%, rgba(255, 0, 0, 0.9), rgba(0, 255, 0, 1) );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-farthest-side" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially with Farthest Side</h5>
                                <h6>
                                    background-image: radial-gradient( farthest-side at 10% 10%, rgba(255, 0, 0, 0.9), rgba(0, 255, 0, 1) );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-closest-corner" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially with Closest Corner</h5>
                                <h6>
                                    background-image: radial-gradient( closest-corner at 65% 35%, #f00, #0f0, #00f );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-farthest-corner" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially with Farthest Corner</h5>
                                <h6>
                                    background-image: radial-gradient( farthest-corner at 45% 15%, #f00, #0f0, #00f );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-radial-repeat" ></img>
                            </div>
                            <div>
                                <h5>Background Gradient Radially with Repeatition</h5>
                                <h6>
                                    background-image: repeating-radial-gradient( #f00, #0f0 10%, #00f 20% );
                                </h6>
                            </div>
                        </div>


                        
                        <div className="col-12 text-center my-4">
                            <h1>Gradient Samples</h1>
                            <h4 className="text-secondary">
                                Following are some sample colors I found good for gradients on internet.<br/>
                            </h4>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-one" ></img>
                            </div>
                            <div>
                                <h5>Sample One</h5>
                                <h6>
                                    linear-gradient( to bottom left, #f42e78, #c17afc );<br/>
                                    linear-gradient( to top right, #c17afc, #f42e78 );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-two" ></img>
                            </div>
                            <div>
                                <h5>Sample Two</h5>
                                <h6>
                                    linear-gradient( to bottom left, #fec180, #ff8993 );<br/>
                                    linear-gradient( to top right, #ff8993, #fec180 );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-three" ></img>
                            </div>
                            <div>
                                <h5>Sample Three</h5>
                                <h6>
                                    linear-gradient( to bottom left, #6681ea, #7e43aa );<br/>
                                    linear-gradient( to top right, #7e43aa, #6681ea );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-four" ></img>
                            </div>
                            <div>
                                <h5>Sample Four</h5>
                                <h6>
                                    linear-gradient( to bottom left, #efbad3, #a254f2 );<br/>
                                    linear-gradient( to top right, #a254f2, #efbad3 );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-five" ></img>
                            </div>
                            <div>
                                <h5>Sample Five</h5>
                                <h6>
                                    linear-gradient( to bottom left, #f3dcfb, #679fe4 );<br/>
                                    linear-gradient( to top right, #679fe4, #f3dcfb );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-six" ></img>
                            </div>
                            <div>
                                <h5>Sample Six</h5>
                                <h6>
                                    linear-gradient( to bottom left, #d0ffae, #34ebe9 );<br/>
                                    linear-gradient( to top right, #34ebe9, #d0ffae );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-seven" ></img>
                            </div>
                            <div>
                                <h5>Sample Seven</h5>
                                <h6>
                                    linear-gradient( to bottom left, #ff839d, #f50b9a );<br/>
                                    linear-gradient( to top right, #f50b9a, #ff839d );
                                </h6>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 clearfix mb-4">
                            <div className="float-left mr-2">
                                <img id="gradient-diagonally-sample-eight" ></img>
                            </div>
                            <div>
                                <h5>Sample Eight</h5>
                                <h6>
                                    linear-gradient( to bottom left, #6acbe0, #6859ea );<br/>
                                    linear-gradient( to top right, #6859ea, #6acbe0 );
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
