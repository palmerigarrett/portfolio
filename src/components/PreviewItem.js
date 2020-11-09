import React from 'react'
import '../App.css'
import Col from 'react-bootstrap/Col'
import Fade from 'react-bootstrap/Fade'

const { useState } = React;

function PreviewItem(props) {
    const [isShown, setIsShown] = useState(false)
    const { border, img, path, preview, rounded, width } = props;

    const toggleVal = isShown ? false : true
    const opacity = isShown ? '.1' : '1';

    if (window.innerWidth < 500) {
        return (
            <Col>
                { isShown ? (
                <div style={{ marginTop: '3em', textAlign: 'center' }}>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={path}
                        className="img-wrapper"
                        onClick={() => setIsShown(toggleVal)}
                    >
                        <Fade in={isShown}>
                            <span className="preview-text font">
                                {preview}
                            </span>
                        </Fade>
                        <span style={{ color: 'black' }}>
                            <img
                                className={`${rounded ? "rounded-circle" : ""} img`}
                                src={img}
                                style={{ opacity: opacity, borderRadius: border }}
                            >
                            </img>
                        </span>
                    </a>
                </div>
                ) : (
                <div style={{ marginTop: '3em', textAlign: 'center' }}>
                    <div
                        className="img-wrapper"
                        onMouseDown={() => setIsShown(toggleVal)}
                    >
                        <Fade in={isShown}>
                            { isShown ? (
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={path}
                                >
                                    <span className="preview-text font">
                                        {preview}
                                    </span>
                                </a>
                                ) : (
                                <span className="preview-text font">
                                    {preview}
                                </span>
                            )}
                        </Fade>
                        <span style={{ color: 'black' }}>
                            <img
                                className={`${rounded ? "rounded-circle" : ""} img`}
                                src={img}
                                style={{ opacity: opacity, borderRadius: border }}
                            >
                            </img>
                        </span>
                    </div>
                </div>
            )}
            </Col>
        )
    } 

    return (
        <Col>
            <div style={{ marginTop: '3em', textAlign: 'center' }}>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={path}
                    className="img-wrapper"
                    onMouseEnter={() => setIsShown(toggleVal)}
                    onMouseLeave={() => setIsShown(toggleVal)}
                >
                    <Fade in={isShown}>
                        <span className="preview-text font">
                            {preview}
                        </span>
                    </Fade>
                    <span style={{ color: 'black' }}>
                        <img
                            className={`${rounded ? "rounded-circle" : ""} img`}
                            src={img}
                            style={{ opacity: opacity, borderRadius: border }}
                        >
                        </img>
                    </span>
                </a>
            </div>
        </Col>
    )
}

export default PreviewItem;
