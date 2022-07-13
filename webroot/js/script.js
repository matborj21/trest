const product_name = document.getElementById('name');
const product_unit = document.getElementById('unit');
const product_price = document.getElementById('price');
const product_date = document.getElementById('expiry');
const product_inventory = document.getElementById('inventory');




$(function () { 
    var duration = 4000; // 4 seconds
    setTimeout(function () { $('.alert').hide(); }, duration);
});

$(function () {
$('#datetimepicker').datetimepicker(
   {
     format : 'L'
   }
);
});
$(document).ready(function() {
    $('#table_id').DataTable({
        'pagingType': 'full_numbers',
        'processing': true,
        'serverSide': true,
        'serverMethod': 'post',
        'ajax': {
            url: '/products/viewDataTable',
            dataSrc: 'data'
          
        },
        'columns': [{
                data: 'id'
            },
            {
                data: 'name'
            },
            {
                data: 'unit'
            },
            {
                data: 'price'
            },
            {
                data: 'inventory'
            },
            {
                data: 'cost'
            },
            {
                data: 'expiry'
            },
            {
                data: 'button'
            },
        ],
    });

    /// delete record from ajax
   
   
});




