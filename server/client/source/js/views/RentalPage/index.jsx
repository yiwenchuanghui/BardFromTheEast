import React, { Component } from 'react';

class RentalPage extends Component {
  render() {
    return (
      <div className='rental-page'>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>
                <abbr title="Position"></abbr>
              </th>
              <th>1 hour</th>
              <th>1 day</th>
              <th>1 month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Room #1</th>

              <td>38$</td>
              <td>108$</td>
              <td>1088$</td>
            </tr>
            <tr>
              <th>Room #2</th>

              <td>38$</td>
              <td>108$</td>
              <td>1088$</td>
            </tr>
            <tr>
              <th>Room #3</th>

              <td>38$</td>
              <td>108$</td>
              <td>1088$</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RentalPage;
