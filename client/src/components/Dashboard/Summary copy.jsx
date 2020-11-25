
import './Summary.scss';

function Summary(props) {

  function status () {
    if (props.summary < 0) {
      return <p>You are owed
                <p className="money_green"> ${-props.summary / 100}</p>
              </p>
    } else if (props.summary === 0) {
      return <p>Worry is like interest paid in advance on a debt that never comes due.`</p>
    } else {
      return <p>
                <p className="money_red">You owe ${-props.summary / 100}</p>
              </p>
    }
  }

  return (
    <section className="dashboard_summary">
      <h3>User Summary</h3>
      {status()}
    </section>
  )
}

export default Summary;
