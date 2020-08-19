		var movies = [ 
			"spiderman", "joker", "frozen2", "onward",
			"dilbechara", "gulabositabo", "kesari", "83",
			"alavaikunthapuramloo", "bheeshma", "jersey", "sahoo",
			];
		
		search = function(){

			let x = document.getElementById('input').value;
			x = x.trim().toLowerCase().replace(/ /g, "");

			for(let i=0; i<movies.length; i++){
					let movie = movies[i];
						if( x === movie.substring(0, x.length) || x.includes(movie)){
							match(movie);
						}
						else{
							noMatch(movie);
						}
				}
		}

		match = function(x){
			document.getElementById(x).style.display = "inline-block";
		}

		noMatch = function(x){
			document.getElementById(x).style.display = "none";
		}

		off = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "none";
			}
		}	
		
		on = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "inline-block";
			}
		}	

		home = function(){
			let r = document.getElementById('root');
			r.style.display = "none";
			let x = document.querySelectorAll("p.english");
			let y = document.querySelectorAll("p.hindi");
			let z = document.querySelectorAll("p.telugu");
			on(x);
			on(y);
			on(z);
		}

		english = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "ENGLISH";
			let x = document.querySelectorAll("p.english");
			let y = document.querySelectorAll("p.hindi");
			let z = document.querySelectorAll("p.telugu");
			on(x);
			off(y);
			off(z);
		}
		hindi = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "HINDI";
			let x = document.querySelectorAll("p.english");
			let y = document.querySelectorAll("p.hindi");
			let z = document.querySelectorAll("p.telugu");
			on(y);
			off(x);
			off(z);

		}
		telugu = function(){
			let r = document.getElementById('root');
			r.style.display = "block";
			r.innerHTML = "TELUGU";
			let x = document.querySelectorAll("p.english");
			let y = document.querySelectorAll("p.hindi");
			let z = document.querySelectorAll("p.telugu");
			on(z);
			off(x);
			off(y);
		}