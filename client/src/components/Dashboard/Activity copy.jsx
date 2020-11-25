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
            first_name={data[4]}
            last_name={data[5]}
            user_id={data[6]}
            logged_user_id={props.user_id}
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