$(document).ready(function() {
    $.ajax({
      url: 'suppliers/suppliers.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data) {
        $(data).each(function(index, supplier) {
          var tr = $('<tr/>');
          tr.append('<td class="supplier-name" style="cursor: pointer">' + supplier['SupplierName'] + '</td>');
          tr.append('<td>' + supplier['TypeOfProduct'] + '</td>');
          tr.append('<td>' + supplier['PostalAddress'] + '</td>');
          tr.append('<td>' + supplier['Telephone'] + '</td>');
          $('#supplier-table').append(tr);
        });

        $('#supplier-table').DataTable({
          paging: true,
          pageLength: 25,
        });
      }
    });
  
    var selectedSupplier;

    $('#supplier-table').on('click', '.supplier-name', function() {
      selectedSupplier = $(this).text();

      $('#supplier-table_wrapper').hide();
      $('#supplier-table').hide();
      $('#show-table-btn').hide();
      $('#supplier-info').show().html('');

      $.ajax({
        url: 'suppliers/suppliers.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].SupplierName === selectedSupplier) {
                var supplierInfoHtml = `
                <style>
                    h2 {
                        display: flex; 
                        align-items: left; 
                        justify-content: left; 
                        color: #D0333A
                    }

                    h3 {
                        display: flex; 
                        align-items: left; 
                        justify-content: left;
                        color: #D0333A
                    }
                </style>

                <div class="container">
                    <div class="box">
                        <div class="box-row">
                            <div class="box-cell box1">
                                <h2>General Information</h2>
                                <br>
                                    <h3>Supplier Name:</h3>
                                        <p>${data[i].SupplierName}</p>
                                        <br>

                                    <h3>Type of Product:</h3>
                                        <p>${data[i].TypeOfProduct}</p>
                                        <br>

                                    <h3>Preferred / Alternative Supplier:</h3>    
                                        <p>${data[i].PreferredAlternative}</p>   
                                        <br> 

                                    <h3>Postal Address:</h3>    
                                        <p>${data[i].PostalAddress}</p>
                                        <br>

                                    <h3>Telephone:</h3>        
                                        <p>${data[i].Telephone}</p>
                                        <br>    
                            </div>        
                
                            <div class="box-cell box2">
                                <h2>Trading Terms</h2>
                                <br>
                                    <h3>Invoices Due:</h3>
                                        <p>${data[i].InvoiceDue}</p>
                                        <br>

                                    <h3>Month End Cut Off Date:</h3>
                                        <p>${data[i].MonthEndCutOffDate}</p>
                                        <br>
                        
                                    <h3>Sale or Return:</h3>
                                        <p>${data[i].SaleOrReturn}</p>
                                        <br>


                                    <h3>Settlement Discount:</h3>    
                                        <p><b>30 Days</b> Settlement Discount: ${data[i].TDaysSettlementDiscount}</p>
                                        <p><b>60 Days</b> Settlement Discount: ${data[i].SDaysSettlementDiscount}</p>
                                        <p><b>90 Days</b> Settlement Discount: ${data[i].NDaysSettlementDiscount}</p>
                                        <p><b>120 Days</b> Settlement Discount: ${data[i].ODaysSettlementDiscount}</p>    
                                        <br>

                                    <h3>COD Discount:</h3>        
                                        <p>${data[i].COD}</p>
                                        <br>

                                    <h3>Trade Discount:</h3>    
                                        <p>${data[i].TradeDiscount}</p>
                                        <br>

                                    <h3>Rebate:</h3>    
                                        <p>${data[i].Rebate}</p>
                                        <br>

                                    <h3>Opening Order Settlement Discount:</h3>
                                        <p><b>30 Days</b> Settlement Discount: ${data[i].OpeningOrderTDaysSettlementDiscount}</p>
                                        <p><b>60 Days</b> Settlement Discount: ${data[i].OpeningOrderSDaysSettlementDiscount}</p>
                                        <p><b>90 Days</b> Settlement Discount: ${data[i].OpeningOrderNDaysSettlementDiscount}</p>
                                        <p><b>120 Days</b> Settlement Discount: ${data[i].OpeningOrderODaysSettlementDiscount}</p>
                                        <br>

                                    <h3>Opening Order COD:</h3>
                                        <p>${data[i].OpeningOrderCOD}</p>
                                        <br>

                                    <h3>Opening Order Trade Discount:</h3>    
                                        <p>${data[i].OpeningOrderTradeDiscount}</p>
                                        <br>

                                    <h3>Minimum Order Value:</h3>
                                        <p>${data[i].MinimumOrderValue}</p>
                                        <br>

                                    <h3>Delivery Charge:</h3>    
                                        <p>${data[i].DeliveryCharge}</p>
                                        <br>

                                    <h3>Suggested Mark Up:</h3>
                                        <p>${data[i].SuggestedMarkUp}</p>
                                        <br>

                                    <h3>Suggested GP:</h3>    
                                        <p>${data[i].SuggestedGP}</p>
                                        <br>
                            </div> 
                
                            <div class="box-cell box3">
                                <h2>Management</h2>
                                <br>
                                    <h3>Managing Director:</h3>     
                                        <p>Name: ${data[i].ManagingDirectorName}</p>
                                        <p>Number: ${data[i].ManagingDirectorNumber}</p>
                                        <p>Email: ${data[i].ManagingDirectorEmail}</p>
                                        <br>

                                    <h3>General Manager:</h3>
                                        <p>Name: ${data[i].GeneralManagerName}</p>
                                        <p>Number: ${data[i].GeneralManagerNumber}</p>
                                        <p>Email: ${data[i].GeneralManagerEmail}</p>
                                        <br>
                                    
                                    <h3>Key Accounts Manager:</h3>
                                        <p>Name: ${data[i].KeyAccountsManagerNationalSalesManagerName}</p>
                                        <p>Number: ${data[i].KeyAccountsManagerNationalSalesManagerNumber}</p>
                                        <p>Email: ${data[i].KeyAccountsManagerNationalSalesManagerEmail}</p>
                                        <br>

                                    <h3>Sales:</h3>
                                        <p>Name: ${data[i].SalesName}</p>
                                        <p>Number: ${data[i].SalesNumber}</p>
                                        <p>Email: ${data[i].SalesEmail}</p>
                                        <br>
                                    
                                    <h3>Accounts:</h3>
                                        <p>Name: ${data[i].AccountsName}</p>
                                        <p>Number: ${data[i].AccountsNumber}</p>
                                        <p>Email: ${data[i].AccountsEmail}</p>
                                        <br>
                                        
                                    <h3>Orders:</h3>
                                        <p>Name: ${data[i].OrdersName}</p>
                                        <p>Number: ${data[i].OrdersNumber}</p>
                                        <p>Email: ${data[i].OrdersEmail}</p>
                                        <br>
                            </div>

                            <div class="box-cell box4">
                                <h2>Representatives</h2>
                                <br>

                                    <h3>Gauteng Representative:</h3>
                                        <p>Name: ${data[i].GautengRepresentativeName}</p>
                                        <p>Number: ${data[i].GautengRepresentativeNumber}</p>
                                        <p>Email: ${data[i].GautengRepresentativeEmail}</p>
                                        <br>

                                    <h3>Western Cape Representative:</h3>
                                        <p>Name: ${data[i].WesternCapeRepresentativeName}</p>
                                        <p>Number: ${data[i].WesternCapeRepresentativeNumber}</p>
                                        <p>Email: ${data[i].WesternCapeRepresentativeEmail}</p>
                                        <br>
                                    
                                    <h3>Eastern Cape Representative:</h3>        
                                        <p>Name: ${data[i].EasternCapeRepresentativeName}</p>
                                        <p>Number: ${data[i].EasternCapeRepresentativeNumber}</p>
                                        <p>Email: ${data[i].EasternCapeRepresentativeEmail}</p>
                                        <br>

                                    <h3>Free State Representative:</h3>
                                        <p>Name: ${data[i].FreeStateRepresentativeName}</p>
                                        <p>Number: ${data[i].FreeStateRepresentativeNumber}</p>
                                        <p>Email: ${data[i].FreeStateRepresentativeEmail}</p>
                                        <br>

                                    <h3>KZN Representative:</h3>
                                        <p>Name: ${data[i].KZNRepresentativeName}</p>
                                        <p>Number: ${data[i].KZNRepresentativeNumber}</p>
                                        <p>Email: ${data[i].KZNRepresentativeEmail}</p>
                                        <br>

                                    <h3>Northen Cape Representative:</h3>
                                        <p>Name: ${data[i].NorthenCapeRepresentativeName}</p>
                                        <p>Number: ${data[i].NorthenCapeRepresentativeNumber}</p>
                                        <p>Email: ${data[i].NorthenCapeRepresentativeEmail}</p>
                                        <br>

                                    <h3>North West Representative:</h3>
                                        <p>Name: ${data[i].NorthWestRepresentativeName}</p>
                                        <p>Number: ${data[i].NorthWestRepresentativeNumber}</p>
                                        <p>Email: ${data[i].NorthWestRepresentativeEmail}</p>
                                        <br>

                                    <h3>Mpumalanga Representative:</h3>
                                        <p>Name: ${data[i].MpumalangaRepresentativeName}</p>
                                        <p>Number: ${data[i].MpumalangaRepresentativeNumber}</p>
                                        <p>Email: ${data[i].MpumalangaRepresentativeEmail}</p>
                                        <br>

                                    <h3>Limpopo Representative:</h3>
                                        <p>Name: ${data[i].LimpopoRepresentativeName}</p>
                                        <p>Number: ${data[i].LimpopoRepresentativeNumber}</p>
                                        <p>Email: ${data[i].LimpopoRepresentativeNumber2}</p>
                                        <br>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="show-table-btn" onClick="showtable()" style="width:90%">Show Supplier Table</button>
                
                `;
              $('#supplier-info').html(supplierInfoHtml);
              break;
            }
          }
        }
      });
    });
  

$('#show-table-btn').on('click', function() {
    $('#supplier-table').show();
    $('#supplier-table_wrapper').show();
    $('#show-table-btn').hide();
    $('#supplier-info').hide().html('');
    });
});

function showtable() {
    $('#supplier-table').show();
    $('#supplier-table_wrapper').show();
    $('#show-table-btn').hide();
    $('#supplier-info').hide().html('');
};
  