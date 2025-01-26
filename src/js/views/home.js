import React from "react";
import "../../styles/home.css";
import { Contact } from "../component/Contact";

export const Home = () => {
	return (
		<div className="container">
			<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
				<ul className="list-group pull-down" id="contact-list">
					<Contact />
				</ul>
			</div>
		</div>
	)
};
