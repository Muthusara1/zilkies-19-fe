<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title></title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./css/main.css">
<link rel="stylesheet" href="./css/normalize.css">
<link rel="stylesheet" href="./css/grid.css">
<link rel="stylesheet" href="./css/utility.css">
<link rel="stylesheet" href="./css/nav-bar.css">
<link rel="stylesheet" href="./css/landing-page.css">
<link href="https://fonts.googleapis.com/css?family=Roboto"
	rel="stylesheet">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
	integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
	crossorigin="anonymous">
<!-- <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet"> -->
</head>

<body>
	<!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
	<!-- nav-bar -->
	<div class="Navbar">
		<div class="Navbar__Link Navbar__Link-brand">
			<i class="fas fa-home"></i>
		</div>
		<div class="Navbar__Link Navbar__Link-toggle">
			<i class="fas fa-bars"></i>
		</div>
		<!-- <nav class="Navbar__Items">
            <div class="Navbar__Link">
                All Projects
            </div>
            <div class="Navbar__Link">
                View Contractors
            </div>

        </nav> -->
		<nav class="Navbar__Items Navbar__Items--right">
			<div class="dropdown-container">
				<li class="nav__item nav__right-item dropdown-outer"><a
					href="#" class="dropdown-container__register-link">Register <i
						class="fa fa-caret-down"></i></a></li>
				<!-- Drop Down -->
				<div class="dropdown-content">
					<a href="./pages/user-registration.html">Register User</a> <a
						href="./pages/contractor-registration.html">Register
						Contractor</a>
				</div>
			</div>
			<div class="Navbar__Link">
				<a href="./index.html">Login</a>
			</div>

		</nav>
	</div>


	<!-- Navigation Bar Ending -->
	<div class="content-wrapper">


		<div class="row landing-section">
			<div class="col-lg-8 col-md-7 col-sm-12">
				<div class="landing-section__left">
					<h3>
						Making Building Stuff Easier,<br>Digitize Tender
					</h3>
				</div>
			</div>
			<div class="col-lg-4 col-md-5 col-sm-12">
				<!-- Login Section  -->
				<div class="landing-section__right">
					<form action="/TenderApplication/Login" method="POST">
						<input type="text" class="form__input" placeholder="Username "
							name="username"> <input type="password"
							class="form__input" placeholder="Password" name="password">
						<button type="submit" class="form__button">Login</button>
					</form>
					<%
						if (request.getParameter("message") != "") {
					%>
					<p>${param.message}</p>
					<%
						}
					%>
				</div>
			</div>
		</div>
		<div class="row about-application-container">
			<div class="col-lg-2"></div>
			<div class="col-lg-8 col-sm-12">
				<div class="about-application">
					<h2 class="about-application__title">WHAT WE ARE</h2>
					<p class="about-application__description">Lorem ipsum dolor sit
						amet consectetur, adipisicing elit.Perspiciatis iste quam laborum
						illo quos,provident accusamus .</p>
					<br>
					<p class="about-application__description">Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Quibusdam error totam, eaque
						temporibus ducimus obcaecati, incidunt inventore numquam et
						voluptatem fugit accusantium? Labore nemo ipsam ipsa laudantium
						necessitatibus cumque porro?</p>
				</div>
			</div>
			<div class="col-lg-2"></div>
		</div>
	</div>

	<!-- Footer Starting -->
	<div class="row footer-section">
		<div class="col-lg-4"></div>
		<div class="col-lg-4 footer__copyright">copyright &#169;
			zilker.io</div>
		<div class="col-lg-4">
			<i class="fab fa-facebook fa-2x footer-icon"></i> <i
				class="fab fa-instagram fa-2x footer-icon"></i> <i
				class="fab fa-twitter fa-2x footer-icon"></i>
		</div>
	</div>
	<!-- Footer Ending -->
	</div>

	<script src="./js/main.js" async defer></script>
</body>

</html>