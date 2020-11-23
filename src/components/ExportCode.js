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
            <div className="jsonContainer">
                <p>Button HTML</p>
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
                <p>Button CSS</p>
                <code id="css-code" className="language">
                    <span className="token selector">.{className} </span>
                    <span className="token punctuation">&#123;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">font-size</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">width</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.width}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">height</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.height}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">padding</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.padding}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">border-width</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderWidth}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">border-radius</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderRadius}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">box-shadow</span>
                    <span className="token punctuation">:</span>
                    &nbsp;0 0 {this.props.borderRadius}px {this.props.borderRadius}px rgba(0,0,0,0.2)
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">color</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderRadius}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">background-color</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderRadius}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">border-color</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderRadius}px
                    <span className="token punctuation">;</span>
                    <br/>

                    <pre className="tab">   </pre>
                    <span className="token property">opacity</span>
                    <span className="token punctuation">:</span>
                    &nbsp;{this.props.borderRadius}px
                    <span className="token punctuation">;</span>
                    <br/>
                    
                    <span className="token punctuation">&#125;</span>
                </code>
            </div>
        );
    }
}