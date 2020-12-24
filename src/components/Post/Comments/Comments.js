import React,{Component} from "react";

class Comments extends Component{
  componentDidMount() {
    const script = document.createElement("script");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin","anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "steven-terrana/blog");
    script.setAttribute("issue-term", "title");
    script.setAttribute( "theme", "github-light");
    const commentsBox = document.querySelector(".commentsBox")
    commentsBox.appendChild(script)
  }
  render() {
    let text = '{ Comments }'
    return (
      <div className="commentsBox">
        <h2>{text}</h2>
      </div>
    )
  }
}

export default Comments