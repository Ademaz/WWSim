$(document).ready(function(){
	/*Variables for start up*/
	window.world = {
		"worldDomination": false,
		"countries": [
			{
				"id": 1,
				"short": "AF",
				"name": "Afghanistan",
				"defeated": false,
				"color": "#f44336"
			},
			{
				"id": 2,
				"short": "AO",
				"name": "Angola",
				"defeated": false,
				"color": "#ef9a9a"
			},
			{
				"id": 3,
				"short": "AL",
				"name": "Albania",
				"defeated": false,
				"color": "#e57373"
			},
			{
				"id": 4,
				"short": "AE",
				"name": "United Arab Emirates",
				"defeated": false,
				"color": "#ef5350"
			},
			{
				"id": 5,
				"short": "AR",
				"name": "Argentina",
				"defeated": false,
				"color": "#f44336"
			},
			{
				"id": 6,
				"short": "AM",
				"name": "Armenia",
				"defeated": false,
				"color": "#e53935"
			},
			{
				"id": 7,
				"short": "AU",
				"name": "Australia",
				"defeated": false,
				"color": "#d32f2f"
			},
			{
				"id": 8,
				"short": "AT",
				"name": "Austria",
				"defeated": false,
				"color": "#c62828"
			},
			{
				"id": 9,
				"short": "AZ",
				"name": "Azerbaijan",
				"defeated": false,
				"color": "#b71c1c"
			},
			{
				"id": 10,
				"short": "BI",
				"name": "Burundi",
				"defeated": false,
				"color": "#ff8a80"
			},
			{
				"id": 11,
				"short": "BE",
				"name": "Belgium",
				"defeated": false,
				"color": "#ff5252"
			},
			{
				"id": 12,
				"short": "BJ",
				"name": "Benin",
				"defeated": false,
				"color": "#ff1744"
			},
			{
				"id": 13,
				"short": "BF",
				"name": "Burkina Faso",
				"defeated": false,
				"color": "#d50000"
			},
			{
				"id": 14,
				"short": "BD",
				"name": "Bangladesh",
				"defeated": false,
				"color": "#e91e63"
			},
			{
				"id": 15,
				"short": "BG",
				"name": "Bulgaria",
				"defeated": false,
				"color": "#f48fb1"
			},
			{
				"id": 16,
				"short": "BA",
				"name": "Bosnia and Herzegovina",
				"defeated": false,
				"color": "#f06292"
			},
			{
				"id": 17,
				"short": "BY",
				"name": "Belarus",
				"defeated": false,
				"color": "#ec407a"
			},
			{
				"id": 18,
				"short": "BZ",
				"name": "Belize",
				"defeated": false,
				"color": "#e91e63"
			},
			{
				"id": 19,
				"short": "BO",
				"name": "Bolivia",
				"defeated": false,
				"color": "#d81b60"
			},
			{
				"id": 20,
				"short": "BR",
				"name": "Brazil",
				"defeated": false,
				"color": "#c2185b"
			},
			{
				"id": 21,
				"short": "BN",
				"name": "Brunei Darussalam",
				"defeated": false,
				"color": "#ad1457"
			},
			{
				"id": 22,
				"short": "BT",
				"name": "Bhutan",
				"defeated": false,
				"color": "#880e4f"
			},
			{
				"id": 23,
				"short": "BW",
				"name": "Botswana",
				"defeated": false,
				"color": "#ff80ab"
			},
			{
				"id": 24,
				"short": "CF",
				"name": "Central African Republic",
				"defeated": false,
				"color": "#ff4081"
			},
			{
				"id": 25,
				"short": "CA",
				"name": "Canada",
				"defeated": false,
				"color": "#f50057"
			},
			{
				"id": 26,
				"short": "CH",
				"name": "Switzerland",
				"defeated": false,
				"color": "#c51162"
			},
			{
				"id": 27,
				"short": "CL",
				"name": "Chile",
				"defeated": false,
				"color": "#9c27b0"
			},
			{
				"id": 28,
				"short": "CN",
				"name": "China",
				"defeated": false,
				"color": "#ce93d8"
			},
			{
				"id": 29,
				"short": "CI",
				"name": "Côte d'Ivoire",
				"defeated": false,
				"color": "#ba68c8"
			},
			{
				"id": 30,
				"short": "CM",
				"name": "Cameroon",
				"defeated": false,
				"color": "#ab47bc"
			},
			{
				"id": 31,
				"short": "CD",
				"name": "Democratic Republic of the Congo",
				"defeated": false,
				"color": "#9c27b0"
			},
			{
				"id": 32,
				"short": "CG",
				"name": "Republic of Congo",
				"defeated": false,
				"color": "#8e24aa"
			},
			{
				"id": 33,
				"short": "CO",
				"name": "Colombia",
				"defeated": false,
				"color": "#7b1fa2"
			},
			{
				"id": 34,
				"short": "CR",
				"name": "Costa Rica",
				"defeated": false,
				"color": "#6a1b9a"
			},
			{
				"id": 35,
				"short": "CU",
				"name": "Cuba",
				"defeated": false,
				"color": "#4a148c"
			},
			{
				"id": 36,
				"short": "CZ",
				"name": "Czech Republic",
				"defeated": false,
				"color": "#ea80fc"
			},
			{
				"id": 37,
				"short": "DE",
				"name": "Germany",
				"defeated": false,
				"color": "#e040fb"
			},
			{
				"id": 38,
				"short": "DJ",
				"name": "Djibouti",
				"defeated": false,
				"color": "#d500f9"
			},
			{
				"id": 39,
				"short": "DK",
				"name": "Denmark",
				"defeated": false,
				"color": "#aa00ff"
			},
			{
				"id": 40,
				"short": "DO",
				"name": "Dominican Republic",
				"defeated": false,
				"color": "#673ab7"
			},
			{
				"id": 41,
				"short": "DZ",
				"name": "Algeria",
				"defeated": false,
				"color": "#b39ddb"
			},
			{
				"id": 42,
				"short": "EC",
				"name": "Ecuador",
				"defeated": false,
				"color": "#9575cd"
			},
			{
				"id": 43,
				"short": "EG",
				"name": "Egypt",
				"defeated": false,
				"color": "#7e57c2"
			},
			{
				"id": 44,
				"short": "ER",
				"name": "Eritrea",
				"defeated": false,
				"color": "#673ab7"
			},
			{
				"id": 45,
				"short": "EE",
				"name": "Estonia",
				"defeated": false,
				"color": "#5e35b1"
			},
			{
				"id": 46,
				"short": "ET",
				"name": "Ethiopia",
				"defeated": false,
				"color": "#512da8"
			},
			{
				"id": 47,
				"short": "FI",
				"name": "Finland",
				"defeated": false,
				"color": "#4527a0"
			},
			{
				"id": 48,
				"short": "FJ",
				"name": "Fiji",
				"defeated": false,
				"color": "#311b92"
			},
			{
				"id": 49,
				"short": "GA",
				"name": "Gabon",
				"defeated": false,
				"color": "#b388ff"
			},
			{
				"id": 50,
				"short": "GB",
				"name": "United Kingdom",
				"defeated": false,
				"color": "#7c4dff"
			},
			{
				"id": 51,
				"short": "GE",
				"name": "Georgia",
				"defeated": false,
				"color": "#651fff"
			},
			{
				"id": 52,
				"short": "GH",
				"name": "Ghana",
				"defeated": false,
				"color": "#6200ea"
			},
			{
				"id": 53,
				"short": "GN",
				"name": "Guinea",
				"defeated": false,
				"color": "#3f51b5"
			},
			{
				"id": 54,
				"short": "GM",
				"name": "The Gambia",
				"defeated": false,
				"color": "#9fa8da"
			},
			{
				"id": 55,
				"short": "GW",
				"name": "Guinea-Bissau",
				"defeated": false,
				"color": "#7986cb"
			},
			{
				"id": 56,
				"short": "GQ",
				"name": "Equatorial Guinea",
				"defeated": false,
				"color": "#5c6bc0"
			},
			{
				"id": 57,
				"short": "GR",
				"name": "Greece",
				"defeated": false,
				"color": "#3f51b5"
			},
			{
				"id": 58,
				"short": "GL",
				"name": "Greenland",
				"defeated": false,
				"color": "#3949ab"
			},
			{
				"id": 59,
				"short": "GT",
				"name": "Guatemala",
				"defeated": false,
				"color": "#303f9f"
			},
			{
				"id": 60,
				"short": "GY",
				"name": "Guyana",
				"defeated": false,
				"color": "#283593"
			},
			{
				"id": 61,
				"short": "HN",
				"name": "Honduras",
				"defeated": false,
				"color": "#1a237e"
			},
			{
				"id": 62,
				"short": "HR",
				"name": "Croatia",
				"defeated": false,
				"color": "#8c9eff"
			},
			{
				"id": 63,
				"short": "HT",
				"name": "Haiti",
				"defeated": false,
				"color": "#536dfe"
			},
			{
				"id": 64,
				"short": "HU",
				"name": "Hungary",
				"defeated": false,
				"color": "#3d5afe"
			},
			{
				"id": 65,
				"short": "ID",
				"name": "Indonesia",
				"defeated": false,
				"color": "#304ffe"
			},
			{
				"id": 66,
				"short": "IN",
				"name": "India",
				"defeated": false,
				"color": "#2196f3"
			},
			{
				"id": 67,
				"short": "IE",
				"name": "Ireland",
				"defeated": false,
				"color": "#90caf9"
			},
			{
				"id": 68,
				"short": "IR",
				"name": "Iran",
				"defeated": false,
				"color": "#64b5f6"
			},
			{
				"id": 69,
				"short": "IQ",
				"name": "Iraq",
				"defeated": false,
				"color": "#42a5f5"
			},
			{
				"id": 70,
				"short": "IS",
				"name": "Iceland",
				"defeated": false,
				"color": "#2196f3"
			},
			{
				"id": 71,
				"short": "IL",
				"name": "Israel",
				"defeated": false,
				"color": "#1e88e5"
			},
			{
				"id": 72,
				"short": "IT",
				"name": "Italy",
				"defeated": false,
				"color": "#1976d2"
			},
			{
				"id": 73,
				"short": "JM",
				"name": "Jamaica",
				"defeated": false,
				"color": "#1565c0"
			},
			{
				"id": 74,
				"short": "JO",
				"name": "Jordan",
				"defeated": false,
				"color": "#0d47a1"
			},
			{
				"id": 75,
				"short": "JP",
				"name": "Japan",
				"defeated": false,
				"color": "#82b1ff"
			},
			{
				"id": 76,
				"short": "KZ",
				"name": "Kazakhstan",
				"defeated": false,
				"color": "#448aff"
			},
			{
				"id": 77,
				"short": "KE",
				"name": "Kenya",
				"defeated": false,
				"color": "#2979ff"
			},
			{
				"id": 78,
				"short": "KG",
				"name": "Kyrgyzstan",
				"defeated": false,
				"color": "#2962ff"
			},
			{
				"id": 79,
				"short": "KH",
				"name": "Cambodia",
				"defeated": false,
				"color": "#03a9f4"
			},
			{
				"id": 80,
				"short": "KR",
				"name": "Republic of Korea",
				"defeated": false,
				"color": "#81d4fa"
			},
			// {
			// 	"id": 81,
			// 	"short": "XK",
			// 	"name": "Kosovo",
			// 	"defeated": false,
			// 	"color": "#4fc3f7"
			// },
			{
				"id": 82,
				"short": "KW",
				"name": "Kuwait",
				"defeated": false,
				"color": "#29b6f6"
			},
			{
				"id": 83,
				"short": "LA",
				"name": "Lao PDR",
				"defeated": false,
				"color": "#03a9f4"
			},
			{
				"id": 84,
				"short": "LB",
				"name": "Lebanon",
				"defeated": false,
				"color": "#039be5"
			},
			{
				"id": 85,
				"short": "LR",
				"name": "Liberia",
				"defeated": false,
				"color": "#0288d1"
			},
			{
				"id": 86,
				"short": "LY",
				"name": "Libya",
				"defeated": false,
				"color": "#0277bd"
			},
			{
				"id": 87,
				"short": "LK",
				"name": "Sri Lanka",
				"defeated": false,
				"color": "#01579b"
			},
			{
				"id": 88,
				"short": "LS",
				"name": "Lesotho",
				"defeated": false,
				"color": "#80d8ff"
			},
			{
				"id": 89,
				"short": "LT",
				"name": "Lithuania",
				"defeated": false,
				"color": "#40c4ff"
			},
			{
				"id": 90,
				"short": "LU",
				"name": "Luxembourg",
				"defeated": false,
				"color": "#00b0ff"
			},
			{
				"id": 91,
				"short": "LV",
				"name": "Latvia",
				"defeated": false,
				"color": "#0091ea"
			},
			{
				"id": 92,
				"short": "MA",
				"name": "Morocco",
				"defeated": false,
				"color": "#00bcd4"
			},
			{
				"id": 93,
				"short": "MD",
				"name": "Moldova",
				"defeated": false,
				"color": "#80deea"
			},
			{
				"id": 94,
				"short": "MG",
				"name": "Madagascar",
				"defeated": false,
				"color": "#4dd0e1"
			},
			{
				"id": 95,
				"short": "MX",
				"name": "Mexico",
				"defeated": false,
				"color": "#26c6da"
			},
			{
				"id": 96,
				"short": "MK",
				"name": "Macedonia",
				"defeated": false,
				"color": "#00bcd4"
			},
			{
				"id": 97,
				"short": "ML",
				"name": "Mali",
				"defeated": false,
				"color": "#00acc1"
			},
			{
				"id": 98,
				"short": "MM",
				"name": "Myanmar",
				"defeated": false,
				"color": "#0097a7"
			},
			{
				"id": 99,
				"short": "ME",
				"name": "Montenegro",
				"defeated": false,
				"color": "#00838f"
			},
			{
				"id": 100,
				"short": "MN",
				"name": "Mongolia",
				"defeated": false,
				"color": "#006064"
			},
			{
				"id": 101,
				"short": "MZ",
				"name": "Mozambique",
				"defeated": false,
				"color": "#84ffff"
			},
			{
				"id": 102,
				"short": "MR",
				"name": "Mauritania",
				"defeated": false,
				"color": "#18ffff"
			},
			{
				"id": 103,
				"short": "MW",
				"name": "Malawi",
				"defeated": false,
				"color": "#00e5ff"
			},
			{
				"id": 104,
				"short": "MY",
				"name": "Malaysia",
				"defeated": false,
				"color": "#00b8d4"
			},
			{
				"id": 105,
				"short": "NA",
				"name": "Namibia",
				"defeated": false,
				"color": "#009688"
			},
			{
				"id": 106,
				"short": "NE",
				"name": "Niger",
				"defeated": false,
				"color": "#4db6ac"
			},
			{
				"id": 107,
				"short": "NG",
				"name": "Nigeria",
				"defeated": false,
				"color": "#26a69a"
			},
			{
				"id": 108,
				"short": "NI",
				"name": "Nicaragua",
				"defeated": false,
				"color": "#009688"
			},
			{
				"id": 109,
				"short": "NL",
				"name": "Netherlands",
				"defeated": false,
				"color": "#00897b"
			},
			{
				"id": 110,
				"short": "NO",
				"name": "Norway",
				"defeated": false,
				"color": "#00796b"
			},
			{
				"id": 111,
				"short": "NP",
				"name": "Nepal",
				"defeated": false,
				"color": "#00695c"
			},
			{
				"id": 112,
				"short": "NZ",
				"name": "New Zealand",
				"defeated": false,
				"color": "#004d40"
			},
			{
				"id": 113,
				"short": "OM",
				"name": "Oman",
				"defeated": false,
				"color": "#a7ffeb"
			},
			{
				"id": 114,
				"short": "PK",
				"name": "Pakistan",
				"defeated": false,
				"color": "#64ffda"
			},
			{
				"id": 115,
				"short": "PA",
				"name": "Panama",
				"defeated": false,
				"color": "#1de9b6"
			},
			{
				"id": 116,
				"short": "PE",
				"name": "Peru",
				"defeated": false,
				"color": "#4caf50"
			},
			{
				"id": 117,
				"short": "PH",
				"name": "Philippines",
				"defeated": false,
				"color": "#81c784"
			},
			{
				"id": 118,
				"short": "PG",
				"name": "Papua New Guinea",
				"defeated": false,
				"color": "#66bb6a"
			},
			{
				"id": 119,
				"short": "PL",
				"name": "Poland",
				"defeated": false,
				"color": "#4caf50"
			},
			{
				"id": 120,
				"short": "KP",
				"name": "Democratic Republic of Korea",
				"defeated": false,
				"color": "#43a047"
			},
			{
				"id": 121,
				"short": "PT",
				"name": "Portugal",
				"defeated": false,
				"color": "#388e3c"
			},
			{
				"id": 122,
				"short": "PY",
				"name": "Paraguay",
				"defeated": false,
				"color": "#2e7d32"
			},
			{
				"id": 123,
				"short": "PS",
				"name": "Palestine",
				"defeated": false,
				"color": "#1b5e20"
			},
			{
				"id": 124,
				"short": "QA",
				"name": "Qatar",
				"defeated": false,
				"color": "#b9f6ca"
			},
			{
				"id": 125,
				"short": "RO",
				"name": "Romania",
				"defeated": false,
				"color": "#69f0ae"
			},
			{
				"id": 126,
				"short": "RU",
				"name": "Russia",
				"defeated": false,
				"color": "#00e676"
			},
			{
				"id": 127,
				"short": "RW",
				"name": "Rwanda",
				"defeated": false,
				"color": "#8bc34a"
			},
			{
				"id": 128,
				"short": "EH",
				"name": "Western Sahara",
				"defeated": false,
				"color": "#aed581"
			},
			{
				"id": 129,
				"short": "SA",
				"name": "Saudi Arabia",
				"defeated": false,
				"color": "#9ccc65"
			},
			{
				"id": 130,
				"short": "SD",
				"name": "Sudan",
				"defeated": false,
				"color": "#8bc34a"
			},
			{
				"id": 131,
				"short": "SS",
				"name": "South Sudan",
				"defeated": false,
				"color": "#7cb342"
			},
			{
				"id": 132,
				"short": "SN",
				"name": "Senegal",
				"defeated": false,
				"color": "#689f38"
			},
			{
				"id": 133,
				"short": "SL",
				"name": "Sierra Leone",
				"defeated": false,
				"color": "#558b2f"
			},
			{
				"id": 134,
				"short": "SV",
				"name": "El Salvador",
				"defeated": false,
				"color": "#33691e"
			},
			{
				"id": 135,
				"short": "RS",
				"name": "Serbia",
				"defeated": false,
				"color": "#ccff90"
			},
			{
				"id": 136,
				"short": "SR",
				"name": "Suriname",
				"defeated": false,
				"color": "#b2ff59"
			},
			{
				"id": 137,
				"short": "SK",
				"name": "Slovakia",
				"defeated": false,
				"color": "#76ff03"
			},
			{
				"id": 138,
				"short": "SI",
				"name": "Slovenia",
				"defeated": false,
				"color": "#cddc39"
			},
			{
				"id": 139,
				"short": "SE",
				"name": "Sweden",
				"defeated": false,
				"color": "#dce775"
			},
			{
				"id": 140,
				"short": "SZ",
				"name": "Swaziland",
				"defeated": false,
				"color": "#d4e157"
			},
			{
				"id": 141,
				"short": "SY",
				"name": "Syria",
				"defeated": false,
				"color": "#cddc39"
			},
			{
				"id": 142,
				"short": "TD",
				"name": "Chad",
				"defeated": false,
				"color": "#c0ca33"
			},
			{
				"id": 143,
				"short": "TG",
				"name": "Togo",
				"defeated": false,
				"color": "#afb42b"
			},
			{
				"id": 144,
				"short": "TH",
				"name": "Thailand",
				"defeated": false,
				"color": "#9e9d24"
			},
			{
				"id": 145,
				"short": "TJ",
				"name": "Tajikistan",
				"defeated": false,
				"color": "#827717"
			},
			{
				"id": 146,
				"short": "TM",
				"name": "Turkmenistan",
				"defeated": false,
				"color": "#f4ff81"
			},
			{
				"id": 147,
				"short": "TL",
				"name": "Timor-Leste",
				"defeated": false,
				"color": "#eeff41"
			},
			{
				"id": 148,
				"short": "TN",
				"name": "Tunisia",
				"defeated": false,
				"color": "#c6ff00"
			},
			{
				"id": 149,
				"short": "TR",
				"name": "Turkey",
				"defeated": false,
				"color": "#ffeb3b"
			},
			{
				"id": 150,
				"short": "TW",
				"name": "Taiwan",
				"defeated": false,
				"color": "#fff176"
			},
			{
				"id": 151,
				"short": "TZ",
				"name": "Tanzania",
				"defeated": false,
				"color": "#ffee58"
			},
			{
				"id": 152,
				"short": "UG",
				"name": "Uganda",
				"defeated": false,
				"color": "#ffeb3b"
			},
			{
				"id": 153,
				"short": "UA",
				"name": "Ukraine",
				"defeated": false,
				"color": "#fdd835"
			},
			{
				"id": 154,
				"short": "UY",
				"name": "Uruguay",
				"defeated": false,
				"color": "#fbc02d"
			},
			{
				"id": 155,
				"short": "US",
				"name": "United States",
				"defeated": false,
				"color": "#f9a825"
			},
			{
				"id": 156,
				"short": "UZ",
				"name": "Uzbekistan",
				"defeated": false,
				"color": "#f57f17"
			},
			{
				"id": 157,
				"short": "VE",
				"name": "Venezuela",
				"defeated": false,
				"color": "#ffff8d"
			},
			{
				"id": 158,
				"short": "VN",
				"name": "Vietnam",
				"defeated": false,
				"color": "#ffff00"
			},
			{
				"id": 159,
				"short": "VU",
				"name": "Vanuatu",
				"defeated": false,
				"color": "#ffea00"
			},
			{
				"id": 160,
				"short": "YE",
				"name": "Yemen",
				"defeated": false,
				"color": "#ffc107"
			},
			{
				"id": 161,
				"short": "ZA",
				"name": "South Africa",
				"defeated": false,
				"color": "#ffd54f"
			},
			{
				"id": 162,
				"short": "ZM",
				"name": "Zambia",
				"defeated": false,
				"color": "#ffca28"
			},
			{
				"id": 163,
				"short": "ZW",
				"name": "Zimbabwe",
				"defeated": false,
				"color": "#ffc107"
			},
			{
				"id": 164,
				"short": "SO",
				"name": "Somalia",
				"defeated": false,
				"color": "#ffb300"
			},
			{
				"id": 165,
				"short": "GF",
				"name": "French Guiana",
				"defeated": false,
				"color": "#ffa000"
			},
			{
				"id": 166,
				"short": "FR",
				"name": "France",
				"defeated": false,
				"color": "#ff8f00"
			},
			{
				"id": 167,
				"short": "ES",
				"name": "Spain",
				"defeated": false,
				"color": "#ff6f00"
			},
			{
				"id": 168,
				"short": "AW",
				"name": "Aruba",
				"defeated": false,
				"color": "#ffe57f"
			},
			{
				"id": 169,
				"short": "AI",
				"name": "Anguilla",
				"defeated": false,
				"color": "#ffd740"
			},
			{
				"id": 170,
				"short": "AD",
				"name": "Andorra",
				"defeated": false,
				"color": "#ffc400"
			},
			{
				"id": 171,
				"short": "AG",
				"name": "Antigua and Barbuda",
				"defeated": false,
				"color": "#ff9800"
			},
			{
				"id": 172,
				"short": "BS",
				"name": "Bahamas",
				"defeated": false,
				"color": "#ffb74d"
			},
			{
				"id": 173,
				"short": "BM",
				"name": "Bermuda",
				"defeated": false,
				"color": "#ffa726"
			},
			{
				"id": 174,
				"short": "BB",
				"name": "Barbados",
				"defeated": false,
				"color": "#ff9800"
			},
			{
				"id": 175,
				"short": "KM",
				"name": "Comoros",
				"defeated": false,
				"color": "#fb8c00"
			},
			{
				"id": 176,
				"short": "CV",
				"name": "Cape Verde",
				"defeated": false,
				"color": "#f57c00"
			},
			{
				"id": 177,
				"short": "KY",
				"name": "Cayman Islands",
				"defeated": false,
				"color": "#ef6c00"
			},
			{
				"id": 178,
				"short": "DM",
				"name": "Dominica",
				"defeated": false,
				"color": "#e65100"
			},
			{
				"id": 179,
				"short": "FK",
				"name": "Falkland Islands",
				"defeated": false,
				"color": "#ffd180"
			},
			{
				"id": 180,
				"short": "FO",
				"name": "Faeroe Islands",
				"defeated": false,
				"color": "#ffab40"
			},
			{
				"id": 181,
				"short": "GD",
				"name": "Grenada",
				"defeated": false,
				"color": "#ff9100"
			},
			{
				"id": 182,
				"short": "HK",
				"name": "Hong Kong",
				"defeated": false,
				"color": "#ff5722"
			},
			{
				"id": 183,
				"short": "KN",
				"name": "Saint Kitts and Nevis",
				"defeated": false,
				"color": "#ff8a65"
			},
			{
				"id": 184,
				"short": "LC",
				"name": "Saint Lucia",
				"defeated": false,
				"color": "#ff7043"
			},
			{
				"id": 185,
				"short": "LI",
				"name": "Liechtenstein",
				"defeated": false,
				"color": "#ff5722"
			},
			// {
			// 	"id": 186,
			// 	"short": "MF",
			// 	"name": "Saint Martin (French)",
			// 	"defeated": false,
			// 	"color": "#f4511e"
			// },
			{
				"id": 187,
				"short": "MV",
				"name": "Maldives",
				"defeated": false,
				"color": "#e64a19"
			},
			{
				"id": 188,
				"short": "MT",
				"name": "Malta",
				"defeated": false,
				"color": "#d84315"
			},
			{
				"id": 189,
				"short": "MS",
				"name": "Montserrat",
				"defeated": false,
				"color": "#bf360c"
			},
			{
				"id": 190,
				"short": "MU",
				"name": "Mauritius",
				"defeated": false,
				"color": "#ff9e80"
			},
			{
				"id": 191,
				"short": "NC",
				"name": "New Caledonia",
				"defeated": false,
				"color": "#ff6e40"
			},
			{
				"id": 192,
				"short": "NR",
				"name": "Nauru",
				"defeated": false,
				"color": "#ff3d00"
			},
			{
				"id": 193,
				"short": "PN",
				"name": "Pitcairn Islands",
				"defeated": false,
				"color": "#795548"
			},
			{
				"id": 194,
				"short": "PR",
				"name": "Puerto Rico",
				"defeated": false,
				"color": "#a1887f"
			},
			{
				"id": 195,
				"short": "PF",
				"name": "French Polynesia",
				"defeated": false,
				"color": "#8d6e63"
			},
			{
				"id": 196,
				"short": "SG",
				"name": "Singapore",
				"defeated": false,
				"color": "#795548"
			},
			{
				"id": 197,
				"short": "SB",
				"name": "Solomon Islands",
				"defeated": false,
				"color": "#6d4c41"
			},
			{
				"id": 198,
				"short": "ST",
				"name": "São Tomé and Principe",
				"defeated": false,
				"color": "#5d4037"
			},
			{
				"id": 199,
				"short": "SX",
				"name": "Saint Martin (Dutch)",
				"defeated": false,
				"color": "#4e342e"
			},
			{
				"id": 200,
				"short": "SC",
				"name": "Seychelles",
				"defeated": false,
				"color": "#9e9e9e"
			},
			{
				"id": 201,
				"short": "TC",
				"name": "Turks and Caicos Islands",
				"defeated": false,
				"color": "#e0e0e0"
			},
			{
				"id": 202,
				"short": "TO",
				"name": "Tonga",
				"defeated": false,
				"color": "#bdbdbd"
			},
			{
				"id": 203,
				"short": "TT",
				"name": "Trinidad and Tobago",
				"defeated": false,
				"color": "#9e9e9e"
			},
			{
				"id": 204,
				"short": "VC",
				"name": "Saint Vincent and the Grenadines",
				"defeated": false,
				"color": "#757575"
			},
			{
				"id": 205,
				"short": "VG",
				"name": "British Virgin Islands",
				"defeated": false,
				"color": "#616161"
			},
			{
				"id": 206,
				"short": "VI",
				"name": "United States Virgin Islands",
				"defeated": false,
				"color": "#424242"
			},
			{
				"id": 207,
				"short": "CY",
				"name": "Cyprus",
				"defeated": false,
				"color": "#607d8b"
			},
			{
				"id": 208,
				"short": "RE",
				"name": "Reunion",
				"defeated": false,
				"color": "#90a4ae"
			},
			{
				"id": 209,
				"short": "YT",
				"name": "Mayotte",
				"defeated": false,
				"color": "#78909c"
			},
			{
				"id": 210,
				"short": "MQ",
				"name": "Martinique",
				"defeated": false,
				"color": "#607d8b"
			},
			{
				"id": 211,
				"short": "GP",
				"name": "Guadeloupe",
				"defeated": false,
				"color": "#546e7a"
			},
			{
				"id": 212,
				"short": "CW",
				"name": "Curaco",
				"defeated": false,
				"color": "#455a64"
			},
			{
				"id": 213,
				"short": "IC",
				"name": "Canary Islands",
				"defeated": false,
				"color": "#37474f"
			}
		],
		"territories": [
			{
				"id": 1,
				"name": "Afghanistan",
				"originalOwner": "Afghanistan",
				"currentOwner": "Afghanistan",
				"previousOwner": "Afghanistan"
			},
			{
				"id": 2,
				"name": "Angola",
				"originalOwner": "Angola",
				"currentOwner": "Angola",
				"previousOwner": "Angola"
			},
			{
				"id": 3,
				"name": "Albania",
				"originalOwner": "Albania",
				"currentOwner": "Albania",
				"previousOwner": "Albania"
			},
			{
				"id": 4,
				"name": "United Arab Emirates",
				"originalOwner": "United Arab Emirates",
				"currentOwner": "United Arab Emirates",
				"previousOwner": "United Arab Emirates"
			},
			{
				"id": 5,
				"name": "Argentina",
				"originalOwner": "Argentina",
				"currentOwner": "Argentina",
				"previousOwner": "Argentina"
			},
			{
				"id": 6,
				"name": "Armenia",
				"originalOwner": "Armenia",
				"currentOwner": "Armenia",
				"previousOwner": "Armenia"
			},
			{
				"id": 7,
				"name": "Australia",
				"originalOwner": "Australia",
				"currentOwner": "Australia",
				"previousOwner": "Australia"
			},
			{
				"id": 8,
				"name": "Austria",
				"originalOwner": "Austria",
				"currentOwner": "Austria",
				"previousOwner": "Austria"
			},
			{
				"id": 9,
				"name": "Azerbaijan",
				"originalOwner": "Azerbaijan",
				"currentOwner": "Azerbaijan",
				"previousOwner": "Azerbaijan"
			},
			{
				"id": 10,
				"name": "Burundi",
				"originalOwner": "Burundi",
				"currentOwner": "Burundi",
				"previousOwner": "Burundi"
			},
			{
				"id": 11,
				"name": "Belgium",
				"originalOwner": "Belgium",
				"currentOwner": "Belgium",
				"previousOwner": "Belgium"
			},
			{
				"id": 12,
				"name": "Benin",
				"originalOwner": "Benin",
				"currentOwner": "Benin",
				"previousOwner": "Benin"
			},
			{
				"id": 13,
				"name": "Burkina Faso",
				"originalOwner": "Burkina Faso",
				"currentOwner": "Burkina Faso",
				"previousOwner": "Burkina Faso"
			},
			{
				"id": 14,
				"name": "Bangladesh",
				"originalOwner": "Bangladesh",
				"currentOwner": "Bangladesh",
				"previousOwner": "Bangladesh"
			},
			{
				"id": 15,
				"name": "Bulgaria",
				"originalOwner": "Bulgaria",
				"currentOwner": "Bulgaria",
				"previousOwner": "Bulgaria"
			},
			{
				"id": 16,
				"name": "Bosnia and Herzegovina",
				"originalOwner": "Bosnia and Herzegovina",
				"currentOwner": "Bosnia and Herzegovina",
				"previousOwner": "Bosnia and Herzegovina"
			},
			{
				"id": 17,
				"name": "Belarus",
				"originalOwner": "Belarus",
				"currentOwner": "Belarus",
				"previousOwner": "Belarus"
			},
			{
				"id": 18,
				"name": "Belize",
				"originalOwner": "Belize",
				"currentOwner": "Belize",
				"previousOwner": "Belize"
			},
			{
				"id": 19,
				"name": "Bolivia",
				"originalOwner": "Bolivia",
				"currentOwner": "Bolivia",
				"previousOwner": "Bolivia"
			},
			{
				"id": 20,
				"name": "Brazil",
				"originalOwner": "Brazil",
				"currentOwner": "Brazil",
				"previousOwner": "Brazil"
			},
			{
				"id": 21,
				"name": "Brunei Darussalam",
				"originalOwner": "Brunei Darussalam",
				"currentOwner": "Brunei Darussalam",
				"previousOwner": "Brunei Darussalam"
			},
			{
				"id": 22,
				"name": "Bhutan",
				"originalOwner": "Bhutan",
				"currentOwner": "Bhutan",
				"previousOwner": "Bhutan"
			},
			{
				"id": 23,
				"name": "Botswana",
				"originalOwner": "Botswana",
				"currentOwner": "Botswana",
				"previousOwner": "Botswana"
			},
			{
				"id": 24,
				"name": "Central African Republic",
				"originalOwner": "Central African Republic",
				"currentOwner": "Central African Republic",
				"previousOwner": "Central African Republic"
			},
			{
				"id": 25,
				"name": "Canada",
				"originalOwner": "Canada",
				"currentOwner": "Canada",
				"previousOwner": "Canada"
			},
			{
				"id": 26,
				"name": "Switzerland",
				"originalOwner": "Switzerland",
				"currentOwner": "Switzerland",
				"previousOwner": "Switzerland"
			},
			{
				"id": 27,
				"name": "Chile",
				"originalOwner": "Chile",
				"currentOwner": "Chile",
				"previousOwner": "Chile"
			},
			{
				"id": 28,
				"name": "China",
				"originalOwner": "China",
				"currentOwner": "China",
				"previousOwner": "China"
			},
			{
				"id": 29,
				"name": "Côte d'Ivoire",
				"originalOwner": "Côte d'Ivoire",
				"currentOwner": "Côte d'Ivoire",
				"previousOwner": "Côte d'Ivoire"
			},
			{
				"id": 30,
				"name": "Cameroon",
				"originalOwner": "Cameroon",
				"currentOwner": "Cameroon",
				"previousOwner": "Cameroon"
			},
			{
				"id": 31,
				"name": "Democratic Republic of the Congo",
				"originalOwner": "Democratic Republic of the Congo",
				"currentOwner": "Democratic Republic of the Congo",
				"previousOwner": "Democratic Republic of the Congo"
			},
			{
				"id": 32,
				"name": "Republic of Congo",
				"originalOwner": "Republic of Congo",
				"currentOwner": "Republic of Congo",
				"previousOwner": "Republic of Congo"
			},
			{
				"id": 33,
				"name": "Colombia",
				"originalOwner": "Colombia",
				"currentOwner": "Colombia",
				"previousOwner": "Colombia"
			},
			{
				"id": 34,
				"name": "Costa Rica",
				"originalOwner": "Costa Rica",
				"currentOwner": "Costa Rica",
				"previousOwner": "Costa Rica"
			},
			{
				"id": 35,
				"name": "Cuba",
				"originalOwner": "Cuba",
				"currentOwner": "Cuba",
				"previousOwner": "Cuba"
			},
			{
				"id": 36,
				"name": "Czech Republic",
				"originalOwner": "Czech Republic",
				"currentOwner": "Czech Republic",
				"previousOwner": "Czech Republic"
			},
			{
				"id": 37,
				"name": "Germany",
				"originalOwner": "Germany",
				"currentOwner": "Germany",
				"previousOwner": "Germany"
			},
			{
				"id": 38,
				"name": "Djibouti",
				"originalOwner": "Djibouti",
				"currentOwner": "Djibouti",
				"previousOwner": "Djibouti"
			},
			{
				"id": 39,
				"name": "Denmark",
				"originalOwner": "Denmark",
				"currentOwner": "Denmark",
				"previousOwner": "Denmark"
			},
			{
				"id": 40,
				"name": "Dominican Republic",
				"originalOwner": "Dominican Republic",
				"currentOwner": "Dominican Republic",
				"previousOwner": "Dominican Republic"
			},
			{
				"id": 41,
				"name": "Algeria",
				"originalOwner": "Algeria",
				"currentOwner": "Algeria",
				"previousOwner": "Algeria"
			},
			{
				"id": 42,
				"name": "Ecuador",
				"originalOwner": "Ecuador",
				"currentOwner": "Ecuador",
				"previousOwner": "Ecuador"
			},
			{
				"id": 43,
				"name": "Egypt",
				"originalOwner": "Egypt",
				"currentOwner": "Egypt",
				"previousOwner": "Egypt"
			},
			{
				"id": 44,
				"name": "Eritrea",
				"originalOwner": "Eritrea",
				"currentOwner": "Eritrea",
				"previousOwner": "Eritrea"
			},
			{
				"id": 45,
				"name": "Estonia",
				"originalOwner": "Estonia",
				"currentOwner": "Estonia",
				"previousOwner": "Estonia"
			},
			{
				"id": 46,
				"name": "Ethiopia",
				"originalOwner": "Ethiopia",
				"currentOwner": "Ethiopia",
				"previousOwner": "Ethiopia"
			},
			{
				"id": 47,
				"name": "Finland",
				"originalOwner": "Finland",
				"currentOwner": "Finland",
				"previousOwner": "Finland"
			},
			{
				"id": 48,
				"name": "Fiji",
				"originalOwner": "Fiji",
				"currentOwner": "Fiji",
				"previousOwner": "Fiji"
			},
			{
				"id": 49,
				"name": "Gabon",
				"originalOwner": "Gabon",
				"currentOwner": "Gabon",
				"previousOwner": "Gabon"
			},
			{
				"id": 50,
				"name": "United Kingdom",
				"originalOwner": "United Kingdom",
				"currentOwner": "United Kingdom",
				"previousOwner": "United Kingdom"
			},
			{
				"id": 51,
				"name": "Georgia",
				"originalOwner": "Georgia",
				"currentOwner": "Georgia",
				"previousOwner": "Georgia"
			},
			{
				"id": 52,
				"name": "Ghana",
				"originalOwner": "Ghana",
				"currentOwner": "Ghana",
				"previousOwner": "Ghana"
			},
			{
				"id": 53,
				"name": "Guinea",
				"originalOwner": "Guinea",
				"currentOwner": "Guinea",
				"previousOwner": "Guinea"
			},
			{
				"id": 54,
				"name": "The Gambia",
				"originalOwner": "The Gambia",
				"currentOwner": "The Gambia",
				"previousOwner": "The Gambia"
			},
			{
				"id": 55,
				"name": "Guinea-Bissau",
				"originalOwner": "Guinea-Bissau",
				"currentOwner": "Guinea-Bissau",
				"previousOwner": "Guinea-Bissau"
			},
			{
				"id": 56,
				"name": "Equatorial Guinea",
				"originalOwner": "Equatorial Guinea",
				"currentOwner": "Equatorial Guinea",
				"previousOwner": "Equatorial Guinea"
			},
			{
				"id": 57,
				"name": "Greece",
				"originalOwner": "Greece",
				"currentOwner": "Greece",
				"previousOwner": "Greece"
			},
			{
				"id": 58,
				"name": "Greenland",
				"originalOwner": "Greenland",
				"currentOwner": "Greenland",
				"previousOwner": "Greenland"
			},
			{
				"id": 59,
				"name": "Guatemala",
				"originalOwner": "Guatemala",
				"currentOwner": "Guatemala",
				"previousOwner": "Guatemala"
			},
			{
				"id": 60,
				"name": "Guyana",
				"originalOwner": "Guyana",
				"currentOwner": "Guyana",
				"previousOwner": "Guyana"
			},
			{
				"id": 61,
				"name": "Honduras",
				"originalOwner": "Honduras",
				"currentOwner": "Honduras",
				"previousOwner": "Honduras"
			},
			{
				"id": 62,
				"name": "Croatia",
				"originalOwner": "Croatia",
				"currentOwner": "Croatia",
				"previousOwner": "Croatia"
			},
			{
				"id": 63,
				"name": "Haiti",
				"originalOwner": "Haiti",
				"currentOwner": "Haiti",
				"previousOwner": "Haiti"
			},
			{
				"id": 64,
				"name": "Hungary",
				"originalOwner": "Hungary",
				"currentOwner": "Hungary",
				"previousOwner": "Hungary"
			},
			{
				"id": 65,
				"name": "Indonesia",
				"originalOwner": "Indonesia",
				"currentOwner": "Indonesia",
				"previousOwner": "Indonesia"
			},
			{
				"id": 66,
				"name": "India",
				"originalOwner": "India",
				"currentOwner": "India",
				"previousOwner": "India"
			},
			{
				"id": 67,
				"name": "Ireland",
				"originalOwner": "Ireland",
				"currentOwner": "Ireland",
				"previousOwner": "Ireland"
			},
			{
				"id": 68,
				"name": "Iran",
				"originalOwner": "Iran",
				"currentOwner": "Iran",
				"previousOwner": "Iran"
			},
			{
				"id": 69,
				"name": "Iraq",
				"originalOwner": "Iraq",
				"currentOwner": "Iraq",
				"previousOwner": "Iraq"
			},
			{
				"id": 70,
				"name": "Iceland",
				"originalOwner": "Iceland",
				"currentOwner": "Iceland",
				"previousOwner": "Iceland"
			},
			{
				"id": 71,
				"name": "Israel",
				"originalOwner": "Israel",
				"currentOwner": "Israel",
				"previousOwner": "Israel"
			},
			{
				"id": 72,
				"name": "Italy",
				"originalOwner": "Italy",
				"currentOwner": "Italy",
				"previousOwner": "Italy"
			},
			{
				"id": 73,
				"name": "Jamaica",
				"originalOwner": "Jamaica",
				"currentOwner": "Jamaica",
				"previousOwner": "Jamaica"
			},
			{
				"id": 74,
				"name": "Jordan",
				"originalOwner": "Jordan",
				"currentOwner": "Jordan",
				"previousOwner": "Jordan"
			},
			{
				"id": 75,
				"name": "Japan",
				"originalOwner": "Japan",
				"currentOwner": "Japan",
				"previousOwner": "Japan"
			},
			{
				"id": 76,
				"name": "Kazakhstan",
				"originalOwner": "Kazakhstan",
				"currentOwner": "Kazakhstan",
				"previousOwner": "Kazakhstan"
			},
			{
				"id": 77,
				"name": "Kenya",
				"originalOwner": "Kenya",
				"currentOwner": "Kenya",
				"previousOwner": "Kenya"
			},
			{
				"id": 78,
				"name": "Kyrgyzstan",
				"originalOwner": "Kyrgyzstan",
				"currentOwner": "Kyrgyzstan",
				"previousOwner": "Kyrgyzstan"
			},
			{
				"id": 79,
				"name": "Cambodia",
				"originalOwner": "Cambodia",
				"currentOwner": "Cambodia",
				"previousOwner": "Cambodia"
			},
			{
				"id": 80,
				"name": "Republic of Korea",
				"originalOwner": "Republic of Korea",
				"currentOwner": "Republic of Korea",
				"previousOwner": "Republic of Korea"
			},
			// {
			// 	"id": 81,
			// 	"name": "Kosovo",
			// 	"originalOwner": "Kosovo",
			// 	"currentOwner": "Kosovo",
			// 	"previousOwner": "Kosovo"
			// },
			{
				"id": 82,
				"name": "Kuwait",
				"originalOwner": "Kuwait",
				"currentOwner": "Kuwait",
				"previousOwner": "Kuwait"
			},
			{
				"id": 83,
				"name": "Lao PDR",
				"originalOwner": "Lao PDR",
				"currentOwner": "Lao PDR",
				"previousOwner": "Lao PDR"
			},
			{
				"id": 84,
				"name": "Lebanon",
				"originalOwner": "Lebanon",
				"currentOwner": "Lebanon",
				"previousOwner": "Lebanon"
			},
			{
				"id": 85,
				"name": "Liberia",
				"originalOwner": "Liberia",
				"currentOwner": "Liberia",
				"previousOwner": "Liberia"
			},
			{
				"id": 86,
				"name": "Libya",
				"originalOwner": "Libya",
				"currentOwner": "Libya",
				"previousOwner": "Libya"
			},
			{
				"id": 87,
				"name": "Sri Lanka",
				"originalOwner": "Sri Lanka",
				"currentOwner": "Sri Lanka",
				"previousOwner": "Sri Lanka"
			},
			{
				"id": 88,
				"name": "Lesotho",
				"originalOwner": "Lesotho",
				"currentOwner": "Lesotho",
				"previousOwner": "Lesotho"
			},
			{
				"id": 89,
				"name": "Lithuania",
				"originalOwner": "Lithuania",
				"currentOwner": "Lithuania",
				"previousOwner": "Lithuania"
			},
			{
				"id": 90,
				"name": "Luxembourg",
				"originalOwner": "Luxembourg",
				"currentOwner": "Luxembourg",
				"previousOwner": "Luxembourg"
			},
			{
				"id": 91,
				"name": "Latvia",
				"originalOwner": "Latvia",
				"currentOwner": "Latvia",
				"previousOwner": "Latvia"
			},
			{
				"id": 92,
				"name": "Morocco",
				"originalOwner": "Morocco",
				"currentOwner": "Morocco",
				"previousOwner": "Morocco"
			},
			{
				"id": 93,
				"name": "Moldova",
				"originalOwner": "Moldova",
				"currentOwner": "Moldova",
				"previousOwner": "Moldova"
			},
			{
				"id": 94,
				"name": "Madagascar",
				"originalOwner": "Madagascar",
				"currentOwner": "Madagascar",
				"previousOwner": "Madagascar"
			},
			{
				"id": 95,
				"name": "Mexico",
				"originalOwner": "Mexico",
				"currentOwner": "Mexico",
				"previousOwner": "Mexico"
			},
			{
				"id": 96,
				"name": "Macedonia",
				"originalOwner": "Macedonia",
				"currentOwner": "Macedonia",
				"previousOwner": "Macedonia"
			},
			{
				"id": 97,
				"name": "Mali",
				"originalOwner": "Mali",
				"currentOwner": "Mali",
				"previousOwner": "Mali"
			},
			{
				"id": 98,
				"name": "Myanmar",
				"originalOwner": "Myanmar",
				"currentOwner": "Myanmar",
				"previousOwner": "Myanmar"
			},
			{
				"id": 99,
				"name": "Montenegro",
				"originalOwner": "Montenegro",
				"currentOwner": "Montenegro",
				"previousOwner": "Montenegro"
			},
			{
				"id": 100,
				"name": "Mongolia",
				"originalOwner": "Mongolia",
				"currentOwner": "Mongolia",
				"previousOwner": "Mongolia"
			},
			{
				"id": 101,
				"name": "Mozambique",
				"originalOwner": "Mozambique",
				"currentOwner": "Mozambique",
				"previousOwner": "Mozambique"
			},
			{
				"id": 102,
				"name": "Mauritania",
				"originalOwner": "Mauritania",
				"currentOwner": "Mauritania",
				"previousOwner": "Mauritania"
			},
			{
				"id": 103,
				"name": "Malawi",
				"originalOwner": "Malawi",
				"currentOwner": "Malawi",
				"previousOwner": "Malawi"
			},
			{
				"id": 104,
				"name": "Malaysia",
				"originalOwner": "Malaysia",
				"currentOwner": "Malaysia",
				"previousOwner": "Malaysia"
			},
			{
				"id": 105,
				"name": "Namibia",
				"originalOwner": "Namibia",
				"currentOwner": "Namibia",
				"previousOwner": "Namibia"
			},
			{
				"id": 106,
				"name": "Niger",
				"originalOwner": "Niger",
				"currentOwner": "Niger",
				"previousOwner": "Niger"
			},
			{
				"id": 107,
				"name": "Nigeria",
				"originalOwner": "Nigeria",
				"currentOwner": "Nigeria",
				"previousOwner": "Nigeria"
			},
			{
				"id": 108,
				"name": "Nicaragua",
				"originalOwner": "Nicaragua",
				"currentOwner": "Nicaragua",
				"previousOwner": "Nicaragua"
			},
			{
				"id": 109,
				"name": "Netherlands",
				"originalOwner": "Netherlands",
				"currentOwner": "Netherlands",
				"previousOwner": "Netherlands"
			},
			{
				"id": 110,
				"name": "Norway",
				"originalOwner": "Norway",
				"currentOwner": "Norway",
				"previousOwner": "Norway"
			},
			{
				"id": 111,
				"name": "Nepal",
				"originalOwner": "Nepal",
				"currentOwner": "Nepal",
				"previousOwner": "Nepal"
			},
			{
				"id": 112,
				"name": "New Zealand",
				"originalOwner": "New Zealand",
				"currentOwner": "New Zealand",
				"previousOwner": "New Zealand"
			},
			{
				"id": 113,
				"name": "Oman",
				"originalOwner": "Oman",
				"currentOwner": "Oman",
				"previousOwner": "Oman"
			},
			{
				"id": 114,
				"name": "Pakistan",
				"originalOwner": "Pakistan",
				"currentOwner": "Pakistan",
				"previousOwner": "Pakistan"
			},
			{
				"id": 115,
				"name": "Panama",
				"originalOwner": "Panama",
				"currentOwner": "Panama",
				"previousOwner": "Panama"
			},
			{
				"id": 116,
				"name": "Peru",
				"originalOwner": "Peru",
				"currentOwner": "Peru",
				"previousOwner": "Peru"
			},
			{
				"id": 117,
				"name": "Philippines",
				"originalOwner": "Philippines",
				"currentOwner": "Philippines",
				"previousOwner": "Philippines"
			},
			{
				"id": 118,
				"name": "Papua New Guinea",
				"originalOwner": "Papua New Guinea",
				"currentOwner": "Papua New Guinea",
				"previousOwner": "Papua New Guinea"
			},
			{
				"id": 119,
				"name": "Poland",
				"originalOwner": "Poland",
				"currentOwner": "Poland",
				"previousOwner": "Poland"
			},
			{
				"id": 120,
				"name": "Democratic Republic of Korea",
				"originalOwner": "Democratic Republic of Korea",
				"currentOwner": "Democratic Republic of Korea",
				"previousOwner": "Democratic Republic of Korea"
			},
			{
				"id": 121,
				"name": "Portugal",
				"originalOwner": "Portugal",
				"currentOwner": "Portugal",
				"previousOwner": "Portugal"
			},
			{
				"id": 122,
				"name": "Paraguay",
				"originalOwner": "Paraguay",
				"currentOwner": "Paraguay",
				"previousOwner": "Paraguay"
			},
			{
				"id": 123,
				"name": "Palestine",
				"originalOwner": "Palestine",
				"currentOwner": "Palestine",
				"previousOwner": "Palestine"
			},
			{
				"id": 124,
				"name": "Qatar",
				"originalOwner": "Qatar",
				"currentOwner": "Qatar",
				"previousOwner": "Qatar"
			},
			{
				"id": 125,
				"name": "Romania",
				"originalOwner": "Romania",
				"currentOwner": "Romania",
				"previousOwner": "Romania"
			},
			{
				"id": 126,
				"name": "Russia",
				"originalOwner": "Russia",
				"currentOwner": "Russia",
				"previousOwner": "Russia"
			},
			{
				"id": 127,
				"name": "Rwanda",
				"originalOwner": "Rwanda",
				"currentOwner": "Rwanda",
				"previousOwner": "Rwanda"
			},
			{
				"id": 128,
				"name": "Western Sahara",
				"originalOwner": "Western Sahara",
				"currentOwner": "Western Sahara",
				"previousOwner": "Western Sahara"
			},
			{
				"id": 129,
				"name": "Saudi Arabia",
				"originalOwner": "Saudi Arabia",
				"currentOwner": "Saudi Arabia",
				"previousOwner": "Saudi Arabia"
			},
			{
				"id": 130,
				"name": "Sudan",
				"originalOwner": "Sudan",
				"currentOwner": "Sudan",
				"previousOwner": "Sudan"
			},
			{
				"id": 131,
				"name": "South Sudan",
				"originalOwner": "South Sudan",
				"currentOwner": "South Sudan",
				"previousOwner": "South Sudan"
			},
			{
				"id": 132,
				"name": "Senegal",
				"originalOwner": "Senegal",
				"currentOwner": "Senegal",
				"previousOwner": "Senegal"
			},
			{
				"id": 133,
				"name": "Sierra Leone",
				"originalOwner": "Sierra Leone",
				"currentOwner": "Sierra Leone",
				"previousOwner": "Sierra Leone"
			},
			{
				"id": 134,
				"name": "El Salvador",
				"originalOwner": "El Salvador",
				"currentOwner": "El Salvador",
				"previousOwner": "El Salvador"
			},
			{
				"id": 135,
				"name": "Serbia",
				"originalOwner": "Serbia",
				"currentOwner": "Serbia",
				"previousOwner": "Serbia"
			},
			{
				"id": 136,
				"name": "Suriname",
				"originalOwner": "Suriname",
				"currentOwner": "Suriname",
				"previousOwner": "Suriname"
			},
			{
				"id": 137,
				"name": "Slovakia",
				"originalOwner": "Slovakia",
				"currentOwner": "Slovakia",
				"previousOwner": "Slovakia"
			},
			{
				"id": 138,
				"name": "Slovenia",
				"originalOwner": "Slovenia",
				"currentOwner": "Slovenia",
				"previousOwner": "Slovenia"
			},
			{
				"id": 139,
				"name": "Sweden",
				"originalOwner": "Sweden",
				"currentOwner": "Sweden",
				"previousOwner": "Sweden"
			},
			{
				"id": 140,
				"name": "Swaziland",
				"originalOwner": "Swaziland",
				"currentOwner": "Swaziland",
				"previousOwner": "Swaziland"
			},
			{
				"id": 141,
				"name": "Syria",
				"originalOwner": "Syria",
				"currentOwner": "Syria",
				"previousOwner": "Syria"
			},
			{
				"id": 142,
				"name": "Chad",
				"originalOwner": "Chad",
				"currentOwner": "Chad",
				"previousOwner": "Chad"
			},
			{
				"id": 143,
				"name": "Togo",
				"originalOwner": "Togo",
				"currentOwner": "Togo",
				"previousOwner": "Togo"
			},
			{
				"id": 144,
				"name": "Thailand",
				"originalOwner": "Thailand",
				"currentOwner": "Thailand",
				"previousOwner": "Thailand"
			},
			{
				"id": 145,
				"name": "Tajikistan",
				"originalOwner": "Tajikistan",
				"currentOwner": "Tajikistan",
				"previousOwner": "Tajikistan"
			},
			{
				"id": 146,
				"name": "Turkmenistan",
				"originalOwner": "Turkmenistan",
				"currentOwner": "Turkmenistan",
				"previousOwner": "Turkmenistan"
			},
			{
				"id": 147,
				"name": "Timor-Leste",
				"originalOwner": "Timor-Leste",
				"currentOwner": "Timor-Leste",
				"previousOwner": "Timor-Leste"
			},
			{
				"id": 148,
				"name": "Tunisia",
				"originalOwner": "Tunisia",
				"currentOwner": "Tunisia",
				"previousOwner": "Tunisia"
			},
			{
				"id": 149,
				"name": "Turkey",
				"originalOwner": "Turkey",
				"currentOwner": "Turkey",
				"previousOwner": "Turkey"
			},
			{
				"id": 150,
				"name": "Taiwan",
				"originalOwner": "Taiwan",
				"currentOwner": "Taiwan",
				"previousOwner": "Taiwan"
			},
			{
				"id": 151,
				"name": "Tanzania",
				"originalOwner": "Tanzania",
				"currentOwner": "Tanzania",
				"previousOwner": "Tanzania"
			},
			{
				"id": 152,
				"name": "Uganda",
				"originalOwner": "Uganda",
				"currentOwner": "Uganda",
				"previousOwner": "Uganda"
			},
			{
				"id": 153,
				"name": "Ukraine",
				"originalOwner": "Ukraine",
				"currentOwner": "Ukraine",
				"previousOwner": "Ukraine"
			},
			{
				"id": 154,
				"name": "Uruguay",
				"originalOwner": "Uruguay",
				"currentOwner": "Uruguay",
				"previousOwner": "Uruguay"
			},
			{
				"id": 155,
				"name": "United States",
				"originalOwner": "United States",
				"currentOwner": "United States",
				"previousOwner": "United States"
			},
			{
				"id": 156,
				"name": "Uzbekistan",
				"originalOwner": "Uzbekistan",
				"currentOwner": "Uzbekistan",
				"previousOwner": "Uzbekistan"
			},
			{
				"id": 157,
				"name": "Venezuela",
				"originalOwner": "Venezuela",
				"currentOwner": "Venezuela",
				"previousOwner": "Venezuela"
			},
			{
				"id": 158,
				"name": "Vietnam",
				"originalOwner": "Vietnam",
				"currentOwner": "Vietnam",
				"previousOwner": "Vietnam"
			},
			{
				"id": 159,
				"name": "Vanuatu",
				"originalOwner": "Vanuatu",
				"currentOwner": "Vanuatu",
				"previousOwner": "Vanuatu"
			},
			{
				"id": 160,
				"name": "Yemen",
				"originalOwner": "Yemen",
				"currentOwner": "Yemen",
				"previousOwner": "Yemen"
			},
			{
				"id": 161,
				"name": "South Africa",
				"originalOwner": "South Africa",
				"currentOwner": "South Africa",
				"previousOwner": "South Africa"
			},
			{
				"id": 162,
				"name": "Zambia",
				"originalOwner": "Zambia",
				"currentOwner": "Zambia",
				"previousOwner": "Zambia"
			},
			{
				"id": 163,
				"name": "Zimbabwe",
				"originalOwner": "Zimbabwe",
				"currentOwner": "Zimbabwe",
				"previousOwner": "Zimbabwe"
			},
			{
				"id": 164,
				"name": "Somalia",
				"originalOwner": "Somalia",
				"currentOwner": "Somalia",
				"previousOwner": "Somalia"
			},
			{
				"id": 165,
				"name": "French Guiana",
				"originalOwner": "French Guiana",
				"currentOwner": "French Guiana",
				"previousOwner": "French Guiana"
			},
			{
				"id": 166,
				"name": "France",
				"originalOwner": "France",
				"currentOwner": "France",
				"previousOwner": "France"
			},
			{
				"id": 167,
				"name": "Spain",
				"originalOwner": "Spain",
				"currentOwner": "Spain",
				"previousOwner": "Spain"
			},
			{
				"id": 168,
				"name": "Aruba",
				"originalOwner": "Aruba",
				"currentOwner": "Aruba",
				"previousOwner": "Aruba"
			},
			{
				"id": 169,
				"name": "Anguilla",
				"originalOwner": "Anguilla",
				"currentOwner": "Anguilla",
				"previousOwner": "Anguilla"
			},
			{
				"id": 170,
				"name": "Andorra",
				"originalOwner": "Andorra",
				"currentOwner": "Andorra",
				"previousOwner": "Andorra"
			},
			{
				"id": 171,
				"name": "Antigua and Barbuda",
				"originalOwner": "Antigua and Barbuda",
				"currentOwner": "Antigua and Barbuda",
				"previousOwner": "Antigua and Barbuda"
			},
			{
				"id": 172,
				"name": "Bahamas",
				"originalOwner": "Bahamas",
				"currentOwner": "Bahamas",
				"previousOwner": "Bahamas"
			},
			{
				"id": 173,
				"name": "Bermuda",
				"originalOwner": "Bermuda",
				"currentOwner": "Bermuda",
				"previousOwner": "Bermuda"
			},
			{
				"id": 174,
				"name": "Barbados",
				"originalOwner": "Barbados",
				"currentOwner": "Barbados",
				"previousOwner": "Barbados"
			},
			{
				"id": 175,
				"name": "Comoros",
				"originalOwner": "Comoros",
				"currentOwner": "Comoros",
				"previousOwner": "Comoros"
			},
			{
				"id": 176,
				"name": "Cape Verde",
				"originalOwner": "Cape Verde",
				"currentOwner": "Cape Verde",
				"previousOwner": "Cape Verde"
			},
			{
				"id": 177,
				"name": "Cayman Islands",
				"originalOwner": "Cayman Islands",
				"currentOwner": "Cayman Islands",
				"previousOwner": "Cayman Islands"
			},
			{
				"id": 178,
				"name": "Dominica",
				"originalOwner": "Dominica",
				"currentOwner": "Dominica",
				"previousOwner": "Dominica"
			},
			{
				"id": 179,
				"name": "Falkland Islands",
				"originalOwner": "Falkland Islands",
				"currentOwner": "Falkland Islands",
				"previousOwner": "Falkland Islands"
			},
			{
				"id": 180,
				"name": "Faeroe Islands",
				"originalOwner": "Faeroe Islands",
				"currentOwner": "Faeroe Islands",
				"previousOwner": "Faeroe Islands"
			},
			{
				"id": 181,
				"name": "Grenada",
				"originalOwner": "Grenada",
				"currentOwner": "Grenada",
				"previousOwner": "Grenada"
			},
			{
				"id": 182,
				"name": "Hong Kong",
				"originalOwner": "Hong Kong",
				"currentOwner": "Hong Kong",
				"previousOwner": "Hong Kong"
			},
			{
				"id": 183,
				"name": "Saint Kitts and Nevis",
				"originalOwner": "Saint Kitts and Nevis",
				"currentOwner": "Saint Kitts and Nevis",
				"previousOwner": "Saint Kitts and Nevis"
			},
			{
				"id": 184,
				"name": "Saint Lucia",
				"originalOwner": "Saint Lucia",
				"currentOwner": "Saint Lucia",
				"previousOwner": "Saint Lucia"
			},
			{
				"id": 185,
				"name": "Liechtenstein",
				"originalOwner": "Liechtenstein",
				"currentOwner": "Liechtenstein",
				"previousOwner": "Liechtenstein"
			},
			// {
			// 	"id": 186,
			// 	"name": "Saint Martin (French)",
			// 	"originalOwner": "Saint Martin (French)",
			// 	"currentOwner": "Saint Martin (French)",
			// 	"previousOwner": "Saint Martin (French)"
			// },
			{
				"id": 187,
				"name": "Maldives",
				"originalOwner": "Maldives",
				"currentOwner": "Maldives",
				"previousOwner": "Maldives"
			},
			{
				"id": 188,
				"name": "Malta",
				"originalOwner": "Malta",
				"currentOwner": "Malta",
				"previousOwner": "Malta"
			},
			{
				"id": 189,
				"name": "Montserrat",
				"originalOwner": "Montserrat",
				"currentOwner": "Montserrat",
				"previousOwner": "Montserrat"
			},
			{
				"id": 190,
				"name": "Mauritius",
				"originalOwner": "Mauritius",
				"currentOwner": "Mauritius",
				"previousOwner": "Mauritius"
			},
			{
				"id": 191,
				"name": "New Caledonia",
				"originalOwner": "New Caledonia",
				"currentOwner": "New Caledonia",
				"previousOwner": "New Caledonia"
			},
			{
				"id": 192,
				"name": "Nauru",
				"originalOwner": "Nauru",
				"currentOwner": "Nauru",
				"previousOwner": "Nauru"
			},
			{
				"id": 193,
				"name": "Pitcairn Islands",
				"originalOwner": "Pitcairn Islands",
				"currentOwner": "Pitcairn Islands",
				"previousOwner": "Pitcairn Islands"
			},
			{
				"id": 194,
				"name": "Puerto Rico",
				"originalOwner": "Puerto Rico",
				"currentOwner": "Puerto Rico",
				"previousOwner": "Puerto Rico"
			},
			{
				"id": 195,
				"name": "French Polynesia",
				"originalOwner": "French Polynesia",
				"currentOwner": "French Polynesia",
				"previousOwner": "French Polynesia"
			},
			{
				"id": 196,
				"name": "Singapore",
				"originalOwner": "Singapore",
				"currentOwner": "Singapore",
				"previousOwner": "Singapore"
			},
			{
				"id": 197,
				"name": "Solomon Islands",
				"originalOwner": "Solomon Islands",
				"currentOwner": "Solomon Islands",
				"previousOwner": "Solomon Islands"
			},
			{
				"id": 198,
				"name": "São Tomé and Principe",
				"originalOwner": "São Tomé and Principe",
				"currentOwner": "São Tomé and Principe",
				"previousOwner": "São Tomé and Principe"
			},
			{
				"id": 199,
				"name": "Saint Martin",
				"originalOwner": "Saint Martin",
				"currentOwner": "Saint Martin",
				"previousOwner": "Saint Martin"
			},
			{
				"id": 200,
				"name": "Seychelles",
				"originalOwner": "Seychelles",
				"currentOwner": "Seychelles",
				"previousOwner": "Seychelles"
			},
			{
				"id": 201,
				"name": "Turks and Caicos Islands",
				"originalOwner": "Turks and Caicos Islands",
				"currentOwner": "Turks and Caicos Islands",
				"previousOwner": "Turks and Caicos Islands"
			},
			{
				"id": 202,
				"name": "Tonga",
				"originalOwner": "Tonga",
				"currentOwner": "Tonga",
				"previousOwner": "Tonga"
			},
			{
				"id": 203,
				"name": "Trinidad and Tobago",
				"originalOwner": "Trinidad and Tobago",
				"currentOwner": "Trinidad and Tobago",
				"previousOwner": "Trinidad and Tobago"
			},
			{
				"id": 204,
				"name": "Saint Vincent and the Grenadines",
				"originalOwner": "Saint Vincent and the Grenadines",
				"currentOwner": "Saint Vincent and the Grenadines",
				"previousOwner": "Saint Vincent and the Grenadines"
			},
			{
				"id": 205,
				"name": "British Virgin Islands",
				"originalOwner": "British Virgin Islands",
				"currentOwner": "British Virgin Islands",
				"previousOwner": "British Virgin Islands"
			},
			{
				"id": 206,
				"name": "United States Virgin Islands",
				"originalOwner": "United States Virgin Islands",
				"currentOwner": "United States Virgin Islands",
				"previousOwner": "United States Virgin Islands"
			},
			{
				"id": 207,
				"name": "Cyprus",
				"originalOwner": "Cyprus",
				"currentOwner": "Cyprus",
				"previousOwner": "Cyprus"
			},
			{
				"id": 208,
				"name": "Reunion",
				"originalOwner": "Reunion",
				"currentOwner": "Reunion",
				"previousOwner": "Reunion"
			},
			{
				"id": 209,
				"name": "Mayotte",
				"originalOwner": "Mayotte",
				"currentOwner": "Mayotte",
				"previousOwner": "Mayotte"
			},
			{
				"id": 210,
				"name": "Martinique",
				"originalOwner": "Martinique",
				"currentOwner": "Martinique",
				"previousOwner": "Martinique"
			},
			{
				"id": 211,
				"name": "Guadeloupe",
				"originalOwner": "Guadeloupe",
				"currentOwner": "Guadeloupe",
				"previousOwner": "Guadeloupe"
			},
			{
				"id": 212,
				"name": "Curaco",
				"originalOwner": "Curaco",
				"currentOwner": "Curaco",
				"previousOwner": "Curaco"
			},
			{
				"id": 213,
				"name": "Canary Islands",
				"originalOwner": "Canary Islands",
				"currentOwner": "Canary Islands",
				"previousOwner": "Canary Islands"
			}
		]
	};

	function drawMap() {
		/*draw territories colors*/
		for (var i = 0; i < world.countries.length; i++) {
			var countryPath = document.querySelector('[data-id="' + world.countries[i].short + '"]');
			
			countryPath.style.fill = world.countries[i].color;
		}
	};

	drawMap();

	/*Round start*/
	function roundStart() {
		var attacker = "",
		defendingTerritory = "",
		attackResultText = "",
		defendingTerritoryPathName = "",
		defendingCountry = "",
		newColor = "",
		world = window.world;


		function selectAttacker() {
			attacker = world.countries[Math.floor(Math.random() * world.countries.length)];

			if (attacker.defeated == true) {
				console.log("defeated country selected (" + attacker.name + ")")
				selectAttacker();
			}
			else {
				console.log("Attacker " + attacker.name + " selected")
			}
		};

		function selectDefendingTerritory() {
			defendingTerritory = world.territories[Math.floor(Math.random() * world.countries.length)];

			if (defendingTerritory.currentOwner === attacker.name) {
				console.log("Own territory chosen")
				return selectDefendingTerritory();
			}
			else {
				console.log("Defending territory " + defendingTerritory.name + " selected")
				return defendingTerritory;
			}
		};

		function attack(defendingTerritory) {
			if (defendingTerritory.currentOwner == defendingTerritory.originalOwner) {
				attackResultText = attacker.name + " attacks " + defendingTerritory.name;
			}
			else {
				attackResultText = attacker.name + " attacks " + defendingTerritory.name + ", currently owned by " + defendingTerritory.currentOwner;
			}

			defendingTerritoryPathName = defendingTerritory.name;
			newColor = attacker.color;

			defendingTerritory.previousOwner = defendingTerritory.currentOwner;

			var originalOwner = defendingTerritory.currentOwner

			defendingTerritory.currentOwner = attacker.name;

			/*Check if a country is defeated or not*/	
			var territoriesCheckList = [];

			for (var b = 0; b < world.territories.length; b++) {
				territoriesCheckList.push(world.territories[b].currentOwner)
			}

			if (territoriesCheckList.includes(originalOwner)) {
				//debugger
				console.log("Included")
			}
			else {
				console.log(defendingTerritory.currentOwner + " was not included. Defeated.")

				var foundCountry = world.countries.find(function(country) {
					return country.name === defendingTerritory.currentOwner
				});
				if (foundCountry) {
					foundCountry.defeated = true;
				}
			console.log(foundCountry);
			}

			console.log(world.countries)

			updateMap(defendingTerritoryPathName, newColor);

		}

		function updateMap(defendingTerritoryPathName, newColor) {
			/*draw territories colors*/
			var affectedTerritory = document.querySelector('[data-name="' + defendingTerritoryPathName + '"]');
			affectedTerritory.style.fill = newColor;
		};

		selectAttacker();
		var defendingTerritory = selectDefendingTerritory();
		attack(defendingTerritory);

		/*Update UI*/
		$('#latestActivity').text(attackResultText);
	};

	/*Handles button press for start round*/
	$('.nextRound').click(function(){
		roundStart();
	});
});