import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Intro_Screen}>
			<View style = {stylesheet._Status_Bar___Black}>
				<View style = {stylesheet._BG}>
					<View style = {stylesheet._BG_2}>
					</View>
					<View style = {stylesheet._Exclude}>
					</View>
					<Svg style = {stylesheet._Notch} fill = {"rgba(0, 0, 0, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 0 0 L 219 0 L 215.4666336479537 1.0112359550561798 L 215.3165137614679 5.561797752808989 L 215.3165137614679 30 L 3.68348623853211 30 L 3.68348623853211 5.561797752808989 L 3.533375293836681 1.0112359550561798 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
				<View style = {stylesheet._Right_Side}>
					<View style = {stylesheet._Battery}>
						<Svg style = {stylesheet._Rectangle} fill = {"rgba(0,0,0,0)"}>
						<Path fillRule = {"evenodd"} d = {"M 0 0 L 22 0 L 22 11.333333015441895 L 0 11.333333015441895 L 0 0 Z"}   strokeLinejoin = {"miter"}  strokeWidth = {1}  stroke = {"rgba(29, 34, 45, 1)"}/>
						</Svg>
						<Svg style = {stylesheet._Combined_Shape} fill = {"rgba(29, 34, 45, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 0 L 0 4 C 0.8047311305999756 3.6612234711647034 1.328037977218628 2.8731333017349243 1.328037977218628 2 C 1.328037977218628 1.1268666982650757 0.8047311305999756 0.33877652883529663 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<Svg style = {stylesheet._Rectangle_2} fill = {"rgba(29, 34, 45, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 0 L 18 0 L 18 7.333333492279053 L 0 7.333333492279053 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
					</View>
					<View style = {stylesheet._Wifi}>
					</View>
					<View style = {stylesheet._Mobile_Signal}>
					</View>
				</View>
				<View style = {stylesheet._Left_Side}>
					<Svg style = {stylesheet._9_41} fill = {"rgba(29, 34, 45, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 3.8671875 11.0888671875 C 6.55517578125 11.0888671875 8.15185546875 8.98681640625 8.15185546875 5.42724609375 C 8.15185546875 4.0869140625 7.8955078125 2.958984375 7.40478515625 2.08740234375 C 6.6943359375 0.732421875 5.47119140625 0 3.92578125 0 C 1.6259765625 0 0 1.54541015625 0 3.71337890625 C 0 5.74951171875 1.46484375 7.22900390625 3.47900390625 7.22900390625 C 4.716796875 7.22900390625 5.72021484375 6.650390625 6.21826171875 5.64697265625 L 6.240234375 5.64697265625 C 6.240234375 5.64697265625 6.26953125 5.64697265625 6.27685546875 5.64697265625 C 6.29150390625 5.64697265625 6.3427734375 5.64697265625 6.3427734375 5.64697265625 C 6.3427734375 8.06396484375 5.42724609375 9.5068359375 3.8818359375 9.5068359375 C 2.9736328125 9.5068359375 2.2705078125 9.0087890625 2.02880859375 8.21044921875 L 0.146484375 8.21044921875 C 0.46142578125 9.9462890625 1.93359375 11.0888671875 3.8671875 11.0888671875 Z M 3.93310546875 5.7275390625 C 2.71728515625 5.7275390625 1.85302734375 4.86328125 1.85302734375 3.65478515625 C 1.85302734375 2.4755859375 2.76123046875 1.57470703125 3.9404296875 1.57470703125 C 5.11962890625 1.57470703125 6.02783203125 2.490234375 6.02783203125 3.68408203125 C 6.02783203125 4.86328125 5.1416015625 5.7275390625 3.93310546875 5.7275390625 Z"}   strokeLinejoin = {"miter"}/>
					<Path fillRule = {"nonzero"} d = {"M 11.24296760559082 10.986328125 C 11.93876838684082 10.986328125 12.41484260559082 10.48828125 12.41484260559082 9.8291015625 C 12.41484260559082 9.16259765625 11.93876838684082 8.671875 11.24296760559082 8.671875 C 10.55449104309082 8.671875 10.07109260559082 9.16259765625 10.07109260559082 9.8291015625 C 10.07109260559082 10.48828125 10.55449104309082 10.986328125 11.24296760559082 10.986328125 Z M 11.24296760559082 5.4931640625 C 11.93876838684082 5.4931640625 12.41484260559082 5.00244140625 12.41484260559082 4.34326171875 C 12.41484260559082 3.6767578125 11.93876838684082 3.18603515625 11.24296760559082 3.18603515625 C 10.55449104309082 3.18603515625 10.07109260559082 3.6767578125 10.07109260559082 4.34326171875 C 10.07109260559082 5.00244140625 10.55449104309082 5.4931640625 11.24296760559082 5.4931640625 Z"}   strokeLinejoin = {"miter"}/>
					<Path fillRule = {"nonzero"} d = {"M 19.270605087280273 10.83251953125 L 21.079687118530273 10.83251953125 L 21.079687118530273 8.8623046875 L 22.507909774780273 8.8623046875 L 22.507909774780273 7.265625 L 21.079687118530273 7.265625 L 21.079687118530273 0.263671875 L 18.413671493530273 0.263671875 C 16.545995712280273 3.076171875 15.059179306030273 5.42724609375 14.107030868530273 7.177734375 L 14.107030868530273 8.8623046875 L 19.270605087280273 8.8623046875 L 19.270605087280273 10.83251953125 Z M 15.857519149780273 7.19970703125 C 17.087987899780273 5.03173828125 18.186620712280273 3.2958984375 19.197362899780273 1.8017578125 L 19.299901962280273 1.8017578125 L 19.299901962280273 7.3095703125 L 15.857519149780273 7.3095703125 L 15.857519149780273 7.19970703125 Z"}   strokeLinejoin = {"miter"}/>
					<Path fillRule = {"nonzero"} d = {"M 26.53652000427246 10.83251953125 L 28.42616844177246 10.83251953125 L 28.42616844177246 0.263671875 L 26.54384422302246 0.263671875 L 23.78261375427246 2.197265625 L 23.78261375427246 4.013671875 L 26.41200828552246 2.16796875 L 26.53652000427246 2.16796875 L 26.53652000427246 10.83251953125 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<Image style = {stylesheet._Bili_Battler_Logo_1} source = {{uri: imageUrl_Bili_Battler_Logo_1}}>
			</Image>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Intro_Screen: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Status_Bar___Black: {
		position: "absolute",
		width: 375,
		height: 44,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_BG: {
		position: "absolute",
		width: 0,
		height: 0,
		transform: [
			{translateX: 0},
			{translateY: -2},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_BG_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		opacity: 1,
		display: "none",
		left: 0,
		right: -375,
		top: 2,
		bottom: -46,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 0, 0, 1)",
	},
	_Exclude: {
		position: "absolute",
		width: 375,
		height: 44,
		borderRadius: 0,
		display: "none",
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_Notch: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 219,
		height: 30,
		display: "none",
		left: "50%",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 78},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Right_Side: {
		position: "absolute",
		width: 66.661376953125,
		height: 11.336018562316895,
		transform: [
			{translateX: 293.66650390625},
			{translateY: 17.3306884765625},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Battery: {
		position: "absolute",
		width: 24.32803726196289,
		height: 11.333333015441895,
		transform: [
			{translateX: 42.33349609375},
			{translateY: 0.002685546875},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 22,
		height: 11.333333015441895,
		borderRadius: 2.6666667461395264,
		left: "auto",
		right: 2.3280372619628906,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Combined_Shape: {
		position: "absolute",
		color: "rgba(29, 34, 45, 1)",
		width: 1.328037977218628,
		height: 4,
		borderRadius: 0,
		left: "auto",
		right: -7.152557373046875e-7,
		top: 3.6666259765625,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Rectangle_2: {
		position: "absolute",
		color: "rgba(29, 34, 45, 1)",
		width: 18,
		height: 7.333333492279053,
		borderRadius: 1.3333333730697632,
		left: "auto",
		right: 4.328037261962891,
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Wifi: {
		position: "absolute",
		width: 15.27237606048584,
		height: 10.965571403503418,
		borderRadius: 0,
		transform: [
			{translateX: 22.02685546875},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Mobile_Signal: {
		position: "absolute",
		width: 17,
		height: 10.666666984558105,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0.3359375},
			{rotate: "0deg"},
		],
	},
	_Left_Side: {
		position: "absolute",
		width: 28.42616844177246,
		height: 11.0888671875,
		transform: [
			{translateX: 33.45361328125},
			{translateY: 17.16748046875},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_9_41: {
		position: "absolute",
		color: "rgba(29, 34, 45, 1)",
		width: 28.42616844177246,
		height: 11.0888671875,
		borderRadius: 0,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Bili_Battler_Logo_1: {
		position: "absolute",
		width: 313,
		height: 327,
		borderRadius: 0,
		opacity: 1,
		left: 31,
		right: "auto",
		top: 201,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});

const imageUrl_Bili_Battler_Logo_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/cfe725be58fd577556ae9960b0c56727"