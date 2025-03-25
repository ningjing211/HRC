<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta http-equiv="cache-control" content="no-cache"/>
	<meta http-equiv="pragma" content="no-cache"/>

	<meta name="google" content="notranslate"/>
	<meta name="format-detection" content="telephone=no"/>
	<meta name="language" content="en_EN"/>
	<meta name="robots" content="NOODP"/>
	<meta name="msnbot" content="NOODP"/>
	<meta name="googlebot" content="NOODP"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no"/>

	<meta name="description"
			content="BIG has grown organically over the last two decades from a founder, to a family, to a force of 700. Our latest transformation is the BIG LEAP: Bjarke Ingels Group of Landscape, Engineering, Architecture, Planning and Products. A plethora of in-house perspectives allows us to see what none of us would be able to see on our own. The sum of our individual talents becomes our collective creative genius. A small step for each of us becomes a BIG LEAP for all of us."/>
	<meta property="og:description"
			content="BIG has grown organically over the last two decades from a founder, to a family, to a force of 700. Our latest transformation is the BIG LEAP: Bjarke Ingels Group of Landscape, Engineering, Architecture, Planning and Products. A plethora of in-house perspectives allows us to see what none of us would be able to see on our own. The sum of our individual talents becomes our collective creative genius. A small step for each of us becomes a BIG LEAP for all of us."/>
	<meta name="twitter:description"
			content="BIG has grown organically over the last two decades from a founder, to a family, to a force of 700. Our latest transformation is the BIG LEAP: Bjarke Ingels Group of Landscape, Engineering, Architecture, Planning and Products. A plethora of in-house perspectives allows us to see what none of us would be able to see on our own. The sum of our individual talents becomes our collective creative genius. A small step for each of us becomes a BIG LEAP for all of us."/>
	<meta property="og:locale" content="en_US"/>
	<meta property="og:type" content="website"/>
	<meta property="og:site_name" content="BIG | Bjarke Ingels Group"/>
	<meta name="twitter:card" content="summary_large_image"/>
	
		 
	
	<meta name="msapplication-TileImage" content="/favicon.ico"/>
	<meta name="theme-color" content="#ffffff">

	<link rel="icon" href="/favicon.ico" sizes="192x192"/>
	<link rel="apple-touch-icon" href="/favicon.ico"/>

	<link rel="stylesheet" href="/build/css/bundle.css?1737374251" crossorigin>

	
</head>

<body>
<script>
!function () {

	function trackRedirect(redirectedPath) {
		var eventName = 'redirect-to-pixel';
		fetch('https://plausible.io/api/event', {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: JSON.stringify({
				n: eventName,
				u: location.href,
				d: 'big.dk',
				r: document.referrer || null,
				w: window.innerWidth,
				h: 0,
				p: JSON.stringify({ redirectedPath })
			})
		}).then(() => {
			console.log('redirect tracked');
		}).catch(() => {
			console.log('redirect tracking failed');
		});
	}

	var oldSiteProjectCodes = ["apmt","cmc","nye","sing","edu","sluis","flm","june","zrh","vstr","aph","gbv","vph","metz","ocxb","goe","jrc","treeh","neur","nabr","oosc","eset","120f","hbhq","fv","new","bist","hgkp","marsk","nasa2","wild","deep","vtciii","escr","oppoh","e126","hcc","pegasus","tfc","psi","nasa","bkb","wbc","apm","van","stro","twc","dbklyn","rivr","clm","wils","arc","kis","vejl","o4","meca","aar","form","ett","alto2","isom","panda","sfc","bqp","glce","t22","bhq","st7","acol","aball","luxo","wes1","dong","faer","sem","sbank","mipro","abad","klein","acg","eurc","trna","noma","rbdsf","sshq","ead","leg","mars","kak","gsun","mcb","lock","kgx","gce","tld","spff","hfz","laad","pdb","coco","hype","navy","con","w57","ark","xpav","skum","fcb","mol","wft","king","serp","tsp","nypd","pitt","2wtc","ghg","h2c","stc","bps","smi","gug","bsn7","maze","upp","hud","kim2","axl","bhs","hum","aht","sof","bbp","zoo","ol","mbs","hei","ess","klt","cym","pho","fgl","vin","suk","snm","yon","tcc","sbr","vvv","pier","mia","kim","lap","spp","far","son","gbs","tryg","kron","parc","vrn","vaga","qnm","tir","ice","nuuk","stp","e2","xpo","stl","audi","loop","vil","sk2","kube","8","tek","ger","hua","tam","for","tat","holy","anl","dtu","nyt","sib","wall","nice","ccc","str","wvws","gmo","yim","mont","zir","hoj","tlt","hos","utr","baw","kol","abu2","hot","bki","slu","wtc","abu1","mtn","w","arl","carl","cphx","pot","sca","bor","soro","hoa","war","sja","lil","m2","lego","kas","dun","ski","nyc","2kr","met","fur","isr","vib1","vib2","asp","nlp","jess","1","ech","bi","bat","psy","big","hol","mer","nab","pol","vm","kung","1st","bil","tiv","klm","bro","toj","dk","ren","lim","ldk","wwa","wib","aks","mar","sci","hav","www","epo","vej","sta","bla","bad","ktk","mag","mon","fre","bko","gem","oda","bbb","dbf"];
	var projectsCodeWithSlug = JSON.parse(`[
			]`);

	var redirectPages = {
		'/#about': '/about',
		'/#jobs': '/careers',
		'/#contact': '/people',
		'/#news': '/news',
		'/#awards': '/news',
		'/#events': '/events',
	};

	var oldPages = {
		'/#video': 'https://pixel.big.dk/#video',
		'/#shop': 'https://pixel.big.dk/#shop',
		'/#engineering': 'https://pixel.big.dk/#engineering',
		'/#big-ideas': 'https://pixel.big.dk/#big-ideas',
	};

	var path = '/' + window.location.hash.toLowerCase();
	if (redirectPages[path]) {
		window.location.href = redirectPages[path];
		return;
	}

	if (oldPages[path]) {
		trackRedirect(path);
		window.location.href = oldPages[path];
		return;
	}

	if (!path.includes('/#projects-')) {
		return;
	}

	var projectCode = (path.split('/#projects-')[1] || '').toLowerCase();
	if (!projectCode) {
		return;
	}

	var projectFound = projectsCodeWithSlug.find(function(p) { return p.code.toLowerCase() === projectCode; });
	if (projectFound && projectFound.slug) {
		window.location.href = `/projects/${projectFound.slug}`;
		return;
	}

	if (oldSiteProjectCodes.includes(projectCode)) {
		trackRedirect('/#projects-' + projectCode);
		window.location.href = 'https://pixel.big.dk/#projects-' + projectCode;
		return;
	}
}();
</script>

<div id="GlobalCursor">
	<div class="pause"><img src="/assets/svg/cursor/pause.svg"></div>
	<div class="play"><img src="/assets/svg/cursor/play.svg"></div>
	<div class="arrow_right_white arrowBig"><img src="/assets/svg/cursor/arrow_right_white.svg"></div>
	<div class="arrow_left_white arrowBig"><img src="/assets/svg/cursor/arrow_left_white.svg"></div>
	<div class="arrow_right_small arrowSmall"><img src="/assets/svg/cursor/arrow_right_small.svg"></div>
	<div class="arrow_left_small arrowSmall"><img src="/assets/svg/cursor/arrow_left_small.svg"></div>
</div>


<div id="SiteWrapper">
	<div class="Intro">

	<div class="bg"></div>

	<div class="logoPlaceholder">
		<svg width="45" height="20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 0V20H23.9944V0H20ZM44.0085 3.99435V0H28.0028V20H44.0085V8.00282H36.0056V11.9972H40.0141V15.9915H32.0113V3.99435H44.0085ZM11.9972 8.00282V0H0V20H16.0056V8.00282H11.9972V8.00282ZM3.99435 3.99435H8.00282V8.00282H3.99435V3.99435ZM11.9972 16.0056H3.99435V11.9972H11.9972V16.0056Z" fill="white"/>
		</svg>
	</div>

	<div class="letters">
		<div class="letter">L</div>
		<div class="letter">E</div>
		<div class="letter">A</div>
		<div class="letter">P</div>
		<div class="letter lastLetter">P</div>
	</div>

</div>
	<div class="MainMenu">
	<div class="bgBar"></div>

	<div class="logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 98">
			<polyline class="stroke letter-b-1" points="9.82 78.44 9.82 9.82 49.04 9.82 49.04 39.27" style="stroke-dasharray: 138.29; stroke-dashoffset: 0px;"></polyline>
			<polyline class="stroke letter-b-2" points="68.67,78.44 68.67,49.04 19.63,49.04" style="stroke-dasharray: 79.44; stroke-dashoffset: 0px;"></polyline>
			<line class="stroke letter-b-3" y1="88.26" x2="78.44" y2="88.26"></line>
			<rect class="letter-i" width="19.63" height="98.08" x="98.08" y="0" data-svg-origin="107.89500141143799 49.040000915527344" style="transform-origin: 0px 0px;"
				  transform="matrix(1,0,0,1,0,0)"></rect>
			<line class="stroke letter-g-1" x1="137.25" y1="9.82" x2="215.7" y2="9.82"></line>
			<polyline class="stroke letter-g-2" points="147.07,19.63 147.07,88.26 205.88,88.26 205.88,49.04 176.52,49.04" style="stroke-dasharray: 197.02; stroke-dashoffset: 0px;"></polyline>
		</svg>
	</div>

	<div class="searchBg"></div>

	<div class="container itemContainer">
		<div class="innerContainer">


			<div class="mobileButton">
				<div class="line1"></div>
				<div class="line2"></div>
				<div class="line3"></div>
				<div class="line4"></div>
			</div>
			<div class="items mainFilter">
				<div class="item" data-value="landscape" data-id="0" data-main="true">LANDSCAPE</div>
				<div class="item" data-value="engineering" data-id="1" data-main="true">ENGINEERING</div>
				<div class="item" data-value="architecture" data-id="2" data-main="true">ARCHITECTURE</div>
				<div class="item" data-value="planning" data-id="3" data-main="true">PLANNING</div>
				<div class="item noMarginRight" data-value="products" data-id="4" data-main="true">PRODUCTS</div>

				
				<div class="MenuSearch" data-terms="">
					<div class="inner">
						<div class="filterCount"></div>
						<div class="icon">
							<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="7.5" cy="5.5" r="4.5" stroke="black"/>
								<path d="M4 9L1 12" stroke="black"/>
							</svg>
						</div>
						<div class="lockedTerms"></div>
						<input type="text" id="search" autocomplete="off" aria-label="Search for projects" value="" class="searchInput"/>
						<div class="sidebar">
							<div class="autoComplete"></div>
						</div>
					</div>
				</div>
			</div>

			<div class="secondaryMenuBar">
				<div class="inner">
					<div class="itemHeadlineMobile mobileOnly"><span class="plus">+</span> LANDSCAPE</div>
					<div class="itemSecondaryMenu">
						<div class="subItem item mobileOnly" data-leapp="landscape" data-value="landscape" data-id="5">View all</div>
						<div class="subItem item" data-leapp="landscape" data-value="public realm" data-id="6">Public Realm</div>
						<div class="subItem item" data-leapp="landscape" data-value="parks" data-id="7">Parks</div>
						<div class="subItem item" data-leapp="landscape" data-value="gardens" data-id="8">Gardens</div>
						<div class="subItem item" data-leapp="landscape" data-value="terraces" data-id="9">Terraces</div>
					</div>
					<div class="itemHeadlineMobile mobileOnly"><span class="plus">+</span> ENGINEERING</div>
					<div class="itemSecondaryMenu">
						<div class="subItem item mobileOnly" data-leapp="engineering" data-value="engineering" data-id="10">View all</div>
						<div class="subItem item" data-leapp="engineering" data-value="structure" data-id="11">Structure</div>
						<div class="subItem item" data-leapp="engineering" data-value="simulation" data-id="12">Simulation</div>
						<div class="subItem item" data-leapp="engineering" data-value="sustainability" data-id="13">Sustainability</div>
					</div>
					<div class="itemHeadlineMobile mobileOnly"><span class="plus">+</span> ARCHITECTURE</div>
					<div class="itemSecondaryMenu">
						<div class="subItem item mobileOnly" data-leapp="architecture" data-value="architecture" data-id="14">View all</div>
						<div class="subItem item" data-leapp="architecture" data-value="culture" data-id="15">Culture</div>
						<div class="subItem item" data-leapp="architecture" data-value="education" data-id="16">Education</div>
						<div class="subItem item" data-leapp="architecture" data-value="work" data-id="17">Work</div>
						<div class="subItem item" data-leapp="architecture" data-value="hospitality" data-id="18">Hospitality</div>
						<div class="subItem item" data-leapp="architecture" data-value="residential" data-id="19">Residential</div>
						<div class="subItem item" data-leapp="architecture" data-value="infrastructure" data-id="20">Infrastructure</div>
						<div class="subItem item" data-leapp="architecture" data-value="space" data-id="21">Space</div>
						<div class="subItem item" data-leapp="architecture" data-value="interiors" data-id="22">Interiors</div>
						<div class="subItem item" data-leapp="architecture" data-value="sports" data-id="23">Sports</div>
						<div class="subItem item" data-leapp="architecture" data-value="health" data-id="24">Health</div>
					</div>
					<div class="itemHeadlineMobile mobileOnly"><span class="plus">+</span> PLANNING</div>
					<div class="itemSecondaryMenu">
						<div class="subItem item mobileOnly" data-leapp="planning" data-value="planning" data-id="25">View all</div>
						<div class="subItem item" data-leapp="planning" data-value="campus" data-id="26">Campus</div>
						<div class="subItem item" data-leapp="planning" data-value="city" data-id="27">City</div>
						<div class="subItem item" data-leapp="planning" data-value="region" data-id="28">Region</div>
					</div>
					<div class="itemHeadlineMobile mobileOnly"><span class="plus">+</span> PRODUCTS</div>
					<div class="itemSecondaryMenu">
						<div class="subItem item mobileOnly" data-leapp="products" data-value="products" data-id="29">View all</div>
						<div class="subItem item" data-leapp="products" data-value="lighting" data-id="30">Lighting</div>
						<div class="subItem item" data-leapp="products" data-value="furniture" data-id="31">Furniture</div>
						<div class="subItem item" data-leapp="products" data-value="consumer products" data-id="32">Consumer products</div>
						<div class="subItem item" data-leapp="products" data-value="mobility" data-id="33">Mobility</div>
						<div class="subItem item" data-leapp="products" data-value="installations" data-id="34">Installations</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="submenu">
		<div class="container">
			<div class="links">
				<a href="/" class="menuItem">PROJECTS</a><br>
				<a href="/news" class="menuItem">NEWS</a><br>
				<a href="/about" class="menuItem">ABOUT</a><br>
				<a href="/sustainability" class="menuItem">SUSTAINABILITY</a><br>
				<a href="/people" class="menuItem">PEOPLE</a><br>
				<a href="/careers" class="menuItem">CAREERS</a><br>
				<div class="contact menuItem">CONTACT</div><br>
			</div>
		</div>
	</div>
</div>

	<div id="TemplateLayer">
			<div data-template="ErrorTemplate" data-title="Error 404" class="template ErrorTemplate">

		<div class="container">
			<div class="innerContainer">

				<div class="content">
					<h1 class="status">						<span>4</span><span class="zero"></span><span>4</span>
						<br/>
						</h1>
					<p class="info">Not Found</p>
				</div>
			</div>
		</div>

	</div>
	</div>

	<div class="centerMarkerHorizontal"></div>
	<div class="centerMarkerVertical"></div>

	<div class="Footer">
	<div class="container">
		<div class="innerContainer">
			<div class="items">
							</div>
			<script type="text/javascript">
				document.querySelectorAll('.Footer .items .item label').forEach(function(label) {
					var input = label.previousElementSibling;
					label.addEventListener('click', function() {
						if (input.checked) {
							setTimeout(function() { 
								input.checked = false; 
							}, 5); 
						}
					});
				});
			</script>
		</div>

		<div class="backToTop">
			<div class="arrow">
				<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.519531 4.63672L4.15601 1.00024L7.79249 4.63672" stroke="#797979"/>
					<path d="M4.15598 1.00027V9.31223" stroke="#797979"/>
				</svg>
			</div>
			<p class="label">BACK TO TOP</p>
			<div class="arrow">
				<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.519531 4.63672L4.15601 1.00024L7.79249 4.63672" stroke="#797979"/>
					<path d="M4.15598 1.00027V9.31223" stroke="#797979"/>
				</svg>
			</div>
		</div>
	</div>
</div>
</div>

<script>
	//Safari 10 nomodule fix:
	!function () {
		var e = document, t = e.createElement('script');
		if (!('noModule' in t) && 'onbeforeload' in t) {
			var n = !1;
			e.addEventListener('beforeload', function (e) {
				if (e.target === t) n = !0; else if (!e.target.hasAttribute('nomodule') || !n) return;
				e.preventDefault();
			}, !0), t.type = 'module', t.src = '.', e.head.appendChild(t), t.remove();
		}
	}();
</script>

<script type="module" src="/build/js/main.js?1737374251" crossorigin></script>
<script nomodule src="/build/js/main.legacy.js?1742860800" crossorigin></script>
<script defer data-domain="big.dk" src="https://plausible.io/js/script.js"></script>

</body>
</html>
