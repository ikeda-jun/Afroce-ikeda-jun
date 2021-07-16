/**
 * 
 */

$('.slider').slick({
	variableWidth: true,
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作

	if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	} else {//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}});


//モーダル表示
$(".video-open").modaal({
	start_open: flag, // ページロード時に表示するか
	overlay_close: true,//モーダル背景クリック時に閉じるか
	type: 'video',
	background: '#28BFE7', // 背景色
	overlay_opacity: 0.8, // 透過具合
	before_open: function() {// モーダルが開く前に行う動作
		$('html').css('overflow-y', 'hidden');/*縦スクロールバーを出さない*/
	},
	after_close: function() {// モーダルが閉じた後に行う動作
		$('html').css('overflow-y', 'scroll');/*縦スクロールバーを出す*/
	}
});