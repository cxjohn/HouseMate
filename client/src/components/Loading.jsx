// loading status
import './Loading.scss';

function Loading (props) {


  const loading_image = (props.user && props.user.profile_pic) ? props.user.profile_pic : "images/avatars/cat.png";
  
  return (
    // <main className="status">
    <section className="loading_status">
      <img
        className="loading_image"
        // className="full granimate"
        src={loading_image}
        // src="images/"
        alt="Loading"
        width={100}
        height={100}
      />
      <p className="loading_text"> HouseMate </p>
    </section>
    
    // <a href="https://imgur.com/4Qx0TNt"><img src="https://i.imgur.com/4Qx0TNt.gif" title="source: imgur.com" /></a>
    // <>
    // <section class="full granimate"></section>
    )
  } 
  //{/* </> */}
 //{/* <iframe src="https://giphy.com/embed/mEtSQlxqBtWWA" width="480" height="284" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sweet-penguin-penguins-mEtSQlxqBtWWA">via GIPHY</a></p> */}
  // {/* </main> */}
  // {/* <h1 className="text--semi-bold">{props.message}</h1> */}

export default Loading;