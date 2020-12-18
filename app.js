let Personne = function (sonNom, sonPrenom, sonAge, sonSexe, sonJob) {
    this.nom = sonNom;
    this.surname = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;
    this.job = sonJob;

    this.getAll = function () {
        return "Ma personne s'appelle " + this.nom + " " + this.surname + ", elle a " + this.age + " ans et est de sexe "
            + this.sexe + ", elle est " + this.job;
    }

    this.setName = function (newName, newJob) {
        this.nom = newName;
        this.job = newJob;
    }
}

let sylvie = new Personne("Marle", "Sylvie", 45, "féminin", "en formation");
let emilie = new Personne("Bataille", "Emilie", 15, "féminin", "collégienne");

let momDiv = document.getElementById('perso1');
let eachDiv = momDiv.getElementsByTagName('div');
eachDiv[0].innerHTML = sylvie.nom;
eachDiv[1].innerHTML = sylvie.surname;
eachDiv[2].innerHTML = sylvie.age;
eachDiv[3].innerHTML = sylvie.sexe;
eachDiv[4].innerHTML = sylvie.job;
eachDiv[5].innerHTML = sylvie.getAll();
sylvie.setName("Bataille", "développeuse web");
eachDiv[6].innerHTML = "nom : " + sylvie.nom + ", travail : " + sylvie.job;

let herDiv = document.getElementById('perso2');
let eachHerDiv = herDiv.getElementsByTagName('div');
eachHerDiv[0].innerHTML = emilie.nom
eachHerDiv[1].innerHTML = emilie.surname;
eachHerDiv[2].innerHTML = emilie.age;
eachHerDiv[3].innerHTML = emilie.sexe;
eachHerDiv[4].innerHTML = emilie.job;
eachHerDiv[5].innerHTML = emilie.getAll();
emilie.setName("Bataille", "lycéenne");
eachHerDiv[6].innerHTML =

