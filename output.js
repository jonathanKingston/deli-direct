function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]') return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var places = [
    {
        'blurb': 'Online beer shop based in Nottingham. Supplying beer from local breweries to local customers.',
        'collect': false,
        'location': false,
        'postage': true,
        'title': 'Adventure Beer',
        'types': [
            'alcohol',
            'drink'
        ],
        'website': 'https://adventurebeer.co.uk/'
    },
    {
        'blurb': 'Italian Bar & Restaurant in Beeston.',
        'collect': true,
        'facebook': 'https://www.facebook.com/Amores-274600903024469/',
        'phone': '+441159222266',
        'title': 'Amores',
        'website': 'https://www.amoresrestaurantbeeston.co.uk/',
        'google_place_id': 'ChIJx8Vw1trpeUgRagblnzFOLqw',
        'location': {
            'lat': 52.92416670000001,
            'lng': -1.2108333
        },
        'address': '137 Station Rd, Beeston, Nottingham NG9 2AZ, United Kingdom',
        'types': [
            'restaurant',
            'food'
        ]
    },
    {
        'title': 'Anoki',
        'facebook': 'https://www.facebook.com/AnokiExpress/',
        'twitter': 'https://twitter.com/AnokiExpress',
        'delivers': true,
        'blurb': 'Indian restaurant now offering chilled ready meal delivery.',
        'website': 'http://anokiexpressrange.co.uk',
        'google_place_id': 'ChIJbwuccNbDeUgRbkZYrAmQQjI',
        'location': {
            'lat': 52.9525701,
            'lng': -1.1423622
        },
        'address': 'Gothic House, Barker Gate, Nottingham NG1 1JU, United Kingdom',
        'types': [
            'restaurant',
            'food'
        ]
    },
    {
        'blurb': 'Nottingham’s first ever self-serve wine bar located in Trinity Square now offering delivery.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/Anotherwinebar/',
        'instagram': 'https://www.instagram.com/anotherwinebar/',
        'title': 'Another? Wine Bar',
        'website': 'http://anotherwinebar.co.uk/',
        'types': [
            'bar',
            'food',
            'alcohol'
        ],
        'google_place_id': 'ChIJ5Z9j8n_BeUgRoa4n4ZNOGnk',
        'location': {
            'lat': 52.9555861,
            'lng': -1.1488115
        },
        'address': '9 Trinity Square, Nottingham NG1 4AF, United Kingdom'
    },
    {
        'blurb': 'Fruit & vegetable shop in Nottingham, United Kingdom.',
        'delivers': true,
        'location': {
            'lat': 52.96646699999999,
            'lng': -1.1858744
        },
        'title': "Anthony's Fruit and Vegetables",
        'types': [
            'greengrocer',
            'vegan',
            'plant-based'
        ],
        'website': 'https://www.facebook.com/anthonysboxes/'
    },
    {
        'blurb': 'Local farm shop that is accepting collections.',
        'collect': true,
        'facebook': 'https://www.facebook.com/ArrowFarmShop/',
        'title': 'Arrow Farm Shop',
        'types': [
            'greengrocer',
            'cafe',
            'food'
        ],
        'website': 'https://arrowfarmshop.co.uk/',
        'google_place_id': 'ChIJpxQeDIuheUgRPuqX_1ASvFQ',
        'location': {
            'lat': 53.2960965,
            'lng': -1.196287
        },
        'address': 'Steetley Ln, Worksop S80 3DZ, United Kingdom'
    },
    {
        'blurb': 'Product/service in Nottingham, United Kingdom.',
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/Avocafe.Nutri2Go/',
        'location': {
            'lat': 52.9514283,
            'lng': -1.1733636
        },
        'title': 'AvoCafe by Nutri-Go',
        'types': [
            'greengrocer'
        ]
    },
    {
        'facebook': 'https://www.facebook.com/BeeVeganBakery/',
        'location': false,
        'delivers': true,
        'blurb': 'Sweet treats made to order.',
        'title': 'Bee Vegan Bakery',
        'types': [
            'vegan',
            'plant-based',
            'bakery'
        ]
    },
    {
        'title': 'Beechwood Butchers',
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/BeechwoodButchers/',
        'google_place_id': 'ChIJvfs689rAeUgRE60_5NunvHQ',
        'location': {
            'lat': 53.0061906,
            'lng': -1.1153314
        },
        'address': '8 Beechwood Rd, Arnold, Nottingham NG5 8BA, United Kingdom',
        'types': [
            'food'
        ]
    },
    {
        'title': 'Belvoir Bakery',
        'collect': true,
        'blurb': 'Bakery doing stalls in Bingham and others, check Facebook.',
        'facebook': 'https://www.facebook.com/BelvoirBakery/',
        'types': [
            'bakery'
        ],
        'location': false
    },
    {
        'collect': true,
        'location': {
            'lat': 52.9868047,
            'lng': -0.9776788999999999
        },
        'phone': '+44115 966 4833',
        'title': 'Biondi Bistro',
        'website': 'http://biondi-bistro.com/'
    },
    {
        'blurb': 'Nottingham craft ciders offering delivery.',
        'delivers': true,
        'facebook': 'https://facebook.com/BlueBarrelCider/',
        'title': 'Blue Barrel Cider',
        'types': [
            'alcohol',
            'drink'
        ],
        'location': false
    },
    {
        'title': 'Blue Monkey Brewing',
        'postage': true,
        'collect': true,
        'facebook': 'https://www.facebook.com/bluemonkeybrewery/',
        'website': 'http://bluemonkeybrewery.com/',
        'blurb': 'Local brewery offering collection and postage.',
        'twitter': 'https://twitter.com/bluemonkeybrew',
        'google_place_id': 'ChIJw5kMVnDreUgRFhnVBsCI8ww',
        'location': {
            'lat': 53.0040096,
            'lng': -1.2803056
        },
        'address': '10 Pentrich Rd, Giltbrook, Nottingham NG16 2UZ, United Kingdom',
        'types': [
            'beer',
            'alcohol'
        ]
    },
    {
        'collect': true,
        'delivers': true,
        'location': {
            'lat': 52.9837359,
            'lng': -1.1230325
        },
        'title': 'Bread and Bitter',
        'twitter': 'https://twitter.com/breadandbitter',
        'website': 'https://www.castlerockbrewery.co.uk/pubs/bread-and-bitter/'
    },
    {
        'blurb': 'Nottingham bottle shop offering online deliveries.',
        'instagram': 'https://www.instagram.com/brewcavern/',
        'postage': true,
        'title': 'Brew Cavern',
        'website': 'https://brewcavern.co.uk/',
        'google_place_id': 'ChIJ7VfRGFieeUgRCVIURkYxV7A',
        'location': {
            'lat': 52.952703,
            'lng': -1.14858
        },
        'address': '9 Flying Horse Walk, Nottingham NG1 2HN, United Kingdom',
        'types': [
            'beer',
            'alcohol'
        ]
    },
    {
        'blurb': 'Wine, beer and spirits shop in Nottingham, United Kingdom.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/brigittebordeauxwine',
        'instagram': 'https://www.instagram.com/brigittebordeauxwine/',
        'location': {
            'lat': 52.9791758,
            'lng': -1.1474493
        },
        'phone': '0115 9620212',
        'title': 'Brigitte Bordeaux',
        'types': [
            'alcohol',
            'drink'
        ],
        'website': 'https://www.brigittebordeauxwine.co.uk/'
    },
    {
        'blurb': 'Deli offering pre-orders in the East Leake area.',
        'collect': true,
        'email': 'orders@bryersdeli.com',
        'facebook': 'https://www.facebook.com/bryerseastleake/',
        'title': "Bryer's",
        'google_place_id': 'ChIJE3khmnHdeUgRcpMMZRBtEsw',
        'location': {
            'lat': 52.8320318,
            'lng': -1.1775954
        },
        'address': '13 Gotham Rd, East Leake, Loughborough LE12 6JG, United Kingdom',
        'types': [
            'cafe',
            'food'
        ]
    },
    {
        'collect': true,
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/lenton/buns-and-burgers-ntg',
        'delivers': true,
        'justeat': 'https://www.just-eat.co.uk/restaurants-bunsburgers-nottingham/menu',
        'phone': '0115 841 0086',
        'title': 'Buns Burgers Shakes Fries Nottingham',
        'google_place_id': 'ChIJZzeTWWzBeUgRIvrfYe6Ymeg',
        'location': {
            'lat': 52.9557066,
            'lng': -1.1710064
        },
        'address': '119 Ilkeston Rd, Nottingham NG7 3DY, United Kingdom',
        'types': [
            'restaurant',
            'food'
        ]
    },
    {
        'instagram': 'https://www.instagram.com/allminecakes/',
        'location': {
            'lat': 53.0922998,
            'lng': -0.9612767999999999
        },
        'postage': true,
        'title': 'Cafe All Mine Cakes',
        'website': 'https://www.allminecakes.co.uk/',
        'types': [
            'bakery'
        ]
    },
    {
        'collect': true,
        'phone': '+44115 922 1902',
        'title': 'Cafe Roya',
        'types': [
            'restaurant',
            'food',
            'vegan',
            'plant-based',
            'bakery'
        ],
        'blurb': 'Modern vegetarian cuisine.',
        'facebook': 'https://www.facebook.com/CafeRoya130/',
        'instagram': 'https://www.instagram.com/caferoya130/',
        'twitter': 'https://twitter.com/CafeRoya/',
        'website': 'https://www.caferoya.com/',
        'google_place_id': 'ChIJ2SQ5m8HpeUgRoQNPBOh14S0',
        'location': {
            'lat': 52.9300733,
            'lng': -1.2189523
        },
        'address': '130 Wollaton Rd, Beeston, Nottingham NG9 2PE, United Kingdom'
    },
    {
        'delivers': true,
        'facebook': 'https://www.facebook.com/cafezerouk/',
        'location': {
            'lat': 53.002796,
            'lng': -1.1280648
        },
        'title': 'Cafe Zero'
    },
    {
        'delivers': true,
        'instagram': 'https://www.instagram.com/canvasandcoffeeuk/',
        'location': {
            'lat': 52.919449,
            'lng': -1.227426
        },
        'title': 'Canvas & Coffee',
        'website': 'http://canvasandcoffee.uk/',
        'types': [
            'coffee'
        ]
    },
    {
        'blurb': 'Cafe offering meals to take away.',
        'collect': true,
        'facebook': 'https://www.facebook.com/carriagescafe/',
        'instagram': 'https://www.instagram.com/carriagescafe/',
        'location': {
            'lat': 52.8850072,
            'lng': -1.0806468
        },
        'phone': '01636676129',
        'title': 'Carriages Cafe',
        'website': 'https://www.carriagesnewark.co.uk/'
    },
    {
        'location': {
            'lat': 52.9514322,
            'lng': -1.1476908
        },
        'postage': true,
        'blurb': 'Coffee roasters offering Nottingham Delivery and UK postage.',
        'title': 'Cartwheel Cafe and Roastery',
        'website': 'https://shop.cartwheelcoffee.com/',
        'types': [
            'coffee'
        ]
    },
    {
        'collect': true,
        'title': 'Castle Rock Brewery',
        'types': [
            'beer',
            'alcohol'
        ],
        'blurb': 'Nottingham based brewery offering drive-thru collection on beer.',
        'website': 'https://castlerockbreweryshop.com/',
        'google_place_id': 'ChIJr_Dvz9LDeUgR0eia9FTRzwQ',
        'location': {
            'lat': 52.945631,
            'lng': -1.148661
        },
        'address': 'Queensbridge Rd, Nottingham NG2 1NB, United Kingdom'
    },
    {
        'blurb': 'Butchers offering free delivery.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/Chambers-butchers-Nottingham-228400460529940/',
        'phone': '01159267034',
        'title': 'Chambers Butchers',
        'google_place_id': 'ChIJ-XbY0ODAeUgRalDWB_gmQs4',
        'location': {
            'lat': 53.0024381,
            'lng': -1.1288985
        },
        'address': '31 Front St, Arnold, Nottingham NG5 7EA, United Kingdom',
        'types': [
            'food',
            'butchers'
        ]
    },
    {
        'title': 'Chao Chao',
        'blurb': 'West Bridgford delivering Asian cuisine.',
        'delivers': true,
        'twitter': 'https://twitter.com/ChaoChaoUrban',
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/west-bridgford/chao-chao-takeaways-limited',
        'website': 'https://www.chaochao.co.uk/',
        'phone': '0115 981 9439',
        'google_place_id': 'ChIJPVXh_bvDeUgR3NkxSANd0sA',
        'location': {
            'lat': 52.9276364,
            'lng': -1.1299312
        },
        'address': '75 Melton Rd, West Bridgford, Nottingham NG2 6EN, United Kingdom',
        'types': [
            'takeaway',
            'restaurant',
            'food'
        ]
    },
    {
        'title': 'Cleaver Meats',
        'website': 'https://cleavermeatsltd.co.uk/',
        'delivers': true,
        'google_place_id': 'ChIJk_mys3_BeUgRoQm_ENQ_bJI',
        'location': {
            'lat': 52.9562047,
            'lng': -1.1466598
        },
        'address': '115 Victoria St, Nottingham NG1 3QB, United Kingdom',
        'types': [
            'food'
        ]
    },
    {
        'delivers': true,
        'website': 'https://www.clemievegancake.com/',
        'instagram': 'https://www.instagram.com/clemievegancake/',
        'facebook': 'https://www.facebook.com/clemievegancake/',
        'blurb': 'Vegan cakes and treats including custom made.',
        'location': {
            'lat': 53.0354842,
            'lng': -1.2042463
        },
        'title': "Clemie's Vegan Cakes",
        'types': [
            'vegan',
            'plant-based',
            'bakery'
        ]
    },
    {
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/cornerstonepizzas/',
        'location': {
            'lat': 52.982072,
            'lng': -1.1453958
        },
        'title': 'Cornerstone Pizza'
    },
    {
        'blurb': 'Delivering essentials, meat and potatoes in Beeston and around Nottingham.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/johndawsonbutchers/',
        'phone': '0115 925 5101',
        'title': 'Craig Dawson',
        'google_place_id': 'ChIJ7RX5asPpeUgRJRF5wBYrQ9c',
        'location': {
            'lat': 52.9280985,
            'lng': -1.2132365
        },
        'address': '72 High Rd, Beeston, Nottingham NG9 2LF, United Kingdom',
        'types': [
            'food'
        ]
    },
    {
        'delivers': true,
        'collect': true,
        'location': {
            'lat': 52.90589319999999,
            'lng': -1.2606296
        },
        'title': 'Craig Floate',
        'facebook': 'https://www.facebook.com/privatechefcraigfloate/',
        'website': 'https://www.craigfloatechef.com/'
    },
    {
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/Dandelion.kimberley/',
        'location': {
            'lat': 52.9974639,
            'lng': -1.2565679
        },
        'phone': '0115 9385556',
        'title': 'Dandelion Deli Coffee',
        'types': [
            'coffee'
        ]
    },
    {
        'blurb': 'Beeston hidden bar delivering drinks and cocktails.',
        'collect': true,
        'delivers': true,
        'instagram': 'https://www.instagram.com/dasschuhzimmer/',
        'location': {
            'lat': 52.9224942,
            'lng': -1.2208611
        },
        'title': 'Das Schuhzimmer',
        'website': 'http://www.dasschuhzimmer.com/'
    },
    {
        'facebook': 'https://www.facebook.com/DashVegan/',
        'location': {
            'lat': 52.9477792,
            'lng': -1.1458505
        },
        'title': 'Dash Vegan',
        'types': [
            'vegan',
            'plant-based'
        ],
        'blurb': 'Zero waste store, gluten free food and eco-homewares.',
        'delivers': true,
        'collect': true,
        'postage': true
    },
    {
        'title': 'Davisons Bakery',
        'website': 'https://davisonsbakery.com/',
        'collect': true,
        'delivers': true,
        'phone': '01636 605525',
        'email': 'davisonsorders@gmail.com',
        'blurb': 'Independent family bakery based in Newark.',
        'facebook': 'https://www.instagram.com/davisonsbakery/',
        'twitter': 'https://twitter.com/DavisonsBakery',
        'types': [
            'bakery',
            'food'
        ],
        'google_place_id': 'ChIJZVLxDy61eUgRgSTWt7Wx3k4',
        'location': {
            'lat': 53.0762168,
            'lng': -0.807547
        },
        'address': '5 Appleton Gate, Newark NG24 1JR, United Kingdom'
    },
    {
        'blurb': 'Allowing our customers to taste and try new and deli foods, with the confidence that they are tasting the best.',
        'collect': true,
        'delivers': true,
        'email': 'food@delilahfinefoods.co.uk',
        'facebook': 'https://www.facebook.com/DelilahFineFoods/',
        'instagram': 'https://www.instagram.com/delilahfinefoods/',
        'location': {
            'lat': 52.95315170000001,
            'lng': -1.1463852
        },
        'phone': '+44115 948 4461',
        'title': 'Delilah Fine Foods',
        'types': [
            'deli',
            'greengrocer'
        ],
        'website': 'https://delilahfinefoods.co.uk/'
    },
    {
        'blurb': 'Authentic Caribbean food order via WhatsApp, UberEATS & Deliveroo.',
        'collect': true,
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/nottingham-city-centre/dhoris-kitchen',
        'delivers': true,
        'phone': '07936 600407',
        'title': 'dhoris kitchen',
        'location': false
    },
    {
        'blurb': 'Speciality food shop offering deliveries.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/eastmidsfinefoods/',
        'location': {
            'lat': 52.95315170000001,
            'lng': -1.1463852
        },
        'title': 'East Midlands Fine Foods'
    },
    {
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/Emilios-Greek-Restaurant-127944187301672/',
        'location': {
            'lat': 53.0023613,
            'lng': -1.1294101
        },
        'phone': '0115 926 2550',
        'title': 'Emilio’s Greek Restaurant',
        'website': 'https://www.emiliosgreekrestaurant.co.uk/'
    },
    {
        'blurb': 'Vegan takeaway food delivering in Nottingham.',
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/nottingham-city-centre/the-filthy-vegan-takeout-ltd',
        'delivers': true,
        'instagram': 'https://www.instagram.com/thefilthyvegantakeout/',
        'location': {
            'lat': 52.9555072,
            'lng': -1.1494865
        },
        'title': 'Filthy Vegan Takeout',
        'types': [
            'vegan',
            'plant-based'
        ],
        'website': 'https://thefilthyvegan.co.uk/'
    },
    {
        'blurb': 'Purveyors of high quality Fresh fish, fruit and vegetables.',
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/fred.hallamltd/',
        'location': {
            'lat': 52.9272164,
            'lng': -1.2151484
        },
        'title': 'Fred Hallam',
        'types': [
            'greengrocer',
            'vegan',
            'plant-based'
        ],
        'website': 'https://fredhallam.shop/'
    },
    {
        'title': 'G Kemp and Son Butchers',
        'website': 'http://gkempandson.co.uk/',
        'facebook': 'https://www.facebook.com/gkempandson/',
        'instagram': '',
        'twitter': '',
        'google_place_id': 'ChIJU4adpf3BeUgRDvmjoBEMAWw',
        'location': {
            'lat': 52.961532,
            'lng': -1.2000045
        },
        'address': '431 Beechdale Rd, Nottingham NG8 3LF, United Kingdom',
        'types': [
            'food'
        ],
        'delivers': true,
        'collect': true
    },
    {
        'collect': true,
        'instagram': 'https://www.instagram.com/hambletonbake/',
        'title': 'Hambleton Bakery',
        'twitter': 'https://twitter.com/HambletonBakery',
        'types': [
            'bakery',
            'food'
        ],
        'website': 'https://www.hambletonbakery.co.uk/',
        'google_place_id': 'ChIJT9s9bbzDeUgR9CJ_bGSb4H0',
        'location': {
            'lat': 52.92639089999999,
            'lng': -1.1283704
        },
        'address': '101 Melton Rd, West Bridgford, Nottingham NG2 6ET, United Kingdom'
    },
    {
        'blurb': 'A truly independent, traditional, family Farm shop specialising in home reared meat & local produce.',
        'collect': true,
        'facebook': 'https://www.facebook.com/HarkersFarmShop/',
        'title': "Harker's Farm Shop",
        'types': [
            'food'
        ],
        'website': 'http://www.harkersfarmshop.co.uk/',
        'google_place_id': 'ChIJB0wHGeXEeUgR0tfpgYTQ_7c',
        'location': {
            'lat': 52.900096,
            'lng': -1.05647
        },
        'address': 'Blackberry Farm, Clipston on The Wolds, Near Keyworth, Nottingham NG12 5PB, United Kingdom'
    },
    {
        'blurb': 'Lovely little café located just off the marketplace in Kegworth offering take away only.',
        'collect': true,
        'facebook': 'https://www.facebook.com/hiddengemkitchen/',
        'location': {
            'lat': 52.8358905,
            'lng': -1.2790617
        },
        'phone': '07549 306319',
        'title': 'Hidden Gem Kitchen'
    },
    {
        'collect': true,
        'facebook': 'https://www.facebook.com/hobbsburgerco/',
        'instagram': 'https://www.instagram.com/hobbsburgerco/',
        'phone': ' 0115 849 1292',
        'title': 'Hobbs Burger Co',
        'website': 'https://www.hobbsburgerco.co.uk/',
        'google_place_id': 'ChIJ3y7SWrfpeUgRGmwgt3TzdoI',
        'location': {
            'lat': 52.9298255,
            'lng': -1.2732845
        },
        'address': '15 Nottingham Rd, Stapleford, Nottingham NG9 8BQ, United Kingdom',
        'types': [
            'takeaway',
            'restaurant',
            'food'
        ]
    },
    {
        'blurb': 'Treats and cakes at the forest recreation ground.',
        'collect': true,
        'facebook': 'https://www.facebook.com/Homemadecafe/',
        'instagram': 'https://www.instagram.com/homemadecafe/',
        'title': 'Homemade Cafe',
        'website': 'https://www.homemadecafe.com/',
        'types': [
            'cafe',
            'food',
            'bakery'
        ],
        'google_place_id': 'ChIJe0lf1JrBeUgRcbrJTwZ_MjU',
        'location': {
            'lat': 52.9652306,
            'lng': -1.159696
        },
        'address': 'Forest Recreation Ground, Mansfield Rd, Nottingham NG5 2BU, United Kingdom'
    },
    {
        'location': {
            'lat': 52.9618933,
            'lng': -1.2234645
        },
        'postage': true,
        'title': 'Hopwells',
        'website': 'https://www.hopwells.com/'
    },
    {
        'collect': true,
        'delivers': true,
        'location': {
            'lat': 52.9508652,
            'lng': -1.1433024
        },
        'title': 'Hungry Pumpkin',
        'website': 'http://hungrypumpkin.co.uk/'
    },
    {
        'delivers': true,
        'instagram': 'https://www.instagram.com/indulgeinnotts/',
        'location': {
            'lat': 52.9702756,
            'lng': -1.1621913
        },
        'title': 'Indulge In',
        'website': 'https://www.indulge-in.co.uk/'
    },
    {
        'title': 'J Kerry & Sons',
        'delivers': true,
        'blurb': 'Greengrocer offering delivery of goods to Nottingham.',
        'facebook': 'https://www.facebook.com/pg/J.KerryLTD/',
        'location': {
            'lat': 52.9563558,
            'lng': -1.1466189
        },
        'google_place_id': 'ChIJSYpYrX_BeUgRA2EK5bxoExc',
        'address': '329-334 Victoria Market, Nottingham NG1 3PT, United Kingdom',
        'types': [
            'greengrocer',
            'food'
        ]
    },
    {
        'collect': true,
        'delivers': true,
        'title': 'Japanese Kitchen Sora',
        'blurb': 'Japanese style cafe & Izakaya tapas restaurant in Beeston.',
        'website': 'https://www.japaneserestaurantsorabeeston.com/',
        'instagram': 'https://www.instagram.com/kskyfoods/',
        'facebook': 'https://www.facebook.com/Japanesefoodstall/',
        'location': {
            'lat': 52.92368159999999,
            'lng': -1.218673
        },
        'google_place_id': 'ChIJ-0pGitHpeUgRsJr4AE_hfgI',
        'address': '33 Chilwell Rd, Beeston, Nottingham NG9 1EH, United Kingdom',
        'types': [
            'restaurant',
            'food'
        ]
    },
    {
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/Joes-Cafe-Colwick-2397876140252104/',
        'location': {
            'lat': 52.9601213,
            'lng': -1.0827286
        },
        'phone': '07796101798',
        'title': "Joe's Cafe Colwick"
    },
    {
        'location': {
            'lat': 52.9543719,
            'lng': -1.1524793
        },
        'postage': true,
        'title': 'Kaffee haus',
        'types': [
            'coffee'
        ],
        'website': 'https://kaffeehaus.co.uk/'
    },
    {
        'blurb': 'A local family business delivering Fruit and Vegetables, Meat, Fish and other essentials.',
        'delivers': true,
        'location': {
            'lat': 52.9214286,
            'lng': -1.0288016
        },
        'title': "Kerry's Fresh",
        'types': [
            'vegan',
            'plant-based'
        ],
        'website': 'https://www.kerrysfresh.co.uk/'
    },
    {
        'blurb': 'Korean food in Beeston offering take away only currently.',
        'collect': true,
        'facebook': 'https://www.facebook.com/pg/koreahousebeeston',
        'location': {
            'lat': 52.929513,
            'lng': -1.211005
        },
        'phone': '0115 967 7566',
        'title': 'Korea House Restaurant'
    },
    {
        'collect': true,
        'facebook': 'https://www.facebook.com/KraftWerks/',
        'location': {
            'lat': 52.9804123,
            'lng': -1.1470826
        },
        'postage': true,
        'title': 'Kraft Werks',
        'website': 'http://www.kraft-werks.com/'
    },
    {
        'blurb': 'Local supplier of hand delivered fruit and vegetables. Also supplying milk, eggs, cereals and water to home or work!.',
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/lardertree/',
        'location': {
            'lat': 52.94496050000001,
            'lng': -1.1347406
        },
        'phone': '0115 981 0100',
        'title': 'Larder Tree',
        'types': [
            'vegan',
            'plant-based'
        ],
        'website': 'http://lardertree.co.uk/'
    },
    {
        'blurb': 'Pub with supplies and also take away Sunday dinners.',
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/LarwoodVocePubKitchen/',
        'title': 'Larwood & Voce',
        'twitter': 'https://twitter.com/LarwoodVocePK',
        'website': 'https://www.larwoodandvoce.co.uk/take-away-menu.html',
        'location': {
            'lat': 52.9367818,
            'lng': -1.1306564
        },
        'google_place_id': 'ChIJFyA6vcbDeUgR7l8IFyso08Y',
        'address': 'Fox Rd, West Bridgford, Nottingham NG2 6AJ, United Kingdom',
        'types': [
            'bar',
            'restaurant',
            'food'
        ]
    },
    {
        'title': "Launay's Restaurant",
        'facebook': 'https://www.facebook.com/Launays-Restaurant-179124114868/',
        'deliver': true,
        'collect': true,
        'blurb': 'Restaurant in Edwinstowe offering delivery and collection.',
        'phone': '01623 822266',
        'location': {
            'lat': 53.19596000000001,
            'lng': -1.064651
        },
        'google_place_id': 'ChIJix5w2iO7eUgR4fPSVis4M4E',
        'address': '8 Church St, Edwinstowe, Mansfield NG21 9QA, United Kingdom',
        'types': [
            'restaurant',
            'bar',
            'food'
        ]
    },
    {
        'blurb': 'Nottingham chef offering affordable meals and emergency services free meals!.',
        'delivers': true,
        'location': false,
        'title': 'Louisa Ellis',
        'phone': '07583497998',
        'instagram': 'https://www.instagram.com/louisaellis1995/',
        'email': 'cheflouisaellis@outlook.com',
        'twitter': 'https://twitter.com/louisaellis95/',
        'website': 'https://www.cheflouisaellis.com/'
    },
    {
        'blurb': "Luigi's Ristorante in Arnold serving Italian cuisine.",
        'delivers': true,
        'facebook': 'https://www.facebook.com/Luigis-160101700672151/',
        'title': "Luigi's",
        'location': false
    },
    {
        'postage': true,
        'title': "Luisa's Vegan Chocolates",
        'types': [
            'food',
            'chocolate',
            'plant-based'
        ],
        'blurb': "Nottingham's 1st bean-to-bar chocolate store is vegan!",
        'twitter': 'https://twitter.com/Luisasveganchoc',
        'facebook': 'https://www.facebook.com/veganchocolatesbyluisa/',
        'instagram': 'https://www.instagram.com/luisasveganchocolates/',
        'website': 'https://luisasveganchocolates.co.uk/',
        'location': {
            'lat': 52.9536461,
            'lng': -1.1384867
        },
        'google_place_id': 'ChIJy7oOJBLCeUgRcKtxnmZQO0g',
        'address': 'Sneinton Market, Unit 7 Avenue A, Nottingham NG1 1DT, United Kingdom'
    },
    {
        'blurb': 'Nottingham brewery doing deliveries free to Nottingham.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/MagpieBrewery/',
        'postage': true,
        'title': 'Magpie Brewery',
        'twitter': 'https://twitter.com/MagpieBrewery',
        'website': 'http://www.magpiebrewery.com/',
        'location': false
    },
    {
        'collect': true,
        'delivers': true,
        'facebook': 'https://www.facebook.com/maxeysfarm/',
        'phone': '01636 814566',
        'title': 'Maxeys Farm Shop',
        'types': [
            'food'
        ],
        'website': 'https://www.maxeysfarmshop.co.uk/',
        'location': {
            'lat': 53.109106,
            'lng': -0.9627647999999999
        },
        'google_place_id': 'ChIJBc7adzy3eUgRt-HvUcRPLsw',
        'address': 'Brickfield Farm, Hockerton Road, Kirklington, Newark NG22 8PB, United Kingdom'
    },
    {
        'blurb': 'Family run butchers in the heart of the midlands established in 1935.',
        'collect': true,
        'delivers': true,
        'phone': '01636 370 556',
        'title': 'Meat and Co',
        'website': 'https://www.meatandco.co.uk/',
        'location': false
    },
    {
        'title': 'Milestone Brewery',
        'postage': true,
        'website': 'https://www.milestonebrewery.co.uk/',
        'facebook': 'https://www.facebook.com/milestone.brewery.9',
        'instagram': 'https://www.instagram.com/milestonebrewery/',
        'phone': '01636 822255',
        'types': [
            'alcohol',
            'beer'
        ],
        'twitter': 'https://twitter.com/MilestoneBrewi1',
        'location': {
            'lat': 53.1491346,
            'lng': -0.8077324
        },
        'google_place_id': 'ChIJLZ5i6kuzeUgRhRFq3d3i14I',
        'address': 'Great North Rd, Cromwell NG23 6JE, United Kingdom'
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9536587,
            'lng': -1.1381994
        },
        'title': 'Neon Raptor',
        'blurb': 'Sneinton Market based craft microbrewery.',
        'email': 'contact@neonraptorbrewingco.com',
        'facebook': 'https://www.facebook.com/neonraptorbrew',
        'instagram': 'https://www.instagram.com/neonraptorbrew/',
        'twitter': 'https://twitter.com/neonraptorbrew',
        'website': 'https://www.neonraptorbrewingco.com/'
    },
    {
        'delivers': true,
        'facebook': 'https://www.facebook.com/No.TwelveNottingham/',
        'location': {
            'lat': 52.9522883,
            'lng': -1.1504145
        },
        'title': 'No. Twelve',
        'website': 'https://www.no12nottingham.co.uk/'
    },
    {
        'blurb': 'Microbrewery delivering cask conditioned ales by the box or case.',
        'delivers': true,
        'email': 'office@nottinghambrewery.co.uk',
        'phone': '07815073447',
        'title': 'Nottingham Brewery',
        'twitter': 'https://twitter.com/NottmBrewery',
        'location': {
            'lat': 52.95832739999999,
            'lng': -1.1804005
        },
        'google_place_id': 'ChIJLUOkF_TBeUgR5fFudhGgnT0',
        'address': "17 St Peter's St, Nottingham NG7 3EN, United Kingdom",
        'types': [
            'beer',
            'alcohol'
        ]
    },
    {
        'title': 'Nottingham City Council',
        'blurb': 'Food parcel delivery service that is available at cost price.',
        'website': 'https://www.nottinghamcity.gov.uk/coronavirus',
        'phone': '0115 915 5555',
        'delivers': true,
        'location': false
    },
    {
        'blurb': 'Ethical festival cafe, falafel stall doing deliveries.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/NuminumsCafe/',
        'instagram': 'https://www.instagram.com/numinums_cafe/',
        'title': 'Numinums',
        'location': false
    },
    {
        'blurb': 'Burger joint offering collection after booking via phone, discounts for NHS.',
        'collect': true,
        'facebook': 'https://www.facebook.com/pages/category/Burger-Restaurant/Ohannes-Burger-UK-110446866989701/',
        'location': {
            'lat': 53.0011339,
            'lng': -1.1306648
        },
        'phone': '01156761818',
        'title': 'Ohannes Burgers'
    },
    {
        'collect': false,
        'delivers': true,
        'facebook': 'https://www.facebook.com/okendecoffee/',
        'location': {
            'lat': 52.9298836,
            'lng': -1.125556
        },
        'title': 'Okende',
        'twitter': 'https://twitter.com/okendecoffee',
        'website': 'https://www.okende.com/'
    },
    {
        'blurb': 'Beeston bakery offering boozy cakes.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/oozeeboozeebakes/',
        'title': 'Oozee Boozee Bakes',
        'types': [
            'bakery'
        ],
        'location': false
    },
    {
        'blurb': 'Local coffee roaster supplying fair trade coffees.',
        'location': {
            'lat': 52.9534396,
            'lng': -1.1437684
        },
        'postage': true,
        'title': 'Outpost coffee',
        'types': [
            'coffee'
        ],
        'website': 'https://www.outpost.coffee/'
    },
    {
        'title': 'Owen Taylors Butchers',
        'facebook': 'https://www.facebook.com/owentaylorbutchers',
        'website': 'http://www.owentaylor.co.uk/',
        'twitter': 'https://twitter.com/owentaylor_uk',
        'email': 'clair@owentaylor.co.uk',
        'blurb': 'Butchers doing deliveries across Nottingham, check Facebook.',
        'delivers': true,
        'location': {
            'lat': 53.07714470000001,
            'lng': -1.3729003
        },
        'google_place_id': 'ChIJVe4CF_eSeUgR279pcBWEwKE',
        'address': 'Owen Taylors Butchers, 27 Main Rd, Leabrooks, Alfreton DE55 1LA, UK',
        'types': [
            'butchers',
            'food'
        ]
    },
    {
        'title': 'Price and Fretwell',
        'delivers': true,
        'phone': '01773 591212',
        'blurb': 'Butchers offering delivery of hampers.',
        'facebook': 'https://www.facebook.com/PriceAndFretwell/',
        'location': {
            'lat': 53.1434592,
            'lng': -1.3246169
        },
        'google_place_id': 'ChIJMyQDCEeReUgRejRKyzBMFE0',
        'address': 'Primwell Court Saw Pit Industrial Estate, Tibshelf DE55 5NH, United Kingdom',
        'types': [
            'food',
            'butchers'
        ]
    },
    {
        'collect': true,
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/nottingham-city-centre/palb-catering-ltd-t-a-prickly-pear',
        'delivers': true,
        'facebook': 'https://www.facebook.com/pricklypearnottm/',
        'location': {
            'lat': 52.9614085,
            'lng': -1.1509245
        },
        'phone': '0115 958 1339',
        'title': 'Prickly Pear'
    },
    {
        'delivers': true,
        'facebook': 'https://www.facebook.com/Raw-fruit-veg-402854009849461/',
        'phone': '01949 831077',
        'title': 'Raw fruit & veg',
        'blurb': 'Fruit, Vegetables and health food store.',
        'location': {
            'lat': 52.9525722,
            'lng': -0.9529076
        },
        'google_place_id': 'ChIJG3GPuivPeUgR1UTO6uRh5FQ',
        'address': '14, Market Place, Bingham, Nottingham NG13 8AP, United Kingdom',
        'types': [
            'food',
            'vegan',
            'plant-based'
        ]
    },
    {
        'blurb': 'Nottingham based gin distillery offering postage and local delivery.',
        'delivers': true,
        'instagram': 'https://www.instagram.com/redsmithgin/',
        'phone': '+44 115 8712545',
        'postage': true,
        'title': 'Redsmith Distillery',
        'website': 'https://redsmithdistillery.com/',
        'location': {
            'lat': 52.9540345,
            'lng': -1.138127
        },
        'google_place_id': 'ChIJPaTbNhTDeUgR_qNGB3DBV6o',
        'address': 'Nottingham Creative Quarter, Unit 33, Nottingham NG1 1DW, United Kingdom',
        'types': [
            'alcohol'
        ]
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.98299,
            'lng': -1.1454221
        },
        'title': 'Rikshaw Urban Indian Kitchen',
        'website': 'https://rikshawonline.com/our_menu.php'
    },
    {
        'delivers': true,
        'instagram': 'https://www.instagram.com/shipstonesbeer/',
        'postage': true,
        'title': 'Shipstones Brewery',
        'types': [
            'alcohol',
            'beer'
        ],
        'website': 'http://www.shipstones.com/brewery-shop/',
        'location': {
            'lat': 52.9807402,
            'lng': -1.1804525
        },
        'google_place_id': 'ChIJedDK8-XBeUgRY-vQXLoVrpk',
        'address': 'Little Star Brewery, 33 Church St, Old Basford, Nottingham NG6 0GA, United Kingdom'
    },
    {
        'delivers': true,
        'collect': true,
        'location': {
            'lat': 52.9530417,
            'lng': -1.152423
        },
        'title': 'Shop Zero',
        'blurb': 'Zero waste shop offering delivery and collection.',
        'facebook': 'https://www.facebook.com/shopzeronottm/',
        'website': 'http://www.shopzero.co.uk/'
    },
    {
        'title': 'Small Food Bakery',
        'collect': true,
        'email': 'hello@smallfoodbakery.com',
        'blurb': 'Sourdough Bakery in Nottingham, .',
        'instagram': 'https://www.instagram.com/smallfoodbakery/',
        'website': 'http://www.smallfoodbakery.com/',
        'types': [
            'bakery',
            'food'
        ],
        'location': {
            'lat': 52.9558732,
            'lng': -1.1683601
        },
        'google_place_id': 'ChIJxbbUPj3BeUgR6_yvNI892uM',
        'address': '33 Seely Rd, Nottingham NG7 1NU, United Kingdom'
    },
    {
        'facebook': 'https://www.facebook.com/TheSplitScreenCoffee/',
        'instagram': 'https://www.instagram.com/thesplitscreencoffee/',
        'phone': '07812 555 896',
        'postage': true,
        'title': 'Split screen coffee',
        'website': 'https://www.thesplitscreencoffee.co.uk/shop',
        'types': [
            'coffee'
        ],
        'location': false
    },
    {
        'blurb': 'Spring Lane Farm Shop is a traditional, family run farm shop offering collection.',
        'collect': true,
        'facebook': 'https://www.facebook.com/springlanefarmshop',
        'phone': '01159267624',
        'title': 'Spring Lane Farm Shop',
        'twitter': 'https://twitter.com/SpringLaneFS',
        'website': 'https://www.springlanefarmshop.co.uk/',
        'location': {
            'lat': 52.998207,
            'lng': -1.1006877
        },
        'google_place_id': 'ChIJZ7pqdtXGeUgRAuiGX8SAzEY',
        'address': 'Spring Ln, Mapperley Plains, Nottingham NG3 5RQ, United Kingdom',
        'types': [
            'greengrocer',
            'food'
        ]
    },
    {
        'blurb': 'Trent bridge brewed coffee offering website delivery.',
        'facebook': 'https://www.facebook.com/StewartsCoffees/',
        'instagram': 'https://www.instagram.com/stewartscoffeesuk/',
        'postage': true,
        'title': 'Stewarts of Trent Bridge',
        'website': 'https://www.stewartscoffees.co.uk/',
        'types': [
            'coffee',
            'drink'
        ],
        'location': {
            'lat': 52.9539343,
            'lng': -1.1380839
        },
        'google_place_id': 'ChIJnwET5tfDeUgRD_NttzKfUS0',
        'address': '31 Avenue C, Nottingham NG1 1DW, United Kingdom'
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9539276,
            'lng': -1.1457933
        },
        'title': 'Studio Chocolate',
        'website': 'https://www.studio-chocolate.co.uk/'
    },
    {
        'blurb': 'Farm shop offering collection of meals.',
        'collect': true,
        'instagram': 'https://www.instagram.com/thaymar_ice_cream/',
        'phone': '01623 858887',
        'title': 'Thaymar Ice Cream',
        'website': 'https://www.thaymaricecream.co.uk',
        'location': {
            'lat': 53.265623,
            'lng': -0.964526
        },
        'google_place_id': 'ChIJb-W5fgOveUgRE5QgSIxAFtc',
        'address': 'Haughton Park Farm, W Drayton Ave, Bothamsall DN22 8DB, United Kingdom',
        'types': [
            'food',
            'dairy'
        ]
    },
    {
        'blurb': 'Homemade brownies including gluten free, dairy free and Vegan options.',
        'facebook': 'https://www.facebook.com/BeestonBrownieCo/',
        'instagram': 'https://www.instagram.com/thebeestonbrownie/',
        'postage': true,
        'title': 'The Beeston Brownie Co',
        'types': [
            'vegan',
            'plant-based'
        ],
        'website': 'https://thebeestonbrowniecompany.co.uk/',
        'location': false
    },
    {
        'blurb': 'Beeston bar delivering drinks and cocktails.',
        'delivers': true,
        'location': {
            'lat': 52.922514,
            'lng': -1.220818
        },
        'title': 'The Berliner',
        'types': [
            'alcohol',
            'drink'
        ],
        'website': 'http://www.theberlinerbar.com/'
    },
    {
        'delivers': true,
        'instagram': 'https://www.instagram.com/thebottletopnotts/',
        'postage': true,
        'title': 'The Bottle Top',
        'types': [
            'beer',
            'alcohol'
        ],
        'website': 'https://www.thebottletopnotts.co.uk/beer',
        'location': {
            'lat': 52.89217120000001,
            'lng': -1.149492
        },
        'google_place_id': 'ChIJiwuZISTDeUgR6uCuMoaTig0',
        'address': '2 High St, Ruddington, Nottingham NG11 6EH, United Kingdom'
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9527542,
            'lng': -1.1484425
        },
        'phone': '01159419114',
        'title': 'The Cheese Shop',
        'blurb': 'Artisan cheese butchers offering delivery.',
        'twitter': 'https://twitter.com/cheeseshopnottm'
    },
    {
        'delivers': true,
        'title': 'The Country Victualler',
        'website': 'https://thecountryvictualler.co.uk/',
        'location': {
            'lat': 52.8916651,
            'lng': -0.7841481
        },
        'google_place_id': 'ChIJdWHYpu-teUgR2qzX-i_6Yt8',
        'address': 'The Engine Yard, Grantham NG32 1PE, United Kingdom',
        'types': [
            'bakery',
            'food'
        ]
    },
    {
        'blurb': 'Family greengrocers offering delivery of fruit, veg and other items.',
        'delivers': true,
        'location': {
            'lat': 52.93055889999999,
            'lng': -1.1255994
        },
        'phone': '0115 784 1579',
        'title': 'The Fruit Basket',
        'twitter': 'https://twitter.com/NFBdirect',
        'website': 'http://www.thefruitbasketdirect.uk/',
        'types': [
            'vegan',
            'plant-based'
        ]
    },
    {
        'blurb': 'Fruit and vegtable shop in Mapperley.',
        'collect': true,
        'title': 'The Fruit Bowl',
        'website': 'https://www.facebook.com/The-Fruit-Bowl-Mapperley-1597571230463340/',
        'location': {
            'lat': 52.984665,
            'lng': -1.12069
        },
        'google_place_id': 'ChIJ9ZE_jjzBeUgRyRx3OzHFw8I',
        'address': '936 Woodborough Rd, Mapperley, Nottingham NG3 5QS, United Kingdom',
        'types': [
            'greengrocer',
            'food'
        ]
    },
    {
        'blurb': 'Beeston tapas bar and restaurant offering takeout and delivery.',
        'collect': true,
        'delivers': true,
        'location': {
            'lat': 52.9232004,
            'lng': -1.2196913
        },
        'phone': '0115 922 8300',
        'title': 'The Frustrated Chef',
        'facebook': 'https://www.facebook.com/thefrustratedcheftfc/',
        'website': 'https://www.thefrustratedchef.co.uk/'
    },
    {
        'collect': true,
        'facebook': 'https://facebook.com/TheGedlingInn/',
        'location': {
            'lat': 52.9748514,
            'lng': -1.0807171
        },
        'phone': '0115 987 8686',
        'title': 'The Gedling Inn'
    },
    {
        'blurb': 'Local chef offering salads and other meals for delivery.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/theLittleBrickhouse/',
        'instagram': 'https://www.instagram.com/littlebrickhouse_cafe/',
        'location': {
            'lat': 52.9821083,
            'lng': -1.1452747
        },
        'title': 'The Little Brickhouse Cafe'
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9818003,
            'lng': -1.1462256
        },
        'title': 'The Pudding Pantry Sherwood',
        'website': 'http://www.thepuddingpantry.co.uk/'
    },
    {
        'title': 'The Quarantine Kitchen',
        'delivers': true,
        'blurb': 'Nottingham home delivery service offering fresh produce and home cooked meals.',
        'instagram': 'https://www.instagram.com/thequarantinekitchennotts/',
        'email': 'ordersqknotts@gmail.com',
        'location': false
    },
    {
        'blurb': 'The Real Milk Company sells fresh, pasteurised milk, free range eggs, ice cream, bread & cakes straight from the farm.',
        'collect': true,
        'facebook': 'https://www.facebook.com/realmilkcompany/',
        'title': 'The Real Milk Company',
        'website': 'http://www.therealmilkcompany.com',
        'location': {
            'lat': 53.072025,
            'lng': -1.011519
        },
        'google_place_id': 'ChIJO9KIpiW4eUgR-al4y7O6woo',
        'address': 'Halam, Newark NG22 8AU, United Kingdom',
        'types': [
            'food',
            'dairy'
        ]
    },
    {
        'blurb': 'Local meal prep and dining experience foodies that are offering freezable bulk cooking.',
        'delivery': true,
        'facebook': 'https://www.facebook.com/thesensorykitchen/',
        'instagram': 'https://www.instagram.com/thesensorykitchen/',
        'location': {
            'lat': 52.949234,
            'lng': -1.1827506
        },
        'phone': '07771 610908',
        'postage': true,
        'title': 'The Sensory kitchen'
    },
    {
        'blurb': 'Nottingham pour it yourself bar, now taking orders online via their website.',
        'delivers': 'true',
        'facebook': 'https://www.facebook.com/TheTapHouseNotts/',
        'title': 'The Tap House Notts',
        'website': 'http://thetaphousenotts.co.uk/online-shop/',
        'location': {
            'lat': 52.9519394,
            'lng': -1.1466958
        },
        'google_place_id': 'ChIJYQl697LDeUgRtGDEQG9UZ8w',
        'address': '10 Byard Ln, Nottingham NG1 2GJ, United Kingdom',
        'types': [
            'alcohol',
            'beer'
        ]
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9819454,
            'lng': -1.145667
        },
        'title': 'The V Spot',
        'website': 'https://v-spot.co.uk/'
    },
    {
        'title': 'The Wine Room',
        'blurb': 'The Wine Room Mapperley is a Nottingham wine bar based in Mapperley now offering delivery.',
        'website': 'https://thewineroommapperley.com/',
        'phone': '0115 9691336',
        'instagram': 'https://www.instagram.com/the_wine_room_mapperley/',
        'twitter': 'https://twitter.com/The_Wine_Room',
        'facebook': 'https://www.facebook.com/TheWineRoomMapperley/',
        'email': 'thewineroommapperley@gmail.com',
        'types': [
            'alcohol'
        ],
        'delivers': true,
        'location': {
            'lat': 52.9851047,
            'lng': -1.1198525
        },
        'google_place_id': 'ChIJm4A7VQHBeUgRAx_8FbbdHSg',
        'address': '962 Woodborough Rd, Mapperley, Nottingham NG3 5QS, United Kingdom'
    },
    {
        'facebook': 'https://www.facebook.com/thompsonbrothersgreengrocers/',
        'delivers': true,
        'title': 'Thompson Brothers',
        'website': 'https://www.thompson-brothers.co.uk/',
        'location': {
            'lat': 52.979693,
            'lng': -1.153354
        },
        'google_place_id': 'ChIJkWPF4KDBeUgRIbPyeXCPfXE',
        'address': '83B Haydn Rd, Sherwood, Nottingham NG5 2LA, United Kingdom',
        'types': [
            'greengrocer',
            'food'
        ]
    },
    {
        'blurb': 'Independent bakery in Nottingham.',
        'delivers': true,
        'instagram': 'https://www.instagram.com/toughmarysbakehouse/',
        'location': {
            'lat': 52.955442,
            'lng': -1.158548
        },
        'order': 'https://docs.google.com/forms/d/e/1FAIpQLScsGc7DRgzqxJN03ZzOB_oky4vMdOKP3kKcx2fWwj6YxXpwBg/viewform',
        'title': "Tough Mary's Bakehouse",
        'types': [
            'bakery'
        ],
        'website': 'http://www.toughmarysbakehouse.co.uk/'
    },
    {
        'collect': true,
        'facebook': 'https://www.facebook.com/trinity.farm.9',
        'title': 'Trinity farm',
        'types': [
            'cafe',
            'food'
        ],
        'website': 'http://www.trinityfarm.co.uk/',
        'location': {
            'lat': 52.986987,
            'lng': -1.283594
        },
        'google_place_id': 'ChIJ1fjtzJDreUgRHcFY_xfuK0A',
        'address': 'Awsworth Ln, Cossall, Awsworth, Nottingham NG16 2RZ, United Kingdom'
    },
    {
        'blurb': 'Ugly Bread Bakery is an independent cafe, deli and bakery now offering delivery.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/uglybreadbakery/',
        'instagram': 'https://www.instagram.com/uglybreadbakery/',
        'phone': '07951 886 944',
        'title': 'Ugly Bread Bakery',
        'twitter': 'https://twitter.com/UglyBreadBakery',
        'website': 'https://www.uglybreadbakery.co.uk/',
        'types': [
            'cafe',
            'bakery',
            'food'
        ],
        'location': {
            'lat': 52.953526,
            'lng': -1.1440006
        },
        'google_place_id': 'ChIJEQHZdYDBeUgR47e6zRnI6KU',
        'address': '34 Carlton St, Nottingham NG1 1NN, United Kingdom'
    },
    {
        'deliveroo': 'https://deliveroo.co.uk/menu/nottingham/nottingham-city-centre/viva-street-food',
        'delivers': true,
        'location': {
            'lat': 52.95366689999999,
            'lng': -1.1432996
        },
        'title': 'Viva Street Food'
    },
    {
        'blurb': 'Speciality wine shop delivering in Nottingham.',
        'delivers': true,
        'facebook': 'https://www.facebook.com/Weavers-Wines-120002801370966/',
        'phone': '0115 958 0922',
        'title': 'Weavers wine',
        'twitter': 'https://twitter.com/weaverswines',
        'website': 'https://www.weaverswines.com/',
        'types': [
            'alcohol',
            'wine'
        ],
        'location': {
            'lat': 52.9514923,
            'lng': -1.1489781
        },
        'google_place_id': 'ChIJlzeb1tTDeUgR6DjvH6-Mzzc',
        'address': 'Nottinghamshire County, 1 Castle Gate, Nottingham NG1 7AQ, United Kingdom'
    },
    {
        'blurb': 'Farm shop in Worksop supplying deli style food and beer.',
        'collect': true,
        'facebook': 'https://www.facebook.com/WelbeckCourtyard/',
        'phone': '01909 478 725',
        'title': 'Welbeck Farm Shop',
        'twitter': 'https://twitter.com/welbeckfarmshop',
        'types': [
            'greengrocer',
            'food'
        ],
        'website': 'https://www.welbeckfarmshop.co.uk/',
        'location': {
            'lat': 53.26174409999999,
            'lng': -1.1795311
        },
        'google_place_id': 'ChIJFVrMElqieUgRtQ7eOXs3W00',
        'address': 'Worksop S80 3LW, United Kingdom'
    },
    {
        'delivers': true,
        'location': {
            'lat': 52.9541221,
            'lng': -1.146712
        },
        'title': 'Yamas',
        'website': 'https://www.yamas.co.uk/takeaway'
    }
];
var paths = {
    '/about': {
        render: function(props) {
            return '\n  <div class="sidebyside">\n    <section>\n      <h1>\n        A place to connect people with their independent shops\n      </h1>\n      \n      <p>\n        Deli Direct is a site that connects food and drink lovers with local businesses. Launching first in Nottingham UK, we aim to track the availability of small providers impacted by the outbreak.\n      \n      <p>\n        We are focused on listing high quality deli, food, and drink suppliers in Nottingham. Find local craft beer, delicatessen, farm shops and bakeries that are available to deliver or take away.\n      \n      <p>\n        <b>If you are interested in adding your business to the site, please fill in the form on this page. We are accepting submissions of all business types and in all regions. Titles with an (*) are required fields.</b>\n      \n      <p>\n        If you have any additional questions, comments, or need to update a business listing, you can contact us at <a href="mailto:admin@deli.direct">admin@deli.direct</a>.\n      \n      <p>\n        Stay safe.\n    </section>\n    <aside>\n      <form id="collectForm">\n        <h2>Add your business to Deli Direct</h2>\n        <div>\n          <label for="businessName">Business name*</label>\n          <input name="title" id="businessName" required>\n        </div>\n        <div>\n          <label for="contactName">Contact name*</label>\n          <input name="contact" id="contactName" required>\n        </div>\n        <div>\n          <label for="contactName">Business description</label>\n          <textarea name="blurb" id="blurb">\n          </textarea>\n        </div>\n        <div>\n          <label for="address">Business Address*</label>\n          <textarea name="address" id="address" required>\n          </textarea>\n        </div>\n        <div>\n          <label for="phoneNumber">Business phone number</label>\n          <input type="tel" name="phone" id="phoneNumber">\n        </div>\n        <div>\n          <label for="website">Business website</label>\n          <input name="website" id="website">\n        </div>\n        <div>\n          <label for="instagram">Instagram</label>\n          <input type="url" name="instagram" id="instagram">\n        </div>\n        <div>\n          <label for="facebook">Facebook</label>\n          <input type="url" name="facebook" id="facebook">\n        </div>\n        <div>\n          <label for="twitter">Twitter</label>\n          <input type="url" name="twitter" id="twitter">\n        </div>\n        <div>\n          <label for="businessType">Business type</label>\n          <select name="type" id="businessType">\n            <option>Select a type</option>\n            <option>Brewery</option>\n            <option>Deli</option>\n            <option>Wholesalers</option>\n            <option>Bakery</option>\n            <option>Cafe</option>\n            <option>Pub</option>\n            <option>Other</option>\n          </select>\n        </div>\n        <div>\n          <label for="deliveroo">Deliveroo</label>\n          <input type="url" name="deliveroo" id="deliveroo">\n        </div>\n        <div>\n          <label for="justeat">Just-Eat</label>\n          <input type="url" name="justeat" id="justeat">\n        </div>\n        <div>\n          <button>\n            Submit\n          </button>\n        </div>\n      </form>\n      <div id="formSuccess" hidden>\n        <h3>Thank you!</h3>\n\n        <p>Thank you for submitting your business information to Deli Direct.\n        <p>If you are submitting a new region (outside of Nottingham)—hold tight! Once we have gathered enough businesses for a new region, we will add it to our listings section on the site.\n\n        <p>As we are a small team, we also appreciate your patience as we review each new submission. We will reach out if there are any issues.\n\n        <p>If you think you have made a mistake or need to make any changes, please contact us.\n      </div>\n    </aside>\n  </div>\n  ';
        },
        details: {
            'description': 'deli direct finds local companies offering supplies to those in need',
            'title': 'About us',
            'page': 'about'
        },
        init: function() {
            var collectForm = document.getElementById('collectForm');
            collectForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var submitPath = 'https://script.google.com/macros/s/AKfycbwihGbK7N_jR_VPfDOpp0nrQsxFCHdYn83yvGe0KXgd64QjSOB0/exec?';
                var fields = _toConsumableArray(collectForm.querySelectorAll('input,textarea'));
                var data = {
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var field = _step.value;
                        submitPath += '&'.concat(field.name, '=').concat(encodeURIComponent(field.value));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                submitPath.searchParams = data;
                var request = new Request(submitPath);
                fetch(request, {
                    method: 'GET',
                    credentials: 'omit',
                    mode: 'no-cors'
                });
                collectForm.setAttribute('hidden', '');
                formSuccess.removeAttribute('hidden');
            });
        }
    },
    '/': {
        render: function(props) {
            return '\n    <div class="center home sidebyside">\n      <section class="intro">\n        <h1>Discover &amp; Support Local Independents</h1>\n        <p>Deli Direct connects you to local Nottingham food and drink shops. With over 100 listings, find out how to connect with and support local businesses.</p>\n      <a class="button" href="/places">Find local places</a>\n      </section>\n      <aside>\n        <img src="/images/home-image.svg" alt="">\n      </aside>\n    </div>\n  ';
        },
        details: {
            'canonical': '/',
            'description': 'Deli Direct finds local companies offering supplies to those in need',
            'title': 'Find Nottingham food & drink independents',
            'page': 'index'
        }
    },
    '/map': {
        render: function(props) {
            return '\n  <div id="map"></div>\n  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>\n  ';
        },
        details: {
            'title': 'Map listings',
            'page': 'map'
        },
        init: function() {
            showFilter();
            window.addEventListener('load', function() {
                var customIcon = L.icon({
                    iconUrl: 'icons/marker.svg',
                    iconSize: [
                        24,
                        24
                    ],
                    iconAnchor: [
                        16,
                        24
                    ],
                    popupAnchor: [
                        -4,
                        -23
                    ]
                });
                var placePointers = L.layerGroup();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = places[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var place = _step.value;
                        if (place.location) {
                            var popupContent = placeCard(place, false);
                            L.marker([
                                place.location.lat,
                                place.location.lng
                            ], {
                                icon: customIcon
                            }).bindPopup(popupContent).addTo(placePointers);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var mbAttr = 'Map data &copy;\n    <a rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,\n    <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,\n    Imagery © <a rel="nofollow" href="https://www.mapbox.com/">Mapbox</a>\n    ';
                var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
                var grayscale = L.tileLayer(mbUrl, {
                    id: 'mapbox/light-v9',
                    tileSize: 512,
                    zoomOffset: -1,
                    attribution: mbAttr
                });
                var map = L.map('map', {
                    center: nottingham,
                    zoom: 16,
                    layers: [
                        grayscale,
                        placePointers
                    ]
                });
            });
        }
    },
    '/places': {
        render: function(props) {
            return '\n    <div id="list"></div>\n  ';
        },
        details: {
            'description': 'Listing local independent businesses in Nottingham available or collection or delivery.',
            'title': 'Listing Nottingham food & drink independents',
            'page': 'places'
        },
        init: function() {
            var renderPlaces = function renderPlaces() {
                listElement.innerHTML = '';
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = places[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var place = _step.value;
                        var delivers = place.delivers || place.postage;
                        var collect = place.collect;
                        var plantBased = place.types && (place.types.includes('vegan') || place.types.includes('plant-based'));
                        var hasFilter = deliversFilter.checked || collectFilter.checked || plantBasedFilter.checked;
                        if (hasFilter) {
                            if (deliversFilter.checked && !delivers) {
                                continue;
                            }
                            if (collectFilter.checked && !collect) {
                                continue;
                            }
                            if (plantBasedFilter.checked && !plantBased) {
                                continue;
                            }
                        }
                        var placeContent = placeCard(place, true);
                        var placeCardElement = document.createElement('div');
                        placeCardElement.className = 'card';
                        placeCardElement.innerHTML = placeContent;
                        listElement.appendChild(placeCardElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            };
            showFilter();
            var listElement = document.getElementById('list');
            var listFilterElement = getListFilterElement();
            listFilterElement.removeAttribute('hidden');
            listFilterElement.addEventListener('change', function() {
                renderPlaces();
            });
            renderPlaces();
        }
    }
};
var nottingham = [
    52.95448349999999,
    -1.1549223
];
function createLink(text, link, className) {
    return '<a href="'.concat(link, '" class="').concat(className, '" rel="noopener noreferrer nofollow" target="_blank">').concat(text, '</a>');
}
function placeCard(place, showMap) {
    var website = '';
    var blurb = '';
    var instagram = '';
    if (place.instagram) {
        instagram = createLink('Instagram', place.instagram, 'instagram');
    }
    var facebook = '';
    if (place.facebook) {
        facebook = createLink('Facebook', place.facebook, 'facebook');
    }
    var twitter = '';
    if (place.twitter) {
        twitter = createLink('Twitter', place.twitter, 'twitter');
    }
    var phone = '';
    if (place.phone) {
        phone = createLink(place.phone, 'tel:'.concat(place.phone), 'phone');
    }
    if (place.blurb) {
        blurb = '<p class="blurb">'.concat(place.blurb, '</p>');
    }
    if (place.website) {
        website = createLink('Visit Website', place.website, 'website');
    }
    var map = '';
    if (showMap && place.location) {
        var maplink = 'https://www.google.com/maps/search/?api=1&query='.concat(place.location.lat, ',').concat(place.location.lng);
        map = createLink('Open Map', maplink, 'map');
    }
    return '<div class="cardcontents">\n    <h2>'.concat(place.title, '</h2>\n    <dl>\n      <div><dt>Delivery:</dt><dd>').concat(place.delivers || place.postage ? 'Yes' : 'No', '</dd></div>\n      <div><dt>Collect:</dt><dd>').concat(place.collect ? 'Yes' : 'No', '</dd></div>\n    </dl>\n    ').concat(blurb, '\n    ').concat(website, '\n    ').concat(phone, '\n    ').concat(map, '\n    <div class="icons">\n      ').concat(facebook, ' ').concat(twitter, ' ').concat(instagram, '\n    </div>\n  </div>');
}
function init() {
    var currentPath = document.location.pathname;
    if (currentPath in paths) {
        var page = paths[currentPath];
        if ('init' in page) {
            page.init();
        }
    }
}
window.onload = function() {
    changePreloadStyles();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
};
function changePreloadStyles() {
    var metas = _toConsumableArray(document.getElementsByTagName('link'));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = metas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var meta = _step.value;
            if (meta.rel == 'preload' && meta.as == 'style') {
                meta.rel = 'stylesheet';
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function showFilter() {
    var filterElement = document.getElementById('filter');
    filterElement.removeAttribute('hidden');
}
function getListFilterElement() {
    return document.getElementById('listFilter');
}
function getMapElement() {
    return document.getElementById('map');
}
init();
// Google analytics crap
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function() {
    dataLayer.push(arguments);
};
gtag('js', new Date());
gtag('config', 'UA-161955128-1');
