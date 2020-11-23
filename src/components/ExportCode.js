import React from 'react';
import '../css/ExportCode.scss';
export default class ExportCode extends React.Component {
    constructor(props) {
        super(props);
    }

    exportCode(e) {
    }

    render() {
        var className = "myButton";
        var buttonText = "BUTTON";
        return (
            <div>
                <code id="html-code" className="language">
                    <span className="token tag">
                        <span className="token tag">
                            <span className="token punctuation">&lt;</span>
                            a
                        </span>
                        &nbsp;
                        <span className="token attr-name">href</span>
                        <span className="token attr-value">
                            <span className="token punctuation">="</span>
                            #
                            <span className="token punctuation">"</span>
                        </span>
                        &nbsp;
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                            <span className="token punctuation">="</span>
                            {className}
                            <span className="token punctuation">"</span>
                        </span>
                        <span className="token punctuation">&gt;</span>
                    </span>
                    {buttonText}
                    <span className="token tag">
                        <span className="token tag">
                            <span className="token punctuation">&lt;/</span>
                            a
                        </span>
                        <span className="token punctuation">&gt;</span>
                    </span>
                </code>
                <br></br>
                <code id="css-code" className="language">
                    <span className="token selector">.{className} </span>
                    <span className="token punctuation">&#123;</span><br></br>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>
                    
                    <span className="token punctuation">&#125;</span>
                </code>
            </div>
        );
    }
}