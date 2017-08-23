(function($, document) {
	var shopId = "1"; //����id
	//�����ϸ�ҳ�洫�����Ĳ���
	var get = new queryString();
	shopId = get["jump_shop_id"];
	console.log("�������飬shopId=" + shopId);

	//�ӿ�·�������࣬ɸѡ--��ʼ����Ʒ��Ĭ��--���£�type�գ�parameter_id�գ�
	var search_type = "1"; //search_type-->1.����,2.����,3.�۸���С����,4.�۸��ɴ�С,5.������С����,6.�����ɴ�С
	var type = ""; //type-->a.����,b.Ʒ��,c.��Ӫ��
	var parameter_id = ""; //parameter_id-->ѡ��Ĳ���id

	//������ͼ�ֲ�
	//loadSwiper("swiper-container1", "swiper-p1");

	//���-����-�������൯����
	$("#classification_btn").bind('click', function() {
		$("#classification_pop_up").show();
		$(this).css("background-color", "#FFFFFF");
		type = "a";
	});
	//���-����-�����������--ȷ��
	$("#classification_sure").bind('click', function() {
		$("#classification_pop_up").hide();
		$("#classification_btn").css("background-color", "#F0F1F4");
		filterProduct();
	});

	//���-Ʒ��-����Ʒ�Ƶ�����
	$("#brand_btn").bind('click', function() {
		$("#brand_pop_up").show();
		$(this).css("background-color", "#FFFFFF");
		type = "b";
	});
	//���-Ʒ��-�����������--ȷ��
	$("#brand_sure").bind('click', function() {
		$("#brand_pop_up").hide();
		$("#brand_btn").css("background-color", "#F0F1F4");
		filterProduct();
	});

	//���-��Ӫ��-������Ӫ�̵�����
	$("#operator_btn").bind('click', function() {
		$("#operator_pop_up").show();
		$(this).css("background-color", "#FFFFFF");
		type = "c";
	});
	//���-��Ӫ��-�����������--ȷ��
	$("#operator_sure").bind('click', function() {
		$("#operator_pop_up").hide();
		$("#operator_btn").css("background-color", "#F0F1F4");
		filterProduct();
	});

	//ѡ�������id�����£����ȣ��۸�������
	$(".big_item").bind("click", function() {
		search_type = $(this).attr("id");
		if(search_type == 3) {
			$(this).attr("id", "4");
		} else if(search_type == 4) {
			$(this).attr("id", "3");
		}
		if(search_type == 5) {
			$(this).attr("id", "6");
		} else if(search_type == 6) {
			$(this).attr("id", "5");
		}
		$(this).addClass("color_blue").siblings().removeClass("color_blue");
		clearSelect();
		shaiXuan();
	});

	//����ǰ���div
	function clearSelect() {
		$(".searching_product_left_container div").remove();
		$(".searching_product_right_container div").remove();
	}
	//ѡ����࣬Ʒ�ƣ���Ӫ���еķ���
	$(".my_pop").on("click", ".selected_item", function() {
		//���ѡ�е�parameter_id
		parameter_id = $(this).attr("id");
		var tabIndex = $(this).index();
		$(".selected_item").each(function() {
			if($(this).index() == tabIndex) {
				$(this).children().addClass("selected");
				$(this).find('.choose_product').show();
			} else {
				$(this).children().removeClass("selected");
				$(this).find('.choose_product').hide();
			}
		})
	});


	$(".my_pop").on("click", ".selected_brand", function() {
		//���ѡ�е�parameter_id
		parameter_id = $(this).attr("id");
		var tabIndex = $(this).index();
		$(".selected_brand").each(function() {
			if($(this).index() == tabIndex) {
				$(this).children().addClass("selected");
				$(this).find('.choose_product').show();
			} else {
				$(this).children().removeClass("selected");
				$(this).find('.choose_product').hide();
			}
		})
	});

	$(".my_pop").on("click", ".selected_operator", function() {
		//���ѡ�е�parameter_id
		parameter_id = $(this).attr("id");
		var tabIndex = $(this).index();
		$(".selected_operator").each(function() {
			if($(this).index() == tabIndex) {
				$(this).children().addClass("selected");
				$(this).find('.choose_product').show();
			} else {
				$(this).children().removeClass("selected");
				$(this).find('.choose_product').hide();
			}
		})
	});
	//������࣬Ʒ�ƣ���Ӫ�̵�����֮��ĵط����رյ���
	$(document).mouseup(function(e) {
		//����Ŀ������
		var _con = $(".brand_pop_up");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$(".brand_pop_up").hide();
			$("#classification_btn ,#brand_btn ,#operator_btn").css("background-color", "#F0F1F4");
		}
	});

	//���ɸѡ����ɸѡ������
	$("#shaixun_btn").bind('click', function() {
		$("#shaixuan").show();
	});
	var priceStart = ""; //��ͼ۸�
	var priceEnd = ""; //��߼۸�
	var clickBrandId = ""; //ѡ�е�Ʒ��id
	//ѡ��Ʒ��
	$("body").on("click", ".brand_container", function() {
		clickBrandId = $(this).attr("id");
	});
	//���ɸѡ�������--����
	$("#reset_btn_shaixuan").bind("click", function() {
		clickBrandId = "";
		priceStart = "";
		priceEnd = "";
		$(".filter_price_low").val("");
		$(".filter_price_height").val("");
	});
	//���ɸѡ�������--ȷ��
	$("#sure_btn_shaixuan").bind('click', function() {
		priceStart = $(".filter_price_low").val();
		priceStart = parseFloat(priceStart);
		priceEnd = $(".filter_price_height").val();
		priceEnd = parseFloat(priceEnd);
		if((priceStart >= priceEnd || isNaN(priceEnd) || isNaN(priceStart)) && clickBrandId.length <= 0) {
			popHtml("����������۸�");
		}
		else {
				$("#shaixuan").hide();
				//�ӿ�·����ɸѡ��
				//mrsyg/kqgoods/ShopScreen.form?start_price=1&end_price=70&brand_id=1
				var urlPath_shaixuan = "mrsyg/kqgoods/ShopScreen.form";
				var need_data_shaixuan = {
					"start_price": priceStart,
					"end_price": priceEnd,
					"brand_id": clickBrandId
				};
				var data_shaixuan = myAjax(urlPath_shaixuan, need_data_shaixuan);
				if(data_shaixuan != undefined) {
					clearSelect();
					initShaiXuan(data_shaixuan);
				}
		}
	});
	//���ɸѡ������֮��ĵط����رյ���
	$(document).mouseup(function(e) {
		//����Ŀ������
		var _con = $("#shaixuan_second");
		if(!_con.is(e.target) && _con.has(e.target).length === 0) {
			$("#shaixuan").hide();
		}
	});

	//����ղص��̻���ȡ���ղص���
	$(".collection_details").bind("click", function() {
		//�Ƿ��ղع�
		var collection_flag = $(this).attr("id");
		if(collection_flag == "-1") {
			//ȡ���ղ�
			collectionShopOrNot("-1");
		} else if(collection_flag == "1") {
			//�ղ�
			collectionShopOrNot("1");
		}
	});

	//���ӪҵԱͷ�񣬽���ӪҵԱ����ҳ��
	$("#assistant_swiper_container").on("click", ".shop_master_pic", function() {
		//���ӪҵԱid
		var assistant_id=$(this).attr("id");
		native.openWebView("adviser_personal_data.jsp?jump_assistant_id="+assistant_id);
	});

	//�������
		$("#assistant_swiper_container").on("click", ".master_check_check", function() {
		var assistant_id = $(this).parent().parent().parent().parent().siblings(".note_dynamics").find(".note_dynamics_img").attr("data-id");
		//var assistant_id=$(".note_dynamics_img").attr("data-id");
		$(this).text("�ѹ�ע");
		$(this).addClass("reds_color");
		$(this).removeClass("master_check_check")
		//�ӿ�·��
		//mrsyg/kquser/FocusAssistant
		var urlPath_focus = "mrsyg/kquser/FocusEmployer.form";
		var need_data_focus = {
			"assistant_id": assistant_id,
			"type":1
		};
		var data_focus = myAjax(urlPath_focus, need_data_focus);
		if (data_focus != undefined) {
			init(data_focus);
		}
		function init(data) {
			return true;
		}
	})

	/*//ӪҵԱ��ע�ж�
	 function clickChat() {
	 var uu_id = $(".master_check_check").attr("data-uuid");
	 var assistant_focus_flag =$(".focus").attr("data-focus");
	 if (assistant_focus_flag==1){
	 return false;
	 }
	 else {
	 $(".master_check_check").text("�ѹ�ע");
	 }
	 }*/

	/*$("#assistant_swiper_container").on("click", ".master_check_check", function() {
	 var uu_id = $(this).attr("data-uuid");
	 var assistant_id=$(".note_dynamics_img").attr("data-id");
	 var assistant_focus_flag = $(this).attr("data-focus")
	 alert("assistant_id="+assistant_id);
	 alert("assistant_focus_flag="+assistant_focus_flag);
	 alert("uu_id="+uu_id);
	 if (assistant_focus_flag==1){
	 var Persion = {
	 title: "",
	 text: "",
	 imageUrl: "",
	 url: "",
	 uuid: uu_id
	 }
	 native.startChat(JSON.stringify(Persion));
	 }
	 else{
	 $(this).text("�ѹ�ע")
	 //�ӿ�·��
	 //mrsyg/kquser/FocusAssistant
	 var urlPath_focus = "mrsyg/kquser/FocusAssistant.form";
	 var need_data_focus = {
	 "assistantids": assistant_id
	 };
	 var data_focus = myAjax(urlPath_focus, need_data_focus);
	 if (data_focus != undefined) {
	 init(data_focus);
	 }
	 function init(data) {
	 return true;
	 }
	 }
	 });*/

	//����ʼǽ���ʼ�����ҳ
	$("#notes_dynamic_container").on("click", ".the_pictures_in_shop_container_img", function() {
		//��ñʼ�id
		var noteId = $(this).attr("id");
		console.log("��������ҳ��noteId=" + noteId);
		native.openView(noteId);
	});

	//�����Ʒ��������Ʒ����ҳ��������Ʒ��
	$("#hot_sale_product_container").on("click", ".hot_sale_exhibition", function() {
		//�����Ʒid
		var hot_productId = $(this).attr("id");
		native.openWebView("goods_detail.jsp?jump_product_id=" + hot_productId);
	});
	//�����Ʒ��������Ʒ����ҳ��Ʒ�ƣ�����Ȳ�Ʒ��
	$(".product_container").on("click", ".searching_product_left , .searching_product_right", function() {
		//�����Ʒid
		var other_productId = $(this).attr("id");
		native.openWebView("goods_detail.jsp?jump_product_id=" + other_productId);
	});

	//�ӿ�·����������Ϣ��
	var urlPath_one = "mrsyg/kqgoods/ShopInfo.form";
	var need_data_one = {
		"shop_id": shopId
	};
	var data_one = myAjax(urlPath_one, need_data_one);
	if(data_one != undefined) {
		init(data_one);
	}
	//�ӿ�·�������̴��ˣ�
	//mrsyg/kqgoods/ShopAssistant.form?shop_id=1&pag_no=1&pag_num=100
	var urlPath_two = "mrsyg/kqgoods/ShopAssistant.form";
	var need_data_two = {
		"shop_id": shopId,
		"pag_no": "1",
		"pag_num": "100"
	};
	var data_two = myAjax(urlPath_two, need_data_two);
	if(data_two != undefined) {
		initTwo(data_two);
	}
	//�ӿ�·�����ʼǶ�̬��
	var urlPath_three = "mrsyg/kqgoods/ShopNote.form";
	var need_data_three = {
		"shop_id": shopId,
		"pag_no": "1",
		"pag_num": "100"
	};
	var data_three = myAjax(urlPath_three, need_data_three);
	if(typeof(data_three) != "undefined" && data_three.hasOwnProperty("noteinfo")) {
		initThree(data_three);
	}
	//�ӿ�·����������Ʒ��
	//mrsyg/kqgoods/ShopGoods.form?shop_id=2&pag_no=1&pag_num=100
	var urlPath_four = "mrsyg/kqgoods/ShopGoods.form";
	var need_data_four = {
		"shop_id": shopId,
		"pag_no": "1",
		"pag_num": "100"
	};
	var data_four = myAjax(urlPath_four, need_data_four);
	if(data_four != undefined) {
		initFour(data_four);
	}

	//�ӿ�·��������--��ʼ����
	var urlPath_classification = "mrsyg/kqgoods/ShopCategory.form";
	var need_data_classification = {};
	var data_classification = myAjax(urlPath_classification, need_data_classification);
	if(data_classification != undefined) {
		initClassification(data_classification);
	}

	//�ӿ�·����Ʒ��--��ʼ����
	var urlPath_brand = "mrsyg/kqgoods/ShopBrand.form";
	var need_data_brand = {};
	var data_brand = myAjax(urlPath_brand, need_data_brand);
	if(data_brand != undefined) {
		initBrand(data_brand);
	}

	//�ӿ�·������Ӫ��--��ʼ����
	var urlPath_operator = "mrsyg/kqgoods/ShopSupplier.form";
	var need_data_operator = {};
	var data_operator = myAjax(urlPath_operator, need_data_operator);
	if(data_operator != undefined) {
		initOperator(data_operator);
	}

	//�ӿ�·�������࣬ɸѡ--��ʼ����Ʒ��Ĭ��--���£�type�գ�parameter_id�գ�
	//search_type-->1.����,2.����,3.�۸���С����,4.�۸��ɴ�С,5.������С����,6.�����ɴ�С
	//type-->a.����,b.Ʒ��,c.��Ӫ��
	//parameter_id-->ѡ��Ĳ���id
	var urlPath_product = "mrsyg/kqgoods/ShopSelect.form";
	var need_data_product = {
		"search_type": search_type,
		"type": type,
		"parameter_id": parameter_id
	};
	console.log("search_type="+search_type);
	console.log("type="+type);
	console.log("parameter_id="+parameter_id);
	var data_product = myAjax(urlPath_product, need_data_product);
	if(data_product != undefined) {
		initShaiXuan(data_product);
	}

	function init(data) {
		//��������
		var shop_name = data.shop_name;
		$("#shop_name").text(shop_name);
		//���̵ȼ�
		var shop_grade = data.shop_grade;
		var starsString = "";
		var red_stars = "";
		var gray_stars = "";
		for(var i = 0; i < shop_grade; i++) {
			red_stars = red_stars + '<div class="start_nor start_sel"></div>';
		}
		for(var i = 0; i < 5 - shop_grade; i++) {
			gray_stars = gray_stars + '<div class="start_nor"></div>';
		}
		starsString = red_stars + gray_stars;
		$(starsString).appendTo("#comment_start_box_id");
		$("#shop_grade_score").text(shop_grade);
		//��Ʒ����
		var shop_goods = data.shop_goods;
		$("#product_score").text(shop_goods);
		//��������
		var shop_delivery = data.shop_delivery;
		$("#distribution_score").text(shop_delivery);
		//��������
		var shop_service = data.shop_service;
		$("#server_score").text(shop_service);
		//���������
		var shop_satisfaction = data.shop_satisfaction;
		$("#satisfaction_degree_score").text(shop_satisfaction);
		//�Ƿ��ղ�(-1 ���ղ�1δ�ղ�)
		var shop_collection_flag = data.shop_collection_flag;
		if(shop_collection_flag == "-1") {
			$(".collection_details").attr("id", "-1");
			$("#collection_shop_img").attr("src", "img/star_comment_yes.png");
		}
		//����
		var distance = parseInt(data.distance);
		var distance_judge = "";
		if(distance >= 1000){
			distance_judge = (distance/1000).toFixed(1);
			$(".distance_unit").text("����")
		}
		else{
			distance_judge = distance.toFixed(0);
			$(".distance_unit").text("��")
		}
		$(".area_location").text(distance_judge);
		//���̵�ַ
		var shop_address = data.shop_address;
		$("#specific_locations_container_p").text(shop_address);
		//���̵绰
		var shop_mobile = data.shop_mobile;
		$(".specific_locations_container_tel").attr("id", shop_mobile);
		//������Ƭѭ��
		$.each(data.shoppicture, function(index, getdata) {
			//������Ƭ
			var picture_url = getdata.picture_url;
			/*var picture_url2x = getDifferencePic(picture_url, "2x_");
			var picture_url3x = getDifferencePic(picture_url, "3x_");*/
			var needString = '<div class="swiper-slide">' +
				'<img class="searching_detail_top_shop_pic" src="' + picture_url + '"/>' +
				'</div>';
			$(needString).appendTo("#shop_product_container");
		});
	}

	function initTwo(data) {
		$.each(data.assistantinfo, function(index, getdata) {
			//ӪҵԱ��Ƭ
			var customer_picture = getdata.customer_picture;
			//ӪҵԱid
			var assistant_id = getdata.assistant_id;
			//ӪҵԱ����
			var customer_name = getdata.customer_name;
			//ӪҵԱ��˿����
			var fans_total = getdata.fans_total;
			//��������
			var note_like_total = getdata.note_like_total;
			//�Ƿ񱻵���
			//�ղ�����
			var note_collection_total = getdata.note_collection_total;
			//�Ƿ��ղ�
			var assistant_focus = getdata.assistant_focus_flag;
			var  assistant_Focus = "";
			if  (assistant_focus == -1){
				assistant_Focus = "�ѹ�ע" ;
				var colorString = '<div class="reds_color"  data-uuid="'+im_uuid+'" id="'+ assistant_id +'">'+assistant_Focus+'</div>'
			}
			else if (assistant_focus == 1){
				assistant_Focus = "+ ����" ;
				var colorString = '<div class="master_check_check"  data-uuid="'+im_uuid+'" id="'+ assistant_id +'">'+assistant_Focus+'</div>'
			}
			var im_uuid = getdata.im_uuid
			var needString = '<div class="swiper-slide focus" data-focus="'+assistant_focus+'">' +
				'<div class="shop_master_container">' +
				'<img class="shop_master_pic" src="' + customer_picture + '"/>' +
				'<div class="shop_master_msg">' +
				'<div class="master_name_fans">' +
				'<div class="master_name one_line_font">' + customer_name + '</div>' +
				'<div class="blue_dot"></div>' +
				'<div class="master_fans">' + fans_total + '��˿</div>' +
				'</div>' +
				'<div class="zan_collection">' +
				'<img class="master_zan_pic" src="img/zan_btn@2x.png"/>' +
				'<div class="master_zan_nums">' + note_like_total + '</div>' +
				'<img class="master_collection_pic" src="img/star_comment_no.png"/>' +
				'<div class="master_collection_nums">' + note_collection_total + '</div>' +
				'</div>' +
				'</div>' +
				colorString+
				'</div>' +
				'</div>';
			$(needString).appendTo("#assistant_swiper_container");
		});
		//���̴����ֲ�
		//loadSwiper("swiper-container2", "swiper-p2");
	}

	function initThree(data) {
		var notesNUm = 0;
		$.each(data.noteinfo, function(index, getdata) {
			notesNUm = index + 1;
			//�ʼ���Ƭ
			var picture_url = getdata.picture_url;
			var picture_url2x = getDifferencePic(picture_url, "2x_");
			var picture_url3x = getDifferencePic(picture_url, "3x_");
			//�ʼ�����
			var note_name = decodeURI(getdata.note_name);
			//�ʼ�id
			var note_id = getdata.note_id;
			//ӪҵԱid
			var assistant_id = getdata.assistant_id;
			//ӪҵԱ��Ƭ
			var customer_picture = getdata.customer_picture;
			//ӪҵԱ����
			var customer_name = getdata.customer_name;
			//��������
			var note_like_total = getdata.note_like_total;
			//�Ƿ����(-1�ѵ��ޣ�1δ����)
			var note_like_flag = getdata.note_like_flag;
			//�Ƿ�����Ƶ��0û��1�У�
			var video_flag = getdata.video_flag;
			var needString = '<div class="note_dynamics_img" data-id="'+assistant_id+'">' +
				'<img class="the_pictures_in_shop_container_img" id="' + note_id + '" src="' + picture_url2x + '" />' +
				'<div class="note_des">' + note_name + '</div>' +
				'<div class="note_des_container">' +
				'<img class="note_dynamics_headpro" src="' + customer_picture + '"/>' +
				'<div class="note_dynamics_headname one_line_font">' + customer_name + '</div>' +
				'<img class="note_zan_pic" src="img/zan_btn@2x.png" srcset="" />' +
				'<div class="note_zan_num">' + note_like_total + '</div>' +
				'</div>' +
				'</div>';
			$(needString).appendTo("#notes_dynamic_container");
		});
		var setWidth = 4.5 * notesNUm;
		$("#notes_dynamic_container").css("width", setWidth + "rem");
	}

	function initFour(datas) {
		var hotProductNum = 0;
		$.each(datas.data, function(index, getdata) {
			hotProductNum = index + 1;
			//��Ʒid
			var product_id = getdata.product_id;
			//��ƷͼƬ
			var picture_url = getdata.picture_url;
			var picture_url2x = getDifferencePic(picture_url, "2x_");
			//��Ʒ����
			var product_name = getdata.product_name;
			//��Ʒ�۸�
			var product_price = getdata.product_price;
			var needString = '<div class="hot_sale_exhibition" id="' + product_id + '" >' +
				'<img class="hot_sale_img" src="' + picture_url2x + '" />' +
				'<div class="hot_product_des">' + product_name + '</div>' +
				'<div class="hot_red_price">��' + product_price + '</div>' +
				'</div>';
			$(needString).appendTo("#hot_sale_product_container");
		});
		var setHotProWidth = 2.8 * hotProductNum;
		$("#hot_sale_product_container").css("width", setHotProWidth + "rem");
	}

	function initClassification(data) {
		var needString = "";
		$.each(data.categoryinfo, function(index, getdata) {
			//����id
			var category_id = getdata.category_id;
			//��������
			var category_name = getdata.category_name;
			if(index == 0) {
				needString = needString + '<div class="brand_list_fist selected_item" id="' + category_id + '">' + category_name + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index == 1) {
				needString = needString + '<div class="brand_list_fist_right selected_item" id="' + category_id + '">' + category_name + '<img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 0 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_left selected_item" id="' + category_id + '">' + category_name + '<img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 1 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_right selected_item" id="' + category_id + '">' + category_name + '<img src="img/choose_blue.png" class="choose_product"/></div>';
			}
		});
		$("#classification_container").empty();
		$(needString).appendTo("#classification_container");
	}

	function initBrand(data) {
		var needString = "";
		var shaixuan = "";
		$.each(data.brandinfo, function(index, getdata) {
			//Ʒ��id
			var brand_id = getdata.brand_id;
			//Ʒ������
			var brand_name = getdata.brand_name;
			//Ʒ����Ƭ
			var brand_picture = getdata.brand_picture;
			if(index == 0) {
				needString = needString + '<div class="brand_list_fist selected_brand" id="' + brand_id + '">' + brand_name + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index == 1) {
				needString = needString + '<div class="brand_list_fist_right  selected_brand" id="' + brand_id + '">' + brand_name + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 0 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_left selected_brand" id="' + brand_id + '">' + brand_name + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 1 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_right selected_brand" id="' + brand_id + '">' + brand_name + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			}

			if(index % 4 == 0) {
				shaixuan = shaixuan + '<div class="brand_container" id="' + brand_id + '">' +
					'<img class="brand_logo" src="' + brand_picture + '"/>' +
					'<div class="brand_name">' + brand_name + '</div>' +
					'</div>';
			} else {
				shaixuan = shaixuan + '<div class="brand_container brand_container_margin_left" id="' + brand_id + '">' +
					'<img class="brand_logo" src="' + brand_picture + '"/>' +
					'<div class="brand_name">' + brand_name + '</div>' +
					'</div>';
			}

		});
		$("#brand_container").empty();
		$(needString).appendTo("#brand_container");
		$(".filter_brand_second_container").empty();
		$(shaixuan).appendTo(".filter_brand_second_container");
	}

	function initOperator(data) {
		var needString = "";
		$.each(data.supplierinfo, function(index, getdata) {
			//��Ӫ��id
			var supplier_id = getdata.supplier_id;
			//��Ӫ������
			var supplier_desc = getdata.supplier_desc;
			if(index == 0) {
				needString = needString + '<div class="brand_list_fist selected_operator" id="' + supplier_id + '">' + supplier_desc + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index == 1) {
				needString = needString + '<div class="brand_list_fist_right  selected_operator" id="' + supplier_id + '">' + supplier_desc + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 0 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_left  selected_operator" id="' + supplier_id + '">' + supplier_desc + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			} else if(index != 1 && index % 2 == 0) {
				needString = needString + '<div class="brand_list_other_right  selected_operator" id="' + supplier_id + '">' + supplier_desc + ' <img src="img/choose_blue.png" class="choose_product"/></div>';
			}
		});
		$("#operator_container").empty();
		$(needString).appendTo("#operator_container");
	}

	function initShaiXuan(data) {
		$.each(data.goodsinfo, function(index, getdata) {
			//��Ʒid
			var product_id = getdata.product_id;
			//��Ʒ��Ƭ
			var picture_url = getdata.picture_url;
			var picture_url2x = getDifferencePic(picture_url, "2x_");
			var picture_url3x = getDifferencePic(picture_url, "3x_");
			//��Ʒ����
			var product_name = getdata.product_name;
			//��Ʒ�۸�
			var product_price = getdata.product_price;

			var needClass = "";
			if(index % 2 == 0) {
				needClass = "searching_product_left";
			} else {
				needClass = "searching_product_right";
			}
			var needString = '<div class="' + needClass + '" id="' + product_id + '">' +
				'<div class="text_align_center">' +
				'<img src="' + picture_url2x + '" srcset="' + picture_url2x + ' 2x,' + picture_url3x + ' 3x"/>' +
				'</div>' +
				'<div class="searching_container_product_name">' + product_name + '</div>' +
				'<div class="searching_container_product_price">' +
				'<div class="searching_container_product_price_new">��' + product_price + '</div>' +
				'</div>' +
				'</div>';
			if(index % 2 == 0) {
				$(needString).appendTo(".searching_product_left_container");
			} else {
				$(needString).appendTo(".searching_product_right_container");
			}
		});
	}

//����ɸѡ��������
	function shaiXuan() {
		var urlPath_product = "mrsyg/kqgoods/ShopSelect.form";
		var need_data_product = {
			"search_type": search_type,
			"type": type,
			"parameter_id": parameter_id
		};
		var data_product = myAjax(urlPath_product, need_data_product);
		if(data_product != undefined) {
			initSelect(data_product)
		}
		function initSelect(data) {
			$.each(data.goodsinfo, function (index, getdata) {
				//��Ʒid
				var product_id = getdata.product_id;
				//��Ʒ��Ƭ
				var picture_url = getdata.picture_url;
				var picture_url2x = getDifferencePic(picture_url, "2x_");
				var picture_url3x = getDifferencePic(picture_url, "3x_");
				//��Ʒ����
				var product_name = getdata.product_name;
				//��Ʒ�۸�
				var product_price = getdata.product_price;

				var needClass = "";
				if (index % 2 == 0) {
					needClass = "searching_product_left";
				} else {
					needClass = "searching_product_right";
				}
				var needString = '<div class="' + needClass + '" id="' + product_id + '">' +
					'<div class="text_align_center">' +
					'<img src="' + picture_url2x + '" srcset="' + picture_url2x + ' 2x,' + picture_url3x + ' 3x"/>' +
					'</div>' +
					'<div class="searching_container_product_name">' + product_name + '</div>' +
					'<div class="searching_container_product_price">' +
					'<div class="searching_container_product_price_new">��' + product_price + '</div>' +
					'</div>' +
					'</div>';
				if (index % 2 == 0) {
					$(needString).appendTo(".searching_product_left_container");
				} else {
					$(needString).appendTo(".searching_product_right_container");
				}
			});
		}
	}
	function filterProduct() {
		var urlPath_product = "mrsyg/kqgoods/ShopSelect.form";
		var need_data_product = {
			"search_type": search_type,
			"type": type,
			"parameter_id": parameter_id
		};
		var data_product = myAjax(urlPath_product, need_data_product);
		if(data_product != undefined) {
			clearSelect()
			initShaiXuan(data_product);
		}
	}

	function collectionShopOrNot(type_flag) {
		//�ӿ�·����������Ϣ��
		var urlPath_collectionShop = "mrsyg/kquser/CollectionShop.form";
		var need_data_collectionShop = {
			"shop_id": shopId,
			"type": type_flag
		};
		var data_collectionShop = myAjax(urlPath_collectionShop, need_data_collectionShop);
		if(typeof(data_collectionShop) != "undefined") {
			if(type_flag == "-1") {
				$(".collection_details").attr("id", "1");
				$("#collection_shop_img").attr("src", "img/star_comment_no.png");
				popHtml("ȡ���ղسɹ�");
			} else if(type_flag == "1") {
				$(".collection_details").attr("id", "-1");
				$("#collection_shop_img").attr("src", "img/star_comment_yes.png");
				popHtml("�ղسɹ�");
			}
		}

	}
})(jQuery, document);