import './Activity.scss'
import ActivityListItem from './ActivityListItem'

function Activity (props) {

  // loop through props.history
  // add in list

  
  return (
    <section className="dashboard_activity">
      <h2>Activity</h2>
      <ul>
        {
          props.history.map(data =>
          <ActivityListItem
            key={data[0]}
            amount={data[1].cents}
            description={data[3]}
            friend={data[4]}
          />
          )
        }
      </ul>    
    </section>
    // recent activity of logged in user
    // get use activity data from props
    // loop through it and display here

  )

};

export default Activity;