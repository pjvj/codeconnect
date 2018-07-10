
import React from 'react';
//import {Jumbotron} from 'react-bootstrap';
//import {Button} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';

const MainDisplay = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <img className="imgsand" src="https://mfiles.alphacoders.com/617/617281.jpg"/>
                </div>
                <div className="col-md-9">
                    <h1 className="headsand">CodeConnect</h1>
                    <p className="p1">It is a web application that serves you when you want to practice or see all progress that
                        you have made in programming on different platforms all at one place.
                    </p>


                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 img1"
                                     src="https://www.desktopbackground.org/p/2015/03/05/912623_download-numbers-code-wallpapers-1024x768_1024x768_h.jpg"
                                     alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Enhanced Coding Skills</h3>
                                    <p>Practice coding questions collected from different coding platforms sorted on the basis of tags
                                        entered by user : it redirects to the user chosen coding platform of the given tag</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img1"
                                     src="http://ecojourney.by/userfiles/literature/2ad0e0158092f457484fd682d068a51c.jpg"
                                     alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Keep A Track of Your Progress</h3>
                                    <p>Display a comparison/brief of the number of questions already solved on different(spoj,
                                        codechef,etc) platforms related to the provided tag</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img1"
                                     src="https://i0.wp.com/designsrock.org/wp-content/uploads/2017/05/Green-Anonymous-Wallpapers.jpg"
                                     alt="Third slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Think On Your Feet</h3>
                                    <p>Provide a scratch pad for rough work/notes while solving</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img1"
                                     src="http://www.babansadik.com/wp-content/uploads/2017/03/gina-facebook-2-2.jpg"
                                     alt="Forth slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Discuss Your Code with your Buddies</h3>
                                    <p>provides you a facility to make a group/chat hub: discuss queries relating to whatever you are
                                        solving with others to facilitate a competitive feeling and healthy discussion environment</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 img1"
                                     src="https://i0.wp.com/designsrock.org/wp-content/uploads/2017/05/Code-Digital-Art-Technology-HD-Wallpaper.jpg"
                                     alt="Fifth slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Set A Schedule that reminds you</h3>
                                    <p>set reminders for maintaining the flow and regularity of problem solving</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>





                    {/*<Carousel>
                        <Carousel.Item>
                            <img className="img2" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-533749.jpg"/>
                            <Carousel.Caption>
                                <h3>Enhanced Coding Skills</h3>
                                <p>practice coding questions collected from different coding platforms sorted on the basis of tags
                                    entered by user : it redirects to the user chosen coding platform of the given tag</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img2" alt="900x500"
                                 src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-8.jpg"/>
                            <Carousel.Caption>
                                <h3>Keep A Track of Your Progress</h3>
                                <p>display a comparison/brief of the number of questions already solved on different(spoj,
                                    codechef,etc) platforms related to the provided tag</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img2" alt="900x500"
                                 src="http://ecojourney.by/userfiles/literature/2ad0e0158092f457484fd682d068a51c.jpg"/>
                            <Carousel.Caption>
                                <h3>Think On Your Feet</h3>
                                <p>Provide a scratch pad for rough work/notes while solving</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img2" alt="900x500"
                                 src="http://www.babansadik.com/wp-content/uploads/2017/03/gina-facebook-2-2.jpg"/>
                            <Carousel.Caption>
                                <h3>Discuss Your Code with your Buddies</h3>
                                <p>provides you a facility to make a group/chat hub: discuss queries relating to whatever you are
                                    solving with others to facilitate a competitive feeling and healthy discussion environment</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img2" alt="900x500"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzLWjDV7EVjKd3akIbzXkux439LkbTCWTeh0NWVD2W2mqmdHwow"/>
                            <Carousel.Caption>
                                <h3>Set A Schedule that reminds you</h3>
                                <p>set reminders for maintaining the flow and regularity of problem solving</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    */}
                </div>
            </div>
        </div>
    );
};
export default MainDisplay;