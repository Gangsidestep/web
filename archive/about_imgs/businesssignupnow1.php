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
<meta property="og:image" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta property="og:description" content="Empowering People to Value Nature">
<meta property="og:url" content="www.mydropintheoceans.org">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@My_DIO">
<meta name="twitter:title" content="Empowering People to Value Nature">
<meta name="twitter:description" content="www.mydropintheoceans.org">
<meta name="twitter:image:src" content="https://www.mydropintheoceans.org/images/logo/mydio.jpg">
<meta name="twitter:app:name:iphone" content="My Drop In The Oceans">
<meta name="twitter:app:id:iphone" content="">
<meta name="twitter:app:name:ipad" content="My Drop In The Oceans">
<meta name="twitter:app:id:ipad" content="">
<link rel="shortcut icon" href="../images/favicon.ico">
<link href="/css/twittermydiostyle.css" rel="stylesheet" type="text/css">
<link href="/css/mydiostyle.css" rel="stylesheet" type="text/css">



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
  
 <script src="https://connect.facebook.net/en_US/all.js" async="" id="facebook-jssdk"></script>

  
<script type="text/javascript">
    function validateForm()
    {
	
	var invalid = " "; // Invalid character is a space
	var minLength = 6; // Minimum length
	var a=document.forms["reg"]["companyname"].value;
    var b=document.forms["reg"]["email"].value;
	var c=document.forms["reg"]["password"].value;
  	var d=document.forms["reg"]["password2"].value;
  	var atpos = b.indexOf("@");
   	var dotpos = b.lastIndexOf(".");
    if ((a==null || a=="") && (b==null || b=="") && (c==null || c=="")&& (d==null || d==""))
    {
    alert("All Field must be filled out");
    return false;
    }
	
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=b.length)
	{
         alert("Not a valid e-mail address");
         return false;
     }
    
	if (a==null || a=="")
    {
    alert("Full name must be filled out");
    return false;
    }
    
	if (b==null || b=="")
    {
    alert("email must be filled out");
    return false;
    }
	
	if (c==null || c=="")
    {
    alert("password must be filled out");
    return false;
    }
	// check for minimum length of password
	if (document.forms["reg"]["password"].value.length < minLength)
	{
	alert('Your password must be at least ' + minLength + ' characters long. Try again.');
	return false;
	}
	// check for spaces in password
	if (document.forms["reg"]["password"].value.indexOf(invalid) > -1)
	{
	alert("Sorry, spaces are not allowed.");
	return false;
	}
	if (c!=d)
	{
		alert("Desole, les mots de passe ne sont pas egals.");
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
			href="../login/loggedin/new_account.php">About</a> <li> · </li>
   <li class="logo nav-item"><a href="#" class="home">MyDIO&apos;</a> </li>
   	<ul class="dropdown-menu">
    <li><a href="../login/loggedin/aboutmydio/about.php">About</a></li>
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
  <div class="bdropbottom">
    <div class="transparentdavid">
      <form
					action="businesssign_code_exec.php" 
					method="post"
					name='reg'
					class="form-fancy"
                    enctype="multipart/form-data"
                    id="reg"
					onsubmit="return validateForm()">
        <p>
        <div >
          <h5>&nbsp;</h5>
          <h3>
            <?php 
							$remarks=$_GET['remarks'];
							if ($remarks==null and $remarks=="")
							{//echo 'Please Register Your Business Here  ';
							}
							?>
          </h3>
          <h5><p>&nbsp;</p></h5>
        </div>
        <p>
        <p>    
        <table width="100%" height="700" >
          <tr>
            <td width="45%" align="right" valign="middle" class="col_4">
            <h5>Company Name:&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left"><div class="control-group ">
              <div class="controls">
                <input
								type="text"
								name="companyname"
								class="span4"
								value=""
                                placeholder="Company Name"
								autofocus required>
                <span class="hide help-block"> Please enter your company name. </span></div>
            </div></td>
          </tr>
          <tr>
            <td width="45%" align="right" valign="middle" class="col_4"><h5>Contact First Name:&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left"><div class="control-group ">
              <div class="controls">
                <input
								type="text"
								name="firstname"
								placeholder="Contact First Name"
								class="span4"
								value=""
								autofocus required>
                <span class="hide help-block"> Please enter your first name. </span></div>
            </div></td>
          </tr>
          <tr valign="middle">
            <td width="45%" align="right" class="col_4"><h5>Contact Last Name:&nbsp;</h5></td>
            <td class="col_2" align="right">&nbsp;</td>
            <td align="left" class="col_3"><div class="control-group ">
              <div class="controls">
                <input
								type="text"
								name="lastname"
								placeholder="Contact Last Name"
								class="span4"
								value=""
								autofocus required>
                <span class="hide help-block"> Please enter your last name. </span></div>
            </div></td>
          </tr>
          <tr>
            <td width="45%" align="right" valign="middle" class="col_4"><h5>Contact Number:&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left"><div class="control-group ">
              <div class="controls">
                <input
								value=""
								class="span4"
								type="tel"
								name="telnumb"
								id="telnumb"
								placeholder="Contact Number"
                                autofocus required >
                <br>
              </div>
            </div></td>
          </tr>
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
            <td class="col_3" align="left">
             <div class="controls">
                <input
								class="span4"
								type="password"
								name="password"
								id="password"
								placeholder="Create a Password"
                                autofocus required>
                <br>
              </div>
            </td>
          </tr>
          <tr>
            <td width="45%" align="right" valign="top" class="col_4"><h5></h5></td>
            <td class="col_2" align="right" valign="middle">&nbsp;</td>
            <td class="col_3" align="left">
 
             <div class="control-group ">
						<div class="controls">
							<input
								value=""
								class="span4"
								type="password"
								name="password2"
								id="password2"
								placeholder="Confirm your password"
                                autofocus required>
                                <br>
						</div>
					</div>
                 </td>
          </tr>
          <tr>
           <td class="col_2" align="right" valign="middle">&nbsp;</td>
          </tr>
          <tr height"30" padding="10" border="10" margin="10">
            <td width="45%" align="right" valign="middle" class="col_4"><h5>&nbsp;</h5></td>
            <td class="col_2" align="right" valign="middle"></td>
            <td class="col_3" align="left">
            <h5 style="font-size:16px; color:#FFF"> Have an account already? <a href="bus_login.php">Log in</a></h5> 
            <div class="control-group">
              <div class="controls" >
                <p>&nbsp;</p>
                <button type="submit" class="btn btn-flat btn-primary btn-large">REGISTER YOUR BUSINESS</button>
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
  
  
  
  
<div class="to-top hidden">
  
  <a id="toTop" href="#">
  <div class="to-top-icon icon"></div></a>
</div>


<script src="/js/all-225.js"></script>
 
</body>
</html>