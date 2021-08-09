app.controller('BirthdayController', function($scope) {
  var vm = $scope;

  const codigosAcesso = new Map();
  codigosAcesso.set('H', "Henrique e Maria Luiza");
  codigosAcesso.set('FEINE-BLS', "Felipe e Thaine");
  codigosAcesso.set('HENARA-CURITIBA', "Henrique e Nara");

  vm.codigoAcesso = "";
  vm.zonaAcesso = 0;
  vm.convidados = "";

  vm.setZonaAcesso = function(zona){
    console.log(zona);
    vm.zonaAcesso = zona;
  };

  vm.updateConvidados = function(){
    vm.convidados = codigosAcesso.get(vm.codigoAcesso.toUpperCase())
  };

  vm.verificaAcesso = function() {
    vm.updateConvidados();

    if(vm.convidados){
      swal({
        title: 'Uhuuuuuuuuuulll!',
        text: 'Você foi convidado para o super aniversário da Maria Luiza!',
        icon: "success",
        timer: 6000,
        buttons: false
      });
      vm.setZonaAcesso(1);
    } else {
      vm.setZonaAcesso(0);
    }
  };

});