<?php
	if(!isset($_GET['preview'])){
		wp_redirect( 'https://nekotobalab.com/', 301 );
	}
	exit;