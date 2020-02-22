(function ( $ ) {


    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( jQuery ));

//estilos-flexbox

$(document).ready(function () {
    
    $('#direction').on('change', function() {
        alert( this.value );
    });
});