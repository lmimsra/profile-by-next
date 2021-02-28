/**
 * @param {string} props.title
 * @param {string} props.about
 * @param {string} props.technology
 * @param {string} props.members
 * @param {string} props.role
 * @param {string} props.performance
 * @returns {JSX.Element}
 */
function Resume(props) {
  return (
    <div className="column is-half">
      <div className="box">
        <div className="content">
          <h4 className="title is-5">{props.title}</h4>
          {props.about}<br/>
          ■ 使用技術<br/>
          {props.technology}<br/>
          ■ メンバー
          {props.members}<br/>
          ■ 担当<br/>
          {props.role}<br/>
          ■ 実績<br/>
          {props.performance}
        </div>
      </div>
    </div>
  )
}

export default Resume;
