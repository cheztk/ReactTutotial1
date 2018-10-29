import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TavleBody from './TableBody'

 class Table extends Component {
  render() {

    const {characterData, removeCharacter} = this.props

    return (
      <table>
        <TableHeader/>
        <TavleBody characterData={characterData} 
                    removeCharacter = {removeCharacter}/>          

          
      </table>
       
    );
  }
}
export default Table;
