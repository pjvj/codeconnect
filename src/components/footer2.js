import React from 'react';

export default class Footer2 extends React.Component {
    render() {
        return (
            <footer className="foot">
                <div className="row rowset">
                    <ul className="ul1">
                        <div className="col-md-4">
                            <li className="item1">&copy; 2017</li>
                        </div>
                        <div className="col-md-4">
                            <li className="item1">Contact Us</li>
                        </div>
                        <div className="col-md-4">
                            <li className="item1">About</li>
                        </div>
                    </ul>
                </div>
            </footer>
        );
    }
}