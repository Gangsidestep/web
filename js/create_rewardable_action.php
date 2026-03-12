<?php
session_start();
include "../../MyDIO_login/config.php";
include("../../connection.php");
if($MyDIOlogin->loggedIn)
	{
		$mem_id = $_SESSION['MyDIOusercookie'];
	  // User logged in with new system
	  include("../../login/loggedin/get-profile/get-profile.php");
	}
else
	{ 
		// User not logged in with old password system or Facebook login
		//header("location: ../../../login/");
	}

?>


	 <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<html>
<?php
$page_name ="Create a rewardable action";
include('../../login/loggedin/headers.php') ?>
<body 
	class="no-sidebar header-detached">
<div id="fb-root"></div>
<!--[if lt IE 8]>
<div class="alert alert-error alert-top">Your browser is not supported. Please download a newer browser like <a href="https://www.google.com/chrome/">Google Chrome</a></div>
<![endif]--><noscript>
	<div class="alert alert-error alert-top">
		It looks like your browser doesn't support javascript. This page will work a lot better for you if you activate javascript or download a newer browser like <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>
	</div>
</noscript>
<? 
$MyDIOlogin->full_menu($image);
?>
  
  <div class="bdropbottom">
<h2><a href="community_admin.php"><-- Back to Admin Select Communities</a></h2>
<div class="center">
<br>
<div class="profile_title">
<h1>CREATE A MyDIO REWARDABLE ACTION</h1>
</div>
<?php

if (isset($_POST['submit'])){
	
	$goal = safe($_POST['goal']);
	$time = safe($_POST['time']);
	$target = safe($_POST['target']);
	$multiplier = safe($_POST['multiplier']);
	$action_name = safe($_POST['action_name']);
	$action_proposal = safe($_POST['action_proposal']);
	$community_id = safe($_POST['community_id']);
	$action_date = safe($_POST['action_date']);
	$action_verification = safe($_POST['action_verification']);
	$fiatmin = safe($_POST['fiatmin']);
	$action_cost = safe($_POST['action_cost_range']);
	$fiatmax = safe($_POST['fiatmax']);


	
	/*1. GOAL
	A - Brief Learning Initiative (15 DIO base)
	B - Articulated Learning Initiative (50 DIO base)
	C - Transformative Initiative (60 DIO base)
	D - Concrete Action (100 DIO base)
	*/
	
	/*2. TIME
	The following are base values for the 1st time
	Value added if it becomes a habit, +2% for each time (look at category D)
	NOTE: The DIO amount is dependent on the user and NOT on the enterprise's action
	
	A - One-day event - 10%
	B - Infinitively repeatable frequent action - -80%
	C - Weekly action - 20%
	D - Occasional action - 30%
	
	THE FOLLOWING IS DEPENDENT ON THE INDIVIDUAL AND NOT THE ENTERPRISE
	E - Recurrent action (adding value to the one-day event/ weekly/occasional action, putting a max.)
	+2% from 2nd time with a max of 10% (= from the 5th time it stays always +10%)
	*/
	
	/*3. TARGET
	A 1-100 people - 5%
	B 101-1000 people - 10%
	C 1001-10000 people - 15%
	D 10001-100,000 people - 20%
	E 100,001-1,000,000 people - 25%
	F 1,000,001-10,000,000 people - 30%
	G 10,000,001-100,000,000 people - 35%
	H 100,000,001 and more people - 40%	
	*/
	
	/*M. DOMAIN OF THE INITIATIVE CATEGORIES
	MULTIPLIER BASED:
	Examples:
	A - Cleaning X1
	B - Transportation short distance X1
	C - Transportation long distance X2
	D - Reducing, Re-using, Repairing, Recycling X3
	E - Other X1	
	*/
	
	/*4.COSTS ASSOCIATED WITH THE ACTION
	
	/*5. OWNERSHIP OF RESULTS
	How many individuals will benefit directly from the results
	1 individual
	
	
	/*CALCULATION
	
	Add percentages from (2) + (3). Multiply this value to base DIO given in (1).
	Then multiply this value by (M) multiplier.
	
	ADD any financial costs incurred to acheive the target action and multiply by the exchange rate to compensate (*10) in DIO.
	
	Multiply the Costs by any adjusting factor ie. depending on whether the final result involves individual property verses common good
	
	NOTE give a range: i.e. assuming the person has a 0% (first-time) action in (2) and a 10% (habit).
	
	*/
	
	/*1. GOAL*/
	switch ($goal) {
	case "A":
		$base = "15"; //15 DIO
		break;
	case "B":
		$base = "50"; //50 DIO
		break;
	case "C":
		$base = "60"; //60 DIO
		break;
	case "D":
		$base = "100"; //100 DIO
		break;
	}
	
	/*2. TIME*/
	switch ($time) {
	case "A":
		$timepercentage = "10"; //10%
		break;
	case "B":
		$timepercentage = "30"; //30%
		break;
	case "C":
		$timepercentage = "20"; //20%
		break;
	case "D":
		$timepercentage = "-80"; //-80%
		break;
	

	}
	
	/*HABIT*/
	
	$habit = "10"; //max amount of additional % DIO from habit
	
	/*3. TARGET*/
	switch ($target) {
	case "A":
		$targetpercentage = "5"; //5%
		break;
	case "B":
		$targetpercentage = "10"; //10%
		break;
	case "C":
		$targetpercentage = "15"; //15%
		break;
	case "D":
		$targetpercentage = "20"; //20%
		break;
	case "E":
		$targetpercentage = "25"; //25%
		break;
	case "F":
		$targetpercentage = "30"; //30%
		break;
	case "G":
		$targetpercentage = "35"; //35%
		break;
	case "H":
		$targetpercentage = "40"; //40%
		break;		
	}
	
	/*M. DOMAIN OF THE INITIATIVE CATEGORIES*/
	switch ($multiplier) {
	case "A":
		$multi = "1"; //Multiplier: 1
		break;
	case "B":
		$multi = "1"; //Multiplier: 1
		break;
	case "C":
		$multi = "2"; //Multiplier: 2
		break;
	case "D":
		$multi = "3"; //Multiplier: 3
		break;
	case "E":
		$multi = "1"; //Multiplier: 1
		break;
	}
	
	$cost = $action_cost*10;
	
	$minDIO = ($base * ("1" + (($timepercentage + $targetpercentage)/"100")) * $multi)+$cost;
	$maxDIO = ($base * ("1" + (($timepercentage + $targetpercentage + $habit)/"100")) * $multi)+$cost;
	
	

	$new_reward_id="R_ID_".$MyDIOlogin->rand_string(6);
	$unique=false;
	$reward_id=$new_reward_id;
	while(!$unique)
		{
			//echo $reward_id."<p>";
			$sql = "SELECT * FROM community_actions WHERE reward_id='R_ID_bbrm5l'";
		if(mysqli_query($bd, $sql))
				{
					//generate a new reward id
						echo $reward_id."<p>new";
					$reward_id="R_ID_".$MyDIOlogin->rand_string(6);
						echo $reward_id."<p>stop";exit();
				}
				else
				{
					// the random reward_id has not already been used
					$unique = true;
					echo $reward_id."<p>go";exit();
					}
		}
	
	$entry = "INSERT INTO community_actions (reward_id,community_id, action_name, action_proposal, dio, action_verification, action_date, member_id, activation_status,action_cost_range,fiatmax,fiatmin)
	VALUES ('$reward_id','$community_id', '$action_name', '$action_proposal', '$minDIO', '$action_verification', '$action_date','$mem_id','PENDING',$action_cost,$fiatmax,$fiatmin)";

	if (mysqli_query($bd, $entry)) 
	{
		$sql = "SELECT * FROM community_actions WHERE community_id='$community_id' && action_name='$action_name' ";
		$result = mysqli_query($bd, $sql);
		if($row=mysqli_fetch_array($result, MYSQLI_BOTH))
			{
				$status = $row['activation_status'];
			}
	}
	else
	{
		echo "Error: " . $sql . "<br>" . mysqli_error($bd);
	}

	
	
	
	echo "<h3>Rewardable action proposal successfully submitted.</h3><br>";
	echo "<h3>Estimated Rewardable DIO Amount (subject to change): ".$minDIO." - ".$maxDIO." DIO.</h3>";
	if($status=="PENDING"){echo "<h3 style='color:red;'>CURRENT STATUS: Pending Review</h3>";}
	
	
	
	
	
	
}
else if (isset($_POST['community_id_submit']))
{
	
		$community_id = $_POST['community_id'];

?>

<form action ='create_rewardable_action.php' method="post">

<h3>ACTION NAME:</h3>
<input  class="span4" type="text" name="action_name" required>
<br>
<br>
<h3>ACTION PROPOSAL:</h3>
<textarea  class="span4" name="action_proposal" style=" height: 100px;" maxlength="1000" required></textarea>
<br>
<br>
<h3>ACTION DATE:</h3>
e.g. 21/05/2015 @ 3pm-4pm, 23-25th June 2015, Ongoing, etc.
<br><br>
<textarea  class="span4" name="action_date" style=" height: 100px;" maxlength="1000" required></textarea>
<br>
<h3>ACTION VERIFICATION:</h3>
<div class="center-310">
How you plan on confirming and rewarding users who have completed the action.
E.g. email, voucher codes, in-person, NFC, etc. 
<br><br>
</div>
<textarea  class="span4" name="action_verification" style=" height: 100px;" maxlength="1000" required></textarea>
<br>
<br>
<h3>ACTION TYPE</h3>
<br>
<select  class="span4" style=" height: 30px;" name = "goal">
<option value = "A">A - Brief Learning Initiative</option>
<option value = "B">B - Articulated Learning Initiative</option>
<option value = "C">C - Transformative Initiative</option>
<option value = "D">D - Concrete Action</option>
</select>
<br>
<br>
     <script >
jQuery(function($){
    $("a.brief").click(function(){
        $("div.brief_act").slideToggle(400, function(){
        });
    });
});
jQuery(function($){
    $("a.articulate").click(function(){
        $("div.art").slideToggle(400, function(){
        });
    });
});
jQuery(function($){
    $("a.transformative").click(function(){
        $("div.trans").slideToggle(400, function(){
        });
    });
});

jQuery(function($){
    $("a.concrete").click(function(){
        $("div.conc").slideToggle(400, function(){
        });
    });
});
	</script>  
<div class="center-310">
<p> <a class="btn brief">A Brief Learning Initiative</a><br>
<div class="brief_act" style="display:none">
The initiative allows citizens to learn something more about sustainability in general or how to improve their habits towards sustainable lifestyles through quick, easy, and primarily online experiences. The duration is normally quite short: from a few minutes to an hour (i.e. online quizzes, online tutorials, videos, online movies/documentaries, tips...).</p>
</div>
<p>&nbsp;</p>
<p> <a class="btn articulate">An Articulated Learning Initiative</a><br>
<div class="art" style="display:none">
The initiative allows citizens to learn something more regarding sustainability in general or how to improve their habits towards sustainable lifestyles through articulated initiatives which normally envisage a greater effort than a virtual experience, such as leaving the house, active participation, more time availability, meeting other people (i.e. conferences, courses...).</p>
</div>
<p>&nbsp;</p><p> <a class="btn transformative">A Transformative Initiative</a><br>
<div class="trans" style="display:none">
This is an initiative which goes beyond a learning experience and offers the possibility to come together to discover new solutions and facilitate change towards sustainability (i.e. sector sustainability brainstorming with employees and officers in a firm, sustainability brainstorming with students, professors and custodians in a school, open citizen assembly to draw a sustainability path for the neighborhood, workshops...). </p>
</div><p>&nbsp;</p>
<p> <a class="btn concrete">Concrete Action</a><br>
<div class="conc" style="display:none">
This is a concrete action which translate awareness into sustainable practices (i.e. waste sorting, recycling, repairing something for reuse, sustainable purchases, biking, opting for tap water, volunteer experiences...). </p>
</div>
<br>
</div>
   <script >

			</script>
<h3>TIME</h3>
How much time is required or expected for each action:
<br><br>
<select class="span4" name ="time_sel" id="time_sel" onChange="electChange(this.value)" />
<option value = "A">A - Brief One time task</option>
<option value = "B">B - One-day event</option>
<option value = "C">C - Occasional action</option>
<option value = "D">D - Weekly action</option>
<option value = "E">E - Infinitively repeatable frequent action</option>
</select>
<br>
<br>
     <script >
	 	  function electChange()
		  {
				$(function() {										 
					$("#time_sel > option").each(function(){
						if(this.selected=="A")
							{
								alert(this.selected);
								document.getElementById('time').style.display = '';
					
							}
						});
					});
			}
	 var divon = null;
	  function selectChange()
		  {
				$(function() {										 
					$("#cost_range > option").each(function(){
						if(this.selected)
						{
							divon = document.getElementById('variable_cost');
							if(this.value=='1')
							{
								divon.style.display = '';
							}else
							{
								divon.style.display = 'none';
							}
							
						}
						});
					});
			}

jQuery(function($){
    $("a.One-day").click(function(){
        $("div.day").slideToggle(400, function(){
        });
    });
});
jQuery(function($){
    $("a.Occasional").click(function(){
        $("div.Occas").slideToggle(400, function(){
        });
    });
});

jQuery(function($){
    $("a.Weekly").click(function(){
        $("div.We").slideToggle(400, function(){
        });
    });
});
jQuery(function($){
    $("a.Infinitively").click(function(){
        $("div.Infini").slideToggle(400, function(){
        });
    });
});

	</script>  
<div class="center-310">
<p><a class="btn One-time">A brief one time task</a><br>
<div id="time" style="display:none">
i.e. cleaning day, one- day conference, NB: Choose this option also in the case that the event is repeated more than once. Participants will be awarded proportionally more if their participation is continuous.</p>
</div>
<p>&nbsp;</p>
<p><a class="btn One-day">One-day event</a><br>
<div class="day" style="display:none">
i.e. cleaning day, one- day conference, NB: Choose this option also in the case that the event is repeated more than once. Participants will be awarded proportionally more if their participation is continuous.</p>
</div>
<p>&nbsp;</p>
<p><a class="btn Occasional">Occasional action</a><br>
<div class="Occas" style="display:none">
This is an action that happens occasionally, when it is needed. i.e. repairing something instead of buying it new, buying a highly-sustainable product instead of a lowly-sustainable peer... NB: The amount of the reward will increase every time that the action is repeated up to 5 times. From the 5th time onward the action will be rewarded at the maximum score for that action.</p>
</div>
<p>&nbsp;</p>
<p><a class="btn Weekly">Weekly action</a><br>
<div class="We" style="display:none">
An action that, if repeated, allows to receive a reward every week. i.e. Waste sorting... NB: The amount of the reward will increase every week that the action is repeated up to 5 times. From the 5th time onward the action will be rewarded at the maximum score for that action.</p>
</div>
<p>&nbsp;</p>
<p><a class="btn Infinitively">Infinitively repeatable</a><br>
<div class="Infini" style="display:none">
This is a really common action that can be repeated infinitely and that should become a common habit for citizens in order to have a sustainable lifestyle. i.e. drinking tap water, biking instead of using the car...</p>
</div>
<p>&nbsp;</p>
</div>

     <script >
	 var divon = null;
	  function selectChange()
		  {
				$(function() {										 
					$("#cost_range > option").each(function(){
						if(this.selected)
						{
							divon = document.getElementById('variable_cost');
							if(this.value=='1')
							{
								divon.style.display = '';
							}else
							{
								divon.style.display = 'none';
							}
							
						}
						});
					});
			}
	</script>  

<div class="center-310">
<h3>ASSOCIATED COSTS</h3>
What, if any, financial costs are involved in completing the action

<br>
	 Fixed or variable<br>
	<select class="span4" name='action_cost_range' id='cost_range' onchange='selectChange()' />
	<option value='0' disabled selected>Fixed</option>
	<option value='0' <? if(!$diovariable){echo 'selected';} ?> >Fixed</option>
	<option value='1' <? if($diovariable){echo 'selected';} ?> >Variable</option>
	</select><br><p>&nbsp;</p>
	<input  class="span4" type="number" step="0.01" min="1" name="fiatmin" value="<? echo $dio; ?>" placeholder='Minimum'>
	
    <div id='variable_cost' <? if(!$diovariable){echo "style='display:none'";} ?> >
    <input class="span4" type="number" step="0.01" name="fiatmax" value="<? echo $diomax; ?>" placeholder='Maximum'>
	</div><br><br>
</div>


<br>
<h3>TARGET</h3>
<br>
<select class="span4" name ="target">
<option value = "I">Individual</option>
<option value = "A">2-100 people</option>
<option value = "B">101-1000 people</option>
<option value = "C">1001-10000 people</option>
<option value = "D">10001-100,000 people</option>
<option value = "E">100,001-1,000,000 people</option>
<option value = "F">1,000,001-10,000,000 people</option>
<option value = "G">10,000,001-100,000,000 people</option>
<option value = "H">100,000,001 and more people</option>
</select>
<br>
<br>
<h3>DOMAIN OF THE INITIATIVE</h3>
<br>
<select class="span4" name ="multiplier">
<option value = "A">Cleaning</option>
<option value = "B">Transportation short distance</option>
<option value = "C">Transportation long distance</option>
<option value = "D">Reducing, Re-using, Repairing, Recycling</option>
<option value = "E">Energy Consumption</option>
<option value = "F">Water</option>
<option value = "G">Biodiversity</option>
<option value = "H">Sustainable Living</option>
<option value = "H">Other</option>
</select>
<br>
<br>

<div class="center-310">
<p><u>A - Cleaning</u><br>

<p><u>B - Transportation short distance</u><br>
Biking, walking or the use of local public transportation as a substitution to the use of the car.</p>

<p><u>C - Transportation long distance</u><br>
Use of Buses and Trains as a substitution for the use of the car or plane.</p>

<p><u>D - Reducing, Re-using, Repairing, Recycling</u><br>

<p><u>E - Anything relating to Energy consumption or production</u><br>

<p><u>F - Anything relating to Water consumption, Sanitation, waste prevention, prevention of water pollution etc..</u><br>

<p><u>G - Anything relating to conservation of Biodiversity.</u><br>

<p><u>H - Other</u><br>
</div>
<br>
<input type="hidden" name="community_id" value="<?php echo $community_id; ?>">
<input class="btn span4" type="submit" name="submit" value="Submit your Rewardable Action">
<br>
<br>
</form>

<?php

}
		
else
{
header('Location: community_admin.php');
}	
	
	?>



</div>


</div>

</body>
</html>
