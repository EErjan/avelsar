
setTimeout(function(){
  $('.preloader').fadeOut();
}, 1000);

$(document).on("click", ".js-toggle", function(e) {
    e.preventDefault();
    $("body").toggleClass("has-menu");
});


// Accordion start

try {
    $(function(){
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables
            var link = this.el.find('.link');
            // Eventos
            link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            // Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
            $next.slideToggle();
            // Agregar clase open a elemento padre del elemento con clase link = li
            $this.parent().toggleClass('open');

            //Parametro inicial que permite ver 1 solo submenu abierto
            if(!e.data.multiple){
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            }

        }
        // Elegir submenus multiples (true) submenus uno a la vez (false)
        var accordion = new Accordion($('#accordion'), false);

    });

    $(function(){
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables
      var link = this.el.find('.link');
      // Eventos
      link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      $this = $(this),
          $next = $this.next();

      // Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
      $next.slideToggle();
      // Agregar clase open a elemento padre del elemento con clase link = li
      $this.parent().toggleClass('open');

      //Parametro inicial que permite ver 1 solo submenu abierto
      if(!e.data.multiple){
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      }

    }
    // Elegir submenus multiples (true) submenus uno a la vez (false)
    var accordion = new Accordion($('#accordion2'), false);

  });
} catch (e) {

}

// Accordion end


$(".submenu__list-title").click(function(){
    $(".submenu__list-holder").toggleClass("hide");
});

// Musk
try {
    $('.phone-musk').inputmask("+\\9\\98(99) 999-99-99");
} catch (e) {

}

// Toggle password
try {
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
} catch (e) {

}



// Photo upload

try {
  openUploader = function() {
    document.getElementById('uploadImage').click();
  }

  uploadHandler = function() {
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();
    let preview = document.getElementById('uploadedImage');

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        localStorage.setItem('tempImg', reader.result.split(',')[1]);
      }
    }
  }

  removeImage = function() {
    let preview = document.getElementById('uploadedImage');
    preview.src = '';
  };

} catch (e) {

}
