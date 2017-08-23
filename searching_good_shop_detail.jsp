<%@ page contentType="text/html;charset=GBK" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">

	<head>
		<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<meta http-equiv="Content-Type" content="text/html;charset=GBK" />
		<meta content="yes" name="apple-mobile-web-app-capable" />
		<meta content="black" name="apple-mobile-web-app-status-bar-style" />
		<meta content="telephone=no" name="format-detection" />
		<meta http-equiv="Cache-Control" content="no-cache"/>
		<title>寻好店-详情</title>
		<link rel="stylesheet" href="css/common_css/initialization_style.css" />
		<link rel="stylesheet" href="css/common_css/public_style.css" />
		<link rel="stylesheet" href="css/searching_good_shop_detail.css" />
		<link rel="stylesheet" href="css/common_css/swiper.min.css"/>
		<script type="text/javascript" src="js/common_js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="js/common_js/set_fontsize.js"></script>
	</head>

	<body>
		<div class="swiper-container swiper-container1">
			<div class="swiper-wrapper" id="shop_product_container">
				<!--<div class="swiper-slide">
					<img class="searching_detail_top_shop_pic" src="img/searching_good_shop/shop_pic@2x.png" srcset="img/searching_good_shop/shop_pic@2x.png 2x,img/searching_good_shop/shop_pic@3x.png 3x" />
				</div>
				<div class="swiper-slide">
					<img class="searching_detail_top_shop_pic" src="img/searching_good_shop/shop_pic@2x.png" srcset="img/searching_good_shop/shop_pic@2x.png 2x,img/searching_good_shop/shop_pic@3x.png 3x" />
				</div>
				<div class="swiper-slide">
					<img class="searching_detail_top_shop_pic" src="img/searching_good_shop/shop_pic@2x.png" srcset="img/searching_good_shop/shop_pic@2x.png 2x,img/searching_good_shop/shop_pic@3x.png 3x" />
				</div>-->
			</div>
			<!--分页器-->
			<div class="swiper-pagination swiper-p1"></div>
			<!--<div>
				<img class="searching_detail_top_back" src="img/searching_good_shop/back_btn_white@2x.png" srcset="img/searching_good_shop/back_btn_white@2x.png 2x,img/searching_good_shop/back_btn_white@3x.png 3x" />
			</div>-->
		</div>
		<div class="adviser_and_product_btn">
			<div class="searching_shop_name" id="shop_name">芜湖路万达店</div>
			<div class="collection_details" id="1">
				<img id="collection_shop_img" src="img/star_comment_no.png" />
				<p>收藏</p>
			</div>
			<div class="comment_start_box" id="comment_start_box_id">
				<!--<div class="start_nor start_sel"></div>
				<div class="start_nor"></div>
				<div class="start_nor"></div>
				<div class="start_nor"></div>
				<div class="start_nor"></div>-->
			</div>
			<div class="score" id="shop_grade_score">4.0</div>
			<div class="score_tag_container">
				<div class="score_tag">商品<span id="product_score">4.0</span></div>
				<div class="score_tag_next">配送<span id="distribution_score">4.0</span></div>
				<div class="score_tag_next">服务<span id="server_score">4.0</span></div>
				<div class="score_tag_next">满意度<span id="satisfaction_degree_score">4.0</span></div>
			</div>
			<div class="location_area" id="location_area_id">距你&lt;<span class="area_location">50</span><span class="distance_unit"></span></div>
		</div>
		<div class="line_all"></div>
		<div class="location_place">
			<div class="specific_locations_container">
				<img class="specific_locations_container_position" src="img/searching_good_shop/shop_address_gray@2x.png" srcset="img/searching_good_shop/shop_address_gray@2x.png 2x,img/searching_good_shop/shop_address_gray@3x.png 3x"/>
				<p class="specific_locations_container_p" id="specific_locations_container_p">政务区天鹅湖万达广场金街入口（合肥移动营业网点对面）</p>
				<img class="specific_locations_container_img" src="img/searching_good_shop/vertical_line@2x.png" srcset="img/searching_good_shop/vertical_line@2x.png 2x,img/searching_good_shop/vertical_line@3x.png 3x"/>
				<a href="tel:17621723539"><img class="specific_locations_container_tel" src="img/searching_good_shop/shop_tel@2x.png" srcset="img/searching_good_shop/shop_tel@2x.png 2x,img/searching_good_shop/shop_tel@3x.png 3x"/></a>
			</div>
		</div>
		<div class="line_interval"></div>
		<!--店铺达人-->
		<div class="store_owner">
			<img class="store_owner_icon" src="img/comment_blue_bg@2x.png" srcset="img/comment_blue_bg@2x.png 2x,img/comment_blue_bg@3x.png 3x">
			<div class="store_owner_content">店铺达人</div>
		</div>
		<div class="swiper-container swiper-container2">
			<div class="swiper-wrapper" id="assistant_swiper_container">
		<!--<div class="swiper-slide">
					<div class="shop_master_container">
						<img class="shop_master_pic" src="img/adviser_one@2x.png" />
						<div class="shop_master_msg">
							<div class="master_name_fans">
								<div class="master_name">薛之谦</div>
								<div class="blue_dot"></div>
								<div class="master_fans">224粉丝</div>
							</div>
							<div class="zan_collection">
								<img class="master_zan_pic" src="img/zan_btn@2x.png" />
								<div class="master_zan_nums">18</div>
								<img class="master_collection_pic" src="img/star_comment_no.png" />
								<div class="master_collection_nums">12</div>
							</div>
						</div>
						<div class="master_check_check">+&nbsp;聊聊</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="shop_master_container">
						<img class="shop_master_pic" src="img/adviser_one@2x.png" />
						<div class="shop_master_msg">
							<div class="master_name_fans">
								<div class="master_name">燕世城</div>
								<div class="blue_dot"></div>
								<div class="master_fans">224粉丝</div>
							</div>
							<div class="zan_collection">
								<img class="master_zan_pic" src="img/zan_btn@2x.png" />
								<div class="master_zan_nums">18</div>
								<img class="master_collection_pic" src="img/star_comment_no.png" />
								<div class="master_collection_nums">12</div>
							</div>
						</div>
						<div class="master_check_check">+&nbsp;聊聊</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="shop_master_container">
						<img class="shop_master_pic" src="img/adviser_one@2x.png" />
						<div class="shop_master_msg">
							<div class="master_name_fans">
								<div class="master_name">宇文玥</div>
								<div class="blue_dot"></div>
								<div class="master_fans">224粉丝</div>
							</div>
							<div class="zan_collection">
								<img class="master_zan_pic" src="img/zan_btn@2x.png" />
								<div class="master_zan_nums">18</div>
								<img class="master_collection_pic" src="img/star_comment_no.png" />
								<div class="master_collection_nums">12</div>
							</div>
						</div>
						<div class="master_check_check">+&nbsp;聊聊</div>
					</div>
				</div>-->
			</div>
			<!--分页器-->
			<!--<div class="swiper-pagination swiper-p2"></div>-->
			<!--<div>
				<img class="searching_detail_top_back" src="img/searching_good_shop/back_btn_white@2x.png" srcset="img/searching_good_shop/back_btn_white@2x.png 2x,img/searching_good_shop/back_btn_white@3x.png 3x" />
			</div>-->
		</div>
		<div class="line_interval"></div>

		<!--笔记动态-->
		<div class="note_dynamics">
			<div>
				<img src="img/note_icon@2x.png" srcset="img/note_icon@2x.png 2x,img/note_icon@3x.png 3x" class="mess_img">
			</div>
			<div>
				<p class="store_owner_text">笔记动态</p>
			</div>
			<div class="background_color_FF overflow_x clear_both note_dynamics_content">
				<div class="the_pictures_in_shop_container" id="notes_dynamic_container">
					
					<!--<div class="note_dynamics_img">
						<img class="the_pictures_in_shop_container_img" src="img/searching_good_shop/product_one@2x.png" srcset="img/searching_good_shop/product_one@2x.png 2x,img/searching_good_shop/product_one@3x.png 3x" />
						<div class="note_des">大家多年的晕血症估计在这款手机</div>
						<div class="note_des_container">
							<img class="note_dynamics_headpro" src="img/adviser_one@2x.png"/>
							<div class="note_dynamics_headname">LIN_MEI</div>
							<img class="note_zan_pic" src="img/zan_btn@2x.png" srcset="" />
							<div class="note_zan_num">778</div>
						</div>
					</div>-->
					
				</div>
			</div>
		</div>
		<!--热销产品-->
		<div class="margin_top_six">
			<div class="hot_sale_product">
				<img class="mess_img" src="img/hot_product_icon@2x.png" srcset="img/hot_product_icon@2x.png 2x,img/hot_product_icon@3x.png 3x">
				<p class="store_owner_text">热销产品</p>
				<div class="background_color_FF overflow_x clear_both note_dynamics_content">
					<div class="the_pictures_in_shop_container" id="hot_sale_product_container">

						<!--<div class="hot_sale_exhibition">
							<img class="hot_sale_img" src="img/product_pic@2x.png" srcset="img/product_pic@2x.png 2x,img/product_pic@3x.png 3x" />
							<div class="hot_product_des">魅族 note5金色32G</div>
							<div class="hot_red_price">￥1299</div>
						</div>-->
						
					</div>
				</div>
			</div>
		</div>
		<div class="line_all"></div>
		<!--筛选框-->
		<div class="filter_box">
			<div class="filter_item big_item" id="1">最新</div>
			<div class="filter_item_next big_item" id="2">最热</div>
			<div class="filter_item_next big_item" id="3">
				价格
				<img src="img/arrow_up.png" class="arrow_up"/>
				<img src="img/arrow_down.png" class="arrow_down"/>
			</div>
			<div class="filter_item_next big_item" id="5">销量</div>
			<div class="filter_item_next" id="shaixun_btn">
				筛选
				<img class="filter_item_next_pic" src="img/shaixuan_icon@2x.png" srcset="img/shaixuan_icon@2x.png 2x,img/shaixuan_icon@3x.png 3x" />
			</div>
		</div>
		<div class="line_all"></div>
		<div class="filter_box">
			<div class="filter_item_two" id="classification_btn">
				<p class="filter_item_two_p">分类</p>
			</div>
			<div class="filter_item_next_two" id="brand_btn">
				<p class="filter_item_two_p">品牌</p>
			</div>
			<div class="filter_item_next_two" id="operator_btn">
				<p class="filter_item_two_p">运营商</p>
			</div>
			
			<div class="brand_pop_up my_pop" id="classification_pop_up">
				<div class="brand_pop_up_container" id="classification_container">
					<div class="brand_list_fist selected_item">小米1</div>
					<div class="brand_list_fist_right selected_item">苹果</div>
					<div class="brand_list_other_left selected_item">小米</div>
					<div class="brand_list_other_right selected_item">苹果</div>
				</div>
				<div class="brand_reset_sure">
					<div class="filter_reset">重置</div>
					<div class="filter_sure" id="classification_sure">确定</div>
				</div>
			</div>
			<div class="brand_pop_up my_pop" id="brand_pop_up">
				<div class="brand_pop_up_container" id="brand_container">
					<div class="brand_list_fist selected_item">小米2</div>
					<div class="brand_list_fist_right selected_item">苹果</div>
					<div class="brand_list_other_left selected_item">小米</div>
					<div class="brand_list_other_right selected_item">苹果</div>
				</div>
				<div class="brand_reset_sure">
					<div class="filter_reset">重置</div>
					<div class="filter_sure" id="brand_sure">确定</div>
				</div>
			</div>
			<div class="brand_pop_up my_pop" id="operator_pop_up">
				<div class="brand_pop_up_container" id="operator_container">
					<div class="brand_list_fist selected_item">小米3</div>
					<div class="brand_list_fist_right selected_item">苹果</div>
					<div class="brand_list_other_left selected_item">小米</div>
					<div class="brand_list_other_right selected_item">苹果</div>
				</div>
				<div class="brand_reset_sure">
					<div class="filter_reset">重置</div>
					<div class="filter_sure" id="operator_sure">确定</div>
				</div>
			</div>
		</div>
		<div class="product_container ">
			<div class="searching_product_left_container">

				<!--<div class="searching_product_left">
					<div class="text_align_center">
						<img src="img/searching_good_shop/product_one@2x.png" srcset="img/searching_good_shop/product_one@2x.png 2x,img/searching_good_shop/product_one@3x.png 3x" />
					</div>
					<div class="searching_container_product_name">Apple iphone 7</div>
					<div class="searching_container_product_price">
						<div class="searching_container_product_price_new">￥5688</div>
					</div>
				</div>-->
				
			</div>
			<div class="searching_product_right_container">
				
				<!--<div class="searching_product_right">
					<div class="text_align_center">
						<img src="img/searching_good_shop/product_one@2x.png" srcset="img/searching_good_shop/product_one@2x.png 2x,img/searching_good_shop/product_one@3x.png 3x" />
					</div>
					<div class="searching_container_product_name">Apple iphone 7</div>
					<div class="searching_container_product_price">
						<div class="searching_container_product_price_new">￥5788</div>
					</div>
				</div>-->
				
			</div>
		</div>
		<!--点击筛选弹窗-->
		<div class="alert_first_background" id="shaixuan">
			<div class="alert_second_background" id="shaixuan_second">
				<div class="filter_price">价格区间（元）</div>
				<div class="filter_price_container">
					<input class="filter_price_low" placeholder="最低价" onkeyup="clearNoNum(this)"/>
					<input class="filter_price_height" placeholder="最高价" onkeyup="clearNoNum(this)"/>
				</div>
				<div class="filter_brand">品牌</div>
				<div class="filter_brand_first_container">
					<div class="filter_brand_second_container">
						<!--<div class="brand_container">
							<img class="brand_logo" src="img/xiaomi_logo@2x.png" srcset="img/xiaomi_logo@2x.png 2x,img/xiaomi_logo@3x.png 3x" />
							<div class="brand_name">小米</div>
						</div>
						<div class="brand_container brand_container_margin_left">
							<img class="brand_logo" src="img/xiaomi_logo@2x.png" srcset="img/xiaomi_logo@2x.png 2x,img/xiaomi_logo@3x.png 3x" />
							<div class="brand_name">小米</div>
						</div>
						<div class="brand_container brand_container_margin_left">
							<img class="brand_logo" srcset="img/xiaomi_logo@2x.png 2x,img/xiaomi_logo@3x.png 3x" />
							<div class="brand_name">小米</div>
						</div>
						<div class="brand_container brand_container_margin_left">
							<img class="brand_logo" src="img/xiaomi_logo@2x.png" srcset="img/xiaomi_logo@2x.png 2x,img/xiaomi_logo@3x.png 3x" />
							<div class="brand_name">小米</div>
						</div>-->
					</div>
				</div>
				<div class="filter_reset_sure">
					<div class="filter_reset" id="reset_btn_shaixuan">重置</div>
					<div class="filter_sure" id="sure_btn_shaixuan">确定</div>
				</div>
			</div>
		</div>
		<!--点击品牌的弹出层-->
	</body>
	<script type="text/javascript" src="js/common_js/vconsole.min.js"></script>
	<script type="text/javascript" src="js/common_js/change_fontsize.js"></script>
	<script type="text/javascript" src="js/common_js/my_tools.js"></script>
	<script type="text/javascript" src="js/common_js/swiper.min.js"></script>
	<script type="text/javascript" src="js/searching_good_shop_detail.js"></script>
	<script type="text/javascript">
		//筛选框小数点控制
		function clearNoNum(obj){
				obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
				obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
				obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
				obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
				if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
				obj.value= parseFloat(obj.value);
			}
		}

	//加载分页器'.swiper-container'
	var swiper = new Swiper('.swiper-container1', {
		direction: 'horizontal',
		loop: true,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		speed: 300,
		autoplay: 2000, //自动切换的时间间隔
		paginationClickable: true,//拖动Swiper时阻止click事件
		//分页器
		pagination: '.swiper-p1',
		centeredSlides: true, //设定为true时，活动块会居中，而不是默认状态下的居左
		autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay，设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
	});

	var swiper2 = new Swiper('.swiper-container2', {
		direction: 'horizontal',
		loop: true,
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
		speed: 300,
		autoplay: 2000,
		paginationClickable: true,
		//分页器
		pagination: '.swiper-p2',
		centeredSlides: true,
		autoplayDisableOnInteraction: false
	});

	/*var	swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			paginationClickable: true,
			spaceBetween: 30,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});*/
	</script>
</html>