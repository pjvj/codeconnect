import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
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