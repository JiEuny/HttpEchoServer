var express = require('express');
var router = express.Router();

let server = require('http');
let svr, port = 12345;

svr = server.createServer((req, res) => {
	res.writeHead(200, { 'X-M2M-RSC': 2000 });

	req.on('data', (chunk) => {
		console.log(chunk.toString() + '\n');
	}).on('end', () => {
		res.end(JSON.stringify(
			{
				"id": "urn:covid-19:case:seongnam:006",
				"type": "InfectionCase",
				"createdAt": "2020-03-10T20:10:00,000+09:00",
				"modifiedAt": "2020-03-10T20:10:00,000+09:00",
				"nickname": {
					"type": "Property",
					"value": "성남6"
				},
				"yearOfBrith": {
					"type": "Property",
					"value": 1970
				},
				"gender": {
					"type": "Property",
					"value": "male"
				},
				"address": {
					"type": "Property",
					"value": {
						"addressCountry": "KR",
						"addressRegion": "경기도",
						"addressLocality": "성남시"
					}
				},
				"diseaseCode": {
					"type": "Property",
					"value": "COVID-19"
				},
				"infectinStatus": {
					"type": "Property",
					"value": "확진격리"
				},
				"levelOfSymptom": {
					"type": "Property",
					"value": "중증"
				},
				"orderOfTransmission": {
					"type": "Property",
					"value": 3
				},
				"detentionPlaceName": {
					"type": "Property",
					"value": "분당서울대병원"
				},
				"detentionAddress": {
					"type": "Property",
					"value": {
						"addressCountry": "KR",
						"addressRegion": "경기도",
						"addressLocality": "성남시",
						"streetAddress": "구미로173번길 82"
					}
				},
				"detentionLocation": {
					"type": "GeoProperty",
					"value": {
						"type": "Point",
						"coordinates": [
							127.123164,
							37.351981
						]
					}
				},
				"travelRoutes": {
					"type": "Property",
					"value": [
						{
							"placeName": "회사",
							"address": {
								"type": "Property",
								"value": {
									"addressCountry": "KR",
									"addressRegion": "경기도",
									"addressLocality": "성남시",
									"streetAddress": "성남대로 1111"
								}
							},
							"location": {
								"type": "GeoProperty",
								"value": {
									"type": "Point",
									"coordinates": [
										127.123164,
										37.351981
									]
								}
							},
							"transport": "버스",
							"beginTime": "2020-02-15T10:00:00,000+09:00",
							"duration": 3600
						},
						{
							"placeName": "카페2020",
							"address": {
								"type": "Property",
								"value": {
									"addressCountry": "KR",
									"addressRegion": "경기도",
									"addressLocality": "성남시",
									"streetAddress": "성남대로 2222"
								}
							},
							"location": {
								"type": "GeoProperty",
								"value": {
									"type": "Point",
									"coordinates": [
										127.123154,
										37.351911
									]
								}
							},
							"transport": "도보",
							"beginTime": "2020-02-15T12:00:00,000+09:00",
							"duration": 3600
						}
					]
				},
				"spreader": [
					{
						"type": "Property",
						"value": {
							"caseId": "urn:covid-19:case:00031",
							"nickname": "대구003",
							"relationship": "종교",
							"description": "신천지"
						}
					}
				]
			}
		))
	});


});
svr.listen(port, 'localhost');
svr.close();

console.log('server is running at ', port);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
