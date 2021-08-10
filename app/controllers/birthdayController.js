app.controller('BirthdayController', function($scope) {
  var vm = $scope;

  const codigosAcesso = new Map();
  codigosAcesso.set('H', "Henrique e Maria Luiza");
  codigosAcesso.set('FEINE-BLS', "Felipe e Thaine");
  codigosAcesso.set('HENARA-CURITIBA', "Henrique e Nara");

  vm.codigoAcesso = "";
  vm.accessZone = 0;
  vm.convidados = "";

  swal("Sound on!", "Aumente o som!", "info", {buttons: false, timer: 4000});

  setAccessZone = function(zone){
    console.log(zone);
    vm.accessZone = zone;
  };

  setVideoNumber = function(number){
    vm.videoNumber = number;
  }

  refreshGuests = function(){
    vm.convidados = codigosAcesso.get(vm.codigoAcesso.toUpperCase())
  };

  audioOhanaMeansFamily = {
    start: function(){
      $('#ohanaMeansFamily').trigger("play");
      ohanaInterval = setInterval(function(){$('#ohanaMeansFamily').trigger("play")},13000);
    },

    pause: function(){
      $('#ohanaMeansFamily').trigger("pause");
      clearInterval(ohanaInterval);
    }
  };

  vm.verificaAcesso = function() {
    refreshGuests();

    if(vm.convidados){
      audioOhanaMeansFamily.start();

      swal({
        title: 'Ohana!',
        text: 'Você foi convidado para o super aniversário da Luiza!',
        icon: "success",
        button: "Ohana!"
      })
      .then((value) => {
        audioOhanaMeansFamily.pause();

        $scope.$apply(function(){
          setAccessZone(1);
          setVideoNumber(0);
        })

        setTimeout(function(){$('#introStitch').trigger("play")}, 1000); 

        document.getElementById('introStitch').addEventListener('ended', introStitchHandler, false);
        function introStitchHandler(e) {
          document.getElementById('introStitch').removeEventListener('ended', introStitchHandler, false);

          $scope.$apply(function(){
            console.log("teste");
            setAccessZone(2);
          })
        }
      })

    } else {
      setAccessZone(0);
    }
  };

  vm.togglePresence = function(videoNumber){
    setAccessZone(1);
    setVideoNumber(videoNumber);

    switch(videoNumber){
      case 1:
        id = 'sadStitch';
        break;
      case 2:
        id = 'happyStitch';
        break;
    }

    setTimeout(function(){$('#'+id).trigger("play")}, 1000); 

    document.getElementById(id).addEventListener('ended', dynamicStitchHandler, false);
    function dynamicStitchHandler(e) {
      document.getElementById(id).removeEventListener('ended', dynamicStitchHandler, false);

      $scope.$apply(function(){
        setAccessZone(2);
      })
    }
  };

});