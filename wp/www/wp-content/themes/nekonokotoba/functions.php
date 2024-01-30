<?php 
/**
 * 【管理画面】投稿メニューを非表示
 */

function remove_menus () {
  global $menu;
  remove_menu_page( 'edit.php' );
}
add_action('admin_menu', 'remove_menus');

/**
 * 固定ページのエディタを無効化
 */

 function remove_post_support() {
  remove_post_type_support('page','comments');
  remove_post_type_support('page','trackbacks');
  remove_post_type_support('page','editor');
}
add_action('init','remove_post_support');