<!DOCTYPE html>
<html lang="en">
<head>
<title>My Drop In The Oceans | Business Registration</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta property="fb:app_id" content="1476200282626466">
<meta property="og:type" content="MyDIO:website">
<meta property="og:site_name" content="My Drop In The Oceans">
<meta property="og:title" content="MyDIO">
<meta property="og:image" content="http://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta property="og:description" content="Empowering People to Value Nature">
<meta property="og:url" content="www.mydropintheoceans.org">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@My_DIO">
<meta name="twitter:title" content="Empowering People to Value Nature">
<meta name="twitter:description" content="www.mydropintheoceans.org">
<meta name="twitter:image:src" content="http://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta name="twitter:app:name:iphone" content="My Drop In The Oceans">
<meta name="twitter:app:id:iphone" content="">
<meta name="twitter:app:name:ipad" content="My Drop In The Oceans">
<meta name="twitter:app:id:ipad" content="">
<link rel="shortcut icon" href="../../images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
 


<script>document.documentElement.className += " js"; </script>
  <!--[if lt IE 9]><script src="../js/vendor/respond.min.js"></script>
<script>document.documentElement.className += " ie lt9";
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('footer');
document.createElement('time');
</script><![endif]-->
  
 <script src="http://connect.facebook.net/en_US/all.js" async="" id="facebook-jssdk"></script>

  
<script type="text/javascript">
    function validateForm()
    {
	
	var invalid = " "; // Invalid character is a space
	var minLength = 6; // Minimum length

    var b=document.forms["reg"]["email"].value;
	 var c=document.forms["reg"]["securityquestion"].value;

  	var atpos = b.indexOf("@");
   	var dotpos = b.lastIndexOf(".");
    //if (b==null || b==""))
	
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=b.length)
	{
         alert("Not a valid e-mail address");
         return false;
     }
    
 
	if (b==null || b=="")
    {
    alert("email must be filled out");
    return false;
    }
	
	if (c==null || c=="")
    {
    alert("security question must be answered");
    return false;
    }

	return true;}
    </script>
  
  </head>
  
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
<div class="header">
<nav>
<a  class="hamburger"
			data-toggle="dropdown"
			data-func="LoadFromTopBar"
			href="../../login/loggedin/new_account.php">About</a> <li> · </li>
   <li class="logo nav-item"><a href="#" class="home">MyDIO&apos;</a> </li>
   	<ul class="dropdown-menu">
    <li><a href="animation.php">About</a></li>
	<li><a href="animation.php">Animation</a></li>
    </ul> 
    <div><a href="/index.php" class="user-icon-mobile"
    data-toggle="dropdown"
			data-func="LoadFromTopBar"></a>
    <ul id="user-actions" class="pull-right dropdown-menu">
    <li><a href="bus_login.php">Login</a></li>
    <li><a href="#">Sign up</a></li>
    </ul>
    </div>
    </nav>
</div>
  
    <div class="busiframe">
  <div class="bdropbusiness">
    <div class="transparentdavid">
      <form
					action="businessedit_code_exec.php" 
					method="post"
					name='reg'
					class="form-fancy"
                    enctype="multipart/form-data"
                    id="reg"
					onsubmit="return validateForm()">
        <p>
        <div >
          <h3>&nbsp;</h3>
          <h3>
            <?php 
							$remarks=$_GET['remarks'];
							if ($remarks==null and $remarks=="")
							{echo 'Please Add a security Question Here  ';}
							?>
          </h3>
          <p>&nbsp;</p>
        </div>
        <p>
        <p>    
        <table width="100%" height="700" >
          <tr>
            <td width="45%" align="right" valign="middle" class="col_4"><h5>Email:&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left">
            <div class="control-group ">
              <div class="controls">
                <input 
								value=""
								class="span4"
								type="email"
								name="email"
								id="email"
								placeholder="Email" 
                                autofocus required>
              </div>
              <div class="control-group ">
                <?php 
							if ($remarks=='user_already_exists')
							{    //that email is already in use    
							echo 'That email is already taken';}
							?>
              </div>
            </div></td>
          </tr>
          <tr>
            <td width="45%" align="right" valign="middle" class="col_4"><h5>Create a Password:&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left"><div class="control-group ">
            </div>
            <div class="control-group">
						<div class="controls">
                <select name="securityquestion" size="1" class="span4" type="text" autofocus required>
                  <option value="" selected>Select a Security Question</option>
                    <option value="0">What is your mother's maiden name?</option>
                  <option value="1">What city were you born in?</option>
                  <option value="2">What is your favorite color?</option>
                  <option value="3">What year did you graduate from High School?</option>
                  <option value="4">What was the name of your first boyfriend/girlfriend?</option>
                    <option value="5">What is your favorite type of food?</option>
                </select>
                
               <span class="hide help-block">
								Please enter a security Question.							</span>
               </div>
               </div>
               <div class="control-group ">
              
                        <div class="controls">
						  <input
								type="text"
								name="securityanswer"
								placeholder="Security Question Answer"
								class="span4"
								value=""
								autofocus required>
							<span class="hide help-block">
								Please enter an answer for your security Question.							</span>
						</div>
					</div></td>
          </tr>
          <tr height"30" padding="10" border="10" margin="10">
            <td width="45%" align="right" valign="middle" class="col_4"><h5>&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left"><div class="control-group">
              <div class="controls" >
                <p>&nbsp;</p>
                <button type="submit" class="btn btn-flat btn-primary btn-large">ADD SECURITY QUESTION</button>
                </h5><p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>
            </div></td>
          </tr>
        </table>
        <div class="control-group ">
          <div></div>
        </div>
      </form>
    </div>
  </div>
  </div>
  
  
  
  
<div class="totop"><nav><li class="logo nav-item"><a href="../../login/loggedin/new_account.php" class="home">MyDIO&apos;</a> </li>

</nav></div>
<div class="to-top hidden">
  
  <a id="toTop" href="#">
  <div class="to-top-icon icon"></div></a>
</div>


<script src="/js/all-225.js"></script>
 
</body>
</html>