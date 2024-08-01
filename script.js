<script type='text/javascript'>
//<![CDATA[
/* Twitter popup */
(function($){
	$(document).ready(function(){
		$('a.popup').click(function(event){
			var width  = 575,
				height = 400,
				left   = ($(window).width()  - width)  / 2,
				top    = ($(window).height() - height) / 2,
				url    = this.href,
				opts   = 'status=1' +
						 ',width='  + width  +
						 ',height=' + height +
						 ',top='    + top    +
						 ',left='   + left;

			window.open(url, 'twitter', opts);

			return false;
		});
	});
})(jQuery);
$(document).ready(function(){
var pull        = $('#pull');
	menu        = $('.morpho-main-menu ul');
	menuHeight  = menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});
//]]>
</script>
<script type="text/javascript">
function removeHtmlTag(strx,chop){
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<");
		for(var i=0;i<s.length;i++){
			if(s[i].indexOf(">")!=-1){
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
			}
		}
		strx = s.join("");
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2;
	while(strx.charAt(chop-1) != ' ' && strx.indexOf(' ',chop) != -1) chop++;
	strx = strx.substring(0,chop-1);
	return strx+'...';
}
</script>
<script type="text/javascript">
function createSummaryAndThumb(pID){
	var div = document.getElementById(pID);
	var imgtag = "";
	var img = div.getElementsByTagName("img");
	var summ = summary_noimg;
	if(img.length>=1) { 
		imgtag = '<span class="morpho-thumb" style="background:url('+img[0].src+') no-repeat center center; background-size: cover;"></span>';
		summ = summary_img;
	}
	var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
	div.innerHTML = summary;
}
</script>
<script type="text/javascript">
var pagetype=document.body.getAttribute("data-type"),postperpage=8,numshowpage=3,currentPage=1,numPages=0,allPosts=[];function showPage(b){var d=b*postperpage;var a=d+postperpage;if(a>allPosts.length){a=allPosts.length}$("#blog-pager").hide();$("#blog-pager-newer-link").hide();$("#blog-pager-older-link").hide();$(".post").hide();for(var c=d;c<a;c++){$("#post-"+allPosts[c].id).show()}if(numPages>1){$("#blog-pager").show();if(currentPage>1){$("#blog-pager-newer-link").show()}if(currentPage<numPages){$("#blog-pager-older-link").show()}}}function prePagination(){numPages=Math.ceil(allPosts.length/postperpage);showPage(0);$("#blog-pager-newer-link").click(function(a){a.preventDefault();if(currentPage>1){currentPage--;showPage(currentPage-1)}});$("#blog-pager-older-link").click(function(a){a.preventDefault();if(currentPage<numPages){currentPage++;showPage(currentPage-1)}})}$(document).ready(function(){var a=$(".post").map(function(){return{id:$(this).attr("id"),date:new Date($(this).find(".published").text().trim())}}).get();a.sort(function(c,b){return b.date-c.date});allPosts=a;prePagination()});
</script>
<script type="text/javascript">
function showCommentsOnMenu() {
    var a = document.getElementById("commentCount");
    if (a.innerHTML == "0") {
        document.getElementById("comments-wrapper").style.display = "none";
    } else {
        document.getElementById("comments-wrapper").style.display = "block";
    }
}
</script>
