import './Activity.scss'
import ActivityListItem from './ActivityListItem'
import { Card, Divider, Feed } from 'semantic-ui-react'

const Activity = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        {
          props.history.map(data =>
          <ActivityListItem
            key={data[0]}
            amount={data[1].cents}
            date={data[2]}
            description={data[3]}
            first_name={data[4]}
            last_name={data[5]}
            user_id={data[6]}
            logged_user_id={props.user_id}
          />
          )
        }
      </Feed>
    {/* <Divider /> */}
    </Card.Content>
  </Card>
)

export default Activity