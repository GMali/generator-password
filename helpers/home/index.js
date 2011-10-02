jQuery(document).ready(function($){

	$("img.generate_password").click(function(){
		$(this).fadeOut(100).fadeIn(100);
		$("p.my_CSS3_class").html(generate());
	});

	function generate() {
		var string = "q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m".split(","),
			integer = "1,2,3,4,5,6,7,8,9,0".split(",");

		function _string() {
			return string[Math.floor(Math.random() * string.length)];
		}

		function _integer() {
			return integer[Math.floor(Math.random() * integer.length)];
		}

		return _string() + _string() + _integer() + _integer() + _integer() + _integer() + _string() + _string();
	}
});
