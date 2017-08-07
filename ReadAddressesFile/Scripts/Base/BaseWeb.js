function BloquearPantalla() {
    $.blockUI(
        {
            css: {
                border: '3px solid #2994E8',
                backgroundColor: '#62BBE8',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .8,
                color: '#ffffff',
                width: '20%',
                height: '8.8%',
                left: '40%'
            },
            overlayCSS: { 
                backgroundColor: '#edf1f6',
                opacity: 0.9
            },
            baseZ: 6000
        }
    );
}

function abrirPaginaNueva(pagina) {
    window.open(pagina, 'window', 'resizable=yes');
}


function MostrarResultado(mensaje) {
    alert(mensaje);
}

function DesbloquearPantalla() {
    $.unblockUI();
}

// IPR 11651 - EIR - Funcion general para la transformacion del RowObject a JSON
function GetRowObject(jqgrid, datarow) {
    var vjqgrid = document.getElementById(jqgrid);
    var array = jQuery(vjqgrid).jqGrid('getGridParam', 'colModel');    
    var jsonRowObject = {};
    var index = 0;
    var nombres = new Array();
  
    $.each(array, function () {
        //se esta evaluando que dentro de la estructura de la grilla no se encuentre la columna CB que hace referencia a un checkbox.
        if (this.name != 'cb') {
            var indice = $.inArray(this.name, nombres);

            if (indice > -1) nombres.push(this.name + '' + index);
            else nombres.push(this.name);

            jsonRowObject[nombres[index]] = datarow[index];
            index++;
        } else {

        }
    });
    return jsonRowObject;
}
