const locations = [
	{
		image: require("./location_images/1.png"),
		location: [1354, 1878],
		key: 1
	},
	{
		image: require("./location_images/2.png"),
		location: [4544, 4307],
		key: 2
	},
	{
		image: require("./location_images/3.png"),
		location: [5605, 2587],
		key: 3
	},
	{
		image: require("./location_images/4.png"),
		location: [6644, 2876],
		key: 4
	},
	{
		image: require("./location_images/5.png"),
		location: [6691, 2836],
		key: 5
	},
	{
		image: require("./location_images/6.png"),
		location: [6253, 2684],
		key: 6
	},
	{
		image: require("./location_images/7.png"),
		location: [6310, 2754],
		key: 7
	},
	{
		image: require("./location_images/8.png"),
		location: [6171, 2808],
		key: 8
	},
	{
		image: require("./location_images/9.png"),
		location: [5838, 2501],
		key: 9
	},
	{
		image: require("./location_images/10.png"),
		location: [5726, 2439],
		key: 10
	},
	{
		image: require("./location_images/11.png"),
		location: [5463, 2217],
		key: 11
	},
	{
		image: require("./location_images/12.png"),
		location: [5533, 2439],
		key: 12
	},
	{
		image: require("./location_images/13.png"),
		location: [5502, 2592],
		key: 13
	},
	{
		image: require("./location_images/14.png"),
		location: [5447, 2727],
		key: 14
	},
	{
		image: require("./location_images/15.png"),
		location: [5691, 2116],
		key: 15
	},
	{
		image: require("./location_images/16.png"),
		location: [5473, 1927],
		key: 16
	},
	{
		image: require("./location_images/17.png"),
		location: [5514, 1773],
		key: 17
	},
	{
		image: require("./location_images/18.png"),
		location: [5721, 1798],
		key: 18
	},
	{
		image: require("./location_images/19.png"),
		location: [6300, 1794],
		key: 19
	},
	{
		image: require("./location_images/20.png"),
		location: [6335, 1925],
		key: 20
	},
	{
		image: require("./location_images/21.png"),
		location: [6456, 2027],
		key: 21
	},
	{
		image: require("./location_images/22.png"),
		location: [6438, 2225],
		key: 22
	},
	{
		image: require("./location_images/23.png"),
		location: [6415, 2324],
		key: 23
	},
	{
		image: require("./location_images/24.png"),
		location: [6653, 2588],
		key: 24
	},
	{
		image: require("./location_images/25.png"),
		location: [6605, 2713],
		key: 25
	},
	{
		image: require("./location_images/26.png"),
		location: [6476, 2746],
		key: 26
	},
	{
		image: require("./location_images/27.png"),
		location: [7957, 3780],
		key: 27
	},
	{
		image: require("./location_images/28.png"),
		location: [7952, 3693],
		key: 28
	},
	{
		image: require("./location_images/29.png"),
		location: [8052, 3733],
		key: 29
	},
	{
		image: require("./location_images/30.png"),
		location: [7930, 3837],
		key: 30
	},
	{
		image: require("./location_images/31.png"),
		location: [1337, 1293],
		key: 31
	},
	{
		image: require("./location_images/32.png"),
		location: [1455, 1241],
		key: 32
	},
	{
		image: require("./location_images/33.png"),
		location: [1423, 1014],
		key: 33
	},
	{
		image: require("./location_images/34.png"),
		location: [1360, 853],
		key: 34
	},
	{
		image: require("./location_images/35.png"),
		location: [1386, 640],
		key: 35
	},
	{
		image: require("./location_images/36.png"),
		location: [3493, 2749],
		key: 36
	},
	{
		image: require("./location_images/37.png"),
		location: [3425, 2889],
		key: 37
	},
	{
		image: require("./location_images/38.png"),
		location: [3433, 2970],
		key: 38
	},
	{
		image: require("./location_images/39.png"),
		location: [4149, 2071],
		key: 39
	},
	{
		image: require("./location_images/40.png"),
		location: [4279, 1980],
		key: 40
	},
	{
		image: require("./location_images/41.png"),
		location: [4300, 1858],
		key: 41
	},
	{
		image: require("./location_images/42.png"),
		location: [4306, 1928],
		key: 42
	},
	{
		image: require("./location_images/43.png"),
		location: [4513, 2342],
		key: 43
	},
	{
		image: require("./location_images/44.png"),
		location: [4500, 1988],
		key: 44
	},
	{
		image: require("./location_images/45.png"),
		location: [4552, 2025],
		key: 45
	},
	{
		image: require("./location_images/46.png"),
		location: [4602, 2106],
		key: 46
	},
	{
		image: require("./location_images/47.png"),
		location: [4677, 2119],
		key: 47
	},
	{
		image: require("./location_images/48.png"),
		location: [4859, 2108],
		key: 48
	},
	{
		image: require("./location_images/49.png"),
		location: [4845, 1982],
		key: 49
	},
	{
		image: require("./location_images/50.png"),
		location: [4776, 1905],
		key: 50
	},
	{
		image: require("./location_images/51.png"),
		location: [4698, 1928],
		key: 51
	},
	{
		image: require("./location_images/52.png"),
		location: [5265, 1667],
		key: 52
	},
	{
		image: require("./location_images/53.png"),
		location: [5123, 1653],
		key: 53
	},
	{
		image: require("./location_images/54.png"),
		location: [5358, 1646],
		key: 54
	},
	{
		image: require("./location_images/55.png"),
		location: [5250, 2002],
		key: 55
	},
	{
		image: require("./location_images/56.png"),
		location: [5308, 2308],
		key: 56
	},
	{
		image: require("./location_images/57.png"),
		location: [5337, 2343],
		key: 57
	},
	{
		image: require("./location_images/58.png"),
		location: [3870, 2962],
		key: 58
	},
	{
		image: require("./location_images/59.png"),
		location: [4218, 765],
		key: 59
	},
	{
		image: require("./location_images/60.png"),
		location: [4422, 630],
		key: 60
	},
	{
		image: require("./location_images/61.png"),
		location: [4422, 630],
		key: 61
	},
	{
		image: require("./location_images/62.png"),
		location: [7174, 2359],
		key: 62
	},
	{
		image: require("./location_images/63.png"),
		location: [7265, 2517],
		key: 63
	},
	{
		image: require("./location_images/64.png"),
		location: [7201, 2542],
		key: 64
	},
	{
		image: require("./location_images/65.png"),
		location: [7065, 2779],
		key: 65
	},
	{
		image: require("./location_images/66.png"),
		location: [7433, 2675],
		key: 66
	},
	{
		image: require("./location_images/67.png"),
		location: [7517, 2623],
		key: 67
	},
	{
		image: require("./location_images/68.png"),
		location: [4074, 2446],
		key: 68
	},
	{
		image: require("./location_images/69.png"),
		location: [4091, 2363],
		key: 69
	},
	{
		image: require("./location_images/70.png"),
		location: [5851, 2237],
		key: 70
	},
	{
		image: require("./location_images/71.png"),
		location: [4406, 1321],
		key: 71
	},
	{
		image: require("./location_images/72.png"),
		location: [6616, 3353],
		key: 72
	},
	{
		image: require("./location_images/73.png"),
		location: [6420, 3611],
		key: 73
	},
	{
		image: require("./location_images/74.png"),
		location: [6487, 4040],
		key: 74
	},
	{
		image: require("./location_images/75.png"),
		location: [4385, 3064],
		key: 75
	},
	{
		image: require("./location_images/76.png"),
		location: [4531, 2792],
		key: 76
	},
	{
		image: require("./location_images/77.png"),
		location: [4800, 2854],
		key: 77
	},
	{
		image: require("./location_images/78.png"),
		location: [7178, 1674],
		key: 78
	},
	{
		image: require("./location_images/79.png"),
		location: [2824, 641],
		key: 79
	},
	{
		image: require("./location_images/80.png"),
		location: [5019, 3063],
		key: 80
	},
	{
		image: require("./location_images/81.png"),
		location: [7056, 1841],
		key: 81
	},
	{
		image: require("./location_images/82.png"),
		location: [7084, 1648],
		key: 82
	},
	{
		image: require("./location_images/83.png"),
		location: [6655, 2307],
		key: 83
	},
	{
		image: require("./location_images/84.png"),
		location: [5460, 1222],
		key: 84
	},
	{
		image: require("./location_images/85.png"),
		location: [5612, 1413],
		key: 85
	},
	{
		image: require("./location_images/86.png"),
		location: [6104, 1130],
		key: 86
	},
	{
		image: require("./location_images/87.png"),
		location: [6218, 906],
		key: 87
	}
];

export default locations;
