const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Denmark",
  "Dominican Republic",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kuwait",
  "Lebanon",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Russia",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "United Arab Emirates",
  "Venezuela",
  "Portugal",
  "Luxembourg",
  "Bulgaria",
  "Czech Republic",
  "Slovenia",
  "Iceland",
  "Slovakia",
  "Lithuania",
  "Trinidad and Tobago",
  "Bangladesh",
  "Sri Lanka",
  "Kenya",
  "Hungary",
  "Morocco",
  "Cyprus",
  "Jamaica",
  "Ecuador",
  "Romania",
  "Bolivia",
  "Guatemala",
  "Costa Rica",
  "Qatar",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Paraguay",
  "Uruguay",
  "Puerto Rico",
  "Bosnia and Herzegovina",
  "Palestinian Authority",
  "Tunisia",
  "Bahrain",
  "Vietnam",
  "Ghana",
  "Mauritius",
  "Ukraine",
  "Malta",
  "Bahamas",
  "Maldives",
  "Oman",
  "Macedonia",
  "Latvia",
  "Estonia",
  "Iraq",
  "Algeria",
  "Albania",
  "Nepal",
  "Macau",
  "Montenegro",
  "Senegal",
  "Georgia",
  "Brunei",
  "Uganda",
  "Guadeloupe",
  "Barbados",
  "Azerbaijan",
  "Tanzania",
  "Libya",
  "Martinique",
  "Cameroon",
  "Botswana",
  "Ethiopia",
  "Kazakhstan",
  "Namibia",
  "Netherlands Antilles",
  "Madagascar",
  "New Caledonia",
  "Moldova",
  "Fiji",
  "Belarus",
  "Jersey",
  "Guam",
  "Yemen",
  "Zambia",
  "Isle Of Man",
  "Haiti",
  "Cambodia",
  "Aruba",
  "French Polynesia",
  "Afghanistan",
  "Bermuda",
  "Guyana",
  "Armenia",
  "Malawi",
  "Antigua and Barbuda",
  "Rwanda",
  "Guernsey",
  "Gambia",
  "Faroe Islands",
  "St. Lucia",
  "Cayman Islands",
  "Benin",
  "Andorra",
  "Grenada",
  "US Virgin Islands",
  "Belize",
  "Saint Vincent and the Grenadines",
  "Mongolia",
  "Mozambique",
  "Mali",
  "Angola",
  "French Guiana",
  "Uzbekistan",
  "Djibouti",
  "Burkina Faso",
  "Monaco",
  "Togo",
  "Greenland",
  "Gabon",
  "Gibraltar",
  "Republic of the Congo",
  "Kyrgyzstan",
  "Papua New Guinea",
  "Bhutan",
  "Saint Kitts and Nevis",
  "Swaziland",
  "Lesotho",
  "Laos",
  "Liechtenstein",
  "Northern Mariana Islands",
  "Suriname",
  "Seychelles",
  "British Virgin Islands",
  "Turks and Caicos Islands",
  "Dominica",
  "Mauritania",
  "Aland Islands",
  "San Marino",
  "Sierra Leone",
  "Niger",
  "Democratic Republic of the Congo",
  "Anguilla",
  "Mayotte",
  "Cape Verde",
  "Guinea",
  "Turkmenistan",
  "Burundi",
  "Tajikistan",
  "Vanuatu",
  "Solomon Islands",
  "Eritrea",
  "Samoa",
  "American Samoa",
  "Falkland Islands",
  "Equatorial Guinea",
  "Tonga",
  "Comoros",
  "Palau",
  "Federated States of Micronesia",
  "Central African Republic",
  "Somalia",
  "Marshall Islands",
  "Vatican City",
  "Chad",
  "Kiribati",
  "Sao Tome and Principe",
  "Tuvalu",
  "Nauru",
  "Réunion",
  "Cuba",
  "Cote d'Ivoire",
  "Timor Leste",
  "North Korea",
  "Iran",
  "Liberia",
  "Myanmar",
  "Oman",
  "Saint Lucia",
  "Syria",
  "Sudan"
]

export default function suggestions(req, res) {
  const results = countries
    .filter(country => country.toLowerCase().startsWith(req.query.value))

  res.json(results);
}
