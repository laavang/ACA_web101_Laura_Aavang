
//click on ring, saves value
//ring disappears
//click on column, ring appears

$(document).ready(function() {

    var selectedRing = null;
    var selectedColumn = null;

    
        $('.ring').click(function(event) {
            if (selectedRing == null) {
                selectedRing = $(this);
                console.log(selectedRing.attr('id') + ' ' + 'has been selected');
                $(selectedRing).detach();
                event.stopPropagation();
            }
            else {
            }
     });

        $('.column').click(function(event) {
            if (selectedRing != null) {
                selectedColumn = $(this);
                console.log(selectedColumn.attr('id') + ' ' + 'has been selected');
                $(selectedColumn).prepend(selectedRing);
                selectedRing = null;
                event.stopPropagation();
            }
            else {
            }
        });


});




