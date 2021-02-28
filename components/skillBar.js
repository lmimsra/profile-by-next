/**
 *  skill bar
 * @param {string} props.name
 * @param {number} props.point
 */
function skillBar(props) {
  return (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.name}</strong>
            <br/>
            <progress className="progress is-primary" value={props.point} max="100"/>
          </p>
        </div>
      </div>
    </article>
  )
}

export default skillBar
