import React from 'react';
import '../css/ExportCode.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ExportCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            copied: false
        }
        this.onCopy = this.onCopy.bind(this);
    }
    onCopy() {
        this.setState({copied: true});
        var html = document.getElementById('html-code').innerText;
        var css = document.getElementById('css-code').innerText;
        var code = html + "\n" + css;
        this.state.code = code; 
      };
    render() {
        var className = "myButton";
        var buttonText = "BUTTON";
        return (
            <div>
                <code id="html-code" class="language">
                    <span class="token tag">
                        <span class="token tag">
                            <span class="token punctuation">&lt;</span>
                            a
                        </span>
                        &nbsp;
                        <span class="token attr-name">href</span>
                        <span class="token attr-value">
                            <span class="token punctuation">="</span>
                            #
                            <span class="token punctuation">"</span>
                        </span>
                        &nbsp;
                        <span class="token attr-name">class</span>
                        <span class="token attr-value">
                            <span class="token punctuation">="</span>
                            {className}
                            <span class="token punctuation">"</span>
                        </span>
                        <span class="token punctuation">&gt;</span>
                    </span>
                    {buttonText}
                    <span class="token tag">
                        <span class="token tag">
                            <span class="token punctuation">&lt;/</span>
                            a
                        </span>
                        <span class="token punctuation">&gt;</span>
                    </span>
                </code>
                <br></br>
                <code id="css-code" class="language">
                    <span class="token selector">.{className} </span>
                    <span class="token punctuation">&#123;</span><br></br>

                    <span class="token property">font-size</span>
                    <span class="token punctuation">:</span>
                    &nbsp;{this.props.fontSize}
                    <span class="token punctuation">;</span>
                    
                    <br></br><span class="token punctuation">&#125;</span>
                </code>
                <br></br>
                    <span>
                    <CopyToClipboard onCopy={this.onCopy} text={this.state.code}>
                        <button>Copy to clipboard</button>
                    </CopyToClipboard>
                    <section className="section">
                    {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                    </section>
                </span>
            </div>
        );
    }
}