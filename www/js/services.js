angular.module('starter.services', ['ionic', 'ngStorage'])

.factory ('Designs', function ($localStorage) {

  $localStorage = $localStorage.$default({
    designs: []
  });

  var all = function () {
    return $localStorage.designs;
  };

  var add = function (design) {    
    $localStorage.designs.push(design);
  }

  var edit = function (design) {
    for (var i = 0; i < $localStorage.designs.length; i++) {
      if ($localStorage.designs[i].id === parseInt(design.id)) {
        $localStorage.designs[i] = design;
        break;
      }
    }
  }

  var remove = function (design) {
    $localStorage.designs.splice($localStorage.designs.indexOf(design), 1);
  }

  var get = function(designId) {
    for (var i = 0; i < $localStorage.designs.length; i++) {
      if ($localStorage.designs[i].id === parseInt(designId)) {
        return $localStorage.designs[i];
      }
    }
    return null;
  }

  return {
      all: all,
      add: add,
      get: get,
      edit: edit,
      remove: remove
  };
})

.factory ('Drivers', function ($localStorage) {
  //new default driver db
  $localStorage = $localStorage.$default({
    drivers: [{"brand":"Faital","model":"W8N8-200","fs":"74","re":"5.1","qms":"5.3","qes":".69","sd":"177","size":"8","vas":"8.9","xmax":"8.48","le":".6","rms":"200","recSealedVb":0,"recSealedFb":0,"recPortedVb":34.93,"recPortedF3":40.55,"recPortedFb":48.43,"ebp":107.24637681159422,"qts":0.6105175292153588,"vd":150.096,"n0":0.00503863743536232,"spl":89.02313109003417,"k1":0.28613893997511924,"k2":106.56576963941404,"par":182735500112.8927,"per":36266848420252.03,"peakSPL":112.03343104667398,"id":1493071145999,"brandModel":"Faital : W8N8-200","dd3":1.09},{"brand":"Eminence","model":"3012LF-4","fs":"36","re":"3.89","qms":"8.38","qes":".32","sd":"545.4","size":"12","vas":"107.32","xmax":"9.1","le":".66","rms":"550","recSealedVb":0,"recSealedFb":0,"recPortedVb":44.16,"recPortedF3":53.21,"recPortedFb":47.41,"ebp":112.5,"qts":0.3082298850574713,"vd":496.31399999999996,"n0":0.015083954784,"spl":93.78515221884687,"k1":0.17524066909202843,"k2":104.43634902703018,"par":5923894865617.4,"per":392728230125765.94,"peakSPL":121.18877911378931,"id":1493151797633,"brandModel":"Eminence : 3012LF-4","dd3":4.05},{"brand":"Dayton","model":"380-8","fs":"28.3","re":"5..8","qms":"9.99","qes":".23","sd":"845","size":"15","vas":"250.5","xmax":"5","le":"3.38","rms":"500","recSealedVb":0,"recSealedFb":0,"recPortedVb":36.38,"recPortedF3":66.14,"recPortedFb":51.47,"ebp":123.04347826086956,"qts":0.22482387475538163,"vd":422.5,"n0":0.023796672552756526,"spl":95.76516234661374,"k1":0.04849656921330537,"k2":98.85711016449042,"par":10247818939465.855,"per":430640835047284.06,"peakSPL":122.75486238997392,"id":1493152970192,"brandModel":"Dayton : 380-8","dd3":8.21},{"brand":"MCM","model":"55-290","fs":"65","re":"7.2","qms":"2.5","qes":"3.03","size":"8","vas":"46.4","xmax":"3.5","le":"1.08","sd":"220","rms":"100","recSealedVb":0,"recSealedFb":0,"recPortedVb":null,"recPortedF3":null,"recPortedFb":null,"ebp":21.452145214521455,"qts":1.3698010849909583,"vd":77,"n0":0.004054081320132014,"spl":88.07892455883973,"k1":0.04482772764743084,"k2":98.51546724696844,"par":null,"per":null,"peakSPL":108.07892455883973,"brandModel":"MCM : 55-290","id":1496255060533},{"brand":"Eminence","model":"Kappalite 3015LF-4","fs":"47","re":"3.85","qms":"10.19","qes":".49","sd":"881.2","size":"15","vas":"118.64","xmax":"10.65","le":".65","rms":"550","recSealedVb":0,"recSealedFb":0,"recPortedVb":193.02,"recPortedF3":37.94,"recPortedFb":40.42,"ebp":95.91836734693878,"qts":0.4675187265917603,"vd":938.4780000000001,"n0":0.024232915375673472,"spl":95.84405665701794,"k1":1.8203356395433505,"k2":114.60151472030302,"par":5474680177600.418,"per":225919172032278.34,"peakSPL":123.24768355196038,"brandModel":"Eminence : Kappalite 3015LF-4","id":1496255221279,"dd3":8.21}]
  });

  var all = function () {
    return $localStorage.drivers;
  };

  var add = function (driver) {
    driver.id = (new Date()).getTime();
    $localStorage.drivers.push(driver);
  }

  var edit = function (driver) {
    for (var i = 0; i < $localStorage.drivers.length; i++) {
      if ($localStorage.drivers[i].id === parseInt(driver.id)) {
        $localStorage.drivers[i] = driver
        break;
      }
    }
  }

  var remove = function (driver) {
    $localStorage.drivers.splice($localStorage.drivers.indexOf(driver), 1);
  }

  var get = function(driverId) {
    for (var i = 0; i < $localStorage.drivers.length; i++) {
      if ($localStorage.drivers[i].id === parseInt(driverId)) {
        return $localStorage.drivers[i];
      }
    }
    return null;
  }

  return {
      all: all,
      add: add,
      get: get,
      edit: edit,
      remove: remove
  };
})

.factory('Types', function() {
  var types = [{
    id: 1,
    name: 'Sealed'
  }, {
    id: 2,
    name: 'Ported'
  }];

  return {
    all: function() {
      return types;
    }
  };
})

.factory ('Datum', function ($localStorage) {

  $localStorage = $localStorage.$default({
    datum: []
  });

  var all = function () {
    return $localStorage.datum;
  };

  var add = function (data) {    
    $localStorage.datum.push(data);
  }  

  var clear = function () {
    $localStorage.datum = [];
  }

  return {
      all: all,
      add: add,
      clear: clear
  };
})

.factory ('Series', function ($localStorage) {

  $localStorage = $localStorage.$default({
    series: ["series1","series2"]
  });

  var all = function () {
    return $localStorage.series;
  };

  var add = function (seri) {    
    $localStorage.series.push(seri);
  }  

  var clear = function () {
    $localStorage.series = [];
  }

  return {
      all: all,
      add: add,
      clear: clear
  };
})