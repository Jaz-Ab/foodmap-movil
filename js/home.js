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
  //  filtrando input
  $inputSearch.on('input', function() {
    var $text = $(this).val();
    if ($text === 'todo' || $text === 'de todo') {
      allFood();
    } else if ($text === 'comida china' || $text === 'china') {
      findFood(CH);
    } else if ($text === 'comida mexicana' || $text === 'mexicana') {
      findFood(MX);
    } else if ($text === 'comida peruana' || $text === 'peruana') {
      findFood(PE);
    } else if ($text === 'comida italiana' || $text === 'italiana') {
      findFood(ITA);
    }
  });
  //  funcion para agregar comida segun tipo
  function findFood(country) {
    $containerFood.empty();
    for (var i = 0; i <= data.length; i++) {
      var $typeFood = data[i].type;
      if ($typeFood === country) {
        $containerFood.append(
          '<ul class="gallery">' +
            '<li id="modalFood" data-name=' + data[i].photo + 'class="li-img" data-toggle="modal" data-target="#modal"><img class="food-view" src=' + data[i].photo + ' alt="country"></li>' +
          '</ul>'
        );
      } else {
        console.log('no existe');
      }
    };
  }
  //  funcion para agregar todos los restaurant
  function allFood() {
    $containerFood.empty();
    for (var i = 0; i <= data.length; i++) {
      var $typeFood = data[i].type;
      if ($typeFood) {
        $containerFood.append(
          '<ul class="gallery">' +
            '<li id="modalFood" class="li-img" data-toggle="modal" data-target="#modal"><img class="food-view" src=' + data[i].photo + ' alt="country"></li>' +
          '</ul>'
        );
      }
    };
  }
  allFood();
}
