import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
        <body class="bg-dark" style={{minHeight: "100%"}}>
            <div class="header-top header-top-color" style={{height: "122px"}}>
            <div class="header-top-fade">
                <div class="container">
                <div class="row">
                    <div class="col-sm-4 d-none d-sm-block">
                    <div class="d-grid gap-2 d-flex justify-content-center" style={{marginTop: "40px", minWidth: "180px"}}>
                        <a href="#" class="text-decoration-none text-white shadow p-2 justify-content-center position-relative" title="Topluluk discorduna katılmak için tıkla!">
                        Bağışçılar <span class="badge bg-success p-1 ms-2">300+</span>
                        </a>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <img id="logo" class="d-flex py-3 mx-auto d-block" style={{height: "122px"}} src="https://cdn.discordapp.com/attachments/901908081569579029/901908177833058314/logo.png" alt="main-logo"/>
                    </div>
                    <div class="col-sm-4 d-none d-sm-block">
                    <div class="d-grid gap-2 d-flex justify-content-center"style={{marginTop: "40px", minWidth: "180px"}}>
                        <a href="https://discord.gg/qWzemnvHmV" target="_blank" class="btn text-white btn-success shadow p-2 justify-content-center position-relative" title="Topluluk discorduna katılmak için tıkla!">
                        <i class="fab fa-discord" aria-hidden="true"></i>
                        <span class="btn-text ms-2">
                            Discord'a katıl!
                        </span>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            900+
                        <span class="visually-hidden">Discord üyesi</span>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="card-bg-dark">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Eklentiler</a></li>
                    <li class="nav-item"><a href="about-me.html" class="nav-link text-light">Hakkımda</a></li>
                    <li class="nav-item"><a href="help.html" class="nav-link text-light">Bilgiler</a></li>
                </ul>
                </header>
            </div>
            </div>
            
            <div class="bg-dark">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://media.discordapp.net/attachments/901908081569579029/1142250542433837186/ciftci-v6.jpg?width=468&height=468" class="card-img-top p-2" alt="ciftci-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">Çiftçi v6
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">Çiftçi, bölge (ada veya arazi) toplayıp onları stoklayan bir eklentidir.</p>
                        <a href="https://github.com/poyrazinan/Farmer-v6/releases" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(9)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/901908205993611355/Ciftci.png" class="card-img-top p-2" alt="ciftci-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">Çiftçi v5
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">Çiftçi, bölge (ada veya arazi) toplayıp onları stoklayan bir eklentidir.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/927221865456488458/Ciftci-v5-RELOADED.jar" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(1)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/901908265313660948/Tuccar.png?ex=652c3707&is=6519c207&hm=b81d3f1c23cac57222a6dbd1af3d72e8857b2a2469e0dc86ac666043098bc593&" class="card-img-top p-2" alt="ciftci-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">Tüccar
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">Tüccar oyuncuların birbiriyle alış-veriş yapabileceği merkez bir pazardır.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/881340005983850566/Tuccar-1.2.9-SNAPSHOT.jar" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(2)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/901908219386019860/Gunluk_Odul.png" class="card-img-top p-2" alt="gunluk-odul-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">Günlük Ödül
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">MMORPG'lerde bulunan Günlük Ödül sisteminin Minecraft uyarmalasıdır.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/881340749243904040/GunlukOdul-2.0.3-SNAPSHOT.jar" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(3)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/901908241565515786/Leaderos.png" class="card-img-top p-2" alt="leaderos-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">LeaderOS Plugin
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">LeaderOS Web Scriptinin oyun içi bağlantısını sağlayıp, özelliklerine oyundan erişim sağlar.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/870609771315757116/LeaderOS-PL.zip" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(4)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/901908231268495430/Leaderboard.png" class="card-img-top p-2" alt="leaderboard-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">Leaderboard
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">LeaderHeads'in lightweight ve LeaderOS uyumlu hali olan sıralama eklentisidir.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/881340035306246144/Leaderboard-1.2.1-SNAPSHOT.jar" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(5)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/1018247836804059187/geik-logo.png" class="card-img-top p-2" alt="taskscheduler-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">TaskScheduler
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">Belirli saat ve günde istediğiniz komutları giren otomatik etkinlik sistemidir.</p>
                        <a target="_blank" href="https://www.spigotmc.org/resources/taskscheduler-schedule-commands-to-a-date.77903/" class="btn btn-success shadow-sm d-flex justify-content-center"
                        onclick="downloadTask(6)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card mt-4 text-secondary shadow card-bg-dark">
                    <img src="https://cdn.discordapp.com/attachments/901908081569579029/1018247836804059187/geik-logo.png" class="card-img-top p-2" alt="jetminions-logo"/>
                    <div class="card-body">
                        <h5 class="card-title text-success">JetMinions-Fixer
                        <span class="badge bg-primary rounded-pill ms-1">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        </h5>
                        <p class="card-text truncate">JetMinions eklentisinin adalara özel limit koymayı sağlayan sistemdir.</p>
                        <a href="https://cdn.discordapp.com/attachments/827976520118566963/843136879254568960/JetsMinions-Fixer.jar" class="btn btn-success shadow-sm d-flex justify-content-center"
                            onclick="downloadTask(7)">
                        İndir <i class="fa fa-download ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div class="alert alert-success mt-4 mb-4 shadow card-bg-dark border-0" role="alert">
                    <h4 class="alert-heading text-success">Merhabalar!</h4>
                    <p class="lead text-secondary">Umarım yaptığım eklentileri beğenmişsindir ve sunucun iyileştirmek için kullandığında memnun kalmışsındır! Yukarıda bulunan bilgiler sekmesinden bilgilere ulaşabilirsin!</p>
                    <p class="mb-0 text-secondary">Eğer yaptığım işi beğendiysen bu beni mutlu eder!</p>
                </div>
                </div>
            </div>
            </div>
            <div class="footer-bg border-top mt-auto">
            <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3">
                <p class="col-md-4 mb-0 text-muted">© 2023 Geik Plugins | Made by Poyraz INAN</p>
            
                <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-secondary">
                <a href="https://www.linkedin.com/in/poyrazinan/" target="_blank" class="fab fa-linkedin fa-2x pe-2 text-decoration-none text-success"></a>
                <a href="https://github.com/poyrazinan" target="_blank" class="fab fa-github-square fa-2x ps-2 text-decoration-none text-success"></a>
                </div>
            
                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="index.php" class="nav-link px-2 text-muted">Eklentiler</a></li>
                <li class="nav-item"><a href="about-me.html" class="nav-link px-2 text-muted">Hakkımda</a></li>
                <li class="nav-item"><a href="help.html" class="nav-link px-2 text-muted">Bilgiler</a></li>
                </ul>
            </footer>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="js/downloadJS.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </body>
    </div>
  );
}

export default LandingPage;
