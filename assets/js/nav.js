let HOST = "https://plateauigr.com/php1index.php"
let publitioKey1 = "ksWdvJ3JjfV5JZnHyRqv"
let publitioKey2 = "ruxLmts4NiupnoddqVi1Z70tnoMmf5yT"

let THE_SESSION = localStorage.getItem("userDataPrime")


// if (THE_SESSION) {
let heeaderr = ""
heeaderr += `
  <a href="index.html" class="flex gap-1 items-center">
  <div class="flex items-center">
    <img src="./assets/img/logo.png" class="" />
    <img src="./assets/img/psirs.png" class="w-[70px]" />
  </div>
  <p class="text-black fontBold">Plateau IGR Portal</p>
  </a>
`
if (THE_SESSION) {
  heeaderr += `
    <div class="md:flex hidden items-center gap-5 text-[#555555]">

      <div class="flex gap-3 items-center">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="eservices.html">E-Services</a>
        <a href="offer.html">What we offer</a>
        <a  href="taxcategory.html">Tax category</a>
        <a href="howtopay.html">How to pay</a>
        <a class="button" href="./dashboard/index.html">Dashboard</a>
      </div>

    </div>
  `
} else {
  heeaderr += `
    <div class="md:flex hidden items-center gap-5 text-[#555555]">

      <div class="flex gap-3">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="eservices.html">E-Services</a>
        <a href="offer.html">What we offer</a>
        <a  href="taxcategory.html">Tax category</a>
        <a href="howtopay.html">How to pay</a>
      </div>

      <div class="flex items-center gap-3">
        <a class="outline-btn" href="signin.html">Sign In</a>
        <a class="button" href="regcategory.html">Register</a>
      </div>

    </div>
  `
}

if (THE_SESSION) {
  heeaderr += `
  <div class="mobile_nav p-6">
  <div class="flex flex-col text-left gap-3">
   <a class="button" href="./dashboard/index.html">Dashboard</a>
    <a class="text-xl" href="index.html">Home</a>
    <a class="text-xl" href="about.html">About Us</a>
    <a class="text-xl" href="eservices.html">E-Services</a>
    <a class="text-xl" href="offer.html">What we offer</a>
    <a class="text-xl" href="taxcategory.html">Tax category</a>
    <a class="text-xl" href="howtopay.html">How to pay</a>
  </div>

    <h1 class="text-left mb-3 mt-3">Links</h1>
    <hr class="mb-3">
    <div class="text-left gap-5 text-[#555555] theNav">
      <a href="faqs.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="wpf:faq"></iconify-icon>
          <p class="text-sm m-0">FAQ</p>
      </a>

      <a href="contact.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="fluent:contact-card-32-filled"></iconify-icon>
          <p class="text-sm m-0">Contact Us</p>
      </a>

      <a href="news.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="fluent:news-20-filled"></iconify-icon>
          <p class="text-sm m-0">News</p>
      </a>

      <a href="gallery.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="dashicons:format-gallery"></iconify-icon>
          <p class="text-sm m-0">Gallery</p>
      </a>
    </div>

    

</div>
  `
} else {
  heeaderr += `
  <div class="mobile_nav p-6">
  <div class="flex flex-col text-left gap-3">
    <a class="text-xl" href="index.html">Home</a>
    <a class="text-xl" href="about.html">About Us</a>
    <a class="text-xl" href="eservices.html">E-Services</a>
    <a class="text-xl" href="offer.html">What we offer</a>
    <a class="text-xl" href="taxcategory.html">Tax category</a>
    <a class="text-xl" href="howtopay.html">How to pay</a>
  </div>

    <h1 class="text-left mb-3 mt-3">Links</h1>
    <hr class="mb-3">
    <div class="text-left gap-5 text-[#555555] theNav">
      <a href="faqs.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="wpf:faq"></iconify-icon>
          <p class="text-sm m-0">FAQ</p>
      </a>

      <a href="contact.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="fluent:contact-card-32-filled"></iconify-icon>
          <p class="text-sm m-0">Contact Us</p>
      </a>

      <a href="news.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="fluent:news-20-filled"></iconify-icon>
          <p class="text-sm m-0">News</p>
      </a>

      <a href="gallery.html" class="flex items-center gap-3 mb-4">
          <iconify-icon icon="dashicons:format-gallery"></iconify-icon>
          <p class="text-sm m-0">Gallery</p>
      </a>
    </div>

  <div class="flex items-center gap-3 mt-5">
    <a class="outline-btn" href="signin.html">Sign In</a>
    <a class="button" href="regcategory.html">Register</a>
  </div>
</div>
  `
}

heeaderr += `
  <div class="hamburger md:hidden block">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
`
$("#theHeader").html(heeaderr)

const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile_nav")
if (hamburger) {
  hamburger.addEventListener("click", function () {
    mobile_nav.classList.toggle("active");
    hamburger.classList.toggle("active");

  });
}

const currentYear = new Date().getFullYear()
$("#footer").html(`
    <footer class="bg-white flex justify-between items-center md:px-10 px-3 py-2 landingFooter border-t border-gray-200">
      <div class="flex items-center gap-2">
          <p class="text-[#555555] md:text-sm text-xs">Copyright 2021 - ${currentYear} Primegauge LTD</p>
          <img src="./assets/img/logo1.png" class="w-[60px] h-[30px]" alt="">
      </div>

      <div class="flex items-center gap-3">
        <p class="text-sm md:block hidden">Follow us on</p>
        <iconify-icon icon="ph:facebook-logo-bold" class="md:text-2xl border-l border-gray-600 pl-3"></iconify-icon>
        <iconify-icon icon="ri:twitter-line" class="md:text-2xl border-l border-gray-600 pl-3"></iconify-icon>
        <iconify-icon icon="bi:instagram" class="md:text-2xl border-l border-gray-600 pl-3"></iconify-icon>
      </div>

      <div class="md:flex hidden items-center gap-3 text-[#555555] theNav">
        <a type="button" class="text-center" data-bs-toggle="modal" data-bs-target="#tax_calc_modal">
            <iconify-icon icon="solar:calculator-bold"></iconify-icon>
            <p class="text-sm m-0">Tax Calculator</p>
        </a>

        <a href="faqs.html" class="text-center">
            <iconify-icon icon="wpf:faq"></iconify-icon>
            <p class="text-sm m-0">FAQ</p>
        </a>

        <a href="contact.html" class="text-center">
            <iconify-icon icon="fluent:contact-card-32-filled"></iconify-icon>
            <p class="text-sm m-0">Contact Us</p>
        </a>

        <a href="news.html" class="text-center">
            <iconify-icon icon="fluent:news-20-filled"></iconify-icon>
            <p class="text-sm m-0">News</p>
        </a>

        <a href="gallery.html" class="text-center">
            <iconify-icon icon="dashicons:format-gallery"></iconify-icon>
            <p class="text-sm m-0">Gallery</p>
        </a>
      </div>
    </footer>
`);

let lgaList2 = {
  Abia: [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala Ngwa North",
    "Isiala Ngwa South",
    "Isuikwuato",
    "Obi Ngwa",
    "Ohafia",
    "Osisioma",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "muahia South",
    "Umu Nneochi"
  ],
  Adamawa: [
    "Demsa",
    "Fufure",
    "Ganye",
    "Gayuk",
    "Gombi",
    "Grie",
    "Hong",
    "Jada",
    "Larmurde",
    "Madagali",
    "Maiha",
    "Mayo Belwa",
    "Michika",
    "Mubi North",
    "Mubi South",
    "Numan",
    "Shelleng",
    "Song",
    "Toungo",
    "Yola North",
    "Yola South"
  ],
  AkwaIbom: [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono-Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat-Enin",
    "Nsit-Atai",
    "Nsit-Ibom",
    "Nsit-Ubium",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung-Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong Oruko",
    "Uyo"
  ],
  Anambra: [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili South",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi"
  ],

  Bauchi: [
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Gamawa",
    "Ganjuwa",
    "Giade",
    "Itas-Gadau",
    "Jama are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa Balewa",
    " Toro",
    " Warji",
    " Zaki"
  ],

  Bayelsa: [
    "Brass",
    "Ekeremor",
    "Kolokuma Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Ijaw",
    "Yenagoa"
  ],
  Benue: [
    "Agatu",
    "Apa",
    "Ado",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Ohimini",
    "Oju",
    "Okpokwu",
    "Oturkpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya"
  ],
  Borno: [
    "Abadam",
    "Askira-Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala-Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani"
  ],
  "Cross River": [
    "Abi",
    "Akamkpa",
    "Akpabuyo",
    "Bakassi",
    "Bekwarra",
    "Biase",
    "Boki",
    "Calabar Municipal",
    "Calabar South",
    "Etung",
    "Ikom",
    "Obanliku",
    "Obubra",
    "Obudu",
    "Odukpani",
    "Ogoja",
    "Yakuur",
    "Yala"
  ],

  Delta: [
    "Aniocha North",
    "Aniocha South",
    "Bomadi",
    "Burutu",
    "Ethiope East",
    "Ethiope West",
    "Ika North East",
    "Ika South",
    "Isoko North",
    "Isoko South",
    "Ndokwa East",
    "Ndokwa West",
    "Okpe",
    "Oshimili North",
    "Oshimili South",
    "Patani",
    "Sapele",
    "Udu",
    "Ughelli North",
    "Ughelli South",
    "Ukwuani",
    "Uvwie",
    "Warri North",
    "Warri South",
    "Warri South West"
  ],

  Ebonyi: [
    "Abakaliki",
    "Afikpo North",
    "Afikpo South",
    "Ebonyi",
    "Ezza North",
    "Ezza South",
    "Ikwo",
    "Ishielu",
    "Ivo",
    "Izzi",
    "Ohaozara",
    "Ohaukwu",
    "Onicha"
  ],
  Edo: [
    "Akoko-Edo",
    "Egor",
    "Esan Central",
    "Esan North-East",
    "Esan South-East",
    "Esan West",
    "Etsako Central",
    "Etsako East",
    "Etsako West",
    "Igueben",
    "Ikpoba Okha",
    "Orhionmwon",
    "Oredo",
    "Ovia North-East",
    "Ovia South-West",
    "Owan East",
    "Owan West",
    "Uhunmwonde"
  ],

  Ekiti: [
    "Ado Ekiti",
    "Efon",
    "Ekiti East",
    "Ekiti South-West",
    "Ekiti West",
    "Emure",
    "Gbonyin",
    "Ido Osi",
    "Ijero",
    "Ikere",
    "Ikole",
    "Ilejemeje",
    "Irepodun-Ifelodun",
    "Ise-Orun",
    "Moba",
    "Oye"
  ],
  Enugu: [
    "Aninri",
    "Awgu",
    "Enugu East",
    "Enugu North",
    "Enugu South",
    "Ezeagu",
    "Igbo Etiti",
    "Igbo Eze North",
    "Igbo Eze South",
    "Isi Uzo",
    "Nkanu East",
    "Nkanu West",
    "Nsukka",
    "Oji River",
    "Udenu",
    "Udi",
    "Uzo Uwani"
  ],
  FCT: [
    "Abaji",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali",
    "Municipal Area Council"
  ],
  Gombe: [
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Funakaye",
    "Gombe",
    "Kaltungo",
    "Kwami",
    "Nafada",
    "Shongom",
    "Yamaltu-Deba"
  ],
  Imo: [
    "Aboh Mbaise",
    "Ahiazu Mbaise",
    "Ehime Mbano",
    "Ezinihitte",
    "Ideato North",
    "Ideato South",
    "Ihitte-Uboma",
    "Ikeduru",
    "Isiala Mbano",
    "Isu",
    "Mbaitoli",
    "Ngor Okpala",
    "Njaba",
    "Nkwerre",
    "Nwangele",
    "Obowo",
    "Oguta",
    "Ohaji-Egbema",
    "Okigwe",
    "Orlu",
    "Orsu",
    "Oru East",
    "Oru West",
    "Owerri Municipal",
    "Owerri North",
    "Owerri West",
    "Unuimo"
  ],
  Jigawa: [
    "Auyo",
    "Babura",
    "Biriniwa",
    "Birnin Kudu",
    "Buji",
    "Dutse",
    "Gagarawa",
    "Garki",
    "Gumel",
    "Guri",
    "Gwaram",
    "Gwiwa",
    "Hadejia",
    "Jahun",
    "Kafin Hausa",
    "Kazaure",
    "Kiri Kasama",
    "Kiyawa",
    "Kaugama",
    "Maigatari",
    "Malam Madori",
    "Miga",
    "Ringim",
    "Roni",
    "Sule Tankarkar",
    "Taura",
    "Yankwashi"
  ],
  Kaduna: [
    "Birnin Gwari",
    "Chikun",
    "Giwa",
    "Igabi",
    "Ikara",
    "Jaba",
    "Jema a",
    "Kachia",
    "Kaduna North",
    "Kaduna South",
    "Kagarko",
    "Kajuru",
    "Kaura",
    "Kauru",
    "Kubau",
    "Kudan",
    "Lere",
    "Makarfi",
    "Sabon Gari",
    "Sanga",
    "Soba",
    "Zangon Kataf",
    "Zaria"
  ],
  Kano: [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Bunkure",
    "Dala",
    "Dambatta",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Doguwa",
    "Fagge",
    "Gabasawa",
    "Garko",
    "Garun Mallam",
    "Gaya",
    "Gezawa",
    "Gwale",
    "Gwarzo",
    "Kabo",
    "Kano Municipal",
    "Karaye",
    "Kibiya",
    "Kiru",
    "Kumbotso",
    "Kunchi",
    "Kura",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Rogo",
    "Shanono",
    "Sumaila",
    "Takai",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Tudun Wada",
    "Ungogo",
    "Warawa",
    "Wudil"
  ],
  Katsina: [
    "Bakori",
    "Batagarawa",
    "Batsari",
    "Baure",
    "Bindawa",
    "Charanchi",
    "Dandume",
    "Danja",
    "Dan Musa",
    "Daura",
    "Dutsi",
    "Dutsin Ma",
    "Faskari",
    "Funtua",
    "Ingawa",
    "Jibia",
    "Kafur",
    "Kaita",
    "Kankara",
    "Kankia",
    "Katsina",
    "Kurfi",
    "Kusada",
    "Mai Adua",
    "Malumfashi",
    "Mani",
    "Mashi",
    "Matazu",
    "Musawa",
    "Rimi",
    "Sabuwa",
    "Safana",
    "Sandamu",
    "Zango"
  ],
  Kebbi: [
    "Aleiro",
    "Arewa Dandi",
    "Argungu",
    "Augie",
    "Bagudo",
    "Birnin Kebbi",
    "Bunza",
    "Dandi",
    "Fakai",
    "Gwandu",
    "Jega",
    "Kalgo",
    "Koko Besse",
    "Maiyama",
    "Ngaski",
    "Sakaba",
    "Shanga",
    "Suru",
    "Wasagu Danko",
    "Yauri",
    "Zuru"
  ],
  Kogi: [
    "Adavi",
    "Ajaokuta",
    "Ankpa",
    "Bassa",
    "Dekina",
    "Ibaji",
    "Idah",
    "Igalamela Odolu",
    "Ijumu",
    "Kabba Bunu",
    "Kogi",
    "Lokoja",
    "Mopa Muro",
    "Ofu",
    "Ogori Magongo",
    "Okehi",
    "Okene",
    "Olamaboro",
    "Omala",
    "Yagba East",
    "Yagba West"
  ],
  Kwara: [
    "Asa",
    "Baruten",
    "Edu",
    "Ekiti",
    "Ifelodun",
    "Ilorin East",
    "Ilorin South",
    "Ilorin West",
    "Irepodun",
    "Isin",
    "Kaiama",
    "Moro",
    "Offa",
    "Oke Ero",
    "Oyun",
    "Pategi"
  ],
  Lagos: [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti Osa",
    "Ibeju-Lekki",
    "Ifako-Ijaiye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere"
  ],
  Nasarawa: [
    "Akwanga",
    "Awe",
    "Doma",
    "Karu",
    "Keana",
    "Keffi",
    "Kokona",
    "Lafia",
    "Nasarawa",
    "Nasarawa Egon",
    "Obi",
    "Toto",
    "Wamba"
  ],
  Niger: [
    "Agaie",
    "Agwara",
    "Bida",
    "Borgu",
    "Bosso",
    "Chanchaga",
    "Edati",
    "Gbako",
    "Gurara",
    "Katcha",
    "Kontagora",
    "Lapai",
    "Lavun",
    "Magama",
    "Mariga",
    "Mashegu",
    "Mokwa",
    "Moya",
    "Paikoro",
    "Rafi",
    "Rijau",
    "Shiroro",
    "Suleja",
    "Tafa",
    "Wushishi"
  ],
  Ogun: [
    "Abeokuta North",
    "Abeokuta South",
    "Ado-Odo Ota",
    "Egbado North",
    "Egbado South",
    "Ewekoro",
    "Ifo",
    "Ijebu East",
    "Ijebu North",
    "Ijebu North East",
    "Ijebu Ode",
    "Ikenne",
    "Imeko Afon",
    "Ipokia",
    "Obafemi Owode",
    "Odeda",
    "Odogbolu",
    "Ogun Waterside",
    "Remo North",
    "Shagamu"
  ],
  Ondo: [
    "Akoko North-East",
    "Akoko North-West",
    "Akoko South-West",
    "Akoko South-East",
    "Akure North",
    "Akure South",
    "Ese Odo",
    "Idanre",
    "Ifedore",
    "Ilaje",
    "Ile Oluji-Okeigbo",
    "Irele",
    "Odigbo",
    "Okitipupa",
    "Ondo East",
    "Ondo West",
    "Ose",
    "Owo"
  ],
  Osun: [
    "Atakunmosa East",
    "Atakunmosa West",
    "Aiyedaade",
    "Aiyedire",
    "Boluwaduro",
    "Boripe",
    "Ede North",
    "Ede South",
    "Ife Central",
    "Ife East",
    "Ife North",
    "Ife South",
    "Egbedore",
    "Ejigbo",
    "Ifedayo",
    "Ifelodun",
    "Ila",
    "Ilesa East",
    "Ilesa West",
    "Irepodun",
    "Irewole",
    "Isokan",
    "Iwo",
    "Obokun",
    "Odo Otin",
    "Ola Oluwa",
    "Olorunda",
    "Oriade",
    "Orolu",
    "Osogbo"
  ],
  Oyo: [
    "Afijio",
    "Akinyele",
    "Atiba",
    "Atisbo",
    "Egbeda",
    "Ibadan North",
    "Ibadan North-East",
    "Ibadan North-West",
    "Ibadan South-East",
    "Ibadan South-West",
    "Ibarapa Central",
    "Ibarapa East",
    "Ibarapa North",
    "Ido",
    "Irepo",
    "Iseyin",
    "Itesiwaju",
    "Iwajowa",
    "Kajola",
    "Lagelu",
    "Ogbomosho North",
    "Ogbomosho South",
    "Ogo Oluwa",
    "Olorunsogo",
    "Oluyole",
    "Ona Ara",
    "Orelope",
    "Ori Ire",
    "Oyo",
    "Oyo East",
    "Saki East",
    "Saki West",
    "Surulere"
  ],
  Plateau: [
    "Bokkos",
    "Barkin Ladi",
    "Bassa",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang South",
    "Langtang North",
    "Mangu",
    "Mikang",
    "Pankshin",
    "Qua an Pan",
    "Riyom",
    "Shendam",
    "Wase"
  ],
  Rivers: [
    "Port Harcourt",
    "Obio-Akpor",
    "Okrika",
    "Ogu–Bolo",
    "Eleme",
    "Tai",
    "Gokana",
    "Khana",
    "Oyigbo",
    "Opobo–Nkoro",
    "Andoni",
    "Bonny",
    "Degema",
    "Asari-Toru",
    "Akuku-Toru",
    "Abua–Odual",
    "Ahoada West",
    "Ahoada East",
    "Ogba–Egbema–Ndoni",
    "Emohua",
    "Ikwerre",
    "Etche",
    "Omuma"
  ],
  Sokoto: [
    "Binji",
    "Bodinga",
    "Dange Shuni",
    "Gada",
    "Goronyo",
    "Gudu",
    "Gwadabawa",
    "Illela",
    "Isa",
    "Kebbe",
    "Kware",
    "Rabah",
    "Sabon Birni",
    "Shagari",
    "Silame",
    "Sokoto North",
    "Sokoto South",
    "Tambuwal",
    "Tangaza",
    "Tureta",
    "Wamako",
    "Wurno",
    "Yabo"
  ],
  Taraba: [
    "Ardo Kola",
    "Bali",
    "Donga",
    "Gashaka",
    "Gassol",
    "Ibi",
    "Jalingo",
    "Karim Lamido",
    "Kumi",
    "Lau",
    "Sardauna",
    "Takum",
    "Ussa",
    "Wukari",
    "Yorro",
    "Zing"
  ],
  Yobe: [
    "Bade",
    "Bursari",
    "Damaturu",
    "Fika",
    "Fune",
    "Geidam",
    "Gujba",
    "Gulani",
    "Jakusko",
    "Karasuwa",
    "Machina",
    "Nangere",
    "Nguru",
    "Potiskum",
    "Tarmuwa",
    "Yunusari",
    "Yusufari"
  ],
  Zamfara: [
    "Anka",
    "Bakura",
    "Birnin Magaji Kiyaw",
    "Bukkuyum",
    "Bungudu",
    "Gummi",
    "Gusau",
    "Kaura Namoda",
    "Maradun",
    "Maru",
    "Shinkafi",
    "Talata Mafara",
    "Chafe",
    "Zurmi"
  ]
}

let STATES2 = `
  <option value="Abia">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="FCT">Federal Capital Territory</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau" selected>Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara" >Zamfara</option>
`
let stateSelect2 = document.querySelector("#selectState")
let lgaSelect2 = document.querySelector('#selectLGA')



if (stateSelect2) {
  // lgaSelect = ""
  stateSelect2.innerHTML = STATES2

  if (lgaSelect2) {
    lgaList2["Plateau"].forEach(lga => {
      lgaSelect2.innerHTML += `
    <option value="${lga}">${lga}</option>
  `
    })
  }

  stateSelect2.addEventListener('change', function () {
    let selectedState = $(this).val()

    let arrStates = Object.values(lgaList2)
    let finalarrState = arrStates[stateSelect2.selectedIndex]

    lgaSelect2.innerHTML = ''

    finalarrState.forEach((opt, ii) => {
      lgaSelect2.innerHTML += `
        <option value="${opt}">${opt}</option>
      `
    })


  })

}

window.$crisp = []; window.CRISP_WEBSITE_ID = "c669b149-3ed9-4ff4-b7f2-2c76a219eee3"; (function () {
  d = document; s = d.createElement("script"); s.src = "https://client.crisp.chat/l.js";
  s.async = 1; d.getElementsByTagName("head")[0].appendChild(s);
})();