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
		<View style = {stylesheet._Dash}>
			<View style = {stylesheet._Navigation_Bar___Centered___Back}>
				<View style = {[stylesheet._Insights, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Insights, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Bili-Battler
				</Text>
				</View>
				<View style = {stylesheet._Icon_Left}>
					<Svg style = {stylesheet._coolicon} fill = {"rgba(29, 34, 45, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 3.8299999237060547 5 L 7.409999847412109 1.409999966621399 L 6 0 L 0 6 L 6 12 L 7.409999847412109 10.59000015258789 L 3.8299999237060547 7 L 16 7 L 16 5 L 3.8299999237060547 5 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
				<View style = {stylesheet._Icon_Right}>
					<Svg style = {stylesheet._coolicon_2} fill = {"rgba(46, 58, 89, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 4.950000286102295 11.31399917602539 L 0 6.36400032043457 L 1.4140000343322754 4.950000286102295 L 4.951500415802002 8.483499526977539 L 4.950000286102295 8.484999656677246 L 13.4350004196167 0 L 14.848999977111816 1.4140000343322754 L 6.36400032043457 9.899999618530273 L 4.951000213623047 11.312999725341797 L 4.950000286102295 11.31399917602539 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
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
			</View>
			<View style = {stylesheet._iOS___Tab_Bar}>
				<View style = {stylesheet._iPhone_UI}>
					<View style = {stylesheet._Background}>
					</View>
					<View style = {stylesheet._Frame_1}>
						<View style = {stylesheet._Atoms___Tab___Active}>
							<View style = {stylesheet._Icon}>
								<View style = {stylesheet._Ellipse_1}>
								</View>
							</View>
						</View>
						<View style = {stylesheet._Atoms___Tab___Inactive}>
							<View style = {stylesheet._Icon_2}>
								<View style = {stylesheet._Ellipse_1_2}>
								</View>
							</View>
						</View>
						<View style = {stylesheet._Atoms___Tab___Inactive_2}>
							<View style = {stylesheet._Icon_3}>
								<View style = {stylesheet._Ellipse_1_3}>
								</View>
							</View>
						</View>
						<View style = {stylesheet._Atoms___Tab___Inactive_3}>
							<View style = {stylesheet._Icon_4}>
								<View style = {stylesheet._Ellipse_1_4}>
								</View>
							</View>
						</View>
						<View style = {stylesheet._Atoms___Tab___Inactive_4}>
							<View style = {stylesheet._Icon_5}>
								<View style = {stylesheet._Ellipse_1_5}>
								</View>
							</View>
						</View>
					</View>
					<View style = {stylesheet._Home_Indicator}>
						<View style = {stylesheet._Home_Indicator_2}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Top_Divider}>
				</View>
			</View>
			<View style = {stylesheet._Input___Search___Default}>
				<Svg style = {stylesheet._BG_3} fill = {"rgba(248, 250, 253, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 0 0 L 327 0 L 327 40 L 0 40 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
				<View style = {[stylesheet._Search, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Search, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Search
				</Text>
				</View>
				<View style = {stylesheet._Icon_Send}>
					<View style = {stylesheet._Ellipse_4}>
					</View>
					<Svg style = {stylesheet._Vector} fill = {"rgba(0,0,0,0)"}>
					<Path fillRule = {"none"} d = {"M 5 0 L 10 5 M 5 0 L 0 5 M 5 0 L 5 7 L 5 14"}   strokeLinecap = {"round"}  strokeLinejoin = {"miter"}  strokeWidth = {2.000000238418579}  stroke = {"rgba(255, 255, 255, 1)"}/>
					</Svg>
				</View>
			</View>
			<View style = {stylesheet._Circular_Graph}>
				<View style = {stylesheet._Inner_Circle}>
				</View>
				<View style = {[stylesheet._5_0, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._5_0, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					5.0

				</Text>
				</View>
				<View style = {[stylesheet._mg_dL, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._mg_dL, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					mg/dL
				</Text>
				</View>
				<View style = {[stylesheet._Updated_12_3_21_12_00_am, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Updated_12_3_21_12_00_am, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Updated 12/3/21 12:00 am
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Data___Mobile_Graph}>
				<View style = {stylesheet._Frame_2}>
					<View style = {stylesheet._Atoms___Bar___Filled}>
						<Svg style = {stylesheet._Background_2} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							7:00 pm
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill}>
						<View style = {stylesheet._Background_3}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Frame_3}>
					<View style = {stylesheet._Atoms___Bar___Filled_2}>
						<Svg style = {stylesheet._Background_4} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item_2, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							8:00 pm
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill_2}>
						<View style = {stylesheet._Background_5}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Frame_4}>
					<View style = {stylesheet._Atoms___Bar___Filled_3}>
						<Svg style = {stylesheet._Background_6} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item_3, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							9:00 pm
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill_3}>
						<View style = {stylesheet._Background_7}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Frame_5}>
					<View style = {stylesheet._Atoms___Bar___Filled_4}>
						<Svg style = {stylesheet._Background_8} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item_4, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							10:00 pm
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill_4}>
						<View style = {stylesheet._Background_9}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Frame_6}>
					<View style = {stylesheet._Atoms___Bar___Filled_5}>
						<Svg style = {stylesheet._Background_10} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item_5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item_5, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							11:00 pm
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill_5}>
						<View style = {stylesheet._Background_11}>
						</View>
					</View>
				</View>
				<View style = {stylesheet._Frame_7}>
					<View style = {stylesheet._Atoms___Bar___Filled_6}>
						<Svg style = {stylesheet._Background_12} fill = {"rgba(240, 240, 240, 1)"}>
						<Path fillRule = {"nonzero"} d = {"M 0 7.240003452301026 C 0 3.241462097167969 3.5817222595214844 0 8 0 C 12.418277740478516 0 16 3.2414586448669436 16 7.24 L 16 173.76 C 16 177.75854135513305 12.418277740478516 181 8 181 C 3.5817222595214844 181 0 177.75854135513305 0 173.76 L 0 7.240003452301026 Z"}   strokeLinejoin = {"miter"}/>
						</Svg>
						<View style = {[stylesheet._Item_6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._Item_6, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							12:00 am
						</Text>
						</View>
					</View>
					<View style = {stylesheet._Data___Bar_Chart___Fill_6}>
						<View style = {stylesheet._Background_13}>
						</View>
					</View>
				</View>
			</View>
			<View style = {[stylesheet._Bilirubin_Levels, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Bilirubin_Levels, {position: "relative", left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Bilirubin Levels
			</Text>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Dash: {
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
	_Navigation_Bar___Centered___Back: {
		position: "absolute",
		width: "auto",
		height: 88,
		borderRadius: 0,
		left: 0,
		right: 0,
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0.0024999999441206455)",
	},
	_Insights: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: 52,
		bottom: "auto",
		transform: [
			{translateX: -44.5},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		lineHeight: 28,
		fontSize: 20,
		color: "rgba(29, 34, 45, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: -1,
	},
	_Icon_Left: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 20,
		right: "auto",
		top: 52,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		display: "none",
	},
	_coolicon: {
		position: "absolute",
		color: "rgba(29, 34, 45, 1)",
		width: "auto",
		height: 12,
		borderRadius: 0,
		left: 4,
		right: 4,
		transform: [
			{translateX: 0},
			{translateY: 6},
			{rotate: "0deg"},
		],
	},
	_Icon_Right: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 331,
		right: "auto",
		top: 52,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		display: "none",
	},
	_coolicon_2: {
		position: "absolute",
		color: "rgba(46, 58, 89, 1)",
		width: "auto",
		height: 11.31399917602539,
		borderRadius: 0,
		left: 4.5751953125,
		right: 4.575804710388184,
		transform: [
			{translateX: 0},
			{translateY: 6.343017578125},
			{rotate: "0deg"},
		],
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
	_iOS___Tab_Bar: {
		position: "absolute",
		width: "auto",
		height: 83.5,
		borderRadius: 0,
		left: 0,
		right: 0,
		top: "auto",
		bottom: -0.5,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_iPhone_UI: {
		position: "absolute",
		width: 375,
		height: 83,
		transform: [
			{translateX: 0},
			{translateY: 0.5},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Background: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: -0.5,
		},
		shadowOpacity: 0.30000001192092896,
		shadowRadius: 0,
		backgroundColor: "rgba(250, 250, 250, 1)",
	},
	_Frame_1: {
		position: "absolute",
		width: "auto",
		height: "auto",
		borderRadius: 0,
		left: "50%",
		top: 15.5,
		bottom: "auto",
		transform: [
			{translateX: -135.5},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Atoms___Tab___Active: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
		marginRight: 31,
	},
	_Icon: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_1: {
		position: "absolute",
		width: 21.333332061767578,
		height: 21.333332061767578,
		borderRadius: 1000,
		backgroundColor: "rgba(0, 126, 255, 1)",
		left: 5.33349609375,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 5.33331298828125},
			{rotate: "0deg"},
		],
	},
	_Atoms___Tab___Inactive: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
		marginRight: 31,
	},
	_Icon_2: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_1_2: {
		position: "absolute",
		width: 21.333332061767578,
		height: 21.333332061767578,
		borderRadius: 1000,
		backgroundColor: "rgba(231, 236, 243, 1)",
		left: 5.33349609375,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 5.33331298828125},
			{rotate: "0deg"},
		],
	},
	_Atoms___Tab___Inactive_2: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
		marginRight: 31,
	},
	_Icon_3: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_1_3: {
		position: "absolute",
		width: 21.333332061767578,
		height: 21.333332061767578,
		borderRadius: 1000,
		backgroundColor: "rgba(231, 236, 243, 1)",
		left: 5.33349609375,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 5.33331298828125},
			{rotate: "0deg"},
		],
	},
	_Atoms___Tab___Inactive_3: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
		marginRight: 31,
	},
	_Icon_4: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_1_4: {
		position: "absolute",
		width: 21.333332061767578,
		height: 21.333332061767578,
		borderRadius: 1000,
		backgroundColor: "rgba(231, 236, 243, 1)",
		left: 5.33349609375,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 5.33331298828125},
			{rotate: "0deg"},
		],
	},
	_Atoms___Tab___Inactive_4: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 0,
		minWidth: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(0,0,0,0)",
		flexShrink: 0,
	},
	_Icon_5: {
		position: "absolute",
		width: 32,
		height: 32,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Ellipse_1_5: {
		position: "absolute",
		width: 21.333332061767578,
		height: 21.333332061767578,
		borderRadius: 1000,
		backgroundColor: "rgba(231, 236, 243, 1)",
		left: 5.33349609375,
		right: "auto",
		transform: [
			{translateX: 0},
			{translateY: 5.33331298828125},
			{rotate: "0deg"},
		],
	},
	_Home_Indicator: {
		position: "absolute",
		width: 134,
		height: 5,
		transform: [
			{translateX: 120},
			{translateY: 69},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Home_Indicator_2: {
		position: "absolute",
		width: 134,
		height: 5,
		borderRadius: 100,
		opacity: 1,
		borderWidth: 0,
		borderColor: "rgba(150, 150, 150, 1)",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -67},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(29, 34, 45, 1)",
	},
	_Top_Divider: {
		position: "absolute",
		width: "auto",
		height: 0.5,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: 0,
		top: 0.5,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(166, 175, 192, 1)",
	},
	_Input___Search___Default: {
		position: "absolute",
		width: "auto",
		height: 40,
		borderRadius: 0,
		left: 33,
		right: 15,
		top: 98,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_BG_3: {
		position: "absolute",
		color: "rgba(248, 250, 253, 1)",
		width: "auto",
		height: 40,
		borderRadius: 100,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Search: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 16,
		right: "auto",
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -10},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 20,
		fontSize: 14,
		color: "rgba(166, 175, 192, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Icon_Send: {
		position: "absolute",
		width: 34,
		height: 34,
		transform: [
			{translateX: 285},
			{translateY: 3},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
		display: "none",
	},
	_Ellipse_4: {
		position: "absolute",
		width: 34,
		height: 34,
		borderRadius: 1000,
		backgroundColor: "rgba(0, 126, 255, 1)",
		left: "auto",
		right: 0,
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -17},
			{rotate: "0deg"},
		],
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 10,
		height: 14,
		left: "auto",
		right: 12,
		top: "50%",
		transform: [
			{translateX: 0},
			{translateY: -7},
			{rotate: "0deg"},
		],
	},
	_Circular_Graph: {
		position: "absolute",
		width: 248,
		height: 237,
		transform: [
			{translateX: 64},
			{translateY: 169},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Inner_Circle: {
		position: "absolute",
		width: 243.51515197753906,
		height: 237,
		borderRadius: 1000,
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "rgba(0, 132, 80, 1)",
		left: 2.48486328125,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_5_0: {
		position: "absolute",
		width: 246,
		height: 73.76020050048828,
		left: "50%",
		top: 60,
		bottom: "auto",
		transform: [
			{translateX: -124},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 50,
		color: "rgba(0, 132, 80, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_mg_dL: {
		position: "absolute",
		width: 246,
		height: 73.76020050048828,
		left: "50%",
		top: 118,
		bottom: "auto",
		transform: [
			{translateX: -122},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 35,
		color: "rgba(0, 132, 80, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Updated_12_3_21_12_00_am: {
		position: "absolute",
		width: 155.3030242919922,
		height: 14.510204315185547,
		left: "50%",
		top: 167,
		bottom: "auto",
		transform: [
			{translateX: -77},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(166, 175, 192, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Mobile_Graph: {
		position: "absolute",
		width: 310,
		height: "auto",
		borderRadius: 0,
		left: 39,
		right: "auto",
		top: 501,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		display: "flex",
		flexDirection: "row",
	},
	_Frame_2: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 10,
	},
	_Atoms___Bar___Filled: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_2: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -18.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill: {
		position: "absolute",
		width: 23.110000610351562,
		height: 163,
		borderRadius: 0,
		left: 11,
		right: "auto",
		top: 18,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Background_3: {
		position: "absolute",
		width: 23.110000610351562,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(184, 29, 19, 1)",
	},
	_Frame_3: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 10,
	},
	_Atoms___Bar___Filled_2: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_4: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -19.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill_2: {
		position: "absolute",
		width: 24,
		height: 135,
		borderRadius: 0,
		left: 9.66650390625,
		right: "auto",
		top: 46,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Background_5: {
		position: "absolute",
		width: 24,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(239, 183, 0, 1)",
	},
	_Frame_4: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 10,
	},
	_Atoms___Bar___Filled_3: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_6: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -19.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill_3: {
		position: "absolute",
		width: 23,
		height: 125,
		borderRadius: 0,
		left: 10.33349609375,
		right: "auto",
		top: 56,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_7: {
		position: "absolute",
		width: 23,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(239, 183, 0, 1)",
	},
	_Frame_5: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 10,
	},
	_Atoms___Bar___Filled_4: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_8: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item_4: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -21.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill_4: {
		position: "absolute",
		width: 23,
		height: 82,
		borderRadius: 0,
		left: 10,
		right: "auto",
		top: 99,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_9: {
		position: "absolute",
		width: 23,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(239, 183, 0, 1)",
	},
	_Frame_6: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
		marginRight: 10,
	},
	_Atoms___Bar___Filled_5: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_10: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item_5: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -20.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill_5: {
		position: "absolute",
		width: 24,
		height: 67,
		borderRadius: 0,
		left: 9.66650390625,
		right: "auto",
		top: 114,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_11: {
		position: "absolute",
		width: 24,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 132, 80, 1)",
	},
	_Frame_7: {
		position: "relative",
		width: "auto",
		height: 202,
		borderRadius: 0,
		minWidth: 0,
		flexBasis: 0,
		flexGrow: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		flexShrink: 0,
	},
	_Atoms___Bar___Filled_6: {
		position: "absolute",
		width: 43.33333206176758,
		height: 202,
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
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_12: {
		position: "absolute",
		color: "rgba(240, 240, 240, 1)",
		width: 16,
		height: "auto",
		borderRadius: 200,
		left: "50%",
		top: 0,
		bottom: 21,
		transform: [
			{translateX: -7.666666030883789},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Item_6: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: -21.66666603088379},
			{translateY: 0},
			{rotate: "3.1805546814635168e-15deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(93, 99, 111, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Data___Bar_Chart___Fill_6: {
		position: "absolute",
		width: 23,
		height: 66,
		borderRadius: 0,
		left: 10.33349609375,
		right: "auto",
		top: 115,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Background_13: {
		position: "absolute",
		width: 23,
		height: "auto",
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0, 132, 80, 1)",
	},
	_Bilirubin_Levels: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 22,
		right: 10,
		top: 443,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(29, 34, 45, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});

const imageUrl_Bili_Battler_Logo_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/cfe725be58fd577556ae9960b0c56727"