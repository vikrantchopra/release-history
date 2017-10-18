import React, { Component } from 'react';

import { Panel } from 'primereact/components/panel/Panel';
import { InputText } from 'primereact/components/inputtext/InputText';
import {Button} from 'primereact/components/button/Button';


export default class AddRelease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <form>
                    <div>
                        <Panel header="Add-Release Form">
                            <div className="ui-grid ui-grid-responsive ui-fluid">
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="team">Team Name</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%', width: '50%' }}>
                                        <InputText id="team" />
                                    </div>
                                </div>

                                <div className="ui-grid-row" >
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="release">Release Name</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%', width: '50%' }}>
                                        <InputText id="release" />
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="comments">Comments</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%' }}>
                                        <InputText id="comments" />
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="link">Release Link</label></div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ padding: '4px 10px 4px 20px', fontSize: '80%' }}>
                                        <InputText id="link" />
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}>
                                        <Button label="Save" icon="fa-check"/>
                                    </div>
                                </div>

                            </div>
                        </Panel>
                    </div>

                </form>
            </div>
        );
    }

}