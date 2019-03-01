import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
	palette: {
		primary: { main: "#2a4abf" },
		secondary: { main: "#ff6b06" },
	},
	typography: { useNextVariants: true },
});

export default function UXPinWrapper({ children }) {
	let icons = document.createElement("link");
	icons.setAttribute(
		"href",
		"https://fonts.googleapis.com/icon?family=Material+Icons",
	);
	icons.setAttribute("rel", "stylesheet");
	document.head.appendChild(icons);

	let roboto = document.createElement("link");
	roboto.setAttribute(
		"href",
		"https://fonts.googleapis.com/css?family=Roboto:300,400,500",
	);
	roboto.setAttribute("rel", "stylesheet");
	document.head.appendChild(roboto);

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
