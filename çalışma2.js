//hello world *******
//alert("merhaba dünya")
//console.log("merhaa dünya")
//*let serverName;
//console.log(serverName)
//serverName = "https://kodluyoruz.com"
//console.log(serverName)
//let password = 1234
//console.log(password)
//let fullName = "görkem gökçen";
//console.log(fullName)//
// değişken tanımlama*************
//let price = 100 
//t tax = 0.18
//console.log("fiyat:" ,price, " kdv oranı:" ,tax,  " kdv tutarı:" ,priceTax)
//let counter = 320;
//counter = counter+1
//console.log(counter)
//let newNumber = 321
//console.log(Math.round(7.3))
//let isActive = false //0
//isActive = true // 1
//console.log(isActive)

//et userName
//let isuserName = Boolean(userName)
//console.log(isuserName)

// BOOLEAN **************
//Boolean("11") //true
//Boolean("0") //true
//Boolean("") //false
 //userName = "user"
 //console.log("userName", Boolean(userName))
//let stringPrice = "111"
//let hasPassword = true

//console.log(
// "price: ",
//ypeof(price))
//console.log(
// "stringPrice: ",
//ypeof(stringPrice))
//console.log(
// "hasPassword ",
//ypeof(hasPassword) )
//console.log([1,2,3]>null)

// metinsewl bilgileri ınt ve floata dönüştürmek * *********
//let number1 = "11"
//number1 = parseInt(number1)
//console.log("number1: ", number1, typeof(number1))
// sonuç:  **number1:  11 number**
//let number2 = "11.4px"
//number2 = parseFloat(number2)
//console.log("number2: ", number2, typeof(number2) )
// sonuç: **number2:  11.4 number**

//number veri tabanında stringe dönüştürmek **********
//*let number3 = 55
//number3 = number3.toString()
//console.log(number3, typeof(number3))
// sonuç: **55 string**

// template literals kullanımı *********
//let userName = "görkem"
//const DOMAİN = "kodluyoruz.org"

//let email = userName + "@" + DOMAİN
//console.log( "merhaba", userName, "sitemize hoşgeldinzi", "mail adresin", email )

//let info = `merhaba ${userName} sitemize hoşgeldiniz.. mail adresin: ${email}
//mail adersinin uzunluğu: ${email.length}
//günün saat bilgisi: ${new Date().getHours()}
//kısa isminiz: ${userName[0]}.`
//console.log(info)
//********* string veri türü işlemleri
//let isim = "görkem"
//let soyisim = "gökçen"
//console.log(isim.concat(``,  soyisim))


//let email = "kodluyoruz@kodluyoruz.org"
//let firstname = "java script"
//let lastname = "bootcamp"
//console.log(email.length)

//console.log(firstname.charAt(2))

//firstname = firstname.toUpperCase()
//console.log(firstname)

//lastname = `${lastname[0].toUpperCase()}${lastname.slice(1).toLowerCase()}`
//console.log(lastname)

//console.log(email.search("@"))

//console.log(email.slice(9+1));

//console.log(firstname.slice(1,4))

//let DOMAİN = email.slice(email.search("@")+1)
//console.log(DOMAİN)

//email = email.replace("kodluyoruz.org", "gmail.com");
//console.log(email); 

//console.log(email.includes("@"))

//console.log(email.startsWith("@"))

//console.log(lastname.endsWith("p"))

//document.body.style.backgroundColor = "aqua"

//let title = document.getElementById("title")
//title.innerHTML = "görkem gökçen"
//console.log(title.innerHTML)

//let link = document.querySelector("ul#list>li>a")
//link.innerHTML = "link bilgisi değştirildi"

//****kullanıcıdan bilgi almak ****/
//let fullName = prompt("lütfen adınızı giriniz")
//let list = document.querySelector("#list")
//list.innerHTML = `${list.innerHTML} <strong style="color:red">${fullName}</strong>`
//let isim = prompt("adınız nedir?")
//console.log("merhaba


//****************liste içerisndeki son elemana ulaşamk veya eleman eklemek********** */


//let lastChild = document.querySelector("ul#list>li:last-child")
//lastChild.innerHTML = "son öge değişti..."

//let firstChild = document.querySelector("ul#list>li:first-child")
//firstChild.innerHTML = "ilk öge değişti..."




const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn)  =>{
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de"){ 
            display.value = display.value.slice(0, -1);
        } else{ 
            display.value += btn.id;
        }
    });
});




