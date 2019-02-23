// var data = require("./data.json");
//
// module.exports = function() {
// 	var hello = document.createElement("p");
// 	hello.innerHTML = data.name;
// 	return hello;
// }

import React from "react";
import Data from "./data";
import "./css/style.less";

export default class Hello extends React.Component{
	render(){
		return(
			<div>
				<p className="ptext">{ Data.name }</p>
				<div className="nav">
					<ul>
            <li>哈哈1</li>
						<li>哈哈2</li>
						<li>哈哈3</li>
						<li>哈哈4</li>
					</ul>
				</div>
			</div>
		)
	}
}
