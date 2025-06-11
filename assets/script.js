const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

console.log(teamMembers);

////// i dati del team vanno inseriti in pagina mostrando una card

//////selezione dell'elemento row

/* rowEl = document.querySelector(row);
console.log(rowEl); */

// ciclo for per selezionare gli oggetti dell'array

//selezione elemento della DOM
const rowEl = document.querySelector(".row");

//aggiungere il markup alla DOM
function showMembersCard(teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    /* console.log(member); */
    const { name, role, image, email } = member;
    console.log(member);
    /*     const memberMarkup = `<li>${name}, ${role}, ${email}, ${image}`;
    console.log(memberMarkup); */
  }
}
//funzione per creare un markup da inserire in pagina

function createMarkupForMembers(member) {
  const { name, role, image, email } = member;
  const memberMarkup = `
                  <div class="col">
                    <div class="card">
                        <img src="img/${image}" alt="member.img" class="card-img">
                        <div class="card-body">
                            <h3>${name}</h3>
                            <div>
                                <p>${role}</p>
                                <p>${email}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
}
