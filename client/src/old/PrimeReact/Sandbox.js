import React, {Component} from 'react';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {InputSwitch} from 'primereact/inputswitch';
import {Password} from 'primereact/password';
import {Dialog} from 'primereact/dialog';

// import 'primereact/components/button/Button.css'

export class EditorDemo extends Component {

    constructor() {
        super();
        this.state = {
            text1: '',
            text2: '',
            checked1: 'false',
            checked2: 'true',
            visible: true
        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }
    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
            <div style={{ width: '800px' }}>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Dialog" visible={this.state.visible} style={{width: '20vw'}} footer={footer} onHide={this.onHide} maximizable>
                        text
                    </Dialog>

                    <Button label="Show" icon="pi pi-external-link" onClick={this.onClick} />
                </div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Editor</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Default</h3>
                    <Editor
                        style={{
                        height: '320px'
                    }}
                        value={this.state.text1}
                        onTextChange={(e) => this.setState({text1: e.htmlValue})}/>
                </div>
                <Password/>
                <Button label="Secondary" className="p-button-success"/>
                <h3>Basic</h3>
                <InputSwitch
                    checked={this.state.checked1}
                    onChange={(e) => this.setState({checked1: e.value})}/>

                <h3>Default Value</h3>
                <InputSwitch
                    checked={this.state.checked2}
                    onChange={(e) => this.setState({checked2: e.value})}/>
            </div>
        );
    }
}

export default EditorDemo