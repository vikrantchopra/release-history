import React, { Component } from 'react';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';

export default class ShowReleases extends Component {

  constructor(props) {
    super(props);
    this.releaseCollection = this.props.releaseList; //console.log("CarList size: " + this.props.releaseList.length);
    this.state = { releases: [] };
    /*this.state = { 
      releases: [],
      cars: [{vin: 'A12345', brand: 'Volvo', year: '1999', color: 'blue'},
      {vin: 'A445567', brand: 'Mercedes', year: '2011', color: 'black'},
      {vin: 'B212345', brand: 'Audi', year: '2009', color: 'Red'}
    ]
    };*/
  }

  componentDidMount() {
    this.releaseCollection.watch().subscribe(
      (collection) => {
        if (collection) {console.log("Collection size: " + collection.length)
          this.setState({ releases: collection }); console.log("Releases size: " + this.state.releases.length);
          
         // console.log("Team Name : " + this.state.releases[0].Team);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }


  render() {
    console.log("Rendering component - Show Release component " );
    
    //var myReleases = this.state.releases.map(item =>{ return {item}});
    let myReleases = this.state.releases;
//console.log("My Release has:" + myReleases.length)
    
    return (
     
      <div ref='some_ref'>
        <p>Show Releases here</p>
       
        <DataTable value={myReleases}>
          <Column field="Team" header="Team" />
          <Column field="Release" header="Release" />
          <Column field="Date" header="Date" />
          <Column field="Comments" header="Comments" />
          <Column field="Link" header="Link" />
        </DataTable>
        
      </div>
      
    );
  }
}

/**
 * const messagesMapped = this.state.messages.map((result, index) => {
            return <Message message={result} key={index} />
        });
 * 
 * 
 * {this.props.items.map(item => (
          <div
            className= 'row'>
            <button
              className= 'remove'
              onClick= {() => this.remove(item)}>
              x
            </button>
            {item.description}
            <button
              className= 'add'
              onClick= {() => this.moveToHave(item)}>
              +
            </button>
          </div>
        ))}
 */