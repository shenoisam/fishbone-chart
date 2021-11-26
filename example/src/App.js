import React, { Component } from 'react'

import FishboneChart from 'fishbone-chart'

export default class App extends Component {

  render() {
    const data = {
      '': {
          'Method': ['Nutrition plan was not set up to supplement Mrs. Moore’s treatment.',
              'Home healthcare “forced” Mrs. Moore to enroll in hospice.',
              'After enrollment, PT and OT are discontinued',
              'Home health service requires Mrs. Moore to follow up with a neurologist affiliated with their service.'
              ],
          'Machine': ['Patient record transfers', 'Insurance coverage checks', 'Hospital/doctor oversight of care'],
          'Environment': ['Lived alone', 'Lack of reliable transportation to appointments', 'Distance from appointments'],
          'People': ['Mrs. Moore was unable to express concerns to home health caregiver.']
        }

    }

    return (
      <div style={{ width: 1100, margin: "15px auto" }}>
        <h1>FishboneChart Example</h1>
        <hr/>
        <br/>
        <FishboneChart colors={['orange']} data={data} />
      </div>
    )
  }
}
