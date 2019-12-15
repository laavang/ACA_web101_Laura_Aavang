
//click on ring, saves value
//ring disappears
//click on column, ring appears

$(document).ready(function() {

    var selectedRing = null;
    var selectedColumn = null;


        $('.ring').click(function() {
            selectedRing = $(this);
            console.log(selectedRing.attr('id') + ' ' + 'has been selected');
            $(selectedRing).detach();
     });

        $('.column').click(function() {
            selectedColumn = $(this);
            console.log(selectedColumn.attr('id') + ' ' + 'has been selected');
            $(selectedColumn).prepend(selectedRing);
        });


});




