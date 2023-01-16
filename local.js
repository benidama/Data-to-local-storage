 var studform = document.getElementById("studform");
 var studentDiv = document.getElementById("localStorag");
 var infname = studform["fname"];
 var inlname = studform["lname"];
 var countr = studform["city"];
 var codee = studform["pin"];
 var phone = studform["nber"];
 var email = studform["mail"];
 var year = studform["age"];


const localStorages =  JSON.parse(localStorage.getItem("localStorages")) || [];

const addStudent = (fname, lname, city,pin, nber, mail, age) => {
    localStorages.push({
        fname,
        lname,
        city,
        pin,
        nber,
        mail,
        age,
    }
    );
    localStorage.setItem("localStorages", JSON.stringify(localStorages));
    return {fname, lname, city, pin, nber, mail,age};
};
const createStudElm = ({fname, lname,city, pin, nber, mail, age}) => {
    var studentDivs = document.createElement('div')
    var ifname = document.createElement('h2');
    var ilname = document.createElement('h2');
    var countryy = document.createElement('p');
    var coder = document.createElement('p');
    var kphone = document.createElement('p');
    var imail = document.createElement('p');
    var jyear = document.createElement('p');
    
    ifname.innerText = "First name: " + fname; 
    ilname.innerText = "Second name: " + lname;
    countryy.innerText =  "country: " + city;
     coder.innerText = " country code: " + pin;
    kphone.innerText =  "Phone number: " + nber;
    imail.innerText = "Email: " + mail + "\n " + "Age: " + age;
    studentDivs.append(ifname, ilname, city, pin, kphone, imail, jyear);
    studentDiv.appendChild(studentDivs);
};

localStorages.forEach(createStudElm);

document.addEventListener('DOMContentLoaded', createStudElm);

studform.addEventListener('submit', (e) => {
    e.preventDefault();

    const newstdu = addStudent(
        infname.value,
        inlname.value,
        countr.value,
        codee.value,
        phone.value,
        email.value,
        year.value,
    );
    createStudElm(newstdu);

    infname.value = "";
    inlname.value = "";
    countr.value = "";
    codee.value = "";
    phone.value = "";
    email.value = "";
    year.value = "";
});
    
    







