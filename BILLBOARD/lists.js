// https://gist.github.com/Fanna1119/955dc26ffee95b96978beb0150cb78f6
const countries = [
    {
        "Country": "Afghanistan",
        "Alpha-2 code": "AF",
        
        "Numeric code": 4,
        "Latitude (average)": 33,
        "Longitude (average)": 65,
        
    },
    {
        "Country": "Albania",
        "Alpha-2 code": "AL",
        
        "Numeric code": 8,
        "Latitude (average)": 41,
        "Longitude (average)": 20,
        
    },
    {
        "Country": "Algeria",
        "Alpha-2 code": "DZ",
        
        "Numeric code": 12,
        "Latitude (average)": 28,
        "Longitude (average)": 3,
        
    },
    {
        "Country": "American Samoa",
        "Alpha-2 code": "AS",
        
        "Numeric code": 16,
        "Latitude (average)": -14.3333,
        "Longitude (average)": -170,
        
    },
    {
        "Country": "Andorra",
        "Alpha-2 code": "AD",
        
        "Numeric code": 20,
        "Latitude (average)": 42.5,
        "Longitude (average)": 1.6,
        
    },
    {
        "Country": "Angola",
        "Alpha-2 code": "AO",
        
        "Numeric code": 24,
        "Latitude (average)": -12.5,
        "Longitude (average)": 18.5,
        
    },
    {
        "Country": "Anguilla",
        "Alpha-2 code": "AI",
        
        "Numeric code": 660,
        "Latitude (average)": 18.25,
        "Longitude (average)": -63.1667,
        
    },
    {
        "Country": "Antarctica",
        "Alpha-2 code": "AQ",
        
        "Numeric code": 10,
        "Latitude (average)": -90,
        "Longitude (average)": 0,
        
    },
    {
        "Country": "Antigua and Barbuda",
        "Alpha-2 code": "AG",
        
        "Numeric code": 28,
        "Latitude (average)": 17.05,
        "Longitude (average)": -61.8,
        
    },
    {
        "Country": "Argentina",
        "Alpha-2 code": "AR",
        
        "Numeric code": 32,
        "Latitude (average)": -34,
        "Longitude (average)": -64,
        
    },
    {
        "Country": "Armenia",
        "Alpha-2 code": "AM",
        
        "Numeric code": 51,
        "Latitude (average)": 40,
        "Longitude (average)": 45,
        
    },
    {
        "Country": "Aruba",
        "Alpha-2 code": "AW",
        
        "Numeric code": 533,
        "Latitude (average)": 12.5,
        "Longitude (average)": -69.9667,
        
    },
    {
        "Country": "Australia",
        "Alpha-2 code": "AU",
        
        "Numeric code": 36,
        "Latitude (average)": -27,
        "Longitude (average)": 133,
        
    },
    {
        "Country": "Austria",
        "Alpha-2 code": "AT",
        
        "Numeric code": 40,
        "Latitude (average)": 47.3333,
        "Longitude (average)": 13.3333,
        
    },
    {
        "Country": "Azerbaijan",
        "Alpha-2 code": "AZ",
        
        "Numeric code": 31,
        "Latitude (average)": 40.5,
        "Longitude (average)": 47.5,
        
    },
    {
        "Country": "Bahamas",
        "Alpha-2 code": "BS",
        
        "Numeric code": 44,
        "Latitude (average)": 24.25,
        "Longitude (average)": -76,
        
    },
    {
        "Country": "Bahrain",
        "Alpha-2 code": "BH",
        
        "Numeric code": 48,
        "Latitude (average)": 26,
        "Longitude (average)": 50.55,
        
    },
    {
        "Country": "Bangladesh",
        "Alpha-2 code": "BD",
        
        "Numeric code": 50,
        "Latitude (average)": 24,
        "Longitude (average)": 90,
        
    },
    {
        "Country": "Barbados",
        "Alpha-2 code": "BB",
        
        "Numeric code": 52,
        "Latitude (average)": 13.1667,
        "Longitude (average)": -59.5333,
        
    },
    {
        "Country": "Belarus",
        "Alpha-2 code": "BY",
        
        "Numeric code": 112,
        "Latitude (average)": 53,
        "Longitude (average)": 28,
        
    },
    {
        "Country": "Belgium",
        "Alpha-2 code": "BE",
        
        "Numeric code": 56,
        "Latitude (average)": 50.8333,
        "Longitude (average)": 4,
        
    },
    {
        "Country": "Belize",
        "Alpha-2 code": "BZ",
        
        "Numeric code": 84,
        "Latitude (average)": 17.25,
        "Longitude (average)": -88.75,
        
    },
    {
        "Country": "Benin",
        "Alpha-2 code": "BJ",
        
        "Numeric code": 204,
        "Latitude (average)": 9.5,
        "Longitude (average)": 2.25,
        
    },
    {
        "Country": "Bermuda",
        "Alpha-2 code": "BM",
        
        "Numeric code": 60,
        "Latitude (average)": 32.3333,
        "Longitude (average)": -64.75,
        
    },
    {
        "Country": "Bhutan",
        "Alpha-2 code": "BT",
        
        "Numeric code": 64,
        "Latitude (average)": 27.5,
        "Longitude (average)": 90.5,
        
    },
    {
        "Country": "Bolivia",
        "Alpha-2 code": "BO",
        
        "Numeric code": 68,
        "Latitude (average)": -17,
        "Longitude (average)": -65,
        
    },
    {
        "Country": "Bosnia and Herzegovina",
        "Alpha-2 code": "BA",
        
        "Numeric code": 70,
        "Latitude (average)": 44,
        "Longitude (average)": 18,
        
    },
    {
        "Country": "Botswana",
        "Alpha-2 code": "BW",
        
        "Numeric code": 72,
        "Latitude (average)": -22,
        "Longitude (average)": 24,
        
    },
    {
        "Country": "Bouvet Island",
        "Alpha-2 code": "BV",
        
        "Numeric code": 74,
        "Latitude (average)": -54.4333,
        "Longitude (average)": 3.4,
        
    },
    {
        "Country": "Brazil",
        "Alpha-2 code": "BR",
        
        "Numeric code": 76,
        "Latitude (average)": -10,
        "Longitude (average)": -55,
        
    },
    {
        "Country": "British Indian Ocean Territory",
        "Alpha-2 code": "IO",
        
        "Numeric code": 86,
        "Latitude (average)": -6,
        "Longitude (average)": 71.5,
        
    },
    {
        "Country": "Brunei",
        "Alpha-2 code": "BN",
        
        "Numeric code": 96,
        "Latitude (average)": 4.5,
        "Longitude (average)": 114.6667,
        
    },
    {
        "Country": "Bulgaria",
        "Alpha-2 code": "BG",
        
        "Numeric code": 100,
        "Latitude (average)": 43,
        "Longitude (average)": 25,
        
    },
    {
        "Country": "Burkina Faso",
        "Alpha-2 code": "BF",
        
        "Numeric code": 854,
        "Latitude (average)": 13,
        "Longitude (average)": -2,
        
    },
    {
        "Country": "Burundi",
        "Alpha-2 code": "BI",
        
        "Numeric code": 108,
        "Latitude (average)": -3.5,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Cambodia",
        "Alpha-2 code": "KH",
        
        "Numeric code": 116,
        "Latitude (average)": 13,
        "Longitude (average)": 105,
        
    },
    {
        "Country": "Cameroon",
        "Alpha-2 code": "CM",
        
        "Numeric code": 120,
        "Latitude (average)": 6,
        "Longitude (average)": 12,
        
    },
    {
        "Country": "Canada",
        "Alpha-2 code": "CA",
        
        "Numeric code": 124,
        "Latitude (average)": 60,
        "Longitude (average)": -95,
        
    },
    {
        "Country": "Cape Verde",
        "Alpha-2 code": "CV",
        
        "Numeric code": 132,
        "Latitude (average)": 16,
        "Longitude (average)": -24,
        
    },
    {
        "Country": "Cayman Islands",
        "Alpha-2 code": "KY",
        
        "Numeric code": 136,
        "Latitude (average)": 19.5,
        "Longitude (average)": -80.5,
        
    },
    {
        "Country": "Central African Republic",
        "Alpha-2 code": "CF",
        
        "Numeric code": 140,
        "Latitude (average)": 7,
        "Longitude (average)": 21,
        
    },
    {
        "Country": "Chad",
        "Alpha-2 code": "TD",
        
        "Numeric code": 148,
        "Latitude (average)": 15,
        "Longitude (average)": 19,
        
    },
    {
        "Country": "Chile",
        "Alpha-2 code": "CL",
        
        "Numeric code": 152,
        "Latitude (average)": -30,
        "Longitude (average)": -71,
        
    },
    {
        "Country": "China",
        "Alpha-2 code": "CN",
        
        "Numeric code": 156,
        "Latitude (average)": 35,
        "Longitude (average)": 105,
        
    },
    {
        "Country": "Christmas Island",
        "Alpha-2 code": "CX",
        
        "Numeric code": 162,
        "Latitude (average)": -10.5,
        "Longitude (average)": 105.6667,
        
    },
    {
        "Country": "Cocos (Keeling) Islands",
        "Alpha-2 code": "CC",
        
        "Numeric code": 166,
        "Latitude (average)": -12.5,
        "Longitude (average)": 96.8333,
        
    },
    {
        "Country": "Colombia",
        "Alpha-2 code": "CO",
        
        "Numeric code": 170,
        "Latitude (average)": 4,
        "Longitude (average)": -72,
        
    },
    {
        "Country": "Comoros",
        "Alpha-2 code": "KM",
        
        "Numeric code": 174,
        "Latitude (average)": -12.1667,
        "Longitude (average)": 44.25,
        
    },
    {
        "Country": "Congo",
        "Alpha-2 code": "CG",
        
        "Numeric code": 178,
        "Latitude (average)": -1,
        "Longitude (average)": 15,
        
    },
    {
        "Country": "the Democratic Republic of the Congo",
        "Alpha-2 code": "CD",
        
        "Numeric code": 180,
        "Latitude (average)": 0,
        "Longitude (average)": 25,
        
    },
    {
        "Country": "Cook Islands",
        "Alpha-2 code": "CK",
        
        "Numeric code": 184,
        "Latitude (average)": -21.2333,
        "Longitude (average)": -159.7667,
        
    },
    {
        "Country": "Costa Rica",
        "Alpha-2 code": "CR",
        
        "Numeric code": 188,
        "Latitude (average)": 10,
        "Longitude (average)": -84,
        
    },
    {
        "Country": "Ivory Coast",
        "Alpha-2 code": "CI",
        
        "Numeric code": 384,
        "Latitude (average)": 8,
        "Longitude (average)": -5,
        
    },
    {
        "Country": "Croatia",
        "Alpha-2 code": "HR",
        
        "Numeric code": 191,
        "Latitude (average)": 45.1667,
        "Longitude (average)": 15.5,
        
    },
    {
        "Country": "Cuba",
        "Alpha-2 code": "CU",
        
        "Numeric code": 192,
        "Latitude (average)": 21.5,
        "Longitude (average)": -80,
        
    },
    {
        "Country": "Cyprus",
        "Alpha-2 code": "CY",
        
        "Numeric code": 196,
        "Latitude (average)": 35,
        "Longitude (average)": 33,
        
    },
    {
        "Country": "Czech Republic",
        "Alpha-2 code": "CZ",
        
        "Numeric code": 203,
        "Latitude (average)": 49.75,
        "Longitude (average)": 15.5,
        
    },
    {
        "Country": "Denmark",
        "Alpha-2 code": "DK",
        
        "Numeric code": 208,
        "Latitude (average)": 56,
        "Longitude (average)": 10,
        
    },
    {
        "Country": "Djibouti",
        "Alpha-2 code": "DJ",
        
        "Numeric code": 262,
        "Latitude (average)": 11.5,
        "Longitude (average)": 43,
        
    },
    {
        "Country": "Dominica",
        "Alpha-2 code": "DM",
        
        "Numeric code": 212,
        "Latitude (average)": 15.4167,
        "Longitude (average)": -61.3333,
        
    },
    {
        "Country": "Dominican Republic",
        "Alpha-2 code": "DO",
        
        "Numeric code": 214,
        "Latitude (average)": 19,
        "Longitude (average)": -70.6667,
        
    },
    {
        "Country": "Ecuador",
        "Alpha-2 code": "EC",
        
        "Numeric code": 218,
        "Latitude (average)": -2,
        "Longitude (average)": -77.5,
        
    },
    {
        "Country": "Egypt",
        "Alpha-2 code": "EG",
        
        "Numeric code": 818,
        "Latitude (average)": 27,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "El Salvador",
        "Alpha-2 code": "SV",
        
        "Numeric code": 222,
        "Latitude (average)": 13.8333,
        "Longitude (average)": -88.9167,
        
    },
    {
        "Country": "Equatorial Guinea",
        "Alpha-2 code": "GQ",
        
        "Numeric code": 226,
        "Latitude (average)": 2,
        "Longitude (average)": 10,
        
    },
    {
        "Country": "Eritrea",
        "Alpha-2 code": "ER",
        
        "Numeric code": 232,
        "Latitude (average)": 15,
        "Longitude (average)": 39,
        
    },
    {
        "Country": "Estonia",
        "Alpha-2 code": "EE",
        
        "Numeric code": 233,
        "Latitude (average)": 59,
        "Longitude (average)": 26,
        
    },
    {
        "Country": "Ethiopia",
        "Alpha-2 code": "ET",
        
        "Numeric code": 231,
        "Latitude (average)": 8,
        "Longitude (average)": 38,
        
    },
    {
        "Country": "Falkland Islands (Malvinas)",
        "Alpha-2 code": "FK",
        
        "Numeric code": 238,
        "Latitude (average)": -51.75,
        "Longitude (average)": -59,
        
    },
    {
        "Country": "Faroe Islands",
        "Alpha-2 code": "FO",
        
        "Numeric code": 234,
        "Latitude (average)": 62,
        "Longitude (average)": -7,
        
    },
    {
        "Country": "Fiji",
        "Alpha-2 code": "FJ",
        
        "Numeric code": 242,
        "Latitude (average)": -18,
        "Longitude (average)": 175,
        
    },
    {
        "Country": "Finland",
        "Alpha-2 code": "FI",
        
        "Numeric code": 246,
        "Latitude (average)": 64,
        "Longitude (average)": 26,
        
    },
    {
        "Country": "France",
        "Alpha-2 code": "FR",
        
        "Numeric code": 250,
        "Latitude (average)": 46,
        "Longitude (average)": 2,
        
    },
    {
        "Country": "French Guiana",
        "Alpha-2 code": "GF",
        
        "Numeric code": 254,
        "Latitude (average)": 4,
        "Longitude (average)": -53,
        
    },
    {
        "Country": "French Polynesia",
        "Alpha-2 code": "PF",
        
        "Numeric code": 258,
        "Latitude (average)": -15,
        "Longitude (average)": -140,
        
    },
    {
        "Country": "French Southern Territories",
        "Alpha-2 code": "TF",
        
        "Numeric code": 260,
        "Latitude (average)": -43,
        "Longitude (average)": 67,
        
    },
    {
        "Country": "Gabon",
        "Alpha-2 code": "GA",
        
        "Numeric code": 266,
        "Latitude (average)": -1,
        "Longitude (average)": 11.75,
        
    },
    {
        "Country": "Gambia",
        "Alpha-2 code": "GM",
        
        "Numeric code": 270,
        "Latitude (average)": 13.4667,
        "Longitude (average)": -16.5667,
        
    },
    {
        "Country": "Georgia",
        "Alpha-2 code": "GE",
        
        "Numeric code": 268,
        "Latitude (average)": 42,
        "Longitude (average)": 43.5,
        
    },
    {
        "Country": "Germany",
        "Alpha-2 code": "DE",
        
        "Numeric code": 276,
        "Latitude (average)": 51,
        "Longitude (average)": 9,
        
    },
    {
        "Country": "Ghana",
        "Alpha-2 code": "GH",
        
        "Numeric code": 288,
        "Latitude (average)": 8,
        "Longitude (average)": -2,
        
    },
    {
        "Country": "Gibraltar",
        "Alpha-2 code": "GI",
        
        "Numeric code": 292,
        "Latitude (average)": 36.1833,
        "Longitude (average)": -5.3667,
        
    },
    {
        "Country": "Greece",
        "Alpha-2 code": "GR",
        
        "Numeric code": 300,
        "Latitude (average)": 39,
        "Longitude (average)": 22,
        
    },
    {
        "Country": "Greenland",
        "Alpha-2 code": "GL",
        
        "Numeric code": 304,
        "Latitude (average)": 72,
        "Longitude (average)": -40,
        
    },
    {
        "Country": "Grenada",
        "Alpha-2 code": "GD",
        
        "Numeric code": 308,
        "Latitude (average)": 12.1167,
        "Longitude (average)": -61.6667,
        
    },
    {
        "Country": "Guadeloupe",
        "Alpha-2 code": "GP",
        
        "Numeric code": 312,
        "Latitude (average)": 16.25,
        "Longitude (average)": -61.5833,
        
    },
    {
        "Country": "Guam",
        "Alpha-2 code": "GU",
        
        "Numeric code": 316,
        "Latitude (average)": 13.4667,
        "Longitude (average)": 144.7833,
        
    },
    {
        "Country": "Guatemala",
        "Alpha-2 code": "GT",
        
        "Numeric code": 320,
        "Latitude (average)": 15.5,
        "Longitude (average)": -90.25,
        
    },
    {
        "Country": "Guernsey",
        "Alpha-2 code": "GG",
        
        "Numeric code": 831,
        "Latitude (average)": 49.5,
        "Longitude (average)": -2.56,
        
    },
    {
        "Country": "Guinea",
        "Alpha-2 code": "GN",
        
        "Numeric code": 324,
        "Latitude (average)": 11,
        "Longitude (average)": -10,
        
    },
    {
        "Country": "Guinea-Bissau",
        "Alpha-2 code": "GW",
        
        "Numeric code": 624,
        "Latitude (average)": 12,
        "Longitude (average)": -15,
        
    },
    {
        "Country": "Guyana",
        "Alpha-2 code": "GY",
        
        "Numeric code": 328,
        "Latitude (average)": 5,
        "Longitude (average)": -59,
        
    },
    {
        "Country": "Haiti",
        "Alpha-2 code": "HT",
        
        "Numeric code": 332,
        "Latitude (average)": 19,
        "Longitude (average)": -72.4167,
        
    },
    {
        "Country": "Heard Island and McDonald Islands",
        "Alpha-2 code": "HM",
        
        "Numeric code": 334,
        "Latitude (average)": -53.1,
        "Longitude (average)": 72.5167,
        
    },
    {
        "Country": "Holy See (Vatican City State)",
        "Alpha-2 code": "VA",
        
        "Numeric code": 336,
        "Latitude (average)": 41.9,
        "Longitude (average)": 12.45,
        
    },
    {
        "Country": "Honduras",
        "Alpha-2 code": "HN",
        
        "Numeric code": 340,
        "Latitude (average)": 15,
        "Longitude (average)": -86.5,
        
    },
    {
        "Country": "Hong Kong",
        "Alpha-2 code": "HK",
        
        "Numeric code": 344,
        "Latitude (average)": 22.25,
        "Longitude (average)": 114.1667,
        
    },
    {
        "Country": "Hungary",
        "Alpha-2 code": "HU",
        
        "Numeric code": 348,
        "Latitude (average)": 47,
        "Longitude (average)": 20,
        
    },
    {
        "Country": "Iceland",
        "Alpha-2 code": "IS",
        
        "Numeric code": 352,
        "Latitude (average)": 65,
        "Longitude (average)": -18,
        
    },
    {
        "Country": "India",
        "Alpha-2 code": "IN",
        
        "Numeric code": 356,
        "Latitude (average)": 20,
        "Longitude (average)": 77,
        
    },
    {
        "Country": "Indonesia",
        "Alpha-2 code": "ID",
        
        "Numeric code": 360,
        "Latitude (average)": -5,
        "Longitude (average)": 120,
        
    },
    {
        "Country": "Iran",
        "Alpha-2 code": "IR",
        
        "Numeric code": 364,
        "Latitude (average)": 32,
        "Longitude (average)": 53,
        
    },
    {
        "Country": "Iraq",
        "Alpha-2 code": "IQ",
        
        "Numeric code": 368,
        "Latitude (average)": 33,
        "Longitude (average)": 44,
        
    },
    {
        "Country": "Ireland",
        "Alpha-2 code": "IE",
        
        "Numeric code": 372,
        "Latitude (average)": 53,
        "Longitude (average)": -8,
        
    },
    {
        "Country": "Isle of Man",
        "Alpha-2 code": "IM",
        
        "Numeric code": 833,
        "Latitude (average)": 54.23,
        "Longitude (average)": -4.55,
        
    },
    {
        "Country": "Israel",
        "Alpha-2 code": "IL",
        
        "Numeric code": 376,
        "Latitude (average)": 31.5,
        "Longitude (average)": 34.75,
        
    },
    {
        "Country": "Italy",
        "Alpha-2 code": "IT",
        
        "Numeric code": 380,
        "Latitude (average)": 42.8333,
        "Longitude (average)": 12.8333,
        
    },
    {
        "Country": "Jamaica",
        "Alpha-2 code": "JM",
        
        "Numeric code": 388,
        "Latitude (average)": 18.25,
        "Longitude (average)": -77.5,
        
    },
    {
        "Country": "Japan",
        "Alpha-2 code": "JP",
        
        "Numeric code": 392,
        "Latitude (average)": 36,
        "Longitude (average)": 138,
        
    },
    {
        "Country": "Jersey",
        "Alpha-2 code": "JE",
        
        "Numeric code": 832,
        "Latitude (average)": 49.21,
        "Longitude (average)": -2.13,
        
    },
    {
        "Country": "Jordan",
        "Alpha-2 code": "JO",
        
        "Numeric code": 400,
        "Latitude (average)": 31,
        "Longitude (average)": 36,
        
    },
    {
        "Country": "Kazakhstan",
        "Alpha-2 code": "KZ",
        
        "Numeric code": 398,
        "Latitude (average)": 48,
        "Longitude (average)": 68,
        
    },
    {
        "Country": "Kenya",
        "Alpha-2 code": "KE",
        
        "Numeric code": 404,
        "Latitude (average)": 1,
        "Longitude (average)": 38,
        
    },
    {
        "Country": "Kiribati",
        "Alpha-2 code": "KI",
        
        "Numeric code": 296,
        "Latitude (average)": 1.4167,
        "Longitude (average)": 173,
        
    },
    {
        "Country": "North Korea",
        "Alpha-2 code": "KP",
        
        "Numeric code": 408,
        "Latitude (average)": 40,
        "Longitude (average)": 127,
        
    },
    {
        "Country": "South Korea",
        "Alpha-2 code": "KR",
        
        "Numeric code": 410,
        "Latitude (average)": 37,
        "Longitude (average)": 127.5,
        
    },
    {
        "Country": "Kuwait",
        "Alpha-2 code": "KW",
        
        "Numeric code": 414,
        "Latitude (average)": 29.3375,
        "Longitude (average)": 47.6581,
        
    },
    {
        "Country": "Kyrgyzstan",
        "Alpha-2 code": "KG",
        
        "Numeric code": 417,
        "Latitude (average)": 41,
        "Longitude (average)": 75,
        
    },
    {
        "Country": "Lao People's Democratic Republic",
        "Alpha-2 code": "LA",
        
        "Numeric code": 418,
        "Latitude (average)": 18,
        "Longitude (average)": 105,
        
    },
    {
        "Country": "Latvia",
        "Alpha-2 code": "LV",
        
        "Numeric code": 428,
        "Latitude (average)": 57,
        "Longitude (average)": 25,
        
    },
    {
        "Country": "Lebanon",
        "Alpha-2 code": "LB",
        
        "Numeric code": 422,
        "Latitude (average)": 33.8333,
        "Longitude (average)": 35.8333,
        
    },
    {
        "Country": "Lesotho",
        "Alpha-2 code": "LS",
        
        "Numeric code": 426,
        "Latitude (average)": -29.5,
        "Longitude (average)": 28.5,
        
    },
    {
        "Country": "Liberia",
        "Alpha-2 code": "LR",
        
        "Numeric code": 430,
        "Latitude (average)": 6.5,
        "Longitude (average)": -9.5,
        
    },
    {
        "Country": "Libya",
        "Alpha-2 code": "LY",
        
        "Numeric code": 434,
        "Latitude (average)": 25,
        "Longitude (average)": 17,
        
    },
    {
        "Country": "Liechtenstein",
        "Alpha-2 code": "LI",
        
        "Numeric code": 438,
        "Latitude (average)": 47.1667,
        "Longitude (average)": 9.5333,
        
    },
    {
        "Country": "Lithuania",
        "Alpha-2 code": "LT",
        
        "Numeric code": 440,
        "Latitude (average)": 56,
        "Longitude (average)": 24,
        
    },
    {
        "Country": "Luxembourg",
        "Alpha-2 code": "LU",
        
        "Numeric code": 442,
        "Latitude (average)": 49.75,
        "Longitude (average)": 6.1667,
        
    },
    {
        "Country": "Macao",
        "Alpha-2 code": "MO",
        
        "Numeric code": 446,
        "Latitude (average)": 22.1667,
        "Longitude (average)": 113.55,
        
    },
    {
        "Country": "Macedonia",
        "Alpha-2 code": "MK",
        
        "Numeric code": 807,
        "Latitude (average)": 41.8333,
        "Longitude (average)": 22,
        
    },
    {
        "Country": "Madagascar",
        "Alpha-2 code": "MG",
        
        "Numeric code": 450,
        "Latitude (average)": -20,
        "Longitude (average)": 47,
        
    },
    {
        "Country": "Malawi",
        "Alpha-2 code": "MW",
        
        "Numeric code": 454,
        "Latitude (average)": -13.5,
        "Longitude (average)": 34,
        
    },
    {
        "Country": "Malaysia",
        "Alpha-2 code": "MY",
        
        "Numeric code": 458,
        "Latitude (average)": 2.5,
        "Longitude (average)": 112.5,
        
    },
    {
        "Country": "Maldives",
        "Alpha-2 code": "MV",
        
        "Numeric code": 462,
        "Latitude (average)": 3.25,
        "Longitude (average)": 73,
        
    },
    {
        "Country": "Mali",
        "Alpha-2 code": "ML",
        
        "Numeric code": 466,
        "Latitude (average)": 17,
        "Longitude (average)": -4,
        
    },
    {
        "Country": "Malta",
        "Alpha-2 code": "MT",
        
        "Numeric code": 470,
        "Latitude (average)": 35.8333,
        "Longitude (average)": 14.5833,
        
    },
    {
        "Country": "Marshall Islands",
        "Alpha-2 code": "MH",
        
        "Numeric code": 584,
        "Latitude (average)": 9,
        "Longitude (average)": 168,
        
    },
    {
        "Country": "Martinique",
        "Alpha-2 code": "MQ",
        
        "Numeric code": 474,
        "Latitude (average)": 14.6667,
        "Longitude (average)": -61,
        
    },
    {
        "Country": "Mauritania",
        "Alpha-2 code": "MR",
        
        "Numeric code": 478,
        "Latitude (average)": 20,
        "Longitude (average)": -12,
        
    },
    {
        "Country": "Mauritius",
        "Alpha-2 code": "MU",
        
        "Numeric code": 480,
        "Latitude (average)": -20.2833,
        "Longitude (average)": 57.55,
        
    },
    {
        "Country": "Mayotte",
        "Alpha-2 code": "YT",
        
        "Numeric code": 175,
        "Latitude (average)": -12.8333,
        "Longitude (average)": 45.1667,
        
    },
    {
        "Country": "Mexico",
        "Alpha-2 code": "MX",
        
        "Numeric code": 484,
        "Latitude (average)": 23,
        "Longitude (average)": -102,
        
    },
    {
        "Country": "Federated States of Micronesia",
        "Alpha-2 code": "FM",
        
        "Numeric code": 583,
        "Latitude (average)": 6.9167,
        "Longitude (average)": 158.25,
        
    },
    {
        "Country": "Republic of Moldova",
        "Alpha-2 code": "MD",
        
        "Numeric code": 498,
        "Latitude (average)": 47,
        "Longitude (average)": 29,
        
    },
    {
        "Country": "Monaco",
        "Alpha-2 code": "MC",
        
        "Numeric code": 492,
        "Latitude (average)": 43.7333,
        "Longitude (average)": 7.4,
        
    },
    {
        "Country": "Mongolia",
        "Alpha-2 code": "MN",
        
        "Numeric code": 496,
        "Latitude (average)": 46,
        "Longitude (average)": 105,
        
    },
    {
        "Country": "Montenegro",
        "Alpha-2 code": "ME",
        
        "Numeric code": 499,
        "Latitude (average)": 42,
        "Longitude (average)": 19,
        
    },
    {
        "Country": "Montserrat",
        "Alpha-2 code": "MS",
        
        "Numeric code": 500,
        "Latitude (average)": 16.75,
        "Longitude (average)": -62.2,
        
    },
    {
        "Country": "Morocco",
        "Alpha-2 code": "MA",
        
        "Numeric code": 504,
        "Latitude (average)": 32,
        "Longitude (average)": -5,
        
    },
    {
        "Country": "Mozambique",
        "Alpha-2 code": "MZ",
        
        "Numeric code": 508,
        "Latitude (average)": -18.25,
        "Longitude (average)": 35,
        
    },
    {
        "Country": "Myanmar",
        "Alpha-2 code": "MM",
        
        "Numeric code": 104,
        "Latitude (average)": 22,
        "Longitude (average)": 98,
        
    },
    {
        "Country": "Namibia",
        "Alpha-2 code": "NA",
        
        "Numeric code": 516,
        "Latitude (average)": -22,
        "Longitude (average)": 17,
        
    },
    {
        "Country": "Nauru",
        "Alpha-2 code": "NR",
        
        "Numeric code": 520,
        "Latitude (average)": -0.5333,
        "Longitude (average)": 166.9167,
        
    },
    {
        "Country": "Nepal",
        "Alpha-2 code": "NP",
        
        "Numeric code": 524,
        "Latitude (average)": 28,
        "Longitude (average)": 84,
        
    },
    {
        "Country": "Netherlands",
        "Alpha-2 code": "NL",
        
        "Numeric code": 528,
        "Latitude (average)": 52.5,
        "Longitude (average)": 5.75,
        
    },
    {
        "Country": "New Caledonia",
        "Alpha-2 code": "NC",
        
        "Numeric code": 540,
        "Latitude (average)": -21.5,
        "Longitude (average)": 165.5,
        
    },
    {
        "Country": "New Zealand",
        "Alpha-2 code": "NZ",
        
        "Numeric code": 554,
        "Latitude (average)": -41,
        "Longitude (average)": 174,
        
    },
    {
        "Country": "Nicaragua",
        "Alpha-2 code": "NI",
        
        "Numeric code": 558,
        "Latitude (average)": 13,
        "Longitude (average)": -85,
        
    },
    {
        "Country": "Niger",
        "Alpha-2 code": "NE",
        
        "Numeric code": 562,
        "Latitude (average)": 16,
        "Longitude (average)": 8,
        
    },
    {
        "Country": "Nigeria",
        "Alpha-2 code": "NG",
        
        "Numeric code": 566,
        "Latitude (average)": 10,
        "Longitude (average)": 8,
        
    },
    {
        "Country": "Niue",
        "Alpha-2 code": "NU",
        
        "Numeric code": 570,
        "Latitude (average)": -19.0333,
        "Longitude (average)": -169.8667,
        
    },
    {
        "Country": "Norfolk Island",
        "Alpha-2 code": "NF",
        
        "Numeric code": 574,
        "Latitude (average)": -29.0333,
        "Longitude (average)": 167.95,
        
    },
    {
        "Country": "Northern Mariana Islands",
        "Alpha-2 code": "MP",
        
        "Numeric code": 580,
        "Latitude (average)": 15.2,
        "Longitude (average)": 145.75,
        
    },
    {
        "Country": "Norway",
        "Alpha-2 code": "NO",
        
        "Numeric code": 578,
        "Latitude (average)": 62,
        "Longitude (average)": 10,
        
    },
    {
        "Country": "Oman",
        "Alpha-2 code": "OM",
        
        "Numeric code": 512,
        "Latitude (average)": 21,
        "Longitude (average)": 57,
        
    },
    {
        "Country": "Pakistan",
        "Alpha-2 code": "PK",
        
        "Numeric code": 586,
        "Latitude (average)": 30,
        "Longitude (average)": 70,
        
    },
    {
        "Country": "Palau",
        "Alpha-2 code": "PW",
        
        "Numeric code": 585,
        "Latitude (average)": 7.5,
        "Longitude (average)": 134.5,
        
    },
    {
        "Country": "Palestinian Territory, Occupied",
        "Alpha-2 code": "PS",
        
        "Numeric code": 275,
        "Latitude (average)": 32,
        "Longitude (average)": 35.25,
        
    },
    {
        "Country": "Panama",
        "Alpha-2 code": "PA",
        
        "Numeric code": 591,
        "Latitude (average)": 9,
        "Longitude (average)": -80,
        
    },
    {
        "Country": "Papua New Guinea",
        "Alpha-2 code": "PG",
        
        "Numeric code": 598,
        "Latitude (average)": -6,
        "Longitude (average)": 147,
        
    },
    {
        "Country": "Paraguay",
        "Alpha-2 code": "PY",
        
        "Numeric code": 600,
        "Latitude (average)": -23,
        "Longitude (average)": -58,
        
    },
    {
        "Country": "Peru",
        "Alpha-2 code": "PE",
        
        "Numeric code": 604,
        "Latitude (average)": -10,
        "Longitude (average)": -76,
        
    },
    {
        "Country": "Philippines",
        "Alpha-2 code": "PH",
        
        "Numeric code": 608,
        "Latitude (average)": 13,
        "Longitude (average)": 122,
        
    },
    {
        "Country": "Pitcairn",
        "Alpha-2 code": "PN",
        
        "Numeric code": 612,
        "Latitude (average)": -24.7,
        "Longitude (average)": -127.4,
        
    },
    {
        "Country": "Poland",
        "Alpha-2 code": "PL",
        
        "Numeric code": 616,
        "Latitude (average)": 52,
        "Longitude (average)": 20,
        
    },
    {
        "Country": "Portugal",
        "Alpha-2 code": "PT",
        
        "Numeric code": 620,
        "Latitude (average)": 39.5,
        "Longitude (average)": -8,
        
    },
    {
        "Country": "Puerto Rico",
        "Alpha-2 code": "PR",
        
        "Numeric code": 630,
        "Latitude (average)": 18.25,
        "Longitude (average)": -66.5,
        
    },
    {
        "Country": "Qatar",
        "Alpha-2 code": "QA",
        
        "Numeric code": 634,
        "Latitude (average)": 25.5,
        "Longitude (average)": 51.25,
        
    },
    {
        "Country": "Réunion",
        "Alpha-2 code": "RE",
        
        "Numeric code": 638,
        "Latitude (average)": -21.1,
        "Longitude (average)": 55.6,
        
    },
    {
        "Country": "Romania",
        "Alpha-2 code": "RO",
        
        "Numeric code": 642,
        "Latitude (average)": 46,
        "Longitude (average)": 25,
        
    },
    {
        "Country": "Russia",
        "Alpha-2 code": "RU",
        
        "Numeric code": 643,
        "Latitude (average)": 60,
        "Longitude (average)": 100,
        
    },
    {
        "Country": "Rwanda",
        "Alpha-2 code": "RW",
        
        "Numeric code": 646,
        "Latitude (average)": -2,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Saint Helena, Ascension and Tristan da Cunha",
        "Alpha-2 code": "SH",
        
        "Numeric code": 654,
        "Latitude (average)": -15.9333,
        "Longitude (average)": -5.7,
        
    },
    {
        "Country": "Saint Kitts and Nevis",
        "Alpha-2 code": "KN",
        
        "Numeric code": 659,
        "Latitude (average)": 17.3333,
        "Longitude (average)": -62.75,
        
    },
    {
        "Country": "Saint Lucia",
        "Alpha-2 code": "LC",
        
        "Numeric code": 662,
        "Latitude (average)": 13.8833,
        "Longitude (average)": -61.1333,
        
    },
    {
        "Country": "Saint Pierre and Miquelon",
        "Alpha-2 code": "PM",
        
        "Numeric code": 666,
        "Latitude (average)": 46.8333,
        "Longitude (average)": -56.3333,
        
    },
    {
        "Country": "Saint Vincent and the Grenadines",
        "Alpha-2 code": "VC",
        
        "Numeric code": 670,
        "Latitude (average)": 13.25,
        "Longitude (average)": -61.2,
        
    },
    {
        "Country": "Samoa",
        "Alpha-2 code": "WS",
        
        "Numeric code": 882,
        "Latitude (average)": -13.5833,
        "Longitude (average)": -172.3333,
        
    },
    {
        "Country": "San Marino",
        "Alpha-2 code": "SM",
        
        "Numeric code": 674,
        "Latitude (average)": 43.7667,
        "Longitude (average)": 12.4167,
        
    },
    {
        "Country": "Sao Tome and Principe",
        "Alpha-2 code": "ST",
        
        "Numeric code": 678,
        "Latitude (average)": 1,
        "Longitude (average)": 7,
        
    },
    {
        "Country": "Saudi Arabia",
        "Alpha-2 code": "SA",
        
        "Numeric code": 682,
        "Latitude (average)": 25,
        "Longitude (average)": 45,
        
    },
    {
        "Country": "Senegal",
        "Alpha-2 code": "SN",
        
        "Numeric code": 686,
        "Latitude (average)": 14,
        "Longitude (average)": -14,
        
    },
    {
        "Country": "Serbia",
        "Alpha-2 code": "RS",
        
        "Numeric code": 688,
        "Latitude (average)": 44,
        "Longitude (average)": 21,
        
    },
    {
        "Country": "Seychelles",
        "Alpha-2 code": "SC",
        
        "Numeric code": 690,
        "Latitude (average)": -4.5833,
        "Longitude (average)": 55.6667,
        
    },
    {
        "Country": "Sierra Leone",
        "Alpha-2 code": "SL",
        
        "Numeric code": 694,
        "Latitude (average)": 8.5,
        "Longitude (average)": -11.5,
        
    },
    {
        "Country": "Singapore",
        "Alpha-2 code": "SG",
        
        "Numeric code": 702,
        "Latitude (average)": 1.3667,
        "Longitude (average)": 103.8,
        
    },
    {
        "Country": "Slovakia",
        "Alpha-2 code": "SK",
        
        "Numeric code": 703,
        "Latitude (average)": 48.6667,
        "Longitude (average)": 19.5,
        
    },
    {
        "Country": "Slovenia",
        "Alpha-2 code": "SI",
        
        "Numeric code": 705,
        "Latitude (average)": 46,
        "Longitude (average)": 15,
        
    },
    {
        "Country": "Solomon Islands",
        "Alpha-2 code": "SB",
        
        "Numeric code": 90,
        "Latitude (average)": -8,
        "Longitude (average)": 159,
        
    },
    {
        "Country": "Somalia",
        "Alpha-2 code": "SO",
        
        "Numeric code": 706,
        "Latitude (average)": 10,
        "Longitude (average)": 49,
        
    },
    {
        "Country": "South Africa",
        "Alpha-2 code": "ZA",
        
        "Numeric code": 710,
        "Latitude (average)": -29,
        "Longitude (average)": 24,
        
    },
    {
        "Country": "South Georgia and the South Sandwich Islands",
        "Alpha-2 code": "GS",
        
        "Numeric code": 239,
        "Latitude (average)": -54.5,
        "Longitude (average)": -37,
        
    },
    {
        "Country": "South Sudan",
        "Alpha-2 code": "SS",
        
        "Numeric code": 728,
        "Latitude (average)": 8,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Spain",
        "Alpha-2 code": "ES",
        
        "Numeric code": 724,
        "Latitude (average)": 40,
        "Longitude (average)": -4,
        
    },
    {
        "Country": "Sri Lanka",
        "Alpha-2 code": "LK",
        
        "Numeric code": 144,
        "Latitude (average)": 7,
        "Longitude (average)": 81,
        
    },
    {
        "Country": "Sudan",
        "Alpha-2 code": "SD",
        
        "Numeric code": 736,
        "Latitude (average)": 15,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Suriname",
        "Alpha-2 code": "SR",
        
        "Numeric code": 740,
        "Latitude (average)": 4,
        "Longitude (average)": -56,
        
    },
    {
        "Country": "Svalbard and Jan Mayen",
        "Alpha-2 code": "SJ",
        
        "Numeric code": 744,
        "Latitude (average)": 78,
        "Longitude (average)": 20,
        
    },
    {
        "Country": "Swaziland",
        "Alpha-2 code": "SZ",
        
        "Numeric code": 748,
        "Latitude (average)": -26.5,
        "Longitude (average)": 31.5,
        
    },
    {
        "Country": "Sweden",
        "Alpha-2 code": "SE",
        
        "Numeric code": 752,
        "Latitude (average)": 62,
        "Longitude (average)": 15,
        
    },
    {
        "Country": "Switzerland",
        "Alpha-2 code": "CH",
        
        "Numeric code": 756,
        "Latitude (average)": 47,
        "Longitude (average)": 8,
        
    },
    {
        "Country": "Syrian Arab Republic",
        "Alpha-2 code": "SY",
        
        "Numeric code": 760,
        "Latitude (average)": 35,
        "Longitude (average)": 38,
        
    },
    {
        "Country": "Taiwan",
        "Alpha-2 code": "TW",
        
        "Numeric code": 158,
        "Latitude (average)": 23.5,
        "Longitude (average)": 121,
        
    },
    {
        "Country": "Tajikistan",
        "Alpha-2 code": "TJ",
        
        "Numeric code": 762,
        "Latitude (average)": 39,
        "Longitude (average)": 71,
        
    },
    {
        "Country": "United Republic of Tanzania",
        "Alpha-2 code": "TZ",
        
        "Numeric code": 834,
        "Latitude (average)": -6,
        "Longitude (average)": 35,
        
    },
    {
        "Country": "Thailand",
        "Alpha-2 code": "TH",
        
        "Numeric code": 764,
        "Latitude (average)": 15,
        "Longitude (average)": 100,
        
    },
    {
        "Country": "Timor-Leste",
        "Alpha-2 code": "TL",
        
        "Numeric code": 626,
        "Latitude (average)": -8.55,
        "Longitude (average)": 125.5167,
        
    },
    {
        "Country": "Togo",
        "Alpha-2 code": "TG",
        
        "Numeric code": 768,
        "Latitude (average)": 8,
        "Longitude (average)": 1.1667,
        
    },
    {
        "Country": "Tokelau",
        "Alpha-2 code": "TK",
        
        "Numeric code": 772,
        "Latitude (average)": -9,
        "Longitude (average)": -172,
        
    },
    {
        "Country": "Tonga",
        "Alpha-2 code": "TO",
        
        "Numeric code": 776,
        "Latitude (average)": -20,
        "Longitude (average)": -175,
        
    },
    {
        "Country": "Trinidad and Tobago",
        "Alpha-2 code": "TT",
        
        "Numeric code": 780,
        "Latitude (average)": 11,
        "Longitude (average)": -61,
        
    },
    {
        "Country": "Tunisia",
        "Alpha-2 code": "TN",
        
        "Numeric code": 788,
        "Latitude (average)": 34,
        "Longitude (average)": 9,
        
    },
    {
        "Country": "Turkey",
        "Alpha-2 code": "TR",
        
        "Numeric code": 792,
        "Latitude (average)": 39,
        "Longitude (average)": 35,
        
    },
    {
        "Country": "Turkmenistan",
        "Alpha-2 code": "TM",
        
        "Numeric code": 795,
        "Latitude (average)": 40,
        "Longitude (average)": 60,
        
    },
    {
        "Country": "Turks and Caicos Islands",
        "Alpha-2 code": "TC",
        
        "Numeric code": 796,
        "Latitude (average)": 21.75,
        "Longitude (average)": -71.5833,
        
    },
    {
        "Country": "Tuvalu",
        "Alpha-2 code": "TV",
        
        "Numeric code": 798,
        "Latitude (average)": -8,
        "Longitude (average)": 178,
        
    },
    {
        "Country": "Uganda",
        "Alpha-2 code": "UG",
        
        "Numeric code": 800,
        "Latitude (average)": 1,
        "Longitude (average)": 32,
        
    },
    {
        "Country": "Ukraine",
        "Alpha-2 code": "UA",
        
        "Numeric code": 804,
        "Latitude (average)": 49,
        "Longitude (average)": 32,
        
    },
    {
        "Country": "United Arab Emirates",
        "Alpha-2 code": "AE",
        
        "Numeric code": 784,
        "Latitude (average)": 24,
        "Longitude (average)": 54,
        
    },
    {
        "Country": "United Kingdom",
        "Alpha-2 code": "GB",
        
        "Numeric code": 826,
        "Latitude (average)": 54,
        "Longitude (average)": -2,
        
    },
    {
        "Country": "United States",
        "Alpha-2 code": "US",
        
        "Numeric code": 840,
        "Latitude (average)": 38,
        "Longitude (average)": -97,
        
    },
    {
        "Country": "United States Minor Outlying Islands",
        "Alpha-2 code": "UM",
        
        "Numeric code": 581,
        "Latitude (average)": 19.2833,
        "Longitude (average)": 166.6,
        
    },
    {
        "Country": "Uruguay",
        "Alpha-2 code": "UY",
        
        "Numeric code": 858,
        "Latitude (average)": -33,
        "Longitude (average)": -56,
        
    },
    {
        "Country": "Uzbekistan",
        "Alpha-2 code": "UZ",
        
        "Numeric code": 860,
        "Latitude (average)": 41,
        "Longitude (average)": 64,
        
    },
    {
        "Country": "Vanuatu",
        "Alpha-2 code": "VU",
        
        "Numeric code": 548,
        "Latitude (average)": -16,
        "Longitude (average)": 167,
        
    },
    {
        "Country": "Venezuela",
        "Alpha-2 code": "VE",
        
        "Numeric code": 862,
        "Latitude (average)": 8,
        "Longitude (average)": -66,
        
    },
    {
        "Country": "Vietnam",
        "Alpha-2 code": "VN",
        
        "Numeric code": 704,
        "Latitude (average)": 16,
        "Longitude (average)": 106,
        
    },
    {
        "Country": "Virgin Islands, British",
        "Alpha-2 code": "VG",
        
        "Numeric code": 92,
        "Latitude (average)": 18.5,
        "Longitude (average)": -64.5,
        
    },
    {
        "Country": "Virgin Islands, U.S.",
        "Alpha-2 code": "VI",
        
        "Numeric code": 850,
        "Latitude (average)": 18.3333,
        "Longitude (average)": -64.8333,
        
    },
    {
        "Country": "Wallis and Futuna",
        "Alpha-2 code": "WF",
        
        "Numeric code": 876,
        "Latitude (average)": -13.3,
        "Longitude (average)": -176.2,
        
    },
    {
        "Country": "Western Sahara",
        "Alpha-2 code": "EH",
        
        "Numeric code": 732,
        "Latitude (average)": 24.5,
        "Longitude (average)": -13,
        
    },
    {
        "Country": "Yemen",
        "Alpha-2 code": "YE",
        
        "Numeric code": 887,
        "Latitude (average)": 15,
        "Longitude (average)": 48,
        
    },
    {
        "Country": "Zambia",
        "Alpha-2 code": "ZM",
        
        "Numeric code": 894,
        "Latitude (average)": -15,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Zimbabwe",
        "Alpha-2 code": "ZW",
        
        "Numeric code": 716,
        "Latitude (average)": -20,
        "Longitude (average)": 30,
        
    },
    {
        "Country": "Åland Islands",
        "Alpha-2 code": "AX",
        
        "Numeric code": 248,
        "Latitude (average)": 60.116667,
        "Longitude (average)": 19.9,
        
    },
    {
        "Country": "Bonaire, Sint Eustatius and Saba",
        "Alpha-2 code": "BQ",
        
        "Numeric code": 535,
        "Latitude (average)": 12.183333,
        "Longitude (average)": -68.233333,
        
    },
    {
        "Country": "Curaçao",
        "Alpha-2 code": "CW",
        
        "Numeric code": 531,
        "Latitude (average)": 12.166667,
        "Longitude (average)": -68.966667,
        
    },
    {
        "Country": "Saint Barthélemy",
        "Alpha-2 code": "BL",
        
        "Numeric code": 652,
        "Latitude (average)": 17.897728,
        "Longitude (average)": -62.834244,
        
    },
    {
        "Country": "Saint Martin (French part)",
        "Alpha-2 code": "MF",
        
        "Numeric code": 663,
        "Latitude (average)": 18.075278,
        "Longitude (average)": -63.06,
        
    },
    {
        "Country": "Sint Maarten (Dutch part)",
        "Alpha-2 code": "SX",
        
        "Numeric code": 534,
        "Latitude (average)": 18.033333,
        "Longitude (average)": -63.05,
        
    },
    {
        "Country": "Kosovo",
        "Alpha-2 code": "XK",
        
        "Numeric code": -1,
        "Latitude (average)": 42.583333,
        "Longitude (average)": 21,
        
    }
]