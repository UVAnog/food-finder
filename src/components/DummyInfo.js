/*

s/o https://rajatamil.medium.com/how-to-get-data-from-google-maps-places-api-7eaa40dfd617

latitude and long of waterstreet parking garage 
https://www.google.com/maps/place/Water+Street+Parking+Garage/@38.0294361,-78.4833191,17z/data=!3m2!4b1!5s0x89b38626a1901097:0x228f86f6d47d2144!4m5!3m4!1s0x89b3862698cfe9b1:0x3802109c23d6d457!8m2!3d38.0294361!4d-78.4811304
*/

var dummyInfo = [
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.031332, lng: -78.483617 },
      viewport: {
        northeast: { lat: 38.03275573029151, lng: -78.48251456970848 },
        southwest: { lat: 38.03005776970851, lng: -78.48521253029149 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "The Pointe",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1534,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/105669536282042356192">The Pointe</a>',
        ],
        photo_reference:
          "ATtYBwKDC2y6i5nbGU9vkP25ZC6RYvlxbnzMomlfnXbqfQB4FY-n3p0N2m9zPWtTHoa1lRshHo7ogg0NkaC3cPSiTKC-ThQh5E83BJT61y1vWtfzY_dZQJGzdb6k8j5yuA6Zhw9HLDINKBKmHe5KwNLl2_wD4XQNzQWPhg0phB0fhyaIOgFS",
        width: 2048,
      },
    ],
    place_id: "ChIJ5yKlCCWGs4kRjpxXNyj2u3Y",
    plus_code: {
      compound_code: "2GJ8+GH Charlottesville, VA, USA",
      global_code: "87C32GJ8+GH",
    },
    rating: 4.1,
    reference: "ChIJ5yKlCCWGs4kRjpxXNyj2u3Y",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 51,
    vicinity: "212 Ridge McIntire Road, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipNAUN4HEv-0mlTYfG1BR2oo7LeE6y7EGXQDt7M0=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0245628, lng: -78.4684906 },
      viewport: {
        northeast: { lat: 38.02590283029149, lng: -78.46722191970849 },
        southwest: { lat: 38.0232048697085, lng: -78.4699198802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Beer Run",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1908,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/111710279011964175050">Cody Bowlin</a>',
        ],
        photo_reference:
          "ATtYBwIAyv6Km3Is0LuVnflsAdWpU-bdxJ4jOUBpGq5nxjy6tQL60ruohHV4xhjd_YNISGINB5X_LXUV-S0Ik-z6rjnGwB8VOOeUBfRyfsqlNv2RuX-o5F51FNpylBSA3i85BzQnlCrh2pzcCotpf5cN-hq7FoW_lYJlVw5L9DgJMM4p74IQ",
        width: 4032,
      },
    ],
    place_id: "ChIJm0JNIZmIs4kR1im0BXXzEGE",
    plus_code: {
      compound_code: "2GFJ+RJ Charlottesville, VA, USA",
      global_code: "87C32GFJ+RJ",
    },
    price_level: 2,
    rating: 4.5,
    reference: "ChIJm0JNIZmIs4kR1im0BXXzEGE",
    scope: "GOOGLE",
    types: [
      "bar",
      "liquor_store",
      "restaurant",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    user_ratings_total: 877,
    vicinity: "156 Carlton Road Ste 203, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipO4KotOwYs6Tpi57TXzQVDUmcEG3KZWmDgBSSF0=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.029338, lng: -78.482687 },
      viewport: {
        northeast: { lat: 38.0306869802915, lng: -78.4813380197085 },
        southwest: { lat: 38.0279890197085, lng: -78.48403598029151 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
    name: "South Street Brewery",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1366,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/106329300113685657069">South Street Brewery</a>',
        ],
        photo_reference:
          "ATtYBwKeMVK8DxlLdVTqcD-xcfkeCd9n44OPSHjunr2X-I4TiaaXpZxQK8B2QsxJ-SSVQGE1UxuKY_vROLkqIP34we0ck5zuresA4Fn3ZDLBQTYgMwIalqAq08Rzt1n_ReLEhWgl89yb4e5UMNryLDOvBL2qqX933w0lgKMCTI4pW7f8lvYG",
        width: 2048,
      },
    ],
    place_id: "ChIJ37CxbiSGs4kRCA1x5ntSn7k",
    plus_code: {
      compound_code: "2GH8+PW Charlottesville, VA, USA",
      global_code: "87C32GH8+PW",
    },
    price_level: 2,
    rating: 4.4,
    reference: "ChIJ37CxbiSGs4kRCA1x5ntSn7k",
    scope: "GOOGLE",
    types: ["bar", "restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 408,
    vicinity: "106 South Street West, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipPzVkHN7vNBBDeiFoz-1oUoSrpoi2eVtMF14ARQ=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0240274, lng: -78.4690459 },
      viewport: {
        northeast: { lat: 38.0253424802915, lng: -78.4677817197085 },
        southwest: { lat: 38.02264451970851, lng: -78.4704796802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Belmont Pizza & Pub",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113205143587362446447">Barry Wilson</a>',
        ],
        photo_reference:
          "ATtYBwJCOSotjWw2Z-T_LTUx0E5Y8wdC2n8loXvdmubOrKK0K0GxarFmtWkX_d5ttRE_UkRFy1a9fd_oxkrS0D_cchNaOMxpIp7enOlXGN4iVQgDxuPlTPYtw1Yuk7UhSZJmAbbYsTdG1Zo3sNfxTUmCToPWrrq53ByBwUYoRRR0vMEMbb-Q",
        width: 4032,
      },
    ],
    place_id: "ChIJk0JlLZ-Is4kReSKms8qc6iY",
    plus_code: {
      compound_code: "2GFJ+J9 Charlottesville, VA, USA",
      global_code: "87C32GFJ+J9",
    },
    price_level: 1,
    rating: 4.3,
    reference: "ChIJk0JlLZ-Is4kReSKms8qc6iY",
    scope: "GOOGLE",
    types: [
      "meal_delivery",
      "meal_takeaway",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 260,
    vicinity: "10, 5975, 221 Carlton Road, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipM9MWI-kQR1wlpjRQYB_r-Qqf3FtRC8OEU2WB2k=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0242534, lng: -78.4742108 },
      viewport: {
        northeast: { lat: 38.02551328029151, lng: -78.4729082697085 },
        southwest: { lat: 38.02281531970851, lng: -78.4756062302915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Mas",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 3480,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114314541776940872047">Gaurav Balakrishnan</a>',
        ],
        photo_reference:
          "ATtYBwItYH5pskxVCguU4TkNP-oLMdMUSOwByNcdQuORFerMutufWoINsBRO_Uu9pts8mNydXt_k5R7ikL930z0_yu2AxScukhQHsMgLJf4wcbFAaiSdHku1a98lT7-t0icqbecUqq9OoCgCi2TknZJPWFZ57XpMiFYfGIU0Wg28SO01fKyC",
        width: 4640,
      },
    ],
    place_id: "ChIJt8ZVxp-Is4kRTxMBkzXli2w",
    plus_code: {
      compound_code: "2GFG+P8 Charlottesville, VA, USA",
      global_code: "87C32GFG+P8",
    },
    price_level: 3,
    rating: 4.5,
    reference: "ChIJt8ZVxp-Is4kRTxMBkzXli2w",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 429,
    vicinity: "904 Monticello Road, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipOISDimoLqa9y4NdQweZzrihGP0JNRe5_YjDokC=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.02989309999999, lng: -78.47547689999999 },
      viewport: {
        northeast: { lat: 38.03116758029149, lng: -78.4741729197085 },
        southwest: { lat: 38.0284696197085, lng: -78.4768708802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Guadalajara",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 3024,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/117572988035094184722">Sree</a>',
        ],
        photo_reference:
          "ATtYBwJ1vjtgU1uLC0kNOagxjd4EGjMobvTjqBdgoX0JSX1NxFaAbo5bwSsGOhwW9c3_5Y9-REPoLXslDKeM9hZYa2o6RO7bR3Vkl7_WwIC7SpAalGu_4nnRg6xnsfYZquTMTUHtj-IsbP1dCyR1pqrhsg5ZA3HEA_b359S6B3IMSiXY1phT",
        width: 4032,
      },
    ],
    place_id: "ChIJTyKzYieGs4kREUCGOYLpk6c",
    plus_code: {
      compound_code: "2GHF+XR Charlottesville, VA, USA",
      global_code: "87C32GHF+XR",
    },
    price_level: 1,
    rating: 4.3,
    reference: "ChIJTyKzYieGs4kREUCGOYLpk6c",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 492,
    vicinity: "805 East Market Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipM90mSP2eGbQTQ0E-sClLGvzmxB-yVzS4Y2Exk4=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0230518, lng: -78.47049030000001 },
      viewport: {
        northeast: { lat: 38.0244472302915, lng: -78.46884766970851 },
        southwest: { lat: 38.0217492697085, lng: -78.47154563029152 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
    name: "La Guadalupana Latino Market",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1932,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115730137591766278784">jonnn56</a>',
        ],
        photo_reference:
          "ATtYBwIGjO_6ILyf9q4b-f8V9P3gIymXhPQEMU3V6nTzPFvlGp06F_nlkHeSGz0HQ4UgaB53uyj_SpJZ2m6Sp6nEDG-mJsiIgzGLGbxE8x3d4joPm1ousFuMjeAPfl3veGiIOZML__N33jHp7aPejX-Jlg3o2NoA-fhDhzy0dIgd1f2YPFea",
        width: 2576,
      },
    ],
    place_id: "ChIJk0JlLZ-Is4kRrOBBWqtYVos",
    plus_code: {
      compound_code: "2GFH+6R Charlottesville, VA, USA",
      global_code: "87C32GFH+6R",
    },
    rating: 4.2,
    reference: "ChIJk0JlLZ-Is4kRrOBBWqtYVos",
    scope: "GOOGLE",
    types: [
      "grocery_or_supermarket",
      "restaurant",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    user_ratings_total: 89,
    vicinity: "221 Carlton Road #15, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipMC52wzn_v_-EAzoOKeXh5SbQc9rsr-uq1GIvZL=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.02318449999999, lng: -78.4703777 },
      viewport: {
        northeast: { lat: 38.0244204302915, lng: -78.46906556970848 },
        southwest: { lat: 38.02172246970851, lng: -78.4717635302915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "The Red Lantern",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1960,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115290230903334570487">Abishek C</a>',
        ],
        photo_reference:
          "ATtYBwJbJjT__h4N5WGcbGBKpbszDu8Qq3ldJVpEQu_Me8y4Silca3z8Gs5KOqDCTyA-0R8Id33rAWaUnar_pP68alOu__UpX6r6XHsR9ymDSMr3x5GcOISSxAfNC88HEpt4sdNXHn2q0uP0KyRQCso6lF1j0XBhDnaZZU19wP7JwO3WhItj",
        width: 4032,
      },
    ],
    place_id: "ChIJk0JlLZ-Is4kRKNsYE8Z-D6s",
    plus_code: {
      compound_code: "2GFH+7R Charlottesville, VA, USA",
      global_code: "87C32GFH+7R",
    },
    price_level: 1,
    rating: 3.8,
    reference: "ChIJk0JlLZ-Is4kRKNsYE8Z-D6s",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 271,
    vicinity: "221 Carlton Road #16, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipOTEH84Qa_gViD3JNdDiA8lpc7USpSkOZoW9ec2=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.032418, lng: -78.48523800000001 },
      viewport: {
        northeast: { lat: 38.0337390302915, lng: -78.4836906697085 },
        southwest: { lat: 38.03104106970851, lng: -78.48638863029151 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Subway",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 2576,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115730137591766278784">jonnn56</a>',
        ],
        photo_reference:
          "ATtYBwKy5cjzDAg3KOUky7850zF5kpPnGoESmxUwudnvo_qx6anuKiIRTOfFCHMXzYKBDz2SE-A7PwzODa6vKJ3T4Kn8xbRePDT-rkMJKY_Ve1J6yG7Kl6sKqaeEMkaixGQTj6wC0r8sdlb9_vNx7fCnRYH58y2ksIPKUYSPaQxIQWzHQW9-",
        width: 1932,
      },
    ],
    place_id: "ChIJ2xRYFiWGs4kRVz1RqYikiYA",
    plus_code: {
      compound_code: "2GJ7+XW Charlottesville, VA, USA",
      global_code: "87C32GJ7+XW",
    },
    price_level: 1,
    rating: 4.1,
    reference: "ChIJ2xRYFiWGs4kRVz1RqYikiYA",
    scope: "GOOGLE",
    types: [
      "meal_takeaway",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 64,
    vicinity: "251 Ridge McIntire Road, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipP3v2HOq0rL70JPqwIGq-IPy4C6CEC_9L9HcB38=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.03090350000001, lng: -78.48155659999999 },
      viewport: {
        northeast: { lat: 38.03221733029149, lng: -78.4801795697085 },
        southwest: { lat: 38.0295193697085, lng: -78.4828775302915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Hamiltons' at First & Main",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1641,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104134716135737584643">Hamiltons&#39; at First &amp; Main</a>',
        ],
        photo_reference:
          "ATtYBwJMhyXQgMHFP2BKBqVi6fZENss7GeVfapH2nSl4P1N0b_wp3EXZzi0HOpz3EANu-xp_EtCyHK2Lgijs8Z2_pJAxtVLdBYSSdTZclE7EzPFFlkoj_e0LDIiBlwbpAMPgiQ0fTV6DKIy_RXhw85vaJmb18_sGOyvN9x-U9vxJGHk8bOqc",
        width: 2151,
      },
    ],
    place_id: "ChIJsTj10iWGs4kRqTa_Y_qvhSQ",
    plus_code: {
      compound_code: "2GJ9+99 Charlottesville, VA, USA",
      global_code: "87C32GJ9+99",
    },
    price_level: 3,
    rating: 4.5,
    reference: "ChIJsTj10iWGs4kRqTa_Y_qvhSQ",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 376,
    vicinity: "101 West Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipMNT1J7reno18eELpCeHURFvkdVwuiwFXnkJEMe=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.03140999999999, lng: -78.482759 },
      viewport: {
        northeast: { lat: 38.03267813029149, lng: -78.4815257197085 },
        southwest: { lat: 38.0299801697085, lng: -78.4842236802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "The Whiskey Jar",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1080,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/106837855227901071458">James Carter</a>',
        ],
        photo_reference:
          "ATtYBwKcPdvRKhFUGvGMJKbAsgIaQXk9f7utNDTNdCopsr9dMQFlnVrM9K5TxTqIuyWaGZxf5EpLnZln9Fjv5hGQhCVAHb627cOy3XEcD40FsKhW-OBWPhbAX-WC-ni_QpxWhdZ8LNxlguFD9RTLaiHqPwoQuakQthSkUJaF4ydnu2ktxaxb",
        width: 1920,
      },
    ],
    place_id: "ChIJRxkLrSWGs4kRUySqS8deLBg",
    plus_code: {
      compound_code: "2GJ8+HV Charlottesville, VA, USA",
      global_code: "87C32GJ8+HV",
    },
    price_level: 2,
    rating: 4.4,
    reference: "ChIJRxkLrSWGs4kRUySqS8deLBg",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 992,
    vicinity: "227 West Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipMfT1Xl7g9fNYi0tKlhxTqYWan-ixQgEx5WU40H=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0303267, lng: -78.48035449999999 },
      viewport: {
        northeast: { lat: 38.0318780802915, lng: -78.47855536970849 },
        southwest: { lat: 38.0291801197085, lng: -78.48125333029151 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Citizen Burger Bar",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 4032,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/100611834624973768782">Brian Sollie</a>',
        ],
        photo_reference:
          "ATtYBwJpGfQzjbUUiJWsJAeL3G2xFbpVZIMENJESig7C1Dw2zyZyXuVTPo8WomNmSU2Hm1TjFEEJkjueq78XhLQg6GsS55poKtEoxtLOdY-VKd8uSUEBw-CC9hz9BdccR3KJ8S4UR7BtQPb7tTlDCEQyw6drgSuxw1aX5vzeIWVhbjX0BrX3",
        width: 3024,
      },
    ],
    place_id: "ChIJ_VpDnCaGs4kRGdjWndt1uIA",
    plus_code: {
      compound_code: "2GJ9+4V Charlottesville, VA, USA",
      global_code: "87C32GJ9+4V",
    },
    price_level: 2,
    rating: 4.4,
    reference: "ChIJ_VpDnCaGs4kRGdjWndt1uIA",
    scope: "GOOGLE",
    types: ["bar", "restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 1759,
    vicinity: "212 East Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipO4gM1TkcGFiHH2-4Uqg8ltBnmUqPdx98OTG8k_=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0304414, lng: -78.4870972 },
      viewport: {
        northeast: { lat: 38.0319499302915, lng: -78.4857494197085 },
        southwest: { lat: 38.0292519697085, lng: -78.48844738029152 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Orzo Kitchen & Wine Bar",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 3744,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/103735189624527700969">Orzo Kitchen &amp; Wine Bar</a>',
        ],
        photo_reference:
          "ATtYBwIcsMskcDNQg9wmaYg7k3GnC1p9cNf7JFnX1f8VvjfY83SKEZQHAwzk5raNAHH28dkKSozn3oJzg6JMGS7kCrqSsiXw6MY2KEqSWTIy8YYCLGV8po8sfBi33Z3o7KqdhjJvlNYc34Zhz6w8FfRCRe37X4oAj1F6nBErMOzyQZbA-m6O",
        width: 5616,
      },
    ],
    place_id: "ChIJzakmMDuGs4kR9Vb_sQWndRI",
    plus_code: {
      compound_code: "2GJ7+55 Charlottesville, VA, USA",
      global_code: "87C32GJ7+55",
    },
    price_level: 3,
    rating: 4.5,
    reference: "ChIJzakmMDuGs4kR9Vb_sQWndRI",
    scope: "GOOGLE",
    types: ["bar", "restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 324,
    vicinity: "416 West Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipM_eUe4g0R2ndgL7sQxcBcYeFtKntQrRhkTDJ7O=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0246189, lng: -78.4684625 },
      viewport: {
        northeast: { lat: 38.02596773029149, lng: -78.46721706970848 },
        southwest: { lat: 38.0232697697085, lng: -78.4699150302915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Pad Thai",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 2448,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/113310933187570157722">John LeMasney</a>',
        ],
        photo_reference:
          "ATtYBwLavE7m94EaqoYD9sGBprzuhoDOLlbbf_LCBzElr5wGtcyo8BEGOWk4oZ-r285uDNFFIvA2u0-mECSeXsOVHzlqWTRvIUG14hLygvw6BXCBUQyjsph-7d20F3MPfEiHJsX9Lwuwba_UiCQw9bD_Xmv6NcnYjpm9u6uqZMitqfjD538P",
        width: 3264,
      },
    ],
    place_id: "ChIJm0JNIZmIs4kRPUiYBUYMK6M",
    plus_code: {
      compound_code: "2GFJ+RJ Charlottesville, VA, USA",
      global_code: "87C32GFJ+RJ",
    },
    price_level: 2,
    rating: 4.5,
    reference: "ChIJm0JNIZmIs4kRPUiYBUYMK6M",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 93,
    vicinity: "156 Carlton Road #202, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipNb760zGehgK0eAk-VqsjbscOahsHJonWqTUjs7=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0364351, lng: -78.4620989 },
      viewport: {
        northeast: { lat: 38.0376819802915, lng: -78.4608173197085 },
        southwest: { lat: 38.0349840197085, lng: -78.4635152802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Papa John's Pizza",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1200,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115730137591766278784">jonnn56</a>',
        ],
        photo_reference:
          "ATtYBwL8_noK10B9GxSwmCA4PoIQlqnO-BO3hR1sSuni7SsGaDzWa5-bFq_cuHsJn5hmk5vikSb1Npw5QaMZ4KqRCWQGXEKmyXPCWe2L4ljE9J53GX2PWu6mKHfdTNnh2uaWPqP5701x4nDV3vWfaU0zDJ5OJDeTeofUC30i0k9okp9zdB8V",
        width: 1600,
      },
    ],
    place_id: "ChIJC2j_No-Is4kRX9mz9Czj1ZA",
    plus_code: {
      compound_code: "2GPQ+H5 Charlottesville, VA, USA",
      global_code: "87C32GPQ+H5",
    },
    price_level: 1,
    rating: 3.6,
    reference: "ChIJC2j_No-Is4kRX9mz9Czj1ZA",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 113,
    vicinity: "1305 Long Street Suite A, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipNeeX8tGQsojBgralttIIP4rwZMkBfmPD2HnlEf=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.03086799999999, lng: -78.482198 },
      viewport: {
        northeast: { lat: 38.03229573029149, lng: -78.4808645697085 },
        southwest: { lat: 38.0295977697085, lng: -78.48356253029151 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Christian's Pizza",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 4000,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/101091665340432888645">Sam Moye</a>',
        ],
        photo_reference:
          "ATtYBwLHKANLGGF8D7KA6cD-dgPOt23zgxx-cjlU8oRWED6BYzk-2ij1h20DmVb0qtJxvssmUBqk_AjfPcTzbyLqC1UX1_Z6wzJTSmgFMwoExk7ybw3kPbcJ32UQikEPR4dX3Flt2cC1B_icfL8lY4C6ljTr8dD3anHulQXI9FSN6ICkN4lN",
        width: 6000,
      },
    ],
    place_id: "ChIJHRSVMiSGs4kR1uoGpcT0fxs",
    plus_code: {
      compound_code: "2GJ9+84 Charlottesville, VA, USA",
      global_code: "87C32GJ9+84",
    },
    price_level: 1,
    rating: 4.4,
    reference: "ChIJHRSVMiSGs4kR1uoGpcT0fxs",
    scope: "GOOGLE",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 589,
    vicinity: "118 West Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipPuVdHzeQJjRhteqLFEdd_SI1QN3N3gEVLakLG4=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0303845, lng: -78.47976779999999 },
      viewport: {
        northeast: { lat: 38.0315303802915, lng: -78.4786097697085 },
        southwest: { lat: 38.0288324197085, lng: -78.4813077302915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Rapture Restaurant",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 337,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/109363591167316540854">Rapture Restaurant</a>',
        ],
        photo_reference:
          "ATtYBwKfmIgm5JHJ-k82vib1zAcpAdljMnNzNLXJqnq-3rcUyheegWZcklkyRnfMySQHiKMohNTBW5YBYarhv6Q4nl8PaE-TKcpsbLCn07pW_8otKyc3FpjbuX-fVAqz2x9P7zqjg5HZQZJUTjlkyp-sgFz9m-LuH5eb_ZM1X_HPwzNmjOmd",
        width: 600,
      },
    ],
    place_id: "ChIJG2qQjiaGs4kRMMvwk2uosyk",
    plus_code: {
      compound_code: "2GJC+53 Charlottesville, VA, USA",
      global_code: "87C32GJC+53",
    },
    price_level: 2,
    rating: 3.8,
    reference: "ChIJG2qQjiaGs4kRMMvwk2uosyk",
    scope: "GOOGLE",
    types: [
      "restaurant",
      "night_club",
      "bar",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 515,
    vicinity: "303 East Main Street, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipPO1UEFkfaZH2enH4EWbZdZbxlub3L9d9yP2kq8=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.03284849999999, lng: -78.4575468 },
      viewport: {
        northeast: { lat: 38.0341542802915, lng: -78.45615191970849 },
        southwest: { lat: 38.0314563197085, lng: -78.45884988029151 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Subway",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 975,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114084211868219996815">Chip Hylton</a>',
        ],
        photo_reference:
          "ATtYBwK2ddHELpf7FH9azfJSQ1BSuyWe7lDYw-Oq4R8N7WDUo_aRkW3dYuLGdz7iyvgpdhz2ekewFR71O1xUeqq3yyezVH4NtMTPoth0WCRxFBjlvn4a1um-yRVkf0x0xEjTYQwI7SSsE65dG3XsSnEihSwFGlXHLQPszSEXPTieFafi0ZQo",
        width: 951,
      },
    ],
    place_id: "ChIJOUlqYuyIs4kRJy2Y9-f33uc",
    plus_code: {
      compound_code: "2GMR+4X Charlottesville, VA, USA",
      global_code: "87C32GMR+4X",
    },
    price_level: 1,
    rating: 3.3,
    reference: "ChIJOUlqYuyIs4kRJy2Y9-f33uc",
    scope: "GOOGLE",
    types: [
      "meal_takeaway",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment",
    ],
    user_ratings_total: 85,
    vicinity: "300 Pantops Center, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipOSI1U4uRrH9hQu4CwqfdHYqRsy49F3jHrakYjE=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0323056, lng: -78.4854654 },
      viewport: {
        northeast: { lat: 38.0335267302915, lng: -78.48418486970849 },
        southwest: { lat: 38.0308287697085, lng: -78.48688283029149 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    name: "Shebeen Pub & Braai",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 398,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/115797948540693058395">Shebeen Pub &amp; Braai</a>',
        ],
        photo_reference:
          "ATtYBwKo1wL_Eyw3ECt0O-C5gu_gHOoCjH5KYDHvCVN56st85Np-uGLQ0eUG4MzwLu9PRsrTivu9vPmhhGo3Xh6aaEfkkFZiEdW6dIQEFhNK_V20tAayOzrcGbLBEuHSxdeTIl5glK93FoAKIqGBBso47_w5AhKvHoxeLM2IrM0UDRa7q1q3",
        width: 600,
      },
    ],
    place_id: "ChIJ44tWFiWGs4kR7hzkPBZavEM",
    plus_code: {
      compound_code: "2GJ7+WR Charlottesville, VA, USA",
      global_code: "87C32GJ7+WR",
    },
    price_level: 2,
    rating: 4.4,
    reference: "ChIJ44tWFiWGs4kR7hzkPBZavEM",
    scope: "GOOGLE",
    types: ["bar", "restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 567,
    vicinity: "247 Ridge McIntire Road, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipMN6webE7Fsit3WGSfjyAEY-D4r5bPURdjINdRr=s1600-h200",
  },
  {
    business_status: "OPERATIONAL",
    geometry: {
      location: { lat: 38.0276505, lng: -78.47815539999999 },
      viewport: {
        northeast: { lat: 38.0290424302915, lng: -78.4770591197085 },
        southwest: { lat: 38.0263444697085, lng: -78.4797570802915 },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    name: "Champion Brewing Company",
    opening_hours: { open_now: true },
    photos: [
      {
        height: 1080,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/104149848502226174554">Donald Giannangeli</a>',
        ],
        photo_reference:
          "ATtYBwL22TQBcAm7RbVC0sazBC4aonVw-1onH0_7Rdb20_cX_tFto9zHMulXuwbYPkalasrVlr1l1OurNn9lKWWUAsNo7xwxV9ZEf9PU2Xy3KPM0HqL3Rg_pdF9nxrxaaq2Aav8NY2silj26_e53UOYBDqRrShLqkmi4x6XV_6FrO4D7FHNk",
        width: 1080,
      },
    ],
    place_id: "ChIJ98_JLCGGs4kRv5iCuBXqthw",
    plus_code: {
      compound_code: "2GHC+3P Charlottesville, VA, USA",
      global_code: "87C32GHC+3P",
    },
    rating: 4.6,
    reference: "ChIJ98_JLCGGs4kRv5iCuBXqthw",
    scope: "GOOGLE",
    types: [
      "bar",
      "liquor_store",
      "restaurant",
      "food",
      "point_of_interest",
      "store",
      "establishment",
    ],
    user_ratings_total: 159,
    vicinity: "324 6th Street Southeast, Charlottesville",
    imgURL:
      "https://lh3.googleusercontent.com/p/AF1QipMvTxujZB8AYVUBgjdvOYTkC5k3VfQReh8YcKYq=s1600-h200",
  },
];

export default dummyInfo;
