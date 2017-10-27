import React, { Component } from 'react';

import { Panel } from 'primereact/components/panel/Panel';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';

import Horizon from './horizon-container';

const _horizon = Horizon.get();
const _releaseCollection = _horizon('releases');


export default class AddRelease extends Component {
    constructor(props) {
        console.log("Add Release Constructor");
        super(props);
        this.state = { release: { team: '', releaseName: '', releaseDate: new Date(), comments: '', link: '' } };
        this.updateProperty = this.updateProperty.bind(this);
        this.save = this.save.bind(this);

        this.test = this.test.bind(this);
    }

    componentDidMount() {
        _horizon.connect();

        _horizon
            .onReady()
            .subscribe(() =>
                console.info('Connected to Horizon server'));

        _horizon
            .onDisconnected()
            .subscribe(() =>
                console.info('Connected to Horizon server'));
    }

    updateProperty(property, value) {
        console.log("Property: " + property + " Value: " + value)
        let _release = this.state.release;
        _release[property] = value;
        this.setState({ release: _release });
    }

    test() {
        console.log("Button Pushed");
    }

    save(e) {
        e.preventDefault(); console.log("Team Name: " + this.state.release.team);
        const newRelease = {
            Team: this.state.release.team,
            Release: this.state.release.releaseName,
            Date: new Date(),
            Comments: this.state.release.comments,
            Link: this.state.release.link
        }
        _releaseCollection.insert(newRelease);
        this.setState({ release: { team: '', releaseName: '', releaseDate: null, comments: '', link: '' } });
    }

    render() {
        return (
            <div>
                <Button label="Test" icon="fa-check" type="submit" onClick={this.test} />
                <form onSubmit={this.save}>
                    <div>
                        <Panel header="Add-Release Form">

                            <div className="ui-grid ui-grid-responsive ui-fluid">
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="team">Team Name</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%', width: '50%' }}>
                                        <InputText id="team" onChange={(e) => { this.updateProperty('team', e.target.value) }} value={this.state.release.team} />{this.state.release.team}
                                    </div>
                                </div>

                                <div className="ui-grid-row" >
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="releaseName">Release Name</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%', width: '50%' }}>
                                        <InputText id="releaseName" onChange={(e) => { this.updateProperty('releaseName', e.target.value) }} value={this.state.release.releaseName} />
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="releaseDate">Release Date</label></div>
                                    <div className="ui-grid-col-8" style={{ color: '#7cc67c', padding: '4px 20px 4px 0px', fontSize: '80%', width: '50%', marginLeft: '-3px' }}>
                                        <Calendar id="releaseDate" showIcon="true" dateFormat="dd/mm/yy" 
                                            onChange={(e) => { this.updateProperty('releaseDate', e.target.value) }} value={this.state.release.releaseDate}></Calendar>
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="comments">Comments</label></div>
                                    <div className="ui-grid-col-8" style={{ padding: '4px 10px', fontSize: '80%' }}>
                                        <InputText id="comments" onChange={(e) => { this.updateProperty('comments', e.target.value) }} value={this.state.release.comments} />
                                    </div>
                                </div>


                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}><label htmlFor="link">Release Link</label></div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ padding: '4px 10px 4px 20px', fontSize: '80%' }}>
                                        <InputText id="link" onChange={(e) => { this.updateProperty('link', e.target.value) }} value={this.state.release.link} />
                                    </div>
                                </div>

                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4" style={{ padding: '6px 20px', textAlign: 'left' }}>
                                        <Button label="Save" icon="fa-check" type="submit" />

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