
    function ajaxCall() {
        this.send = function(data, url, method, success, type) {
          type = type||'json';
          var successRes = function(data) {
              success(data);
          };

          var errorRes = function(e) {
              console.log(e);
              alert("Error found \nError Code: "+e.status+" \nError Message: "+e.statusText);
          };
            $.ajax({
                url: url,
                type: method,
                data: data,
                success: successRes,
                error: errorRes,
                dataType: type,
                timeout: 60000
            });

          }

        }

function locationInfo() {
    var rootUrl = "/MyDIO_functions/city_api.php";
    var call = new ajaxCall();
    this.getCities = function(id) {
        $(".cities option:gt(0)").remove();
        var url = rootUrl+'?type=getCities&stateId=' + id;
        var method = "post";
        var data = {};
        $('.cities').find("option:eq(0)").html("Please wait..");
        call.send(data, url, method, function(data) {
            $('.cities').find("option:eq(0)").html("Select Nearest Town or City");
			var c=0;
            if(data.tp == 1){
                $.each(data['result'], function(key, val) {
					c++;
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('.cities').append(option);
                });
					if(c==0)	
					{
						document.getElementById("cityId").style.display="none";
						document.getElementById("cityId").setAttribute("value", "0");
						document.getElementById("cityIdno").setAttribute("value", "0");
						}
						else
						{
						document.getElementById("cityId").style.display="";	
						}
                $(".cities").prop("disabled",false);
            }
            else{
                 alert(data.msg);
            }
        });
    };

    this.getStates = function(id) {
        $(".states option:gt(0)").remove(); 
        $(".cities option:gt(0)").remove(); 
        var url = rootUrl+'?type=getStates&countryId=' + id;
        var method = "post";
        var data = {};
        $('.states').find("option:eq(0)").html("Please wait..");
        call.send(data, url, method, function(data) {
			if(data['state_label']!=""){ var st_lab="your "+data['state_label'];}else{ var st_lab="your State";}
            $('.states').find("option:eq(0)").html("Select "+st_lab);
            if(data.tp == 1){
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('.states').append(option);
                });
                $(".states").prop("disabled",false);
            }
            else{
                alert(data.msg);
            }
        }); 
    };



}

$(function() {
var loc = new locationInfo();
 $(".countries").on("change", function(ev) {
        var countryId = $(this).val();
		 var countryId = $(".country_id_num").val();
			 //alert(countryId);
        if(countryId != ''){
        loc.getStates(countryId);
        }
        else{
            $(".states option:gt(0)").remove();
        }
    });
 $(".states").on("change", function(ev) {
        var stateId = $(this).val();
        if(stateId != ''){
        loc.getCities(stateId);
        }
        else{
            $(".cities option:gt(0)").remove();
        }
    });
});


