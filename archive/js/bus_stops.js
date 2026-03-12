<script src="js/tpg_bus_stops.js"></script>
function bus_data(arr) {
	alert('hi');
    var out = "";
	var keys;
	var bus_lst=[];
	var synth_bus_lst=[];
    var i;
	var PhyStop="";
	var key;
	var ref;

    for(i = 0; i<arr.length; i++) {
		if(arr[i].stopName!=place)
		{
PhyStop=arr[i].physicalStops;
keys="<p>";
var w=0;
var u=0;
	var synth_lst="";
	
	
		if(isArray(PhyStop))
		{
					
			for(key in PhyStop)
			{
				for(var keey in PhyStop[key])
											  {
												  
												  if(keey=="connections")
												  {
													  for(var connect_bus in PhyStop[key][keey])
													  {
														   for(var connect_buses in PhyStop[key][keey][connect_bus])
																  {
																	  if(connect_buses=="lineCode")
																	  {
																		keys+=PhyStop[key][keey][connect_bus][connect_buses]+" ";
																		ref=PhyStop[key][keey][connect_bus][connect_buses];
																		var exists=false;
																		
																		for(n = 0; n<bus_lst.length; n++)
																			{
																				if(bus_lst[n]==ref)
																					{
																						exists=true;
																						}
																					
																					
																				
																			}
																			if(exists==false)
																			{
																				synth_lst+=ref+" ";
																				synth_bus_lst[u]=ref;
																				u++;
																			}
																		bus_lst[w]=ref;
																		w++;
																	  }
																	   if(connect_buses=="destinationName")
																	  {
																		keys+=" : "+PhyStop[key][keey][connect_bus][connect_buses]+" <p>";
																	  }
																  }
															
													  }
												 //for(var keys in PhyStop[key]) 
												  }
											  }		
											
			}
		}
        out += arr[i].stopName + '<p>connections: '+arr[i].stopCode+ '<p>connections: '+ keys+ '<br>'+synth_lst+'<br>'+bus_lst+'<br>'+synth_bus_lst+'<br><p>';
    }
    document.getElementById("id01").innerHTML = out;
}
}
function isArray(obj) {
    return obj.constructor == Array; 
}