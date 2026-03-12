// MyDIO JavaScript/jQuery Document
		jQuery(function($){
					$("div.selectlang").hover(function(){
						$("div.showselectlang").toggle(200, function(){
						});
						$("font.active_arrow").toggle();
						$("font.inactive_arrow").toggle();
					});
				});
					jQuery(function($){
					$("a.hamburger").click(function(){
						$("div.drop_right_menu").hide();
						$("div.drop_menu").toggle(200, function(){
						});
					});
				});
				jQuery(function($){
					$("a.user-icon-mobile").click(function(){
						$("div.drop_menu").hide();
						$("div.drop_right_menu").toggle(200, function(){
						});
						$("img.dio-menu-flag").toggle(200, function(){
						});
						$("img.dio-menu-flag-choice").show();
					});
				});
				jQuery(function($){
					$("div.close_menu").on("touchstart", function (e) {
						$("div.drop_menu").hide();
						$("div.drop_right_menu").hide();
						$("img.dio-menu-flag:hidden").toggle(200, function(){
						});
					});
				});
				jQuery(function($){
					$("div.close_menu").click(function(){
						$("div.drop_menu").hide();
						$("div.drop_right_menu").hide();
						$("img.dio-menu-flag:hidden").toggle(200, function(){
						});
					});
					
				});
