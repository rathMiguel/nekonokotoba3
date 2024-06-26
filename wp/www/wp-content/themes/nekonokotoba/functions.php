<?php 
/**
 * 設定ファイルの読み込み
 * リポジトリからクローンして最初に設定すること
 */

 locate_template('env.php', true);

/**
 * アイキャッチ画像の有効化
 */

 add_theme_support('post-thumbnails');

/**
 * 【管理画面】投稿メニューの名前を変更
 */

 function Change_menulabel() {
	global $menu;
	global $submenu;
	$name = 'お知らせ';
	$menu[5][0] = $name;
	$submenu['edit.php'][5][0] = $name.'一覧';
	$submenu['edit.php'][10][0] = '新しい'.$name;
}
function Change_objectlabel() {
	global $wp_post_types;
	$name = 'お知らせ';
	$labels = &$wp_post_types['post']->labels;
	$labels->name = $name;
	$labels->singular_name = $name;
	$labels->add_new = _x('追加', $name);
	$labels->add_new_item = $name.'の新規追加';
	$labels->edit_item = $name.'の編集';
	$labels->new_item = '新規'.$name;
	$labels->view_item = $name.'を表示';
	$labels->search_items = $name.'を検索';
	$labels->not_found = $name.'が見つかりませんでした';
	$labels->not_found_in_trash = 'ゴミ箱に'.$name.'は見つかりませんでした';
}
add_action( 'init', 'Change_objectlabel' );
add_action( 'admin_menu', 'Change_menulabel' );

/**
 * 固定ページのエディタを無効化
 */

 function remove_post_support() {
	/** お知らせ */
  remove_post_type_support('post','comments');
  remove_post_type_support('post','trackbacks');
  remove_post_type_support('post','editor');

	/** 固定ページ */
  remove_post_type_support('page','comments');
  remove_post_type_support('page','trackbacks');
  remove_post_type_support('page','editor');
}
add_action('init','remove_post_support');

/**
 * ACFのデータベースフィールドにシート一覧を出力
 */

function acf_load_teacher_field_choices( $field ) {
	$sheet_json = '';

	$context = stream_context_create(
		[
			"http" => [
				"ignore_errors" => true
			]
		]
	);
	$url = file_get_contents('https://sheets.googleapis.com/v4/spreadsheets/'.SHEET_ID.'/?key='.GOOGLE_API_KEY, false, $context);

	if($url){
		$sheet_json = json_decode($url);
	}

	$field['choices'] = array();
	if($sheet_json){
		foreach($sheet_json->sheets as $sheet){
			if($sheet->properties->title !== '運用ルール' ){
				$field['choices'][$sheet->properties->title] = $sheet->properties->title;
			}
		}
	}

	return $field;
}

add_filter('acf/load_field/name=sheet_title', 'acf_load_teacher_field_choices');

/**
 * 柔軟コンテンツの各ブロックにタイトルを設定
 * 「title」サブフィールドを設けるとそのフィールドに入力された内容が柔軟コンテンツフィールドのブロックに反映される
 */

function my_acf_fields_flexible_content_layout_title( $title, $field, $layout, $i ) {
	if( $text = get_sub_field('title') ) {
		$title = '<b>' . esc_html($text) . '</b> - ' . $title;
	}

	return $title;
}

add_filter('acf/fields/flexible_content/layout_title/name=content', 'my_acf_fields_flexible_content_layout_title', 10, 4);

/**
 * プレビュー用の設定
 */

 add_action("template_redirect", function () {
  if (!is_admin() && isset($_GET["preview"]) && $_GET["preview"] == true) {
		$posttype = get_post_type(get_the_ID());

    $id = $_GET["p"];
    $redirect = add_query_arg(
      [
        "preview" => "true",
        "id" => $id,
        "posttype" => $posttype,
      ],
      "http://localhost:3000/preview/" // TODO 本番環境でも動作させる場合はドメインを変更
    );
    wp_redirect($redirect);
  }
});