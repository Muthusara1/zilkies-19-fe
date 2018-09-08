<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/grid.css">
    <link rel="stylesheet" href="../css/utility.css">
    <link rel="stylesheet" href="../css/profile-utility.css">

    <link rel="stylesheet" href="../css/user-profile.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:800" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
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
        <nav class="Navbar__Items">
            <div class="Navbar__Link">
                All Projects
            </div>
            <div class="Navbar__Link">
                View Contractors
            </div>
            <div class="dropdown-container">
                <li class="nav__item nav__right-item dropdown-outer"><a href="#">Register <i class="fa fa-caret-down"></i></a></li>
                <!-- Drop Down -->
                <div class="dropdown-content">
                    <a href="../pages/user-registration.html">Register User</a>
                    <a href="../pages/contractor-registration.html">Register Contractor</a>
                </div>
            </div>
        </nav>
        <nav class="Navbar__Items Navbar__Items--right">

            <div class="Navbar__Link">
                Login
            </div>
            <div class="Navbar__Link">
                <a href="/TenderApplication/Logout">Logout</a>
            </div>

        </nav>
    </div>
    <!-- Navigation Bar Ending -->
    <!-- user details starting -->
    <div class="content-wrapper">
        <div class="row profile-section">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 c col-sm-12">
                <div class="profile-section__image__outer">
                    <img class="profile-section__image" src="../assets/images/profile-image.png" alt="">
                </div>
                <div class="profile-section__details ">
                    <p class="profile-section__details__inner__items profile-section__heading">Welcome, ${userSession.getUserName() } </p>
                    <div class="profile-section__details__inner">
                        <p class="profile-section__details__inner__items">Name: FirstName LastName</p>
                        <p class="profile-section__details__inner__items">Username: @iamsomething</p>
                        <p class="profile-section__details__inner__items"><i class="fas fa-map-marker-alt"></i> South
                            Side,
                            LA</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
        <!-- user details ending -->
        <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-10">
                <div class="tab">
                    <button class="tab__links" onclick="openTab(event, 'myLocationProjects')">Projects in my
                        Location</button>
                    <button class="tab__links" onclick="openTab(event, 'editProfile')">Edit Profile</button>
                    <button class="tab__links" onclick="openTab(event, 'allProjects')">All Projects</button>
                </div>
                <div id="myLocationProjects" class="tabcontent">
                    <!-- To display the projects in my location -->
                    <div class="user-location-projects">
                        <!-- card starting -->
                        <div class="card card-2">
                            <div class="user-location-projects__card-section">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <a href="./project-details.html">
                                            <p class="box__project-name box__item">Arc Reactor</p>
                                        </a>
                                        <p class="box__project-duration box__item">Duration : 12-08-2019 - 22-09-2022</p>
                                        <p class="box__project-description box__item">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit. Cumque voluptatibus
                                            maxime fugit, aperiam saepe temporibus,</p>
                                        <p class="box__project-status box__item">Yet to Start</p>
                                        <div class="user-location-projects__card-section__location box__item">
                                            <p class="box__project-contractor-name">Contractor Name: Mark Daniels</p>
                                            <p class="box__project-location"><i class="fas fa-map-marker-alt box-item__location-icon"></i>Chennai,
                                                Tamil Nadu</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card ending -->
                        <!-- card starting -->
                        <div class="card card-2">
                            <div class="user-location-projects__card-section">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p class="box__project-name box__item">Arc Reactor</p>
                                        <p class="box__project-duration box__item">Duration : 12-08-2019 - 22-09-2022</p>
                                        <p class="box__project-description box__item">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit. Cumque voluptatibus
                                            maxime fugit, aperiam saepe temporibus,
                                        </p>
                                        <p class="box__project-status box__item">Yet to Start</p>
                                        <div class="user-location-projects__card-section__location box__item">
                                            <p class="box__project-contractor-name">Contractor Name: Mark Daniels</p>
                                            <p class="box__project-location"><i class="fas fa-map-marker-alt box-item__location-icon"></i>Chennai,
                                                Tamil Nadu</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card ending -->

                    </div>
                </div>

                <div id="editProfile" class="tabcontent">
                    <!-- <h3>Edit Profile Option</h3> -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="edit-profile-section">
                                <form action="">
                                    <!-- <label for="name">Name</label> -->
                                    <div class="form-section__name">
                                        <input class="form__input" type="text" placeholder="First Name">
                                        <input class="form__input" type="text" placeholder="Last Name">
                                    </div>
                                    <!-- <label for="">Username: </label> -->
                                    <input class="form__input" type="text" placeholder="Enter a unique username">
                                    <!-- <label for="">Password: </label> -->
                                    <input class="form__input" type="password" placeholder="Password">
                                    <!-- <label for="">Confirm Password Again</label> -->
                                    <input class="form__input" type="password" placeholder="Retype Password">
                                    <!-- <label for="">Location</label> -->
                                    <input class="form__input" type="text" placeholder="Location">
                                    <button type="submit" class="form__button">Apply Changes !</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="allProjects" class="tabcontent">
                    <!-- <h3>To display All projects</h3> -->
                    <div class="user-location-projects">
                        <!-- card starting -->
                        <div class="card card-2">
                            <div class="user-location-projects__card-section">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p class="box__project-name box__item">Arc Reactor</p>
                                        <p class="box__project-duration box__item">Duration : 12-08-2019 - 22-09-2022</p>
                                        <p class="box__project-description box__item">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit. Cumque voluptatibus
                                            maxime fugit, aperiam saepe temporibus,</p>
                                        <p class="box__project-status box__item">Yet to Start</p>
                                        <div class="user-location-projects__card-section__location box__item">
                                            <p class="box__project-contractor-name">Contractor Name: Mark Daniels</p>
                                            <p class="box__project-location"><i class="fas fa-map-marker-alt box-item__location-icon"></i>Chennai,
                                                Tamil Nadu</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card ending -->
                        <!-- card starting -->
                        <div class="card card-2">
                            <div class="user-location-projects__card-section">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p class="box__project-name box__item">Arc Reactor</p>
                                        <p class="box__project-duration box__item">Duration : 12-08-2019 - 22-09-2022</p>
                                        <p class="box__project-description box__item">Lorem ipsum dolor sit amet
                                            consectetur
                                            adipisicing elit. Cumque voluptatibus
                                            maxime fugit, aperiam saepe temporibus,
                                        </p>
                                        <p class="box__project-status box__item">Yet to Start</p>
                                        <div class="user-location-projects__card-section__location box__item">
                                            <p class="box__project-contractor-name">Contractor Name: Mark Daniels</p>
                                            <p class="box__project-location"><i class="fas fa-map-marker-alt box-item__location-icon"></i>Chennai,
                                                Tamil Nadu</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card ending -->

                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>
    </div>
    <script src="../js/main.js" async defer></script>
</body>

</html>