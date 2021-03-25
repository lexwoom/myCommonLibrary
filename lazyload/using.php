<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>LazyLoad</title>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="jquery.lazyload.min.js" type="text/javascript"></script>    
</head>
<body>
	
	<?php for ($i = 1; $i < 10; $i++) { ?>
		<img class="lazy" data-original="img/<?php echo $i; ?>.png" width="800" height="600"><br>
	<?php } ?>


	<script type="text/javascript">

		$(document).ready(function () {
			$("img.lazy").lazyload({
			    effect : "fadeIn"
			});
		});

	</script>
</body>
</html>
