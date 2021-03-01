import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <section id="copyright" className="py-3 text-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="lead mb-0">Copyright 2018 <span>&copy;</span> Glozzom</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;