$(document).ready(begin);

function begin() {
  var CH = 'Comida china';
  var MX = 'Comida mexicana';
  var PE = 'Comida peruana';
  var ITA = 'Comida italiana';

  //  Elementos del DOM
  var $inputSearch = $('#input-search');
  var $btnSearch = $('#input-search');
  var $containerFood = $('#container-food');
  var $containerInfo = $('#container-info');
  var $nameRestaurant = $('#name-restaurant');
  var $typeFood = $('#type-food');

  // mostrar lista de todos los restaurantes
  function listAll() {
    for (var i = 0; i < data.length; i++) {
      if ($inputSearch.val('')) {
        $containerFood.append(
          '<ul class="gallery">' +
            '<li id="modalFood' + i + '" data-name=' + data[i].photo + 'class="li-img" data-toggle="modal" data-target="#modal"><img class="food-view" src=' + data[i].photo + ' alt="country"></li>' +
          '</ul>'
        );
        $('#exampleModalLabel').addClass('hidden');
        $('#maps').addClass('hidden');
        $nameRestaurant.text('Lista de restaurantes cercanos');
        $containerInfo.append(
          '<ul class="list-food gallery">' +
            '<li id="modalFood' + i + '" data-name=' + data[i].photo + 'class="li-img" data-toggle="modal" data-target="#modal">' + data[i].name + '</li>' +
          '</ul>'
        );
      }
    }
  }

  //  filtrando input
  $inputSearch.on('input', function() {
    $containerFood.empty();
    $containerInfo.empty();
    var $text = $(this).val();
    console.log($(this).val());
    for (var i = 0; i < data.length; i++) {
      var $nameFood = data[i].name;
      if ($text === $nameFood) {
        $containerFood.append(
          '<ul class="gallery">' +
            '<li id="modalFood' + i + '" data-name=' + data[i].photo + 'class="li-img" data-toggle="modal" data-target="#modal"><img class="food-view" src=' + data[i].photo + ' alt="country"></li>' +
          '</ul>'
        );
        $('#exampleModalLabel').removeClass('hidden');
        $('#maps').removeClass('hidden');
        $nameRestaurant.text(data[i].name);
        $typeFood.text(data[i].type);
        $containerInfo.append(
          '<p class="text-modal">Dirección:  ' + data[i].dirección + '</p>' +
          '<p class="text-modal">' + delivery(i) + '</p>' +
          '<p class="text-modal">Horario:  ' + data[i].open + '</p>'
        );
      } else if ($text === '') {
        listAll();
      }
    }
  });
  //  función para delivery
  function delivery(i) {
    if (data[i].delivery === true) {
      return 'Servicio de delivery';
    } else {
      return 'No hay servicio de delivery';
    }
  };
  listAll();
}
