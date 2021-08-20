app.controller('BirthdayController', function($scope) {
  var vm = $scope;

  const codigosAcesso = new Map();
  codigosAcesso.set('HENRIZA-22',  "Henrique e Maria Luiza");
  codigosAcesso.set('FEINE-34',    "Felipe e Thaine");
  codigosAcesso.set('HENARA-51',   "Henrique e Nara");
  codigosAcesso.set('HENALIA-39',  "Natalia e Henrique");
  codigosAcesso.set('LUARIA-27',   "Maria Eduarda e Lucas");
  codigosAcesso.set('LUROLINA-68', "Carolina e Lucas");
  codigosAcesso.set('GUSUNA-52',   "Bruna e Gustavo");
  codigosAcesso.set('DATALIA-77',  "David e Natalia");
  codigosAcesso.set('MATHEUS-96',  "Matheus");
  codigosAcesso.set('JULIA-10',    "Julia");
  codigosAcesso.set('PEDRO-09',    "Pedro");
  codigosAcesso.set('DADNA-14',    "Pai e Mãe");
  codigosAcesso.set('MARWILL-40',  "Will e Mari");

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
            setAccessZone(2);

            collapseAllCollapses();
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

        swal("Não se esqueça!", "Não se esqueça de me avisar no Whatsapp!", "info");
      })
    }
  };

  collapseAllCollapses = function(){
    var listTargets = ['collapseData','collapseLocal','collapseRoupa','collapseBebida','collapseDormitorio','collapsePresente','collapseConfirmacao'];
    var delay = 10000;

    listTargets.forEach(function(target){
      setInterval(function(){
        $("#"+target).collapse();
        $("#btn_"+target).addClass('btn-success');
        $("#btn_"+target).removeClass('btn-warning');
      }, delay);
      delay += 1000;
    });
  }

});
