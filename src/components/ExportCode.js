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
            </div>
        );
    }
}