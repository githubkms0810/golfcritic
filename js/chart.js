var myConfig = {
    "backgroundColor": '',
    "type": "radar",
    "plot": {
      "aspect": "area",
      "background-color": '#FBFCFE',
      "active-area": true
    },
    "plotarea": {
      "margin": 'dynamic'
    },
    "scale-v": {
      "values": "0:100:25",
      "labels": ["", "", "", "", ""],
      "ref-line": {
        "line-color": "none"
      },
      "guide": {
        "line-style": "solid",
        "line-color": '#D7D8D9'
      }
    },
    "scale-k": {
      "labels": ["가성비", "시설 설비", "식사", "전략성", "페어웨이 넓이", "그린의 난이도" , "전장의<br/>길이", "코스"],
      "aspect": "circle", //To set the chart shape to circular.
      "guide": {
        "line-style": "solid",
        "line-color": "#1E5D9E",
      },
      "item": {
        "padding": 5,
        "font-color": "#1E5D9E",
        "font-family": 'Montserrat'
      },
    },
    "series": [{
      "values": [59, 30, 65, 34, 40, 33, 31, 90],
      "background-color": "#00BAF2",
      "line-color": "#00BAF2"
    }]
  };

  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: '100%',
    width: '100%'
  });