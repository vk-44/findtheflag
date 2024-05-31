const initialCountryData = [
  //   {
  //     countryName: "Andorra",
  //     countryCode: "ad",
  //   },
  //   {
  //     countryName: "United Arab Emirates",
  //     countryCode: "ae",
  //   },
  //   {
  //     countryName: "Afghanistan",
  //     countryCode: "af",
  //   },
  //   {
  //     countryName: "Antigua and Barbuda",
  //     countryCode: "ag",
  //   },
  //   {
  //     countryName: "Albania",
  //     countryCode: "al",
  //   },
  //   {
  //     countryName: "Armenia",
  //     countryCode: "am",
  //   },
  //   {
  //     countryName: "Angola",
  //     countryCode: "ao",
  //   },
  //   {
  //     countryName: "Argentina",
  //     countryCode: "ar",
  //   },
  //   {
  //     countryName: "Austria",
  //     countryCode: "at",
  //   },
  //   {
  //     countryName: "Australia",
  //     countryCode: "au",
  //   },
  //   {
  //     countryName: "Azerbaijan",
  //     countryCode: "az",
  //   },
  //   {
  //     countryName: "Bosnia and Herzegovina",
  //     countryCode: "ba",
  //   },
  //   {
  //     countryName: "Barbados",
  //     countryCode: "bb",
  //   },
  //   {
  //     countryName: "Bangladesh",
  //     countryCode: "bd",
  //   },
  //   {
  //     countryName: "Belgium",
  //     countryCode: "be",
  //   },
  //   {
  //     countryName: "Burkina Faso",
  //     countryCode: "bf",
  //   },
  //   {
  //     countryName: "Bulgaria",
  //     countryCode: "bg",
  //   },
  //   {
  //     countryName: "Bahrain",
  //     countryCode: "bh",
  //   },
  //   {
  //     countryName: "Burundi",
  //     countryCode: "bi",
  //   },
  //   {
  //     countryName: "Benin",
  //     countryCode: "bj",
  //   },
  //   {
  //     countryName: "Brunei",
  //     countryCode: "bn",
  //   },
  //   {
  //     countryName: "Bolivia",
  //     countryCode: "bo",
  //   },
  //   {
  //     countryName: "Brazil",
  //     countryCode: "br",
  //   },
  //   {
  //     countryName: "Bahamas",
  //     countryCode: "bs",
  //   },
  //   {
  //     countryName: "Bhutan",
  //     countryCode: "bt",
  //   },
  //   {
  //     countryName: "Botswana",
  //     countryCode: "bw",
  //   },
  //   {
  //     countryName: "Belarus",
  //     countryCode: "by",
  //   },
  //   {
  //     countryName: "Belize",
  //     countryCode: "bz",
  //   },
  //   {
  //     countryName: "Canada",
  //     countryCode: "ca",
  //   },
  //   {
  //     countryName: "Democratic Republic of Congo",
  //     countryCode: "cd",
  //   },
  //   {
  //     countryName: "Central African Republic",
  //     countryCode: "cf",
  //   },
  //   {
  //     countryName: "Congo",
  //     countryCode: "cg",
  //   },
  //   {
  //     countryName: "Switzerland",
  //     countryCode: "ch",
  //   },
  //   {
  //     countryName: "Côte d'Ivoire",
  //     countryCode: "ci",
  //   },
  //   {
  //     countryName: "Chile",
  //     countryCode: "cl",
  //   },
  //   {
  //     countryName: "Cameroon",
  //     countryCode: "cm",
  //   },
  //   {
  //     countryName: "China",
  //     countryCode: "cn",
  //   },
  //   {
  //     countryName: "Colombia",
  //     countryCode: "co",
  //   },
  //   {
  //     countryName: "Costa Rica",
  //     countryCode: "cr",
  //   },
  //   {
  //     countryName: "Cuba",
  //     countryCode: "cu",
  //   },
  //   {
  //     countryName: "Cabo Verde",
  //     countryCode: "cv",
  //   },
  //   {
  //     countryName: "Cyprus",
  //     countryCode: "cy",
  //   },
  //   {
  //     countryName: "Czech Republic",
  //     countryCode: "cz",
  //   },
  //   {
  //     countryName: "Germany",
  //     countryCode: "de",
  //   },
  //   {
  //     countryName: "Djibouti",
  //     countryCode: "dj",
  //   },
  //   {
  //     countryName: "Denmark",
  //     countryCode: "dk",
  //   },
  //   {
  //     countryName: "Dominica",
  //     countryCode: "dm",
  //   },
  //   {
  //     countryName: "Dominican Republic",
  //     countryCode: "do",
  //   },
  //   {
  //     countryName: "Algeria",
  //     countryCode: "dz",
  //   },
  //   {
  //     countryName: "Ecuador",
  //     countryCode: "ec",
  //   },
  //   {
  //     countryName: "Estonia",
  //     countryCode: "ee",
  //   },
  //   {
  //     countryName: "Egypt",
  //     countryCode: "eg",
  //   },
  //   {
  //     countryName: "Eritrea",
  //     countryCode: "er",
  //   },
  //   {
  //     countryName: "Spain",
  //     countryCode: "es",
  //   },
  //   {
  //     countryName: "Ethiopia",
  //     countryCode: "et",
  //   },
  //   {
  //     countryName: "Finland",
  //     countryCode: "fi",
  //   },
  //   {
  //     countryName: "Fiji",
  //     countryCode: "fj",
  //   },
  //   {
  //     countryName: "Micronesia",
  //     countryCode: "fm",
  //   },
  //   {
  //     countryName: "France",
  //     countryCode: "fr",
  //   },
  //   {
  //     countryName: "Gabon",
  //     countryCode: "ga",
  //   },
  //   {
  //     countryName: "United Kingdom",
  //     countryCode: "gb",
  //   },
  //   {
  //     countryName: "Grenada",
  //     countryCode: "gd",
  //   },
  //   {
  //     countryName: "Georgia",
  //     countryCode: "ge",
  //   },
  //   {
  //     countryName: "Ghana",
  //     countryCode: "gh",
  //   },
  //   {
  //     countryName: "Gambia",
  //     countryCode: "gm",
  //   },
  //   {
  //     countryName: "Guinea",
  //     countryCode: "gn",
  //   },
  //   {
  //     countryName: "Equatorial Guinea",
  //     countryCode: "gq",
  //   },
  //   {
  //     countryName: "Greece",
  //     countryCode: "gr",
  //   },
  //   {
  //     countryName: "Guatemala",
  //     countryCode: "gt",
  //   },
  //   {
  //     countryName: "Guinea-Bissau",
  //     countryCode: "gw",
  //   },
  //   {
  //     countryName: "Guyana",
  //     countryCode: "gy",
  //   },
  //   {
  //     countryName: "Honduras",
  //     countryCode: "hn",
  //   },
  //   {
  //     countryName: "Croatia",
  //     countryCode: "hr",
  //   },
  //   {
  //     countryName: "Haiti",
  //     countryCode: "ht",
  //   },
  //   {
  //     countryName: "Hungary",
  //     countryCode: "hu",
  //   },
  //   {
  //     countryName: "Indonesia",
  //     countryCode: "id",
  //   },
  //   {
  //     countryName: "Ireland",
  //     countryCode: "ie",
  //   },
  //   {
  //     countryName: "Israel",
  //     countryCode: "il",
  //   },
  //   {
  //     countryName: "India",
  //     countryCode: "in",
  //   },
  //   {
  //     countryName: "Iraq",
  //     countryCode: "iq",
  //   },
  //   {
  //     countryName: "Iran",
  //     countryCode: "ir",
  //   },
  //   {
  //     countryName: "Iceland",
  //     countryCode: "is",
  //   },
  //   {
  //     countryName: "Italy",
  //     countryCode: "it",
  //   },
  //   {
  //     countryName: "Jamaica",
  //     countryCode: "jm",
  //   },
  //   {
  //     countryName: "Jordan",
  //     countryCode: "jo",
  //   },
  //   {
  //     countryName: "Japan",
  //     countryCode: "jp",
  //   },
  //   {
  //     countryName: "Kenya",
  //     countryCode: "ke",
  //   },
  //   {
  //     countryName: "Kyrgyzstan",
  //     countryCode: "kg",
  //   },
  //   {
  //     countryName: "Cambodia",
  //     countryCode: "kh",
  //   },
  //   {
  //     countryName: "Kiribati",
  //     countryCode: "ki",
  //   },
  //   {
  //     countryName: "Comoros",
  //     countryCode: "km",
  //   },
  //   {
  //     countryName: "Saint Kitts and Nevis",
  //     countryCode: "kn",
  //   },
  //   {
  //     countryName: "North Korea",
  //     countryCode: "kp",
  //   },
  //   {
  //     countryName: "South Korea",
  //     countryCode: "kr",
  //   },
  //   {
  //     countryName: "Kuwait",
  //     countryCode: "kw",
  //   },
  //   {
  //     countryName: "Kazakhstan",
  //     countryCode: "kz",
  //   },
  //   {
  //     countryName: "Laos",
  //     countryCode: "la",
  //   },
  //   {
  //     countryName: "Lebanon",
  //     countryCode: "lb",
  //   },
  //   {
  //     countryName: "Saint Lucia",
  //     countryCode: "lc",
  //   },
  //   {
  //     countryName: "Liechtenstein",
  //     countryCode: "li",
  //   },
  //   {
  //     countryName: "Sri Lanka",
  //     countryCode: "lk",
  //   },
  //   {
  //     countryName: "Liberia",
  //     countryCode: "lr",
  //   },
  //   {
  //     countryName: "Lesotho",
  //     countryCode: "ls",
  //   },
  //   {
  //     countryName: "Lithuania",
  //     countryCode: "lt",
  //   },
  //   {
  //     countryName: "Luxembourg",
  //     countryCode: "lu",
  //   },
  //   {
  //     countryName: "Latvia",
  //     countryCode: "lv",
  //   },
  //   {
  //     countryName: "Libya",
  //     countryCode: "ly",
  //   },
  //   {
  //     countryName: "Morocco",
  //     countryCode: "ma",
  //   },
  //   {
  //     countryName: "Monaco",
  //     countryCode: "mc",
  //   },
  //   {
  //     countryName: "Moldova",
  //     countryCode: "md",
  //   },
  //   {
  //     countryName: "Montenegro",
  //     countryCode: "me",
  //   },
  //   {
  //     countryName: "Madagascar",
  //     countryCode: "mg",
  //   },
  //   {
  //     countryName: "Marshall Islands",
  //     countryCode: "mh",
  //   },
  //   {
  //     countryName: "North Macedonia",
  //     countryCode: "mk",
  //   },
  //   {
  //     countryName: "Mali",
  //     countryCode: "ml",
  //   },
  //   {
  //     countryName: "Myanmar",
  //     countryCode: "mm",
  //   },
  //   {
  //     countryName: "Mongolia",
  //     countryCode: "mn",
  //   },
  //   {
  //     countryName: "Mauritania",
  //     countryCode: "mr",
  //   },
  //   {
  //     countryName: "Malta",
  //     countryCode: "mt",
  //   },
  //   {
  //     countryName: "Mauritius",
  //     countryCode: "mu",
  //   },
  //   {
  //     countryName: "Maldives",
  //     countryCode: "mv",
  //   },
  //   {
  //     countryName: "Malawi",
  //     countryCode: "mw",
  //   },
  //   {
  //     countryName: "Mexico",
  //     countryCode: "mx",
  //   },
  //   {
  //     countryName: "Malaysia",
  //     countryCode: "my",
  //   },
  //   {
  //     countryName: "Mozambique",
  //     countryCode: "mz",
  //   },
  //   {
  //     countryName: "Namibia",
  //     countryCode: "na",
  //   },
  //   {
  //     countryName: "Niger",
  //     countryCode: "ne",
  //   },
  //   {
  //     countryName: "Nigeria",
  //     countryCode: "ng",
  //   },
  //   {
  //     countryName: "Nicaragua",
  //     countryCode: "ni",
  //   },
  //   {
  //     countryName: "Netherlands",
  //     countryCode: "nl",
  //   },
  //   {
  //     countryName: "Norway",
  //     countryCode: "no",
  //   },
  {
    countryName: "Nepal",
    countryCode: "np",
  },
  //   {
  //     countryName: "Nauru",
  //     countryCode: "nr",
  //   },
  //   {
  //     countryName: "New Zealand",
  //     countryCode: "nz",
  //   },
  //   {
  //     countryName: "Oman",
  //     countryCode: "om",
  //   },
  //   {
  //     countryName: "Panama",
  //     countryCode: "pa",
  //   },
  //   {
  //     countryName: "Peru",
  //     countryCode: "pe",
  //   },
  //   {
  //     countryName: "Papua New Guinea",
  //     countryCode: "pg",
  //   },
  //   {
  //     countryName: "Philippines",
  //     countryCode: "ph",
  //   },
  //   {
  //     countryName: "Pakistan",
  //     countryCode: "pk",
  //   },
  //   {
  //     countryName: "Poland",
  //     countryCode: "pl",
  //   },
  //   {
  //     countryName: "Palestine",
  //     countryCode: "ps",
  //   },
  //   {
  //     countryName: "Portugal",
  //     countryCode: "pt",
  //   },
  //   {
  //     countryName: "Palau",
  //     countryCode: "pw",
  //   },
  //   {
  //     countryName: "Paraguay",
  //     countryCode: "py",
  //   },
  {
    countryName: "Qatar",
    countryCode: "qa",
  },
  //   {
  //     countryName: "Romania",
  //     countryCode: "ro",
  //   },
  //   {
  //     countryName: "Serbia",
  //     countryCode: "rs",
  //   },
  //   {
  //     countryName: "Russia",
  //     countryCode: "ru",
  //   },
  //   {
  //     countryName: "Rwanda",
  //     countryCode: "rw",
  //   },
  //   {
  //     countryName: "Saudi Arabia",
  //     countryCode: "sa",
  //   },
  //   {
  //     countryName: "Solomon Islands",
  //     countryCode: "sb",
  //   },
  //   {
  //     countryName: "Seychelles",
  //     countryCode: "sc",
  //   },
  //   {
  //     countryName: "Sudan",
  //     countryCode: "sd",
  //   },
  //   {
  //     countryName: "Sweden",
  //     countryCode: "se",
  //   },
  //   {
  //     countryName: "Singapore",
  //     countryCode: "sg",
  //   },
  //   {
  //     countryName: "Slovenia",
  //     countryCode: "si",
  //   },
  //   {
  //     countryName: "Slovakia",
  //     countryCode: "sk",
  //   },
  //   {
  //     countryName: "Sierra Leone",
  //     countryCode: "sl",
  //   },
  //   {
  //     countryName: "San Marino",
  //     countryCode: "sm",
  //   },
  //   {
  //     countryName: "Senegal",
  //     countryCode: "sn",
  //   },
  //   {
  //     countryName: "Somalia",
  //     countryCode: "so",
  //   },
  //   {
  //     countryName: "Suriname",
  //     countryCode: "sr",
  //   },
  //   {
  //     countryName: "South Sudan",
  //     countryCode: "ss",
  //   },
  //   {
  //     countryName: "Sao Tome and Principe",
  //     countryCode: "st",
  //   },
  //   {
  //     countryName: "El Salvador",
  //     countryCode: "sv",
  //   },
  //   {
  //     countryName: "Syria",
  //     countryCode: "sy",
  //   },
  //   {
  //     countryName: "Eswatini",
  //     countryCode: "sz",
  //   },
  //   {
  //     countryName: "Chad",
  //     countryCode: "td",
  //   },
  //   {
  //     countryName: "Togo",
  //     countryCode: "tg",
  //   },
  //   {
  //     countryName: "Thailand",
  //     countryCode: "th",
  //   },
  //   {
  //     countryName: "Tajikistan",
  //     countryCode: "tj",
  //   },
  //   {
  //     countryName: "Timor-Leste",
  //     countryCode: "tl",
  //   },
  //   {
  //     countryName: "Turkmenistan",
  //     countryCode: "tm",
  //   },
  //   {
  //     countryName: "Tunisia",
  //     countryCode: "tn",
  //   },
  //   {
  //     countryName: "Tonga",
  //     countryCode: "to",
  //   },
  //   {
  //     countryName: "Turkey",
  //     countryCode: "tr",
  //   },
  //   {
  //     countryName: "Trinidad and Tobago",
  //     countryCode: "tt",
  //   },
  //   {
  //     countryName: "Tuvalu",
  //     countryCode: "tv",
  //   },
  //   {
  //     countryName: "Tanzania",
  //     countryCode: "tz",
  //   },
  //   {
  //     countryName: "Ukraine",
  //     countryCode: "ua",
  //   },
  //   {
  //     countryName: "Uganda",
  //     countryCode: "ug",
  //   },
  //   {
  //     countryName: "United States",
  //     countryCode: "us",
  //   },
  //   {
  //     countryName: "Uruguay",
  //     countryCode: "uy",
  //   },
  //   {
  //     countryName: "Uzbekistan",
  //     countryCode: "uz",
  //   },
  {
    countryName: "Holy See (Vatican City)",
    countryCode: "va",
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    countryCode: "vc",
  },
  {
    countryName: "Venezuela",
    countryCode: "ve",
  },
  {
    countryName: "Vietnam",
    countryCode: "vn",
  },
  {
    countryName: "Vanuatu",
    countryCode: "vu",
  },
  {
    countryName: "Samoa",
    countryCode: "ws",
  },
  //   {
  //     countryName: "Yemen",
  //     countryCode: "ye",
  //   },
  //   {
  //     countryName: "South Africa",
  //     countryCode: "za",
  //   },
  //   {
  //     countryName: "Zambia",
  //     countryCode: "zm",
  //   },
  //   {
  //     countryName: "Zimbabwe",
  //     countryCode: "zw",
  //   },
];

export default initialCountryData;
